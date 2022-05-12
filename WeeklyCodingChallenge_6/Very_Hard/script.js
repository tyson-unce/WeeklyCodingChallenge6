let stringy= "(hello world(";



let checkBrack = p1 => {
    let brackArray = ["{", "}", "(", ")", "[", "]"]
    if (brackArray[0] == p1[0]){
        if (brackArray[1] == p1[p1.length-1]) {
            return console.log(true)}
            else if (brackArray[1] != p1[p1.length-1]){
                return console.log(false)
            }

}
else if (brackArray[2] == p1[0]){
    if (brackArray[3] == p1[p1.length-1]) {
        return console.log(true)}
        else if (brackArray[3] != p1[p1.length-1]){
            return console.log(false)
        }

}
else if (brackArray[4] == p1[0]){
    if (brackArray[5] == p1[p1.length-1]) {
        return console.log(true)}
        else if (brackArray[5] != p1[p1.length-1]){
            return console.log(false)
        }

}
return console.log(brackArray[0])
}

checkBrack(stringy)