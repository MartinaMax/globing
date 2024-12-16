import { useState, useEffect } from 'react';
import Link from 'next/link';

const ActiveLink = ({ href, children, activeClassName = 'active', className, ...props }) => {
  const [mounted, setMounted] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Ensure the useRouter hook is only called client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const { asPath } = window.location; // Check the current path
      setIsActive(asPath === href); // Update active state based on the current URL
    }
  }, [mounted, href]);

  // Avoid using useRouter directly on the server side
  const combinedClassName = isActive
    ? `${className ? className + ' ' : ''}${activeClassName}`
    : className;

  return (
    <Link href={href} className={combinedClassName} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;