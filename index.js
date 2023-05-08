const promodoroTime = prompt('Enter your time here!')
let promodoroSeconds = promodoroTime * 60
const promodoroOutput = document.querySelector('.text')

const Countdown = () =>{
    promodoroOutput.innerHTML = promodoroTime
    const minutes = Math.floor(promodoroSeconds / 60)
    const seconds = promodoroSeconds % 60
    promodoroSeconds --
    if(promodoroSeconds > -1){
        promodoroOutput.innerHTML = `${minutes> 9 ? minutes:`0${minutes}`} : ${seconds > 9 ? seconds:`0${seconds}`}`
    }
    if(promodoroSeconds<= -1){
        promodoroOutput.innerHTML = "Time is Over!"
    }
   
}
setInterval(Countdown, 1000)