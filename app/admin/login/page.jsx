'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/styles.module.scss';

const LoginForm = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const router = useRouter();

    // Check if the admin is already logged in (has valid token)
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
        router.push('/admin/reference');
        }
    }, [router]);


    // Form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.username || !form.password) {
            setError('Username and password are required.');
        return;
        }

        try {
            const res = await fetch('/api/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
        });

        const data = await res.json();

        if (res.ok) {
            // Save token to localStorage (Consider switching to HttpOnly cookies for production)
            localStorage.setItem('token', data.data.token);
            router.push('/admin/reference');
        } else {
            setError(data.error || 'Login failed.');
        }
        } catch (err) {
            setError('An error has occurred. Please try logging in again.');
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <main style={{ padding: '50px 0'}} className={styles.adminLogin}>
            <h2>Admin Login</h2>
            <div className={styles.formLogin}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            id='username'
                            name="username"
                            type="text"
                            value={form.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            id='password'
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button className={styles.LogInBtn} type="submit">Log in</button>
                </form>
            </div>
            {error && <p style={{ color: '#F15B40' }}>{error}</p>}
        </main>
    );
};

export default LoginForm;