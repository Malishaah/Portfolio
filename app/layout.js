import './fonts.css';
import './globals.css';
import {Navigation} from './ui';
import {Footer} from './shared';
import Background from './background';
export const metadata={
  metadataBase:new URL('https://mali-portfolio.malirnsh.workers.dev'),
  title:{default:'Mali Roshanshah — Developer | Designer',template:'%s | Mali Roshanshah'},
  description:'Developer and designer turning complex journeys into clear, accessible digital products.',
  openGraph:{
    type:'website',
    title:'Mali Roshanshah — Developer | Designer',
    description:'Developer and designer turning complex journeys into clear, accessible digital products.',
    images:[{url:'/social-card-v2.png',width:1200,height:630,alt:'Mali Roshanshah — Developer and Designer'}]
  },
  twitter:{
    card:'summary_large_image',
    title:'Mali Roshanshah — Developer | Designer',
    description:'Developer and designer turning complex journeys into clear, accessible digital products.',
    images:['/social-card-v2.png']
  }
};
export default function Layout({children}){return <html lang="en" data-scroll-behavior="smooth"><body><Background/><Navigation/>{children}<Footer/></body></html>;}
