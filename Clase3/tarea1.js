const numbers = [];

const resultados = {};

for (let index = 0; index < 10000; index++) {
        const numAleatorio = parseInt(Math.random()*20+1);
        if(resultados[numAleatorio]){
            resultados[numAleatorio]++
        } else{
            resultados[numAleatorio] = 1;
        }

}

console.log(resultados)

