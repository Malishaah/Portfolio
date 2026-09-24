import './fonts.css';
import './globals.css';
import {Navigation} from './ui';
import {Footer} from './shared';
import Background from './background';
export const metadata={title:{default:'Mali Roshanshah — Developer | Designer',template:'%s | Mali Roshanshah'},description:'Developer and designer connecting user research, thoughtful visual design and frontend development to create meaningful digital experiences.'};
export default function Layout({children}){return <html lang="en" data-scroll-behavior="smooth"><body><Background/><Navigation/>{children}<Footer/></body></html>;}
