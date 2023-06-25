const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

function countUp() {
  const currentTime = new Date(Date.now() - startTime +elapsedTime );
  const h = String(currentTime.getHours()-9).padStart(1, '0');
  const m = String(currentTime.getMinutes()).padStart(1, '0');
  const s = String(currentTime.getSeconds()).padStart(1, '0');
  const ms = String(currentTime.getMilliseconds()).slice('0',1);
  timer.textContent = `${h}:${m}:${s}.${ms}`;

  timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }
 
  setButtonStateInitial(); 
  
  start.addEventListener('click', () => {
    setButtonStateRunning(); // 
    startTime = Date.now();
    countUp();
  });
  
   function setButtonStateInitial() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  }
  
  stop.addEventListener('click', () => {
    setButtonStateStopped(); // 
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
   console.log(elapsedTime);
  });
  
  
  function setButtonStateRunning() {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;

  }
 
  reset.addEventListener('click', () => {
    setButtonStateInitial(); // 
    timer.textContent = '0:0:0:0';
    elapsedTime = 0;
  });
  
 function setButtonStateStopped() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;

  }