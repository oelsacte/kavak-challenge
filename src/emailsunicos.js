var emailsUnicos = function(email) {
    const token = email.split('@');
    const arrFromInput = token[0].split('');
    var arrAux = '';
    for(let i=0; i < arrFromInput.length; i++){
        if(arrFromInput[i] == '+'){
            break;
        }
        if(arrFromInput[i] !== `.`){
            arrAux+= arrFromInput[i];
        }
    }
    return arrAux.toString() + '@' +token[1];
}

const ex = emailsUnicos('oe.lsa.cte@gmail.com')
console.log(ex);