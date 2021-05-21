const _ = require("lodash")

var arrObj = _.chunk(['apel', 'mangga', 'jeruk', 'durian'], 2);
console.log(arrObj);

var arrObj = _.chunk(['apel', 'mangga', 'jeruk', 'durian'], 3);
console.log(arrObj);

//mengambil 2 data dan 
//mengambil 3 data dari depan