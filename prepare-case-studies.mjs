import fs from 'node:fs';
import {load} from 'cheerio';
const projects=JSON.parse(fs.readFileSync('app/projects.json','utf8'));
const titleCase=s=>s.toLowerCase().replace(/(^|\s)\S/g,c=>c.toUpperCase()).replace('Testning','Testing').replace('Findnings','Findings');
const strip=s=>load(s).text().trim();
const out={};
for(const p of projects){let section=0;const headings=[];const blocks=p.blocks.slice(7).map(b=>{
 if(b.type==='image')return b;
 let html=b.html.replace(/(?:<br\s*\/?>\s*){2,}/g,'<br><br>');
 // Promote uppercase section labels from the published rich text into semantic headings.
 html=html.replace(/<strong>([\s\S]*?)<\/strong>/g,(full,inside)=>{const t=strip(inside);if(t.length>3&&t.length<85&&/[A-Z]/.test(t)&&t===t.toUpperCase())return '</p><h2>'+titleCase(t)+'</h2><p>';return full;});
 const $=load(html,null,false);
 $('p').each((i,e)=>{const t=$(e).text().trim();if(t.length>3&&t.length<85&&/[A-Z]/.test(t)&&t===t.toUpperCase()&&!$(e).find('a').length)$(e).replaceWith('<h2>'+titleCase(t)+'</h2>');});
 $('h2').each((i,e)=>{const id='section-'+(++section);$(e).attr('id',id);headings.push({id,label:$(e).text()});});
 $('p').each((i,e)=>{if(!$(e).text().trim()&&!$(e).find('img').length)$(e).remove();});
 return {type:'html',html:$.html()};
 });out[p.slug]={client:strip(p.blocks[2]?.html||''),scope:strip(p.blocks[4]?.html||''),year:strip(p.blocks[6]?.html||''),headings,blocks};}
fs.writeFileSync('app/case-content.json',JSON.stringify(out,null,2));
