function rand(min, max) {
    const eraYearRandom = Math.floor(Math.random()*(max-min+1)+min)
        if (leap(eraYearRandom)){
            return `This: ${eraYearRandom} is LEAP`;
        } else {
            return `This: ${eraYearRandom} is Not a Leap year`;
        }
    }

function allLeap(min, max) {
    for (var i = min; i <= max-1; i++) {
        if (leap(i)){
            console.log( `This: ${i} is LEAP`);
        }
    }
}

const leap = function (yers){  
    let range = true;
    if (!(9999 < yers) && (yers >= 1)) {

        if (yers % 4 != 0) {

            range = false;

        } else 
        if (yers % 100 === 0 && yers % 400 !== 0) {

            range = false;
        }
        
    } else return false;
    return range;
}
module.exports.leap = rand;