const wordSearch = (letters, word) => {
  if (letters.length === 0) 
    return undefined;
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }

  const verticalArray = [];
  for (let i = 0; i < letters[0].length; i++) {
    const row = [];
    for (let j = 0; j < letters.length; j++) {
      row.push(letters[j][i]);
    }
    verticalArray.push(row);
  }

  const verticalJoin = verticalArray.map(vs => vs.join(''));
  for (v of verticalJoin) {
    if (v.includes(word))
      return true;
  }
  return false;
};

module.exports = wordSearch;