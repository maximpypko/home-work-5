function padString(string = '', number, symbol, addSimbol = true) {

    if (string.length <= number) {
        for (var j = 1; j = number - string.length; j++) {
            if (addSimbol) {
                string = symbol + string;
            } else {
                string = string + symbol;
            }
        }
    }
    return string;
}

console.log(padString('Ivan', 8, '*', true))

console.log(padString('Ivan', 8, '*', false))

console.log(padString('Ivan Petrov', 8, '*', true))

