const hh=document.querySelector('#hr')
const mm=document.querySelector('#min')
const ss=document.querySelector('#sec')

setInterval(() => {
let hr=new Date().getHours()*30;
let mn=new Date().getMinutes()*6;
let sc=new Date().getSeconds()*6;

hh.style.transform=`rotateZ(${hr+(mn/12)}deg)`;
mm.style.transform=`rotateZ(${mn}deg)`;
ss.style.transform=`rotateZ(${sc}deg)`;
});