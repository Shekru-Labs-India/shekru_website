import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScriptsManager = () => {
  const location = useLocation();

  useEffect(() => {
    const scriptSources = [
       
        `${process.env.PUBLIC_URL}/js/combined.js`,
       
    
        
      ];


    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(`Failed to load script: ${src}`);
        document.body.appendChild(script);
      });
    };

    
    const removeOldScripts = () => {
      scriptSources.forEach((src) => {
        const scriptTag = document.querySelector(`script[src="${src}"]`);
        if (scriptTag) {
          document.body.removeChild(scriptTag);
        }
      });
    };

   
    const loadAllScripts = async () => {
      try {
        for (const src of scriptSources) {
          await loadScript(src);
        }
       
      } catch (error) {
        console.error(error);
      }
    };

    
    removeOldScripts();
    loadAllScripts();
  }, [location]); 

  return null; 
};

export default ScriptsManager;
