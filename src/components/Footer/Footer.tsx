import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Footer: React.FC = () => (
  <footer className="bg-dark text-white py-3 mt-5">
    <div className="container text-center">
      <p className="mb-0">&copy; {new Date().getFullYear()} Video Portal. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;