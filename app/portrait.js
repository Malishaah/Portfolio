export default function Portrait({className='',priority=false}){
  const path='M14 11 C28 -2 55 3 72 8 C91 14 102 30 94 47 C89 57 103 68 98 84 C94 99 79 103 70 118 C60 134 39 126 26 120 C11 113 15 97 10 85 C3 70 13 61 7 49 C0 35 3 21 14 11 Z';
  return <div className={className}>
    <svg className="portrait-art" viewBox="0 0 100 130" role="img" aria-label="Mali Roshanshah" preserveAspectRatio="xMidYMid meet">
      <defs><clipPath id="portrait-clip"><path d={path}/></clipPath></defs>
      <image href="/assets/mali-portrait-spacious.jpg" width="100" height="133.3" y="-1.6" preserveAspectRatio="xMidYMid slice" clipPath="url(#portrait-clip)" fetchPriority={priority?'high':undefined}/>
      <path className="portrait-echo" d={path}/>
      <path className="portrait-outline" d={path}/>
    </svg>
  </div>;
}
