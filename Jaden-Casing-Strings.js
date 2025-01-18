String.prototype.toJadenCase = function () {
    return this.split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
};

let str = 'How can mirrors be real if our eyes aren\'t real';
console.log(str.toJadenCase());