//inmutable const
const MY_INMUTABLE_CONSTANT = 10

//mutable const
const MY_MUTABLE_CONSTANT = { food: 'apple' };

console.log('before', MY_MUTABLE_CONSTANT)

MY_MUTABLE_CONSTANT.food = 'pear'

console.log('after', MY_MUTABLE_CONSTANT)

//________________________________________________________________________________________________

//Cuando quieres que una constante realmente sea inmutable, debes aplicar el Object.freeze(value)
const MY_VALUE_CONSTANT = Object.freeze({ food: 'apple' });

// This silently fails
MY_VALUE_CONSTANT.food = 'pear'

console.log(MY_VALUE_CONSTANT)

//________________________________________________________________________________________________
//functions 
function sum(number1, number2){
    return number1 + number2
}

console.log(sum(20,2))

