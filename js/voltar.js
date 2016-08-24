window.onscroll = function(){
   var top = window.pageYOffset || document.documentElement.scrollTop
   if( top < 600 ) {
       console.log('Maior que 300');
       document.getElementById("botaotopo").style.opacity = "0";
   }
   else{
   		document.getElementById("botaotopo").style.opacity = "1";
   }

}