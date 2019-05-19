const repeatedSubstringPattern = str => {
  if (str.length === 1) {
    return false;
  }
  for (let i = 0; i < str.length / 2; i++) {
    const pattern = str.substring(0, i + 1);
    if (checkForPattern(pattern, str)) {
      return true;
    }
  }

  return false;
};

const checkForPattern = (pattern, str) => {
  if (str.length === 0) {
    return true;
  }

  if (str.length < pattern.length) {
    return false;
  }

  return (
    str.substring(0, pattern.length) === pattern &&
    checkForPattern(pattern, str.substring(pattern.length))
  );
};

console.log(repeatedSubstringPattern('ab'));
