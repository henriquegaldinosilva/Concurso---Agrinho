const numeros = document.querySelectorAll(".numero h2");

const observador = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const numero = entry.target;
const alvo = +numero.dataset.target;

let contador = 0;

const atualizar = () => {

const incremento = alvo / 100;

if(contador < alvo){

contador += incremento;

numero.innerText = Math.floor(contador);

setTimeout(atualizar,20);

}else{

numero.innerText = alvo;

}

};

atualizar();

}

});

});

numeros.forEach(numero=>{
observador.observe(numero);
});


const imagens = document.querySelectorAll(".galeria img");

imagens.forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

});

});
