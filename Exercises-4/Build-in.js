var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(input){
    
    input.push("SMA Internasional Metro");
    input.splice(1, 1, "Roman Alamsyah Elsharawy" );
    input.splice(2, 1, "Provinsi Bandar Lampung" );
    input.splice(4, 1, "Pria" );
    console.log(input);
    //console.log('')
    var tanggal = input[3].split('/');
    var bulan=tanggal[1];
    var numBulan = parseInt(bulan);


    switch(numBulan){
        case 01: bulan = 'Januari'; break;
        case 02: bulan = 'Februari'; break;
        case 03: bulan = 'Maret'; break;
        case 04: bulan = 'April'; break;
        case 05: bulan = 'Mei'; break;
        case 06: bulan = 'Juni'; break;
        case 07: bulan = 'Juli'; break;
        case 08: bulan = 'Agustus'; break;
        case 09: bulan = 'September'; break;
        case 10: bulan = 'Oktober'; break;
        case 11: bulan = 'November'; break;
        case 12: bulan = 'Desember'; break;
        
    }
  console.log(bulan)

  
  console.log(tanggal.sort(function(x, y) { return y - x })) // sort descending
  console.log(input[3].split('/').join('-')) // 21/05/1989 menghilangkan / menjadi '21' , '05' , '1989' da
  console.log(input[1].substring(0, 14))
}

dataHandling2(input)
