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
    return expr.split('**********').map(word => {
        const decodedWord = [];
        for (let i = 0; i < word.length / 10; i++) {
            const morseLetter = [];
            const letter = word.substr(10 * i, 10);

            for (let j = 0; j < letter.length; j++) {
                const symbol = letter.substr(2 * j, 2);
                if (symbol === '10') {
                    morseLetter.push('.')
                } else if (symbol === '11') {
                    morseLetter.push('-')
                }
            }

            decodedWord.push(MORSE_TABLE[morseLetter.join('')]);
        }

        return decodedWord.join('');
    }).join(' ');
}

module.exports = {
    decode
}