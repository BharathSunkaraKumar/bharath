const removeDuplicates = (str) => {
    
    return [...new Set(str)].join("")
}
console.log(removeDuplicates('bharath'))