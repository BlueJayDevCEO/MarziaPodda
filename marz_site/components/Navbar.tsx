import React, { useEffect, useState } from 'react';
interface NavbarProps { onHomeClick?: () => void; }
const navItems = [{name:'About',href:'#about'},{name:'Approach',href:'#how-it-works'},{name:'What to expect',href:'#process'},{name:'Contact',href:'#contact'}];
export default function Navbar({onHomeClick}: NavbarProps) {
  const [open,setOpen] = useState(false);
  useEffect(()=>{
    const close = (event: KeyboardEvent) => { if(event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown',close);
    return ()=>window.removeEventListener('keydown',close);
  },[]);
  const closeMenu = () => { setOpen(false); onHomeClick?.(); };
  return <nav className="marz-nav" aria-label="Main navigation">
    <div className="marz-nav-inner">
      <a href="#" onClick={closeMenu} className="marz-professional-name">Marzia Podda<span>Psychodynamic Psychotherapist</span></a>
      <div className="marz-desktop-nav">
        {navItems.map(item=><a key={item.href} href={item.href} onClick={closeMenu}>{item.name}</a>)}
        <a className="marz-button" href="#contact" onClick={closeMenu}>Arrange a call <span aria-hidden="true">→</span></a>
      </div>
      <button className="marz-menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="marz-mobile-nav" aria-label={open?'Close menu':'Open menu'}>{open?'Close ×':'Menu ☰'}</button>
    </div>
    {open && <div className="marz-mobile-nav" id="marz-mobile-nav">{navItems.map(item=><a key={item.href} href={item.href} onClick={closeMenu}>{item.name}</a>)}<a className="marz-button" href="#contact" onClick={closeMenu}>Arrange an introductory call →</a></div>}
  </nav>;
}
