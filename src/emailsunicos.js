
function extraeId(email) {
    const token = email.split('@');
    return token[0];
}

function extraePunto(token){
    let i = token.indexOf('.');
    lastPart = token.substr(i + 1);
    firstPart = token.substr(0, i);
    return firstPart + lastPart;
}

function transforms(email){
    return extraePunto(extraeId(email));
}

var emailsUnicos = transforms('oelsa.cte@gmail.com');

const ex = extraeId('oelsa.cte@gmail.com')
console.log(emailsUnicos);