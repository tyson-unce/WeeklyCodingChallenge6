let nummy = [1.5,3,2.5,1]
let sum = 0

Average = (p1) => {
    for (let i = 0; i < p1.length; i++) {
        sum += p1[i];
    }
    return sum/p1.length
}

console.log(Average(nummy))

