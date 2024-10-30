/*
Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói
**O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
## Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
## Saída
Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

//
// testado com node index.js "Nome Heroi" "Quantidade XP"
// ex. node index.js "Harold" "3200" | node index.js "Harry" "6000" 
let nomeHeroi = process.argv[2] || "DIO";
let quantidadeXP = parseInt(process.argv[3]) || 10001;
let nivel = '';

switch(true) {
    case (quantidadeXP <= 1000):
        nivel = "Ferro";
        break;
    case (quantidadeXP > 1000 && quantidadeXP <= 2000):
        nivel = "Bronze";
        break;
    case (quantidadeXP > 2000 && quantidadeXP <= 5000):
        nivel = "Prata";
        break;
    case (quantidadeXP > 5000 && quantidadeXP <= 7000):
        nivel = "Ouro";
        break;
    case (quantidadeXP > 7000 && quantidadeXP <= 8000):
        nivel = "Platina";
        break;
    case (quantidadeXP > 8000 && quantidadeXP <= 9000):
        nivel = "Ascendente";
        break;
    case (quantidadeXP > 9000 && quantidadeXP <= 10000):
        nivel = "Imortal";
        break;
   case (quantidadeXP > 10000):
        nivel = "Radiante";
}

console.log('O Herói de nome **' + nomeHeroi + '** está no nível de **' + nivel + '**');