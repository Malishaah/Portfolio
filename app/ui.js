'use client';
import Link from 'next/link';
import {useState, useEffect, useRef} from 'react';
import {usePathname} from 'next/navigation';
import {projectInfo} from './project-info';

export function Arrow({diagonal=false, className=''}) {
  return <svg className={'arrow '+className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal?'M5 19 19 5M5 5h14v14':'M4 12h16m-7-7 7 7-7 7'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
export function Icon({name}) {
 const paths={mail:<><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></>,document:<><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></>,linkedin:<><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4"/></>,github:<><path d="M9 20v-3c-4 1-4-2-6-2m12 5v-3a3 3 0 0 0-.8-2.2c3-.4 5.8-1.5 5.8-6.2a5 5 0 0 0-1.3-3.4 4.6 4.6 0 0 0-.1-3.4S17.5 1.4 15 3a13 13 0 0 0-6 0C6.5 1.4 5.4 1.8 5.4 1.8a4.6 4.6 0 0 0-.1 3.4A5 5 0 0 0 4 8.6c0 4.7 2.8 5.8 5.8 6.2A3 3 0 0 0 9 17"/></>,pinterest:<><path d="M8 21 11 9m-4 6a7.5 7.5 0 1 1 6 3c-2 0-3-1-3-3m1-6c1-3 4-2 3 1l-1 4c-.5 2 2 3 4 1"/></>};
 return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]||paths.document}</svg>;
}

export function Navigation(){
  const [open,setOpen]=useState(false);
  const path=usePathname();
  const toggle=useRef(null);
  const nav=useRef(null);
  useEffect(()=>setOpen(false),[path]);
  useEffect(()=>{
    const close=e=>{if(e.key==='Escape'&&open){setOpen(false);toggle.current?.focus();}};
    const outside=e=>{if(!nav.current?.contains(e.target))setOpen(false);};
    document.addEventListener('keydown',close);document.addEventListener('pointerdown',outside);
    return()=>{document.removeEventListener('keydown',close);document.removeEventListener('pointerdown',outside);};
  },[open]);
  const links=[['/projects','Work'],['/about','About'],['/contact','Contact']];
  return <header className="site-header" ref={nav}><a className="skip-link" href="#main-content">Skip to content</a><nav className="navigation" aria-label="Main navigation"><Link href="/" className="brand" aria-label="Mali Roshanshah home"><img src="/assets/ef9234f6d485d531.png" alt="" width="61" height="38"/><span>Mali Roshanshah<span className="brand-role">UX Designer · Frontend Developer</span></span></Link><button ref={toggle} className={'menu-toggle '+(open?'is-open':'')} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="nav-links" onClick={()=>setOpen(!open)}><span/ ><span/></button><div id="nav-links" className={'nav-links '+(open?'is-open':'')}>{links.map(([href,label])=><Link key={href} href={href} onClick={()=>setOpen(false)} aria-current={path===href||(href==='/projects'&&path.startsWith('/project-details'))?'page':undefined} className={href==='/contact'?'nav-contact':''}>{label}</Link>)}</div></nav></header>;
}
export function ProjectCard({project}){
  const info=projectInfo[project.slug];
  return <Link className="project-card" href={'/project-details/'+project.slug}><div className="project-visual"><img src={project.blocks.find(b=>b.type==='image')?.src} alt={project.title+' preview'} loading="lazy" width="1000" height="700"/></div><div className="project-caption"><div className="project-meta"><span>{info.category}</span><time>{info.year}</time></div><h3>{info.name}</h3><p>{info.subtitle}</p></div></Link>;
}
export function ProjectGrid({projects,filters=false}){
 const [filter,setFilter]=useState('All work');
 const visible=projects.filter(p=>filter==='All work'||projectInfo[p.slug].category===filter);
 return <>{filters&&<div className="project-controls"><div className="filters" role="group" aria-label="Filter projects">{['All work','UX & UI','Design & code'].map(f=><button key={f} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}</div><p role="status" className="sr-only">Showing {filter.toLowerCase()}</p></div>}<div className="project-grid">{visible.map(p=><ProjectCard project={p} key={p.slug}/>)}</div></>;
}
export function CopyEmail(){const [state,setState]=useState('Copy email');const timer=useRef(null);useEffect(()=>()=>clearTimeout(timer.current),[]);async function copy(){try{await navigator.clipboard.writeText('mali@roshanshah.se');setState('Email copied');}catch{setState('Select the email to copy');}clearTimeout(timer.current);timer.current=setTimeout(()=>setState('Copy email'),3500);}return <button className="copy-email" aria-label={state} onClick={copy}><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="1.5"/></svg><span role="status">{state}</span></button>;}
