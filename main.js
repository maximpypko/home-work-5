function padString(string = '', number, symbol, addSimbol = true) {

    var result = string;
    
    if (string.length <= number) {
        for (var j = 1; j = number - result.length; j++) {
            if (addSimbol) {
                result = symbol[0] + result;
            } else {
                result = result + symbol[0];
            }
        }
    }
    return result;
}

console.log(padString('Ivan', 8, '*', true))

console.log(padString('Ivan', 8, '*', false))

console.log(padString('Ivan Petrov', 8, '*', true))

