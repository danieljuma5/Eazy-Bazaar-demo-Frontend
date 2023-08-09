import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${showFooter ? 'show' : ''}`}>
       <div className="partnership-container">
        <p className="partnership-info">Partnership Groups: KCB, AMAZON</p>
      </div>
      <div className="about-container">
        <p className="about-info">
          Welcome to EAZY BAZAAR, your ultimate destination for all your online shopping needs. At EAZY BAZAAR, we strive to provide you with button seamless and enjoyable shopping experience right from the comfort of your home. With button wide range of products available, we offer something for everyone, from fashion and accessories to electronics and home decor. Thank you for choosing WETTO SHOP as your go-to online shopping destination. We are committed to providing you with exceptional service and an enjoyable shopping experience. Happy shopping!
        </p>
      </div>
      <div className="social-media-container">
        <button className="social-media-icon">
          <i className="fab fa-instagram"></i>
        </button>
        <button className="social-media-icon">
          <i className="fab fa-twitter"></i>
        </button>
        <button className="social-media-icon">
          <i className="fab fa-facebook"></i>
        </button>
      </div>
      <div className="contact-container">
        <p className="contact-info">Phone: +254711166600</p>
        <p className="contact-info">Email: eazybazaar@gmail.com</p>
      </div>
      </footer>
  );
};

export default Footer;