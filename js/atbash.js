function encrypt(text){
    let encrypted = ""
    console.log(text);
    let x = 0;
    for(x=0;x<text.length;x++){
        c= text[x];
        let l = c.toLowerCase()
        let i = l.charCodeAt(0) - 97
        let e = (25 - i) % 26
        encrypted = encrypted + String.fromCharCode(e + 97)
    }
    return encrypted
}

function decrypt(text){
    let decrypted = ""
    let x = 0;
    for(x=0;x<text.length;x++){
        c = text[x]
        let l = c.toLowerCase() 
        let i = l.charCodeAt(0) - 97
        let d = (25-i) % 26
        decrypted = decrypted + String.fromCharCode(d + 97)
    }
    return decrypted
}