function map(array) {
  return array;
}

function filter(array, func) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    let keepEl = func(el);
    if (keepEl) {
      result.push(array[i]);
    }
  }
  return result;
}

function every(array, func) {
  for (let i = 0; i < array.length; i++) {
    let result = func(array[i]);
    if (!result) return false;
  }
  return true;
}

function some(array, func) {
  for (let i = 0; i < array.length; i++) {
    let el = func(array[i]);
    if (el) {
      return true;
    }
  }
  return false;
}

function find(array, func) {
  let indexOfNone = -1;
  for (let i = 0; i < array.length; i++) {
    let condition = func(array[i]);
    if (condition) {
      return array[i];
    }
  }
  return indexOfNone;
}

function reduce(array, func) {
  let acc = array[0];
  for (let i = 1; i < array.length; i++) {
    acc = func(acc, array[i]);
  }
  return acc;
}

const takeFlatEl = (el) => {
  let newArr = [];
  if (!Array.isArray(el)) {
    newArr.push(el);
  }
  return newArr;
};

const takeNestedEl = (elem) => {
  let newArr = [];
  if (Array.isArray(elem)) {
    for (el of elem) {
      newArr.push(takeFlatEl(el));
    }
  }
  return newArr;
};

const flat = (array, depth) => {
  let level = 1;
  let flat = [];
  flat.push(array);

  const flatOne = (arr) => {
    let flatArr = [];
    for (elem of arr) {
      // if elem is an array
      if (Array.isArray(elem)) {
        for (el of elem) {
          flatArr.push(el);
        }
      } else {
        // if flat
        flatArr.push(elem);
      }
    }
    return flatArr;
  };

  while (level < depth) {
    flat.push(flatOne(flat));
    level++;
  }
  return flat;
};
