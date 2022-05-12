const coinFunc = function(p1,p2){
    let list1 = []
    let max = Math.max(...p1)
    for (let i of p1){
        if (Math.floor(p2/max) > 0 ){
           list1.push(i)
        }
        
    }
    

}

let coins = [2,3,5,6,7,6,5,3,]


coinFunc(coins,60)

console.log(Math.floor(60/))