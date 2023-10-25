let variable = 10
variable = 20 //felül tudom írni az értékét

const variable2 = 50 //nem tudom felülírni az értékét

let array = [1, 2, 3]
array = [4, 5, 6]
array.push(10) //belepusholja az arraybe a 10-et is

const array2 = [10, 20, 30]
//array2 = [40, 50, 60]  //nem írhatom felül
array2.push(100)  //lefut

//console.log(array2)

const arr = ["kiss béla", "nagy józsi", "tóth jános"]
for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]) //megkapom külön sorban az arr elemeit
}

arr.forEach((value, index) => {
   // console.log("at index: ", index, " is: ", value)
    //console.log(`at index:  ${index}  is:  ${value}`) //template literal
}) //ezzel is végig tudok menni az arrayen

arr.map((value, index) => {
    //console.log(`at index:  ${index}  is:  ${value}`)
}) //ugyanazt csinálja, mint a forEach, de a forEachnek nincs visszatérési értéke, amíg a map

for (const value of arr) {
   // console.log(`forof: ${value}`)
}

