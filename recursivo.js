function recursivo(num){
    console.log("-> " + num)
    if(num == 0)return num;
    recursivo(num-1);
}

var resultado = recursivo(4);
console.log(resultado)
