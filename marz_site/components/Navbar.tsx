import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onHomeClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Approach', href: '#how-it-works' },
    { name: 'What to Expect', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    if (onHomeClick) onHomeClick();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={handleNavClick}
          className="font-serif text-xl md:text-2xl tracking-tight text-brand-text group"
        >
          Marzia Podda
          <span className="block text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-brand-teal group-hover:text-brand-muted transition-colors">
            Psychodynamic Psychotherapy
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-xs uppercase tracking-widest text-brand-text/70 hover:text-brand-teal transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-brand-teal text-white text-xs uppercase tracking-widest rounded-full hover:bg-brand-muted transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            Arrange a Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-text p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-soft z-40 transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-32 px-10`}>
        <div className="flex flex-col gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-serif text-brand-text"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 text-xl font-sans uppercase tracking-widest text-brand-teal border-b border-brand-teal w-fit pb-1"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;