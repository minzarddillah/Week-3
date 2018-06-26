function targetTerdekat(arr) {
    // you can only write your code here!
    var indexO = arr.indexOf('o')
    var jarak = 0
    var arrLength = arr.length

    if (arr.indexOf("x") === -1) {
      return 0
    }
    
    for (var i = 0; i < arr.length; i++) {
      console.log(i + ' var i')
      if (arr[i] === "x") {
        jarak = i - indexO // 5-2=3
        if (jarak === -6){
          return 1
        }
        if (jarak < arrLength) {
          arrLength = jarak
        }
      }
    }
    
    return arrLength
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
