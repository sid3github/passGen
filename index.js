var keyList = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*<>~';
var tmp = '';
function generatePass(plength){
    tmp = '';
    for (var i = 0; i < plength; i++){
        tmp = tmp + keyList.charAt(Math.floor(Math.random()*keyList.length));
    }
    return tmp;
}

function populateForm(enterLength){
    document.passGen.output.value = generatePass(enterLength);
}
