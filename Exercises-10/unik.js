function perkalianUnik(arr) {
    // contoh arr = 2, 4, 6
    var hasilPerkalian = 1; // berubah jadi 48 karena looping 2*4*6
    var hasilAkhir;
    var hasilUnik = [];
    
    for(var i = 0; i<arr.length; i++) {
      hasilPerkalian*=arr[i] // 2*4*6 = 48
    }
    for(var j = 0; j<arr.length; j++) {
      hasilAkhir = hasilPerkalian/arr[j] // 48/2 = 24, 48/4 = 12, 48/6 = 8
      hasilUnik.push(hasilAkhir) // push hasil 48 di bagi arr ke hasilUnik
    }
    return hasilUnik
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
