import Link from 'next/link';
import {ProjectGrid,Icon} from './ui';
import {ContactBanner,cvUrl} from './shared';
import Portrait from './portrait';
import projects from './projects.json';
export default function Home(){return <main id="main-content" tabIndex={-1}>
<section className="hero wrap">
 <div className="hero-copy"><p className="eyebrow">UX · UI · Frontend</p><h1>Developer<br/><span className="serif-line">| Designer.</span></h1><p className="hero-description">I turn research and complex requirements into clear, accessible products people can use with confidence.</p><div className="hero-actions"><Link className="button primary" href="#selected-work">Explore my work</Link><a className="button secondary" href={cvUrl}><Icon name="document"/>View CV</a></div></div>
 <div className="portrait-composition"><Portrait className="portrait-mat" priority/></div>
</section>
<div className="work-surface"><section className="selected-work wrap" id="selected-work"><div className="section-heading"><h2>Selected <em>work</em></h2><Link className="text-link" href="/projects">Explore all work</Link></div><ProjectGrid projects={projects.slice(0,4)}/></section></div>
<ContactBanner/>
</main>;}
