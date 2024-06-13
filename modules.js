const modes  = require('./people')

/* to access multiple things in one file, 
instead of instantiate 1 variable that requires the imported file,
you instantiate an object 
*/
const { people, ages } = require('./people')

// console.log(modes);
console.log(people, ages);
