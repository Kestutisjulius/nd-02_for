const bank = function (n){  
    const interest = 0.02;      //palukanos metines
    let contribution = 100; //indelis
    let difference = 0.00;

    if (typeof n !== 'number' || n.toString() === 'NaN'
            || isNaN(n)
            || !isFinite(n)) {
                return 'please input only NUMBERS for LOAN term in YEARS!';
            }
    if ( n % 1 !== 0 ){
        return 'Please input years whole number!';
    }
    for (var i = 1; i <= n; i++){
        difference = (contribution * interest) ;
        contribution += difference;
     console.log(`for ${i} yer(s) contribution: ${(Math.round(contribution*1000)/1000)} € from them difference ${(Math.round(difference*1000)/1000)} €`);
     increment = contribution - difference;
    }   
    return 'Done.';
}
module.exports.bank = bank;