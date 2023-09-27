function buscaArray(arreglo_1, arreglo_2){    
    var arreglo = []

    console.log(`length del arreglo 1: ${arreglo_1.length}\nlength del arreglo 2: ${arreglo_2.length}`)
    if(arreglo_1.length == 0 || arreglo_2 == 0){
        console.log('uno de los arreglos esta vacio')
    }else{
        for(let i = 0; i < arreglo_1.length; i++){
            for(let j = 0; j < arreglo_2.length; j++){
                if(arreglo_2[j] == arreglo_1[i]){
                    arreglo.push(j)
                    console.log(`[${arreglo_1[i]}] Se encuentra en el indice: ${arreglo}`)
                }
                arreglo = []
            }
        }
    }
}

buscaArray([],[1,2,3,6,2])
buscaArray([2,0,4,2,1],[])
buscaArray([1,2,3,5,6,7],[6,2,4,1,1,2,3])
buscaArray([0,1,2,3,4,5,6,7,8,9],[1,2,5,4,6,4,2,1,2,7,8,6,5,5,5,0])
