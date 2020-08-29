Exercicio 1
const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}
console.log(`O usuário mora em ${endereco.cidade}
 / ${endereco.uf}, no bairro ${endereco.bairro}, 
 na rua "${endereco.rua} com n° ${endereco.numero}"`)

/*-----------------------------------------------------*/

Exercicio 2
function pares(x,y){
   for(var i = x; i <= y; i++){
       if(i%2 === 0){
           console.log(i)
       }
   }
}
console.log(pares(32,321))

/*-----------------------------------------------------*/

Exercicio 3
function temHabilidades(skills){
    if(skills.indexOf('JAVASCRIPT') > -1){
        console.log(true)
    }else{
        console.log(false)
    }
}
const skills = [ 'JAVASCRIPT','REACT', 'REACT-NATIVE'];
temHabilidades(skills)

/*-----------------------------------------------------*/

Exercicio 4
function experiencia(anos){
    if(anos === 0){
        console.log('iniciante')
    }else if(anos >= 1 && anos <=3){
        console.log('intermediario')
    }else if(anos > 3 && anos <= 6 ){
        console.log('avancado')
    }else{
        console.log('jedi')
    }
}
const anosDeEstudo = 7
experiencia(anosDeEstudo)

/*-----------------------------------------------------*/

Exercicio 5
const usuarios = [
    {
        nome: "Diego",
        habilidades: ['Javascript', 'React', 'Reudx']
    },
    {
        nome: "Gabriel",
        habilidades: ['Vuejs', 'Ruby', 'Elixir']
    }
]
const ShowMessage = usuarios
for(const user of usuarios){
    const {nome, habilidades} = user
    console.log(`O ${nome} possui as habilidades: ${habilidades.join(", ")}`)
}
