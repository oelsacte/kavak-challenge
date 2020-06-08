function extraeId(email) {
    const token = email.split('@');
    console.log(token);
    return token;
}

const ex = extraeId('oelsacte@gmail.com')
