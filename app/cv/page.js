import {Icon} from '../ui';
import Portrait from '../portrait';

export const metadata={title:'CV'};

const education=[
  ['UX-designer','IT-Högskolan, Göteborg','Aug 2025 - Jun 2027'],
  ['Frontendutvecklare','Medieinstitutet, Göteborg','Aug 2024 - Apr 2026'],
  ['Pedagogik och kommunikation','Studium, Göteborg','Aug 2022 - Mar 2024'],
  ['Grafisk design','Modarres, Teheran','Jan 2012 - Dec 2014'],
];

const experience=[
  {role:'UX-designer',company:'HiQ, Göteborg',date:'Aug 2026 - pågående',text:'Arbetar med UX-design i en konsultmiljö med fokus på research, tydliga användarflöden och genomförbara lösningar.'},
  {role:'Frontendutvecklare',company:'Bovision, Göteborg',date:'Aug 2025 - Sep 2026',text:'Omsatte UX-design till responsiva gränssnitt i Next.js och React. Arbetade med CMS-integration och agila leveranser.'},
  {role:'Grafisk designer',company:'Sabeer Multimedia, Shiraz',date:'Feb 2015 - Nov 2016',text:'Tog fram visuell kommunikation, layout, färg och typografi för kundprojekt. Samarbetade direkt med kunder för att skapa tydliga, målgruppsanpassade lösningar.'},
];

const skills=[
  ['UX och design',['Användarcentrerad design','Research','Wireframes','Användarflöden','Prototyper','Usability testing','Tillgänglighet']],
  ['Frontend',['HTML','CSS','JavaScript','React','Next.js','Umbraco']],
  ['Verktyg',['Figma','Framer','Illustrator','Miro','Procreate','Canva','VS Code']],
  ['Arbetssätt',['Agilt samarbete','Analys','Tydlig kommunikation','Design med implementation i åtanke']],
];

export default function CV(){return <main id="main-content" tabIndex={-1} className="cv-page" lang="sv">
  <section className="cv-hero wrap">
    <div className="cv-heading"><p className="eyebrow">Curriculum vitae</p><h1>Developer<br/><em>| Designer.</em></h1><p className="lead">Jag kombinerar användarinsikter, visuell kommunikation och teknisk förståelse för att skapa tillgängliga gränssnitt som fungerar i praktiken.</p><div className="cv-contact"><a href="mailto:malirnsh@gmail.com"><Icon name="mail"/>malirnsh@gmail.com</a><a href="https://www.linkedin.com/in/maliroshanshah/"><Icon name="linkedin"/>LinkedIn</a><a href="https://github.com/Malishaah"><Icon name="github"/>GitHub</a></div></div>
    <Portrait className="cv-portrait"/>
  </section>

  <section className="cv-content wrap">
    <aside className="cv-side">
      <section><p className="eyebrow">Profil</p><p>Developer och designer med bakgrund inom UX, frontendutveckling och grafisk design. Jag arbetar strukturerat och användarcentrerat, från research och prototyp till validering och implementation.</p></section>
      <section><p className="eyebrow">Kompetenser</p>{skills.map(([title,list])=><div className="cv-skill" key={title}><h3>{title}</h3><div className="cv-tags">{list.map(item=><span key={item}>{item}</span>)}</div></div>)}</section>
      <section><p className="eyebrow">Språk</p><p>Svenska · Engelska · Persiska</p></section>
    </aside>

    <div className="cv-main">
      <section><div className="cv-section-title"><p className="eyebrow">Erfarenhet</p><span>Göteborg</span></div><div className="cv-list">{experience.map(item=><article className="cv-entry" key={item.role+item.company}><div><h2>{item.role}</h2><p className="cv-company">{item.company}</p></div><time>{item.date}</time><p>{item.text}</p></article>)}</div></section>
      <section><div className="cv-section-title"><p className="eyebrow">Utbildning</p><span>2012 - 2027</span></div><div className="cv-education">{education.map(([role,school,date])=><article key={role}><h3>{role}</h3><p>{school}</p><time>{date}</time></article>)}</div></section>
    </div>
  </section>

  <section className="cv-close wrap"><p className="eyebrow">Nästa steg</p><h2>Vill du veta mer?</h2><p>Referenser lämnas på begäran. Hör gärna av dig om du vill prata om en roll, ett projekt eller ett samarbete.</p><a className="button primary" href="mailto:malirnsh@gmail.com"><Icon name="mail"/>Kontakta mig</a></section>
 </main>}
