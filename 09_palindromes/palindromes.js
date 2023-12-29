const palindromes = function (string) {
    let modString = string.toLowerCase().replace(/[^a-z0-9]/g,'')
    return modString === modString.split('').reverse().join('');
//    return modString.split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
