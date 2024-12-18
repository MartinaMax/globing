'use client';

import styles from '@/styles/styles.module.scss';
import { useRouter } from 'next/navigation';

const LogOutBtn = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/admin/login');
    };

    return (
      <nav>
        <button className={styles.LogOutBtn} onClick={handleLogout}>Logout</button>
      </nav>
    );
};
  
export default LogOutBtn;