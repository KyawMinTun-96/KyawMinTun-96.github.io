import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();

    useEffect(() => {
      // Redirect to 404.html
      window.location.href = '/404.html';
    }, [navigate]);
  
    return null; // No UI, as the redirect happens immediately
}

export default Error;