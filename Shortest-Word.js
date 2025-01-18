function findShort(s){
    // return Math.min(...s.split(' ').map((word)=>word.length))

    // another solution

    return s.split(' ').sort((a,b)=>b.length - a.length).pop().length
}

console.log(findShort('mohamed amr ahmed'))