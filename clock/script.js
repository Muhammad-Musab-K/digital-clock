let a = new Date
let f = a.getDay()
let days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
let day = document.getElementById('day') 
for(let i=0;i<days.length;i++){
if(f === i){
    day.innerHTML = days[i]
}
}
let date = document.getElementById("date")
let hours = document.getElementById("hours")
let minute = document.getElementById("minute")
let sec = document.getElementById("sec")

setInterval(()=>{
    let d = new Date()
    hours.innerHTML = d.getHours()
    minute.innerHTML = d.getMinutes()
    sec.innerHTML = d.getSeconds()
    date.innerHTML = d.getDate()
},1000)