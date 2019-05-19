const repeatedSubstringPattern = str => {
  if (str === null || str.length === 0) {
    return false;
  }

  const ss = (str + str).substring(1, str.length * 2 - 1);
  return ss.indexOf(str) > -1;
};

console.log(repeatedSubstringPattern('ab'));
