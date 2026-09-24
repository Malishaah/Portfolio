import {Icon,CopyEmail} from '../ui';import {cvUrl} from '../shared';
export const metadata={title:'Let’s talk'};
const options=[
  ['https://www.linkedin.com/in/maliroshanshah/','linkedin','Professional profile','LinkedIn'],
  ['https://github.com/Malishaah','github','Code and experiments','GitHub'],
  [cvUrl,'document','Experience and education','View my CV'],
];
export default function Contact(){return <main id="main-content" tabIndex={-1} className="contact-page wrap"><p className="eyebrow">Contact</p><div className="contact-title"><h1>Have something<br/>to <em>solve?</em></h1></div><p className="lead">If you have a role, project or product challenge in mind, tell me what you’re working on. I’ll get back to you as soon as I can.</p><div className="email-panel"><div className="email-identity"><span className="contact-icon contact-icon-primary"><Icon name="mail"/></span><div><p className="eyebrow">Email me</p><a className="email-address" href="mailto:mali@roshanshah.se">mali@roshanshah.se</a></div></div><CopyEmail/></div><div className="contact-options">{options.map(([href,icon,label,title])=><a href={href} key={title}><span className="contact-icon"><Icon name={icon}/></span><span className="contact-option-copy"><small>{label}</small><strong>{title}</strong></span></a>)}</div></main>;}
