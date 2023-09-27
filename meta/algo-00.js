var arreglo_1 = [2,1,4,5]
var arreglo_2 = [1,2,2,3,5,7]
var arreglo = []

for(let i = 0; i < arreglo_1.length; i++){
    for(let j = 0; j < arreglo_2.length; j++){
        if(arreglo_2[j] == arreglo_1[i]){
            arreglo.push(j)
            console.log(`[${arreglo_1[i]}] Se encuentra en el indice: ${arreglo}`)
        }
        arreglo = []
    }
}
