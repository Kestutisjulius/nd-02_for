const random = function (){   
    for (var i = 0; i < 5; i++){
        console.log(Math.floor(Math.random() * 11));
    }
    return 'Done.';
}
module.exports.random = random;