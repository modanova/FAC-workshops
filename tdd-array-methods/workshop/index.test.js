// testing map()

console.group('Testing map()');
test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 1);
});
console.groupEnd('Testing map()');

//testing filter()
console.group('Testing filter()');

test("filter() should return an array with the same number of elements", () => {
  const result = filter([1], (x) => x==1);
  equal(result.length, 1);
});

test("filter() should remove some elements if they don't pass the test", () => {
  const result = filter([1, 100], (x) => x > 1);
  equal(result[0], 100);
}) 

test("filter() should return an empty array if neigher element passes the test", () => {
  const result = filter([1, 0, -1], (x) => x > 1);
  equal(result[0], undefined);
}) 

console.groupEnd('Testing filter()');

// testing every()
console.group('Testing every()')

test("every() should return true/false", () => {
  const result = every([1, 2, 3], (x) => x);
  equal(result, true);
})

test("every() should execute a function on every element and return true/false ", () => {
  const result = every([1, 2, 3], (x) => x);
  equal(result, true);
})

test("every() should return false if even one element doesn't pass the test ", () => {
  const result = every([1, 2, 3], (x) => x > 0);
  equal(result, true);
})

test("every() should return false if all elements pass the test ", () => {
  const result = every([1, 2, 3, 0], (x) => x > 0);
  equal(result, false);
})

test("every() should return true if an array is empty", () => {
  const result = every([], (x) => x > 0);
  equal(result, true);
})

console.groupEnd('Testing filter()');

// testing some

console.group('Testing some()');

test("some() should return true/false", () => {
  const result = some([1, 2, 3], () => {});
  equal(result, false);
})

test("some() should execute a function on every element and return true/false ", () => {
  const result = some([1, 2, 3], (x) => x);
  equal(result, true);
})

test("some() should return true if even one element passes the test ", () => {
  const result = some([1, 2, 3], (x) => x > 2);
  equal(result, true);
})

test("some() should return false if even none of the elements pass the test ", () => {
  const result = some([1, 2, 3], (x) => x < 0);
  equal(result, false);
})

test("some() should return false for an empty array ", () => {
  const result = some([], (x) => x < 0);
  equal(result, false);
})

console.groupEnd('Testing some()');

// testing find

console.group('Testing find()');

test("find() should return an element from the array", () => {
  const result = find([1, 2, 3], (x) => x==1);
  equal(result, 1);
})

test("find() should return the first element from the array", () => {
  const result = find([1, 2, 3], (x) => x==1);
  equal(result, 1);
})

test("find() should execute a function on every element and return the first element", () => {
  const result = find([1, 2, 3], (x) => x==1);
  equal(result, 1);
})

test("find() should return the first element that meets the criteria in the callback", () => {
  const result = find([1, 2, 3], (x) => x==2);
  equal(result, 2);
})

test("find() should return -1 if none of the elements meet the ciretia", () => {
  const result = find([1, 2, 3], (x) => x==0);
  equal(result, -1);
})

test("find() should return the first element that meets the criteria in the callback from an array of strings", () => {
  const result = find(["Mama", "Papa", "Baby", "Nana", "Bruv", "Papa", "me"], (x) => x.length!=4);
  equal(result, "me");
})

console.groupEnd('Testing find()');


// testing reduce

console.group('Testing reduce()');

test("reduce() should return a value", () => {
  const result = reduce([1, 2, 3, 4], (x, y) => x + y);
  equal(result, 10);
})

test("reduce() should return the sum of all elements", () => {
  const result = reduce([1, 2, 3, 4], (x, y) => x + y);
  equal(result, 10);
})

test("reduce() should execute a function on every element", () => {
  const result = reduce([1, 2, 3, 4], (x, y) => x + y);
  equal(result, 10);
})

test("reduce() should execute add the elements together taking a callback certain criteria", () => {
  const result = reduce([1, 2, 3], (x, y) => x + y);
  equal(result, 6);
})

test("reduce() should execute takeaway the elements together taking a callback certain criteria", () => {
  const result = reduce([1, 2, 3], (x, y) => x - y);
  equal(result, -4);
})

test("reduce() should concatenate all strings element from an array and return as one combined string", () => {
  const result = reduce(["Live, ", "love, ", "laugh"], (x, y) => x + y);
  equal(result, "Live, love, laugh");
})

console.groupEnd('Testing reduce()');


// testing flat

test("flat() should take an array and return an array", () => {
  const result = flat([1, 2, 3], 1);
  equal(Array.isArray(result), true);
});

test("flat() should turn a nested array into a single-level array", () => {
  const result = flat([[[1]], [2], 3], 1);
  const expected = Array.isArray([1])
  equal(Array.isArray(result[0]), expected);
});

test("flat() should turn a nested array into a flat array", () => {
  const result = flat([[[1]], [2], 3], Infinity);
  const expected = !Array.isArray(1);
  equal(!Array.isArray(result[0]), expected);
});

test("flat() should turn a three-level nested array into a two-level nested array", () => {
  let result = flat([[[1, [2]], [3]], 4], 2);
  let expected = !Array.isArray(1);
  equal(!Array.isArray(result[0]), expected);
  
  result = flat([[[1, [2]], [3]], 4], 1);
  expected = !Array.isArray([1]);
  equal(!Array.isArray(result[0]), expected);
});

test("flat() should work with empty (nested) array ", () => {
  let result = flat([], Infinity);
  let expected = !Array.isArray(1);
  equal(!Array.isArray(result[0]), expected);

  result = flat([1, [[], 2], 3], Infinity);
  expected = !Array.isArray(1);
  equal(!Array.isArray(result[0]), expected);
});




