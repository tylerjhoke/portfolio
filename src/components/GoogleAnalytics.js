// src/components/GoogleAnalytics.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = "G-516R67VRT6";

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics if not already done
    if (!window.gtag) {
      // Add GA script tag
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script1);

      // Add inline initialization script
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
      `;
      document.head.appendChild(script2);
    }

    // Track pageview for all routes
    if (window.gtag) {
      // Track main routes
      if (location.pathname === '/' || 
          location.pathname === '/projects' || 
          location.pathname === '/work') {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: location.pathname,
        });
      }
      
      // Track project detail pages
      if (location.pathname.startsWith('/projects/')) {
        const projectId = location.pathname.split('/').pop();
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: location.pathname,
          page_title: `Project: ${projectId}`,
        });
      }
    }
  }, [location]);

  return null;
}
