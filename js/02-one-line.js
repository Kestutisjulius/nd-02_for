const oneLine = function (){
    let line = '';
    for (var i = 0; i < 5; i++) {
        line += i + ' ';
    }
    return line;
}
module.exports.oL = oneLine;