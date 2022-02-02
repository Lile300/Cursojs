let num = [1,2,1,5,1,454,84,]
num[7]=45
console.log(`nosso vetor é ${num}`)
num.length
num.sort()
console.log(`quantas posiçoes tem ${num.length}`)
console.log(`${num}`)
for(let pos = 0;pos<num.length;pos++){
    console.log(`${num[pos]}`)
}
for(let pos in num){
    console.log(` Os valores são : ${num[pos]}`)
}
let pos= num.indexOf(2)
console.log(`O valor 2 está na posição ${pos}`)