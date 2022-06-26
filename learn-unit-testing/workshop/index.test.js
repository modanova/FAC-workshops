// Writing testable code 

// x ======================= o
// |      Challenge 1        |
// o ======================= x

// test("Request for pokemon", () => {
//     let result = makeUrl("pikachu");
//     equal(result, `https://pokeapi.co/api/v2/pikachu`)
//   })

//   test("Request for pokemon", () => {
//     let result = makeUrl("chupachabra");
//     equal(result, `https://pokeapi.co/api/v2/chupachabra`)
//   })

//   test("Request for pokemon with empty string", () => {
//     let result = makeUrl("");
//     equal(result, `https://pokeapi.co/api/v2/`)
//   })


// x ======================= o
// |      Deep equality      |
// o ======================= x

// function searchParamsToObject(str) {
//     let arr = str.split('&').map(x => x.split('='));
//     let obj = {};
//     arr.forEach(element => obj[element[0]]=element[1]);
//     return obj;
// }


// test("String to object", () => {
//         let result = searchParamsToObject('name=oliver&email=hello@oliverjam.es').name;
//         equal(result, `oliver`)
// })

// test("String to object", () => {
//     let result = searchParamsToObject('name=oliver&email=hello@oliverjam.es').email;
//     equal(result, `hello@oliverjam.es`)
// })

// test("String to object", () => {
//     let result = searchParamsToObject('name=oliver&email=hello@oliverjam.es&favAnimal=horse&country=UK').favAnimal;
//     equal(result, `horse`)
// })

// test("String to object", () => {
//     let result = searchParamsToObject('name=oliver&email=hello@oliverjam.es&favAnimal=horse&country=UK').country;
//     equal(result, `UK`)
// })






