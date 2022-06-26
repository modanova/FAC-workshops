// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

// x ======================= o
// |      Edge-cases         |
// |    -- leap year --      |
// |      Challenge 2        |
// o ======================= x

function isLeapYear(year) {
  if(year % 400 == 0) {
    return true;
  }
  if(year % 4 == 0 && year % 100 != 0 && year > 0) {
    return true;
  }
  console.error('Not a leap year!');
}

test("Leap year 2020 should be true", () => {
    let result = isLeapYear(2020);
    equal(result, true)
})

test("Leap year divisible by 100 should be false", () => {
  let result = isLeapYear(200);
  equal(result, undefined)
})

test("Leap year divisible by 400 should be true", () => {
  let result = isLeapYear(1600);
  equal(result, true)
})

// Curious fact
// Years in the Western calendar are ostensibly counted from the birth of Jesus Christ, but the idea of doing so started in the sixth century and our current calendar is based on calculations made in the sixteenth century. Since Roman numerals had no representation of zero nor of negative numbers, years were either counted "after Jesus" (AD, for anno domini) or "before Jesus" (BC, for "before Christ"). Thus, traditionally, 1 BC was followed by AD 1, with no year zero between.
//
test("Leap year 1101 should be false", () => {
    let result = isLeapYear(1101);
    equal(result, undefined)
})

test("Leap year negative should be false", () => {
    let result = isLeapYear(-20);
    equal(result, undefined)
})

test("Leap year 0", () => {
  let result = isLeapYear(0);
  equal(result, undefined)
})

test("Leap year number as a string", () => {
  let result = isLeapYear('12');
  equal(result, true)
})

test("Leap year any other string", () => {
  let result = isLeapYear('Hello');
  equal(result, undefined)
})

test("Leap year boolean", () => {
  let result = isLeapYear(true);
  equal(result, undefined)
})

