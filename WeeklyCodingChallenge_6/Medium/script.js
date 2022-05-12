

const target = 0

function indexxxOf(p1)  {
    for (i = 0; i < p1.length; i++){
if (i == target){
    return console.log(p1.indexOf(i))
}
else if (i != target){
    console.log("-1")
    break
}
}
}
let nums = [4,5,6,7,0,1,2]
indexxxOf(nums)


