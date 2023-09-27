function ppush(arreglo, numero){
    /*
     * params: arreglo: array, numero: number
     */
    let newArray = []
    /*
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] < arreglo[i+1] && i < arreglo.length){
            console.log('ok')
            continue
        }
    }
    */

    for(let i = 0; i < arreglo.length + 1; i++){
        
        newArray[i] = arreglo[i]

        if(numero === arreglo[i]){
            newArray[i+1] = numero
            continue
        } else if(numero > arreglo[i] && arreglo[i] < arreglo[i+1]){
            newArray[i+1] = numero
            continue
        }
    }

    console.log(`Nuevo arreglo:  ${newArray}`)
    console.log(`Anterior arreglo: ${arreglo}`)
}


ppush([1,2,3,5,6,7,8,9],4)
