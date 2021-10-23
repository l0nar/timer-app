window.addEventListener('DOMContentLoaded', () => {

  const deadline = prompt('Put the date:', 'YYYY-MM-DD');

  function setTimeRemaining(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor( t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(( t / (1000 * 60 * 60 ) % 24)),
          minutes = Math.floor(( t / ( 1000 * 60 ) % 60)),
          seconds = Math.floor(( t / 1000 ) % 60);

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(deadline){
    
    let timer = document.querySelector('.timer'),
          day = timer.querySelector('#day'),
          hour = timer.querySelector('#hour'),
          minute = timer.querySelector('#minute'),
          second = timer.querySelector('#second'),
          doTimer = setInterval(runTimer, 1000);
          
    runTimer();

    function getZero(num){
      if ( num >= 0 && num < 10) {
        return `0${num}`;
      } else {
        return num;
      }
    }

    function runTimer(){
      let t = setTimeRemaining(deadline);

      day.textContent = getZero(t.days);
      hour.textContent = getZero(t.hours);
      minute.textContent = getZero(t.minutes);
      second.textContent = getZero(t.seconds);

      if ( t.total <= 0 ){
        clearInterval(doTimer);
      }

    }
  }

  setClock(deadline);

});