module.exports = function reverse (n) {
    let nToString = String(n);
    let tempStringFromN = '';
    for(let i = nToString.length - 1; i >= 0; i--){
        let word = nToString[i];
        tempStringFromN += word;
    }

    return parseFloat(tempStringFromN);
}
