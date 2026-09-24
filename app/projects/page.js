import projects from '../projects.json';import {ProjectGrid} from '../ui';import {ContactBanner} from '../shared';
export const metadata={title:'Selected work'};
export default function Projects(){return <main id="main-content" tabIndex={-1}><section className="wrap work-page"><div className="page-heading"><h1>Selected <em>work</em></h1><p>Case studies across research, product design and frontend development.</p></div><ProjectGrid projects={projects} filters/></section><ContactBanner/></main>;}
