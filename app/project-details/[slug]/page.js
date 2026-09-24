import projects from '../../projects.json';
import cases from '../../case-content.json';
import {projectInfo} from '../../project-info';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {Arrow} from '../../ui';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}){const {slug}=await params;return {title:projectInfo[decodeURIComponent(slug)]?.name||'Project'};}
export default async function Project({params}){
 const {slug}=await params;const index=projects.findIndex(p=>p.slug===decodeURIComponent(slug));if(index<0)notFound();const p=projects[index],info=projectInfo[p.slug],content=cases[p.slug],next=projects[(index+1)%projects.length];
 return <main id="main-content" tabIndex={-1} className="case-study wrap"><Link className="back-link" href="/projects"><Arrow/>All case studies</Link><div className="case-intro"><div><p className="eyebrow">{info.category} / {info.year}</p><h1>{info.name}</h1><p className="subtitle">{info.subtitle}</p></div><p>{info.summary}</p></div><figure className="case-cover"><img src={p.blocks.find(b=>b.type==='image')?.src} alt={p.title+' design overview'} width="1280" height="800"/></figure><dl className="case-meta"><div><dt>Project type</dt><dd>{content.client}</dd></div><div><dt>Focus</dt><dd>{content.scope}</dd></div><div><dt>Year</dt><dd>{content.year}</dd></div></dl><div className="case-layout"><nav className="case-nav" aria-label="On this page"><p className="eyebrow">In this case study</p>{content.headings.map(h=><a href={'#'+h.id} key={h.id}>{h.label}</a>)}</nav><article className="case-body">{content.blocks.map((b,i)=>b.type==='image'?<figure className="case-image-shell" key={i}><img className="case-image" src={b.src} alt={info.name+' research and design documentation'} loading="lazy"/></figure>:<div className="case-text" key={i} dangerouslySetInnerHTML={{__html:b.html}}/>)}</article></div><Link className="next-project" href={'/project-details/'+next.slug}><div><p className="eyebrow">Next case study / {projectInfo[next.slug].category}</p><h2>{projectInfo[next.slug].name}</h2></div></Link></main>;
}
