const nav = document.querySelector('.navbar');
const bars = document.querySelector('.navbar .bars');
const link = document.querySelectorAll('.navbar .link ul li a');
const work = document.querySelector('.work');
const kotak = document.querySelector('.kotak');


bars.onclick = ()=>{
  nav.classList.toggle('active');
  nav.classList.add('scroll');
}

window.onscroll = ()=>{
  if (scrollY > 20) {
    nav.classList.add('scroll');
  }else{
    nav.classList.remove('scroll');
  }
}

for (var i = 0; i < link.length; i++) {
  link[i].onclick = ()=>{
    nav.classList.remove('active');
  }
}

let index = 0;
let tulisan = "Web Developer";
let kecepatan = 200;

function nulis(){
  if (index < tulisan.length) {
    work.innerHTML += tulisan.charAt(index);
    index++;
  }
}

setInterval(nulis,kecepatan);


AOS.init({
  once:true,
});