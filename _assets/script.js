$(document).ready(function(){

  var greeting = 'bonjour' ;

  var x = 3;
  var y = 4;
  console.log(x * y);

  $('h1').click(function(){
    $('.world').css('display','block');
    console.log('click!');
  })

});
