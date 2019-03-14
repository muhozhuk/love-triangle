/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var i = 1,
    black_list = [],
    count = 0;
  preferences.unshift(0);
  while (i <= preferences.length) {
    if (preferences[i] != i || preferences[preferences[i]] != preferences[i] || preferences[preferences[preferences[i]]] != preferences[preferences[i]]) {
      if (black_list.indexOf(preferences[i]) == "-1") {
        if (i == preferences[preferences[preferences[i]]]) {
          black_list.push(preferences[i]);
          black_list.push(preferences[preferences[i]]);
          black_list.push(preferences[preferences[preferences[i]]]);
          count++;
        }
      }
      i++;
    } else {
      i++;
    }
  }
  return count;
};
