var Body = {
  setColor:function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
},
setBackgroundColor:function(color){
  //document.querySelector('body').style.backgroundColor = color;
  $('body').css('backgroundColor', color);
}
}
var Links = {
  setColor:function(color){
      // var alist = document.querySelectorAll('a');
      // var i = 0;
      // while(i<alist.length){
      //     console.log(alist[i]);
      //     alist[i].style.color = color;
      // i = i + 1; 반복문을 제이쿼리로 대체
      //}
      $('a').css('color', color);
    }
  }

function colormode(self){

if(self.value === 'dark mode'){
 Body.setBackgroundColor('black')
Body.setColor('white')
self.value = 'day';
Links.setColor('blue');
}
else{
Body.setBackgroundColor('white')
Body.setColor('black')
self.value = 'dark mode';
Links.setColor('powderblue');
}
}
