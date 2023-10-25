let obj = {
    key1: "value",
    key2: 100,
    key3: true,
    key4: ["one", "two", "three", "four"],
    key5: {
        nestedKey: "nestedValue",
        nestedKey2: 200,
        nestedKey3: false,
        nestedKey4: ["ein", "zwei", "drei"],
        nestedKey5: {nestedKey: "hello"}
    }
}
//console.log(obj.key4)
//console.log(obj.key5.nestedKey5.nestedKey)

const objectKeys = Object.keys(obj)
objectKeys.forEach((key) => {
    console.log(obj[key])
})

for (let i = 0; i < obj.key4.length; i++) {
   // console.log(obj.key4[i])
}

obj.key4.map((value) => {
   // console.log(value)
})



