'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  // Check if the admin is already logged in (valid token)
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
    <div>
      <h2>Admin Login</h2>
      <div>
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
          <label  htmlFor="password">Password</label>
          <input
            id='password'
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      </div>
      {error && <p style={{ color: '#F15B40' }}>{error}</p>}
    </div>
  );
};

export default LoginForm;