function pasanganTerbesar(num) {
    var stringNum = String(num); //6
    var tampung = "";
    var angkaString = "0";
    for(var i=0; i < stringNum.length-1; i++){ // 5 stringNum[i](6,4,1,5,7) + stringNum[i+1](4,1,5,7,3) = 64, 41, 15, 57, 73
        tampung = stringNum[i]+stringNum[i+1];
        if(tampung >= angkaString){
            angkaString = tampung;
            var angkaNum = Number(angkaString)
        }
    }
    return angkaNum;
}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
