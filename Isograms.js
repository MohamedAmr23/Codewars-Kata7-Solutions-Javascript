function isIsogram(str){
    let afterConvertg = str.toUpperCase()
    return new Set(afterConvertg).size == afterConvertg.length
}

console.log(isIsogram('moOse'))