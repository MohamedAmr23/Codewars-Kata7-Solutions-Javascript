function oddOrEven(array) {
    if (!array.length) return 'even'
    let sum =array.reduce((cur,acc)=>(cur+acc) ) 
    return  sum % 2 ===0 ?'even' :'odd'
 }

 console.log(oddOrEven([0, -1, -5]))