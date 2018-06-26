// MENGGUNAKAN FOR
function palindrome(kata) {
  var numKata = kata.length; //katak = 5 length
  for(var i = numKata ; i === 1 ; i++){ // Jika i = banyaknya huruf && banyaknya huruf = 1
    return true // teruskan true
  }
  for(var j = kata[0] ; j === kata[numKata-1] ; j++){ // Jika j = huruf pertama && huruf terakhir = huruf pertama
    return palindrome(kata.slice(1, numKata -1)); // lakukan pemotongan huruf pertama dan terakhir 
  }
  return false
}

// MENGGUNAKAN ELSE-IF
function palindrome(kata) {
  var numKata = kata.length; //katak = 5 length
  if(numKata === 1){ // jika banyaknya huruf = 1
    return true // teruskan true
  }else if(kata[0] === kata[numKata-1]){ // dan jika huruf pertama = huruf terakhir 
    return palindrome(kata.slice(1, numKata -1)); // lakukan pemotongan huruf pertama dan terakhir
  }
  return false
}


console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

