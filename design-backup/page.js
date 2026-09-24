import Link from 'next/link';
import {Socials} from './ui';
import Background from './background';
export default function Home(){return <><Background/><main className="hero" id="hero-section"><div className="intro"><h1>Mali Roshanshah</h1><h2>Product designer</h2><p>I design digital products that balance user needs and business goals.</p></div><img className="portrait" src="/assets/dd3c96dad2722b76.png" alt="Mali Roshanshah"/><div className="hero-actions"><Link className="pill" href="/projects">See Projects</Link><a className="pill" href="https://drive.google.com/file/d/1tRR2POh3eCPQVHJX8xykFQC-j0HMCrb0/view?usp=sharing">View CV</a></div><Socials/></main></>}
