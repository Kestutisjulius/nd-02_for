const mTable = function (n){  
    let valuesLine = ''; 
    for (var i = 1; i <= 10; i++){
        valuesLine += `${n}*${i} = ` + n * i + '\n';

    }
    console.log(valuesLine);
    return 'Done.';
}
module.exports.mTable = mTable;