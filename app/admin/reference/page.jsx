'use client';

import { useState, useEffect } from 'react';
import ReferenceList from '@/components/ReferenceList';
import styles from '@/styles/styles.module.scss';
import LogOutBtn from '@/components/admin/LogOutBtn';

const ReferenceAdminPanel = () => {
  	const [title, setTitle] = useState('');
  	const [description, setDescription] = useState('');
  	const [file, setFile] = useState(null);
  	const [response, setResponse] = useState(null);
  	const [references, setReferences] = useState([]);
  	const [imgPreview, setImgPreview] = useState(null);
  	const [editingId, setEditingId] = useState(null);

  	const handleFileChange = (e) => {
    	const selectedFile = e.target.files[0];
    	setFile(selectedFile);

    	if (selectedFile) {
      		const previewUrl = URL.createObjectURL(selectedFile);
      		setImgPreview(previewUrl);
    	}
  	};

	// Reference EDIT
  	const handleEdit = (ref) => {
    	setTitle(ref.title);
    	setDescription(ref.descr_en);
    	setImgPreview(ref.img_url); // Use the current image URL for the preview
    	setEditingId(ref._id); // Track the ID of the reference being edited
    	window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the form for editing
  	};

  	const handleSubmit = async (e) => {
    	e.preventDefault();

    	const formData = new FormData();
    		formData.append('title', title);
    		formData.append('descr_en', description);
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

  	// Reset form on CANCEL button when EDITING
  	const resetForm = () => {
    	setTitle('');
    	setDescription('');
    	setFile(null);
    	setImgPreview(null);
    	setEditingId(null);
  	};
  

  	return (
    	<>
    		<header>
       			<LogOutBtn/>
    		</header>
    		<main style={{ padding: '50px 170px'}} className={styles.adminMain}>
      			<div>
      				<h2>Referencie admin panel</h2>
        			<form onSubmit={handleSubmit} encType="multipart/form-data">
        
         				<div>
        					{imgPreview && (
              					<div style={{ marginTop: '20px' }}>
                					<img src={imgPreview} alt="Preview" className={styles.imgPreview} />
              					</div>
        					)}
            		
							<input
              					className={styles.adminPanel_form_img}
              					type="file"
              					id="file"
              					onChange={handleFileChange}
            				/>
          				</div>

        				<div>
          					<div>
            					<label htmlFor="title">Title</label>
            					<input
              						className={styles.adminPanel_form_title}
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
              						className={styles.adminPanel_form_decr}
              						id="descr_sk"
              						value={description}
              						onChange={(e) => setDescription(e.target.value)}
              						required
            					/>
          					</div>

          					<div className={styles.formBtn}>
            					<button className={`${styles.button} ${styles.formBtn_submit_edit}`} type="submit">{editingId ? 'Update' : 'Save'}</button>
              					{editingId && (
            					<button className={`${styles.button} ${styles.formBtn_cancel}`} type="button" onClick={resetForm}>Cancel</button>
              					)}
          					</div>
          				</div>
        			</form>
      			</div>

    			<ReferenceList references={references} setReferences={setReferences} onEdit={handleEdit} showButtons={true}/>
    		</main>
    	</>
  	);
};

export default ReferenceAdminPanel;





