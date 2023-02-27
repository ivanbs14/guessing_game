/* VARIAVEIS */
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
// gerar numero randomico
let randomNumber = Math.round(Math.random() * 10);
//variavel para receber tentativas, dentro da funçao, ao final ela soma ++
let attemps = 1;

/* EVENTOS */
//adicionando atributos as variaveis
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleReset)

// Funçao callback => criar function para ativar input e button da Screen1
// ATENÇAO: event list impede que o button no form atualize a pagina
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
        alert("Digite um número entre 0 a 10")

    }

    if(Number(inputNumber.value) === randomNumber) {
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")
        
        document.querySelector(".screen2 h2").innerText = `Acertou em ${attemps} vezes`
    }

    inputNumber.value = ""
    attemps++
    console.log(attemps)
}

// funçao reset => reinicia jogo
function handleReset(event) {
    event.preventDefault()

    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")

    randomNumber = Math.round(Math.random() * 10);

    attemps = 1
}
