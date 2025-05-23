const accountId = 12345
let accountEmail = "arvind@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"

//accountId=2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "121212"
accountCity = "Bangalore"
console.log(accountId);
console.log(accountEmail);

/*

prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity])

