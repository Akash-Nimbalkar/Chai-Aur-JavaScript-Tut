const accountId = 1234
var accountEmail = "akash@gmail.com"
let accountPassword = "1479"
accountCity = "Pune"
let accounState;

// accountId = 90 not allowed as accountID is declared as const

console.log(accountId);
accountEmail = "ak@gmail.com"
accountPassword ="3132"
accountCity = "Delhi"

console.table([accountId, accountEmail, accountPassword, accountCity, accounState])


/*
Prefer not to use var
because of issue in block scope and functional scope
*/