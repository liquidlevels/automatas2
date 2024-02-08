function saluda(){
    return "hola"
}

const opciones = {
    "valor": "Saludo",
    "balor": "No te saludo",
    "arreglo": [0,1,7,3]
}

const array_opciones = {
    0: [0,1,2],
    1: [1,0,2],
    2: [2,1,0],
    3: saluda()
}

var opcion_array = 4
array_opciones[4] = "can i pet dat dawg"
//console.log(opciones["arreglo"][2])
//console.log(array_opciones[opcion_array])


























const arreglo = [0,1,3,4]
const data = ["saludo","mundo",5]

//generar un diccionario de datos tomando como keys=arreglo y como data el arreglo data
//data debe ser igual o mayor a arreglo
//0 -> saludo, 1 -> mundo, 3 -> 5, 4 -> adasd

var arreglo_diccionario = {}

for(let i = 0; i < arreglo.length; i++){
    if(data.length >= arreglo.length)
        arreglo_diccionario[arreglo[i]] = data[i]
    else{
        console.log('u cant bro, suck it')
        break
    }
}

console.log(arreglo_diccionario)

//pako version

for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] == undefined){return}
    arreglo_diccionario[arreglo[i]] = data[i]
}

console.log(arreglo_diccionario)
