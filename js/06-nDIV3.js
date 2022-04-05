const nDiv = function (){   
    for (var i = 1; i <= 20; i++){
        if (i % 3 !== 0) {
            console.log(i)
        }
    }
    return 'Done.';
}
module.exports.nDiv = nDiv;