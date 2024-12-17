'use client';

import styles from '@/styles/styles.module.scss';

const EditDeleteBtn = ({ ref, onEdit, onDelete }) => {
  return (
    <div className={styles.referenceBtn}>
      <button onClick={() => onEdit(ref)} className={styles.referenceBtn_edit}>Edit</button>
      <button onClick={onDelete} className={styles.referenceBtn_delete}>Delete</button>
    </div>
  );
};

export default EditDeleteBtn;
