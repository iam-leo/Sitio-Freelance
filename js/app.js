let servicios = document.getElementsByClassName('iconos');

for(let i=0; i<servicios.length; i++){
    servicios[i].addEventListener('mouseenter', function(){
        servicios[i].classList.add('animate__animated', 'animate__flip');
    });
}
