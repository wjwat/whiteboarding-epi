const unique = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      count += 1;
      if (s[i] === s[j]) {
        console.log(count);
        return false;
      }
    }
  }
  console.log(count);
  return true;
};

const uniqueWJ = (s) => {
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      count += 1;
      if (s[i] === s[j]) {
        console.log(count);
        return false;
      }
    }
  }
  console.log(count);
  return true;
};

const unique3 = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count ++;
    if (s.lastIndexOf(s[i]) !== i) {
      console.log(count);
      return false
    }
  }
  console.log(count);
  return true
};

const VALUES = 'abcdefghijklmnopqrstuvwxyz';

unique(VALUES);
uniqueWJ(VALUES);
unique3(VALUES);