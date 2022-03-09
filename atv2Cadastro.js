//validação data do evento
let dataAtual = new Date()
let dataEvento = new Date('2022,03,20')
if (dataAtual > dataEvento) {

 console.log ("Data do evento inválida")
} else {
 console.log ('O evento será no dia ', dataEvento)
}

//permissibilidade de idade
let idade = 18
if (idade < 18){
 console.log ("Você não tem idade adequada para o evento")
} else {
 console.log ("Idade permitida")
}

//quantidade de participantes + lista
let listaEvento = ["Maria", " Pedro", " Alice", " Guilherme", " Tiago"]
if (listaEvento.length <= 100) {
 console.log ("A quantidade de partipantes está dentro do limite")
 console.log (`Lista de participates: ${listaEvento}`)
} else {
 console.log ("A quantidade de partipantes neste evento foi excedida")
}
