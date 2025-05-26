let score = "33"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score) // CONVERTED FROM STRING TO NUMBER

    console.log(typeof valueInNumber)


    let scorer = "33abc"

    console.log(typeof scorer)
    console.log(typeof (scorer))

    let convertedvalue = Number(scorer)
    console.log(typeof convertedvalue)
    console.log(convertedvalue)
    
//"33" => 33
// "33abc" => NaN
//true => 1; false =>0

let isLoggedIn =1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 => true
// 0 => false
//"" => false


// *********************************************************** Operations ****************************************

let value= 3;

let negValue = -value
console.log(negValue)

let str1 ="hello"
let str2 =" Arvind"

let str3=str1 + str2
console.log(str3) 

// "1" + 2 output is 12
// 1 + "2" output is 12
// "1" +2 +2 output is 122
//1 + 2 + "2" output is 32. if sting is first everything is treated as string , if string is last means first it caculates and then it treats as string like this 1 + 2 +"2" = 32

console.log(+true)
console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter
console.log(gameCounter)



