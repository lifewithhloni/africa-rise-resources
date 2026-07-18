const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.dots button')],current=document.querySelector('.current');let index=0,timer;
function show(n){index=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle('active',i===index));dots.forEach((d,i)=>d.classList.toggle('selected',i===index));current.textContent=`0${index+1}`;clearInterval(timer);timer=setInterval(()=>show(index+1),6000)}
document.querySelector('.next').onclick=()=>show(index+1);document.querySelector('.prev').onclick=()=>show(index-1);dots.forEach((dot,i)=>dot.onclick=()=>show(i));timer=setInterval(()=>show(1),6000);
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.14});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const navLinks=[...document.querySelectorAll('.nav-link')];
const updateNavigation=()=>{document.querySelector('.nav').classList.toggle('scrolled',scrollY>30);let active='';document.querySelectorAll('main section[id]').forEach(section=>{if(scrollY>=section.offsetTop-140)active=`#${section.id}`});navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===active))};
window.addEventListener('scroll',updateNavigation);updateNavigation();
const loader=document.querySelector('.loader'),scrollTop=document.querySelector('.scroll-top');
setTimeout(()=>loader.classList.add('done'),1350);
window.addEventListener('scroll',()=>scrollTop.classList.toggle('visible',scrollY>500));
document.querySelector('#projects .section-top .text-link').innerHTML='Request a quote <b>→</b>';
document.querySelector('.menu').onclick=function(){const nav=document.querySelector('nav'),open=nav.style.display==='flex';nav.style.display=open?'none':'flex';this.setAttribute('aria-expanded',!open)};
