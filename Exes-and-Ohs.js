function XO(str) {
    let containX = str.toLowerCase().split('').filter((item)=>item ==='x')
    let containO = str.toLowerCase().split('').filter((item)=>item ==='o')
    return containX.length === containO.length ?true:false
}

console.log(XO('xxmOo'))