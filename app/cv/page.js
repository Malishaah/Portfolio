import {Icon} from '../ui';
import Portrait from '../portrait';
import Link from 'next/link';

export const metadata={title:'CV'};

const education=[
  ['UX Designer','IT-Högskolan, Gothenburg','Aug 2025 – Jun 2027'],
  ['Frontend Developer','Medieinstitutet, Gothenburg','Aug 2024 – Apr 2026'],
  ['Pedagogy and Communication','Studium, Gothenburg','Aug 2022 – Mar 2024'],
  ['Graphic Design','Modarres, Tehran','Jan 2012 – Dec 2014'],
];

const experience=[
  {role:'UX Designer',company:'HiQ, Gothenburg',date:'Aug 2026 – Present',text:'Working in a consultancy environment with a focus on research, clear user flows and solutions that teams can build.'},
  {role:'Frontend Developer',company:'Bovision, Gothenburg',date:'Aug 2025 – Sep 2026',text:'Translated UX designs into responsive interfaces with Next.js and React, including CMS integration and agile delivery.'},
  {role:'Graphic Designer',company:'Sabeer Multimedia, Shiraz',date:'Feb 2015 – Nov 2016',text:'Created visual communication, layouts, colour systems and typography for client projects, working directly with clients to shape clear, audience-focused solutions.'},
];

const skills=[
  ['UX and Design',['User-centred design','Research','Wireframes','User flows','Prototyping','Usability testing','Accessibility']],
  ['Frontend',['HTML','CSS','JavaScript','React','Next.js','Umbraco']],
  ['Tools',['Figma','Framer','Illustrator','Miro','Procreate','Canva','VS Code']],
  ['Ways of Working',['Agile collaboration','Analysis','Clear communication','Design with implementation in mind']],
];

export default function CV(){return <main id="main-content" tabIndex={-1} className="cv-page">
  <section className="cv-hero wrap">
    <div className="cv-heading"><p className="eyebrow">Mali Roshanshah · CV</p><h1><span>Developer</span><span className="cv-title-separator" aria-hidden="true">|</span><em>Designer</em></h1><p className="lead">I make complex digital journeys clear, accessible and ready to build, from research and prototyping to the finished interface.</p><div className="cv-contact"><a href="mailto:mali@roshanshah.se"><Icon name="mail"/>mali@roshanshah.se</a><a href="https://www.linkedin.com/in/maliroshanshah/"><Icon name="linkedin"/>LinkedIn</a><a href="https://github.com/Malishaah"><Icon name="github"/>GitHub</a></div></div>
    <Portrait className="cv-portrait"/>
  </section>

  <section className="cv-content wrap">
    <aside className="cv-side">
      <section><p className="eyebrow">Profile</p><p>Developer and designer with a background in UX, frontend development and graphic design. I work in a structured, user-centred way, from research and prototyping to validation and implementation.</p></section>
      <section><p className="eyebrow">Skills</p>{skills.map(([title,list])=><div className="cv-skill" key={title}><h3>{title}</h3><div className="cv-tags">{list.map(item=><span key={item}>{item}</span>)}</div></div>)}</section>
      <section><p className="eyebrow">Languages</p><p>Swedish · English · Persian</p></section>
    </aside>

    <div className="cv-main">
      <section><div className="cv-section-title"><p className="eyebrow">Experience</p><span>Gothenburg</span></div><div className="cv-list">{experience.map(item=><article className="cv-entry" key={item.role+item.company}><div><h2>{item.role}</h2><p className="cv-company">{item.company}</p></div><time>{item.date}</time><p>{item.text}</p></article>)}</div></section>
      <section><div className="cv-section-title"><p className="eyebrow">Education</p><span>2012 – 2027</span></div><div className="cv-education">{education.map(([role,school,date])=><article key={role}><h3>{role}</h3><p>{school}</p><time>{date}</time></article>)}</div></section>
    </div>
  </section>

  <section id="cv-next" className="cv-next wrap" aria-label="Next step">
    <div><p className="eyebrow">Next step</p><h2>See how I work<br/><em>in practice.</em></h2></div>
    <Link className="button primary" href="/projects">View selected work</Link>
  </section>

 </main>}
