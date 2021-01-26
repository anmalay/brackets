module.exports = function check(str, bracketsConfig) {
  let count = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][0]) {
        count.push(str[i]);
        if (str[i] === bracketsConfig[j][1] && str[i] === count[count.length - 2]) {
          count = count.slice(0,-2);
        }
      } else if (str[i] === bracketsConfig[j][1]) {
        if (count[count.length - 1] !==  bracketsConfig[j][0]) return false;
        count.pop();
      }
    }
  }
  return count.length === 0;
}
