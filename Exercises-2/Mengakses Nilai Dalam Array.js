function balikString(kata) 
{
  var balikKata  = ''
  for (var i = 0 ; i < kata.length ; i++) 
  {
    balikKata = kata[i] + balikKata 
  }
  return balikKata

}
console.log(balikString('hello world!')) // "!dlrow olleh"
