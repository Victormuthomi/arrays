const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for  
 //for (i = 0; i < companies.length; i++) {
   //  console.log(companies[i]);
// }

//for each
//companies.forEach(function(company){
  //  console.log(company.name)
//});

//for
//let canDrink = [];

//for (let i = 0; i < ages.length; i++) {
  //  if (ages[i] >= 21) {
    //    canDrink.push(ages[i]);
   // }
//}

//console.log(canDrink);

//filter
//let canDrink = ages.filter(function(age) {
  //  if (age >= 21){
    //    return true;
    //}
//});
//const canDrink = ages.filter(age => age >=21);

//console.log(canDrink);

//const cantDrink = ages.filter(age => age <=21);
//console.log(cantDrink);


//filter the retail company 
//const retailCompanies = companies.filter(company  => company.category === 'retail');

//const retailCompanies = companies.filter(function(company) {
  //  if (company.category === 'Retail'){
    //    return true;
   // }
//});

//const retailCompanies = companies.filter(company => company.category === 'Retail');
//console.log(retailCompanies);

//all the companies that started in the 80s

//const oldCompanies = companies.filter(company => company.start >= 1980 && company.start <= 1989);
//console.log(oldCompanies);

//companies that lasted for more than 10 years 
//const oldCompanies = companies.filter(company => (company.end - company.start) >= 10);
//console.log(oldCompanies);

//map- filters and creates an new arrears 
//create array of company names
//const testMap = companies.map(function(company){
  //  return '${company.name} [${company.start} - ${company.end}]' ;
//});

//Using arrow function 
//const companyName = companies.map(company => company.category);
//const testMap = companies.map(company => '${company.name} [${company.start} - ${company.end}]');
//console.log(testMap);

//square each age
//const squareRootAge = ages.map(age => Math.sqrt(age));
//const squareAge = ages.map(age => age * 2);
//console.log(squareAge);

//const ageMap = ages
 // .map(age => Math.sqrt(age))
 // .map(age => age * 2)
 // .map(age => age / 2);

//console.log(ageMap);

//sort
//const sortedCompanies = companies.sort(function(c1,c2) {
//    if (c1.start > c2.start) {
    //    return 1;
  //  } else {
      //  return -1;
   // }
//});

//sort companies by start year
//const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
//console.log(sortedCompanies);

//sort ages
//
//const sortAge = ages.sort((a,b) => a-b);
//console.log(sortAge);

//reduce - can bes used to do alot by here we are adding the ages
//using long method
//let sumAge = 0;
//for (i =0; i < ages.length; i++){
  //  sumAge+= ages[i];
//}
//console.log(sumAge);
//reduce
//const sumAge = ages.reduce(function(total, age) {
  //  return total + age ;
//}, 0);
//console.log(sumAge);

//const sumAge = ages.reduce((total, age) => total + age, 0);
//console.log(sumAge);

//get total years for all companies 
//const totalYear = companies.reduce(function(total, company){
  //  return total + (company.end - company.start);
//},0);
//console.log(totalYear);

//const totalYear = companies.reduce((total, company) => 
//total + (company.end - company.start), 0);
//console.log(totalYear);

//combine methods 
const combined = ages
  .map(age => age *2)
  .filter(age => age >=40)
  .sort((a,b) => a-b )
  .reduce((a, b) => a + b);

console.log(combined);

