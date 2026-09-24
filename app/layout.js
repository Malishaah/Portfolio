import './fonts.css';
import './globals.css';
import {Navigation} from './ui';
import {Footer} from './shared';
import Background from './background';
export const metadata={title:{default:'Mali Roshanshah — Developer | Designer',template:'%s | Mali Roshanshah'},description:'Developer and designer turning complex journeys into clear, accessible digital products.'};
export default function Layout({children}){return <html lang="en" data-scroll-behavior="smooth"><body><Background/><Navigation/>{children}<Footer/></body></html>;}
