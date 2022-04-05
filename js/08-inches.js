const inches = function (n){  
    const inch = 2.54; 
    let value = 0;
    for (var i = 1; i <= n; i++){
      console.log(value =`${i} inches = ` + i*inch + ' cm');
    }   
    return 'Done.';
}
module.exports.inches = inches;