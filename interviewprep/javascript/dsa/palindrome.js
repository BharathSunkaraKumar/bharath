const palindrome = (x) => {
    return x === +x.toString().split('').reverse().join('');
}
console.log(palindrome(545))