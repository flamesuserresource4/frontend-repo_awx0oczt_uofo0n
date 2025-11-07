import React from 'react';

const Footer = () => {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} FluxPay. All rights reserved.</p>
          <nav className="flex items-center gap-5">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Status</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
