window.addEventListener('scroll', function(){
  var header = document.querySelector('#header');
  const 
  if(window.scrollY > 100){
    header.classList.add('fixed')
  }else{
    header.classList.remove('fixed')
  }
 
})  

