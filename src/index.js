const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodedStr = '';
    for(let i = 0; i < expr.length; i+=10){
        let letter = expr.slice(i, i + 10);

        if(letter == "**********") {
            decodedStr += " ";
        } else {
            let morseCode = '';
            for(let x = 0; x < letter.length; x+=2) {
               letter.slice(x, x + 2) == '10' ? morseCode += '.' : morseCode += ''
               letter.slice(x, x + 2) == '11' ? morseCode += '-' : morseCode += ''
            }
            decodedStr += MORSE_TABLE[morseCode];
        }
    }
    return decodedStr;
}

module.exports = {
    decode
}