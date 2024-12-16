'use client';

import { useState, useEffect } from 'react';
import ReferenceList from '@/components/ReferenceList';
import styles from '@/styles/styles.module.scss';

const ReferenceUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [references, setReferences] = useState([]);
  const [imgPreview, setImgPreview] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Fetch references on load
  useEffect(() => {
    const fetchReferences = async () => {
      try {
        const res = await fetch('/api/reference');
        const data = await res.json();
        if (data.success) {
          setReferences(data.data);
        } else {
          console.error('Failed to fetch references');
        }
      } catch (error) {
        console.error('Error fetching references:', error.message);
      }
    };

    fetchReferences();
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const previewUrl = URL.createObjectURL(selectedFile);
      setImgPreview(previewUrl);
    }
  };

  const handleEdit = (ref) => {
    setTitle(ref.title);
    setDescription(ref.descr_sk);
    setImgPreview(ref.img_url); // Use the current image URL for the preview
    setEditingId(ref._id); // Track the ID of the reference being edited
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the form for editing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('descr_sk', description);
    if (file) {
      formData.append('file', file);
    }

    try {
      const endpoint = editingId ? `/api/reference/${editingId}` : '/api/reference';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(endpoint, {
        method,
        body: formData,
      });

      const data = await res.json();
      setResponse(data);

      if (data.success) {
        if (editingId) {
          // Update the edited reference in the list
          setReferences((prevReferences) =>
            prevReferences.map((ref) =>
              ref._id === editingId ? data.data : ref
            )
          );
        } else {
          // Add the new reference to the top of the list
          setReferences((prevReferences) => [data.data, ...prevReferences]);
        }

        // Reset the form
        setTitle('');
        setDescription('');
        setFile(null);
        setImgPreview(null);
        setEditingId(null);

        // Clear the file input value
        document.getElementById('file').value = '';
      }
    } catch (error) {
      setResponse({ success: false, message: error.message });
    }
  };

  return (
    <main>
      <div>
        <h1>Referencie admin panel</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="descr_sk">Description</label>
            <textarea
              id="descr_sk"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
            />
          </div>

          {imgPreview && (
            <div style={{ marginTop: '20px' }}>
              <img src={imgPreview} alt="Preview" className={styles.previewImg} />
            </div>
          )}

          <button type="submit">{editingId ? 'Update' : 'Submit'}</button>
        </form>

        <ReferenceList
          references={references}
          setReferences={setReferences}
          onEdit={handleEdit}
        />
      </div>
    </main>
  );
};

export default ReferenceUpload;





