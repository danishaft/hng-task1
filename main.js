import './style.css'
const time = document.getElementById('time')
const day = document.getElementById('day')
console.log(time, day)

function getCurrentUTCTime(){
  const currentUTCtime = new Date().getTime()
  time.innerText = currentUTCtime

  getCurrentDayOfTheWeek()
}
function getCurrentDayOfTheWeek(){
  let days = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let currentDayOfTheWeek = new Date().getDay()
  day.innerText = days[currentDayOfTheWeek]
}
setInterval(getCurrentUTCTime, 1000)
