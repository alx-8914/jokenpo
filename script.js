/* Pimeiros Passos dos Elementos;

const playHuman = (humanChoice) => {
    console.log(humanChoice) // parte um ok(rock, paper,scissors)

    console.log('retorno' + playMachine())
}

const playMachine = () => {
    const Choice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    
    return Choice [randomNumber] // parte dois ok (ambos aleatórios)
}



    ***  PRJETO JOKENPÔ  ***
*/
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')


let humanScoreNumber = 0 // começa em 0 e add ponto para o human
let machineScoreNumber = 0 // começa em 0 e add ponto para o máquina

/*
humanScoreNumber -> Camel Case = Corcuda do Camelo letra M...
GAME_OPTION      -> Snake Case = usando o (____)
*/

const GAME_OPTION = { // criando o enum nas variaveis sem repetição no cód...
    ROCK: 'rock',     // || troca o nome = "rock-bauboa" (exemplo)
    PAPER: 'paper',
    SCISSORS: 'scissors'

}
   // funções vazias sem reornar nada

const playHuman = (humanChoice) => {                         // parte um ok(rock, paper,scissors)
    playTheGame(humanChoice, playMachine())

}   // funções vazias sem reornar nada

const playMachine = () => {                                 //arrow function
    const Choice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return Choice[randomNumber]                             // parte dois ok (ambos aleatórios)

}                                                           // funções de retornos

const playTheGame = (human, machine) => {

    console.log('humano:' + human + ' Maquina:' + machine)  // paret três ok (humano vs maquina)

    if (human === machine) {                                //  paper -> pedra -> tesoura = lógica do jogo
        result.innerHTML = '&#x1F6A8; Deu empate!'
    } else if (                                             // parte quatro ok (regras do resultados)
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||     // condições para os if e else
        (human === 'scissors' && machine === 'paper')       // operadores bolianos
    ) {
        humanScoreNumber++                                          // ++ dos pontos
        humanScore.innerHTML = humanScoreNumber                     // add no html
        result.innerHTML = 'Você ganhou:&#x2705; = &#x1F917;!'      // result com emoji feliz
    } else {
        machineScoreNumber++                                        // ++ dos pontos
        machineScore.innerHTML = machineScoreNumber                 //add no html
        result.innerHTML = 'Você perdeu para a Alexa:&#x274C; = &#x1F625;!' //result com emoji trste
    }
}

