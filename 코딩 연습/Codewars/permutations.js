// 왜 대체 순열, 조합은 해도해도 익숙해지지 않냐?
function permutations(string) {
  if (string.length <= 1) {
    return [string];
  }
  
  let finalPermutations = permutations(string.substring(1))
    .reduce((acc, p) => {
      let charList = p.split('');
      for (let i = 0; i <= charList.length; i++) {
        let newPermutation = charList.slice(0, i)
                              .concat([string[0]])
                              .concat(charList.slice(i))
                              .join('');
        if (!acc.includes(newPermutation)) {
          acc.push(newPermutation);
        } 
      }
      return acc;      
  },[]);
  return finalPermutations;
}

// clever
function permutations(str) {
  return (str.length <= 1) ? [str] :
          Array.from(new Set(
            str.split('')
              .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
              .reduce((r, x) => r.concat(x), [])
          ));
}