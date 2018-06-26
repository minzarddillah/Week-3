/*
Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter berupa array yang terdiri dari angka. 
Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika. 
Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. 
Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan [2, 4, 6, 9] bukanlah deret aritmatika 
karena tidak perbedaan selisih antar angka yang tidak konsisten.
*/
function tentukanDeretAritmatika(arr) {
    var a = arr.slice(-1).pop() - arr.slice(-2,-1).pop()    // variabel a adalah angka terakhir di kurang angka kedua terakhir
                                                            // contoh 1 arr = 1,2,3,4,5,6 maka var a = 6-5 berarti a = 1.
                                                            // contoh 2 arr = 2,4,6,12,24 maka var a = 24-12 berarti a = 12.
    for(var i = arr.length-1 ; i > 0 ; i--){
        if(a !== (arr[i] - arr[i-1])){                      // jika a tidak sama dengan arr[i] - arr[i-1]
            return false                                    // contoh 1 jika a yaitu 1 tidak samadengan (6,5,4,3,2 - 5,4,3,2,1)
        }                                                   // berarti a = 6-5 yaitu a = 1 && a = 5-4 yaitu a = 1 dan seterusnya
    }                                                       // karena sama berarti melewati perulangan dan lanjut ke return true
    return true
}
  
  // TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6]));   // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24]));    // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8]));         // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54]));       // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9]));   // false
  