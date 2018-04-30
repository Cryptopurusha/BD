const crypto = require('crypto')
var str = "Scrypta";
var result = crypto.createHash("md5").update(str).digest("hex")
console.log("str: " + str +", result: " + result);

