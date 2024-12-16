'use client';

import styles from '@/styles/styles.module.scss';
import EditDeleteBtn from './admin/EditDeleteBtn';

const ReferenceList = ({ references = [], setReferences, onEdit }) => {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this reference?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/reference/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (data.success) {
        setReferences((prevReferences) => prevReferences.filter((ref) => ref._id !== id));
      } else {
        console.error('Failed to delete reference');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {references && references.length > 0 ? (
        <ul className={styles.referencesDisplay}>
          {references.map((ref) => (
            <li key={ref._id}>
              <img
                src={ref.img_url}
                alt={ref.title}
                style={{ maxWidth: '80px', maxHeight: '60px' }}
              />
              <p>{ref.title}</p>
              <p>{ref.descr_sk}</p>
              <EditDeleteBtn
                ref={ref}
                // Trigger the edit
                onEdit={() => onEdit(ref)} 
                // Trigger the delete
                onDelete={() => handleDelete(ref._id)} 
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No references found</p>
      )}
    </div>
  );
};

export default ReferenceList;