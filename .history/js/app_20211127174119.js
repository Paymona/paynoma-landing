window.addEventListener('scroll', function(){
  var header = document.querySelector('#header');
  header.classList.toggle('fixed', window.scrollY > 100)  
  handleWindowScroll();
  setInterval(() => {
    animOnScroll()
  }, 500);
}) 

const handleWindowScroll = () => {
    const one = document.getElementById('one')
    const two = document.getElementById('two')
    const three = document.getElementById('three')
    const four = document.getElementById('four')
    const five = document.getElementById('five')
    const six = document.getElementById('six')
    const arrowBottom = document.getElementById('arrowBottom')
    const arrowTop = document.getElementById('arrowTop')
  

  if (window.scrollY +  window.innerHeight/2 < window.innerHeight*1){
    two.classList.remove('active')
    three.classList.remove('active')
    four.classList.remove('active')
    five.classList.remove('active')
    six.classList.remove('active')
    one.classList.add('active')

    arrowBottom.classList.add('active')
    arrowTop.classList.remove('active')
  }
  else if (window.scrollY + window.innerHeight/2 < window.innerHeight*2  ){
    one.classList.remove('active')
    three.classList.remove('active')
    four.classList.remove('active')
    five.classList.remove('active')
    six.classList.remove('active')

    arrowTop.classList.add('active')
    two.classList.add('active')

  }
  else if (window.scrollY + window.innerHeight/2 < window.innerHeight*3){
    one.classList.remove('active')
    two.classList.remove('active')
    four.classList.remove('active')
    five.classList.remove('active')
    six.classList.remove('active')
    three.classList.add('active')
  }

  arrowBottom.addEventListener('click', () =>{
    const next =  window.pageYOffset + window.innerHeight;
    window.scrollBy(next, next)
  })

}

const animItems = document.querySelectorAll('.anim-items')

if(animItems.length > 0){
  function animOnScroll(params){
    for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemsHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;
  
        let animItemPoint = window.innerHeight - animItemsHeight / animStart;
        if(animItemsHeight > window.innerHeight){
          animItemPoint = window.innerHeight - window.innerHeight / animStart
        }
        if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemPoint)){
          animItem.classList.add('_active')
        }else{
          animItem.classList.remove('_active')
        }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}

let marker = document.querySelector('#marker')
let li = document.querySelectorAll('ul li')

const indicator = e =>{
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
}

li.forEach(link => {
    link.addEventListener('click',(e) =>{
      indicator(e.target);
      
    })
});

const title =document.getElementById('title');
const cardTitle = document.querySelectorAll('.card-title');
const icons = document.querySelectorAll('.icon');
const cardDesc = document.querySelectorAll('.card-desc');

const DemandPrediction = () =>{
  title.innerHTML = 'Прогнозируйте спрос на товары с высокой точностью';
  title.innerHTML = 'Научились SQL? Теперь забудьте!'
  cardTitle[0].innerHTML = 'CustomerXP'; 
  cardTitle[1].innerHTML = 'Shops'; 
  cardTitle[2].innerHTML = 'Query'; 
  icons[0].src = '../images/customer.svg'
  icons[1].src = '../images/shops.svg' 
  icons[2].src = '../images/query.svg'
  cardDesc[0].innerHTML = 'Узнайте все о своих клиентах.'
  cardDesc[1].innerHTML = 'Управляйте всеми филиалами с одного окна.' 
  cardDesc[2].innerHTML = 'Автоматизируйте подготовку данных для анализа'
}

const CreditScoring = () =>{
  title.innerHTML = 'Выдавайте кредиты быстрее и увереннее';
  title.innerHTML = 'Научились SQL? Теперь забудьте!'
  cardTitle[0].innerHTML = 'CustomerXP'; 
  cardTitle[1].innerHTML = 'Shops'; 
  cardTitle[2].innerHTML = 'Query'; 
  icons[0].src = '../images/customer.svg'
  icons[1].src = '../images/shops.svg' 
  icons[2].src = '../images/query.svg'
  cardDesc[0].innerHTML = 'Узнайте все о своих клиентах.'
  cardDesc[1].innerHTML = 'Управляйте всеми филиалами с одного окна.' 
  cardDesc[2].innerHTML = 'Автоматизируйте подготовку данных для анализа'

}

const CustomerChurn = () =>{
  title.innerHTML = 'Узнайте какие клиенты от вас уйдут до того как они сами это поняли'
  cardTitle[0].innerHTML = 'CustomerXP'; 
  cardTitle[1].innerHTML = 'Shops'; 
  cardTitle[2].innerHTML = 'Query'; 
  icons[0].src = '../images/customer.svg'
  icons[1].src = '../images/shops.svg' 
  icons[2].src = '../images/query.svg'
  cardDesc[0].innerHTML = 'Узнайте все о своих клиентах.'
  cardDesc[1].innerHTML = 'Управляйте всеми филиалами с одного окна.' 
  cardDesc[2].innerHTML = 'Автоматизируйте подготовку данных для анализа'

}


const FastSQL = () =>{
  title.innerHTML = 'Научились SQL? Теперь забудьте!'
  cardTitle[0].innerHTML = 'NL2DB'; 
  cardTitle[1].innerHTML = 'Shops'; 
  cardTitle[2].innerHTML = 'Query'; 
  icons[0].src = '../images/NL2DB.svg'
  icons[1].src = '../images/visual.svg' 
  icons[2].src = '../images/insightas.svg'
  cardDesc[0].innerHTML = 'Узнайте все о своих клиентах.'
  cardDesc[1].innerHTML = 'Управляйте всеми филиалами с одного окна.' 
  cardDesc[2].innerHTML = 'Автоматизируйте подготовку данных для анализа'
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////


const PaymonaBI =() => {
  title.innerHTML = "Сбор и анализ огромных данных";
  cardTitle[0].innerHTML = 'CustomerXP'; 
  cardTitle[1].innerHTML = 'Shops'; 
  cardTitle[2].innerHTML = 'Query'; 
  icons[0].src = '../images/customer.svg'
  icons[1].src = '../images/shops.svg' 
  icons[2].src = '../images/query.svg'
  cardDesc[0].innerHTML = 'Узнайте все о своих клиентах.'
  cardDesc[1].innerHTML = 'Управляйте всеми филиалами с одного окна.' 
  cardDesc[2].innerHTML = 'Автоматизируйте подготовку данных для анализа'
  }

  PaymonaBI();