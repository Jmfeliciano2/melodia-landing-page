document.addEventListener('DOMContentLoaded',()=>{
  if(window.lucide) lucide.createIcons();
  const header=document.querySelector('.site-header');
  const toggle=document.querySelector('.menu-toggle');
  const links=document.querySelector('.nav-links');
  window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>24),{passive:true});
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));links.classList.toggle('open',open);toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');toggle.innerHTML=open?'<i data-lucide="x"></i>':'<i data-lucide="menu"></i>';if(window.lucide)lucide.createIcons()});
  links.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');toggle.innerHTML='<i data-lucide="menu"></i>';if(window.lucide)lucide.createIcons()}));
  const play=document.querySelector('.play-toggle');
  play.addEventListener('click',()=>{const playing=play.dataset.playing!=='true';play.dataset.playing=String(playing);play.setAttribute('aria-label',playing?'Pausar prévia':'Reproduzir prévia');play.innerHTML=playing?'<i data-lucide="pause"></i>':'<i data-lucide="play"></i>';if(window.lucide)lucide.createIcons();document.querySelector('.track-time').textContent=playing?'PRÉVIA':'0:24'});
  document.querySelector('.signup-form').addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget;const message=form.querySelector('.form-message');const email=form.querySelector('input').value.trim();if(!email)return;message.textContent='Valeu! Seu e-mail foi registrado nesta demonstração.';message.classList.add('success');form.reset()});
  const reviews=[
    {quote:'Encontrei bandas que parecem ter feito música exatamente para os meus domingos.',name:'Marina Costa',since:'Ouvinte desde 2024',photo:'photo-1534528741775-53994a69daeb'},
    {quote:'Toda semana aparece uma faixa nova que acaba virando a minha favorita.',name:'Rafael Mendes',since:'Ouvinte desde 2025',photo:'photo-1500648767791-00dcc994a43e'},
    {quote:'As playlists acompanham meu humor melhor do que eu consigo explicar.',name:'Lia Santos',since:'Ouvinte desde 2023',photo:'photo-1531123897727-8f129e1688ce'}
  ];
  const quote=document.querySelector('.quote-inner blockquote');
  const person=document.querySelector('.quote-person');
  const count=document.querySelector('.quote-count');
  document.querySelectorAll('.quote-pagination button').forEach((button,index)=>button.addEventListener('click',()=>{const review=reviews[index];quote.textContent=review.quote;person.querySelector('img').src=`https://images.unsplash.com/${review.photo}?auto=format&fit=crop&w=120&q=85`;person.querySelector('img').alt=`Retrato de ${review.name}`;person.querySelector('strong').textContent=review.name;person.querySelector('span').textContent=review.since;count.textContent=`0${index+1} / 03`;document.querySelectorAll('.quote-pagination button').forEach((item,i)=>{const active=i===index;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))})}));
  const alignHashTarget=()=>{const id=decodeURIComponent(location.hash.slice(1));const target=document.getElementById(id);if(!target)return;const offset=id==='top'?0:(header?.offsetHeight||0)+12;window.scrollTo({top:Math.max(0,target.getBoundingClientRect().top+window.scrollY-offset),behavior:'auto'})};
  let resizeAnchor=null;let resizing=false;
  const rememberLayoutAnchor=()=>{const headerEdge=header?.offsetHeight||0;const visible=[...document.querySelectorAll('main section[id]')].map(element=>({id:element.id,top:element.getBoundingClientRect().top,bottom:element.getBoundingClientRect().bottom})).filter(item=>item.bottom>headerEdge&&item.top<window.innerHeight).sort((a,b)=>Math.abs(a.top-headerEdge)-Math.abs(b.top-headerEdge));if(visible[0])resizeAnchor={id:visible[0].id,top:visible[0].top}};
  window.addEventListener('scroll',()=>{if(!resizing)rememberLayoutAnchor()},{passive:true});
  window.addEventListener('resize',()=>{if(!resizeAnchor)rememberLayoutAnchor();if(!resizeAnchor)return;const saved={...resizeAnchor};resizing=true;requestAnimationFrame(()=>{const target=document.getElementById(saved.id);if(target){const headerEdge=header?.offsetHeight||0;const safeTop=headerEdge+12;const desiredTop=saved.top>=-120&&saved.top<safeTop?safeTop:saved.top;window.scrollBy({top:target.getBoundingClientRect().top-desiredTop,behavior:'auto'})}requestAnimationFrame(()=>{resizing=false;rememberLayoutAnchor()})})},{passive:true});
  window.addEventListener('hashchange',()=>requestAnimationFrame(alignHashTarget));
  window.addEventListener('load',()=>{if(document.fonts?.ready)document.fonts.ready.then(()=>requestAnimationFrame(alignHashTarget));else requestAnimationFrame(alignHashTarget)},{once:true});
});

