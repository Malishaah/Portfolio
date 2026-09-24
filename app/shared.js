import Link from 'next/link';
import {Icon} from './ui';
export const cvUrl='/cv';
export function ContactBanner(){return <section className="contact-banner"><div className="wrap contact-banner-inner"><h2>Let’s create<br/>something <em>useful.</em></h2><div className="contact-actions"><Link href="/contact" className="button primary"><Icon name="mail"/>Tell me about your project</Link><div className="contact-socials" aria-label="Social links"><a href="https://www.linkedin.com/in/maliroshanshah/" aria-label="LinkedIn"><Icon name="linkedin"/></a><a href="https://github.com/Malishaah" aria-label="GitHub"><Icon name="github"/></a><a href="https://pin.it/5Sv96TlPE" aria-label="Pinterest"><Icon name="pinterest"/></a></div></div></div></section>;}
export function Footer(){return <footer className="footer wrap"><span className="copyright">© {new Date().getFullYear()}</span></footer>;}
