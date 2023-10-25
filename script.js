const data = [
    {
        name: "Kovács Péter",
        age: 25,
        pets: ["Blöki", "Brúnó", "Bobó"],
        mostRecentPurchase: {
            price: 15000,
            color: "black"
        }
    },
    {
        name: "Nagy János",
        age: 48,
        pets: ["Gizi", "Norman", "Lali"],
        mostRecentPurchase: {
            price: 28000,
            color: "yellow"
        }
    },
    {
        name: "Erős Pista",
        age: 32,
        pets: ["Dobby", "Cirmi", "Maci"],
        mostRecentPurchase: {
            price: 22000,
            color: "green"
        }
    },
    {
        name: "Gipsz Jakab",
        age: 67,
        pets: ["Jani", "Karcsi", "Maja"],
        mostRecentPurchase: {
            price: 12000,
            color: "pink"
        }
    },
    {
        name: "Kiss Sándor",
        age: 36,
        pets: ["Dézi", "Luna", "Morci"],
        mostRecentPurchase: {
            price: 10000,
            color: "blue"
        }
    },
    {
        name: "Hamza Bernadett",
        age: 23,
        pets: ["Dobby", "Picur", "Mazsi"],
        mostRecentPurchase: {
            price: 25000,
            color: "beige"
        }
    },
    {
        name: "Magyar Anett",
        age: 38,
        pets: ["Süsü", "Gagyi", "Puki"],
        mostRecentPurchase: {
            price: 24000,
            color: "orange"
        }
    },
    {
        name: "Mekk Elek",
        age: 75,
        pets: ["Duda", "Manó", "Béla"],
        mostRecentPurchase: {
            price: 29000,
            color: "red"
        }
    },
    {
        name: "Mézga Géza",
        age: 80,
        pets: ["Csoki", "Zoli", "Ropi"],
        mostRecentPurchase: {
            price: 11000,
            color: "white"
        }
    },
    {
        name: "Fá Zoltán",
        age: 53,
        pets: ["Lujzi", "Mari", "Fiú"],
        mostRecentPurchase: {
            price: 16000,
            color: "brown"
        }
    },
]

for (let i = 0; i < data.length; i++) {
   if (data[i].age >= 60 && data[i].mostRecentPurchase.price >= 20000) {
    //console.log(data[i])
   }
}
    
function addTwoNumbers(number1, number2) {
    let result = number1 + number2

    return result
}
const addTwoNumbersResult = addTwoNumbers(1, 2)
//console.log("addTwoNumbers: ", addTwoNumbersResult)

function concatenateArray(array) {
    //let result = ""
    
    array.forEach((string) => {
        //result += string
    });

    //return result

    let result = array.join("-")
    return result
}

const arrayOfStrings = ["kismacska", "codecool", "javascript", "wednesday", "exam"]
const concatArrayResult = concatenateArray(arrayOfStrings)
//console.log(concatArrayResult)

/*function getOldPeople(arrayOfPeople, minimumAge) {
    arrayOfPeople.map((person) => {
        if (person.age >= minimumAge) {
            console.log(person)
        }
    })
}
getOldPeople(data, 40)*/

/*function getRichPeople(arrayOfPeople, minimumValue) {
    arrayOfPeople.filter((person) => )
}*/

function goodRecommendationFor(arrayOfPeople, newOffer) {
    for (let i = 0; i < arrayOfPeople.length; i++) {
        //console.log(arrayOfPeople[i].mostRecentPurchase)

        if (arrayOfPeople[i].mostRecentPurchase.color === newOffer.color && arrayOfPeople[i].mostRecentPurchase.price > newOffer.price) {
            result.push(arrayOfPeople[i]["name"])
            }
        }
        return result
    }

const newOffer1 = {
    color: "black",
    price: 8000
}
goodRecommendationFor(data, newOffer1)