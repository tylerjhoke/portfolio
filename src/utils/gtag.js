// src/utils/gtag.js
export const GA_MEASUREMENT_ID = "G-516R67VRT6";

export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
