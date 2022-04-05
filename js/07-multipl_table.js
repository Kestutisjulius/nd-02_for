const mTable = function (){  
    let valuesLine = ''; 
    for (var i = 1; i <= 10; i++){
        valuesLine += '\n';
        for (var j = 1; j <= 10; j++) {
            valuesLine += i * j + ' ';  
        }
    }
    console.log(valuesLine);
    return 'Done.';
}
module.exports.mTable = mTable;