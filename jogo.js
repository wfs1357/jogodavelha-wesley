const celulas = document.querySelector('.celula')

let checarTurno = true;

let turno;

const JOGADOR_X = "X"
const JOGADOR_O = "O"

let jogoAcabou = false;

document.addEventListener ("click", (event) => {
 if (event.target.matches(".celula") && !jogoAcabou) {
    jogar(event.target.id);
 }
});
function jogar(id) {
 
 const celula = document.getElementById(id);

 if (celula.textcontent === "") {

  turno = checarturno ? JOGADOR_X : JOGADOR_O;

  checarTurno = !checarTurno;
 
  celula.textContent = turno;

  celula.classList.add(turno)

  celula.removeEventListener ("click", jogar);

  verificarVencedor(turno);
 }
}

