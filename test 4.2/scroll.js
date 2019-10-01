window.onscroll = function(){
  docScroll();
}

function docScroll (){
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop,
      documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
   scrolled = (windowScroll / documentHeight) * 100;

   document.getElementById('myBar').style.width = scrolled + '%';
}

function chpok(id){
    elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
    state = elem.style.display; //смотрим, включен ли сейчас элемент
    if (state =='') elem.style.display='none'; //если включен, то выключаем
    else elem.style.display=''; //иначе - включаем
}
