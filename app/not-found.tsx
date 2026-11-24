import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function NotFound(){return <main id="main" className="not-found"><div className="container"><span className="eyebrow">404 / OFF THE MAP</span><h1 className="display">This page<br/><span className="muted">isn’t here.</span></h1><p>Looks like this route hasn’t been mapped yet. Let’s get you back to familiar ground.</p><Link href="/" className="btn btn-primary"><ArrowLeft size={16}/> Back to home</Link></div></main>}
