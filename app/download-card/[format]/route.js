const files={
  png:{path:'/downloads/mali-roshanshah-business-card-v2.png',type:'image/png',name:'Mali-Roshanshah-Business-Card.png'},
  svg:{path:'/downloads/mali-roshanshah-business-card-v2.svg',type:'image/svg+xml',name:'Mali-Roshanshah-Business-Card.svg'}
};

export async function GET(request,{params}){
  const {format}=await params;
  const file=files[format];
  if(!file)return new Response('Not found',{status:404});
  const asset=await fetch(new URL(file.path,request.url));
  if(!asset.ok)return new Response('File unavailable',{status:502});
  return new Response(asset.body,{headers:{
    'Content-Type':file.type,
    'Content-Disposition':`attachment; filename="${file.name}"`,
    'Cache-Control':'public, max-age=31536000, immutable'
  }});
}
