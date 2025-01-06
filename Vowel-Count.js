function getCount(str) {
    let sum = 0 
    str.split('').map((item)=>item =='a' || item =='e' || item =='i' || item =='o' || item=='u'?sum+=1:'');
    return sum
}

// another solution 

function getCount(str) {
    let vowels = 'aeiou'
    return str.replaceAll(' ','').split('').filter((letter)=>vowels.includes(letter)).length
}

// another solution 

function getCount(str) {
    return str.match(/[aeoiu]/ig).length
}
  console.log(getCount('abracadabra'))