'use client';

import styles from '@/styles/styles.module.scss';
import EditDeleteBtn from './admin/EditDeleteBtn';
import { useEffect, useState } from 'react';

const ReferenceList = ({ showButtons = false, onEdit, maxReferences = null }) => {
    const [references, setReferences] = useState([]);

    // Fetch all references
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

    // DELETE a reference
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

    // Limit the number of references displayed if maxReferences is passed
    const displayedReferences = maxReferences ? references.slice(0, maxReferences) : references;

    return (
        <div>
            {displayedReferences && displayedReferences.length > 0 ? (
                <ul className={styles.referencesDisplay}>
                    {displayedReferences.map((ref) => (
                        <li key={ref._id}>
                                <img
                                    src={ref.img_url}
                                    alt={ref.title}
                                    //style={{ maxWidth: '80px', maxHeight: '60px' }}
                                />
                            <p>{ref.title}</p>
                            <p>{ref.descr_en}</p>

                            {showButtons && (
                                <EditDeleteBtn
                                    ref={ref}
                                    onEdit={() => onEdit(ref)} // Trigger the edit
                                    onDelete={() => handleDelete(ref._id)} // Trigger the delete
                                />
                            )}
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