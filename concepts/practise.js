// Practising objects
person={
  name:"TJ",
  age:23,
  county:"Kisii"
}

function logData(){
  string= person.name + " is " + person.age + " years old and lives in " + person.county + ".";
  console.log(string);
}

logData();

// for loop 
let largeCountries = ["China", "India", "USA", "Russia", "Pakistan"];
console.log("The largest countries are:")
for (let x = 0; x < largeCountries.length; ++ x){
  console.log(largeCountries[x]);
}

largeCountries.pop();
largeCountries.push("Norway");
largeCountries.shift("China");
largeCountries.unshift("Congo");