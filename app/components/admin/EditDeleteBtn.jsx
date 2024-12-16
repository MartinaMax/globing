'use client';

import styles from '@/styles/styles.module.scss';

const EditDeleteBtn = ({ ref, onEdit, onDelete }) => {
  return (
    <div>
      <button onClick={() => onEdit(ref)} className={styles.buttonReference_edit}>Edit</button>
      <button onClick={onDelete} className={styles.buttonReference_delete}>Delete</button>
    </div>
  );
};

export default EditDeleteBtn;
