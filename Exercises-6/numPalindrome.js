function angkaPalindrome(num) {

  for(var i = 0 ; i < num ; i++){
    num++ // jika angka 12 outputnya LOOPING 13,14 s/d 22
    var stringNum = String(num); // Merubah angka menjadi string '13'
    var string = '';
    for(var j = (stringNum.length-1) ; j >= 0 ; j--){
      string = string + stringNum[j];
    }
    if(stringNum === string){
      return num;
    }
  }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
