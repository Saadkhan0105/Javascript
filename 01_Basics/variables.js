const accountId = 144553
let accountEmail = "saadkhan9560@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed
accountEmail = "saad@g.com"
accountPassword = "98765"
accountCity = "Madrid"


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);