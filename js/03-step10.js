const step = function (){
    let line = '';
    for (var i = 0; i <= 40; i += 10) {
        line += i + ' ';
    }
    return line;
}
module.exports.step = step;