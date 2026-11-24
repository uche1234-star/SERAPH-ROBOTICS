'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowUpRight, SunMoon } from 'lucide-react';
const links = [{ label: 'Solutions', href: '/solutions' }, { label: 'Our mission', href: '/about' }, { label: 'Africa & impact', href: '/impact' }, { label: 'Careers', href: '/careers' }];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container nav-inner"><Link href="/" aria-label="SERAPH home" className="brand"><span className="brand-mark">S</span><span>SERAPH<span className="brand-sub">ROBOTICS</span></span></Link><nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link href="/contact" className="mobile-contact">Contact <ArrowUpRight size={15}/></Link></nav><div className="nav-actions"><button className="theme-toggle" aria-label="Dark mode is on" title="Dark mode"><SunMoon size={17}/></button><Link className="nav-cta" href="/contact">Let’s talk <ArrowUpRight size={15}/></Link><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div></div></header>;
}