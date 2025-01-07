function highAndLow(numbers){
    let numbersToArray = numbers.split(' ').map((item)=>Number(item))
    max = Math.max(...numbersToArray)
    min = Math.min(...numbersToArray)
    return `${max} ${min}`
}

console.log(highAndLow('1 2 3 4 5'))