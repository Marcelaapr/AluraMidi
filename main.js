function tocaSom (idElementoAudio) {    
    document.querySelector(idElementoAudio).play();        
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //1 lista de elem que compartil. uma msm classe.

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template String
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

   //console.log(contador);

}