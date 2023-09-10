 `use strict`
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime; //it will print on html page

`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);


const formatter = new Intl.RelativeTimeFormat('en');

// Caged Time
const diff = new Date() - new Date('9/3/2023');

const x = formatter.format(-diff, 'days')

const formatDuration = ms => {
    if (ms < 0) ms = -ms;
    const time = {
        day: Math.floor(ms / 86400000),
        hour: Math.floor(ms / 3600000) % 24,
        minute: Math.floor(ms / 60000) % 60,
        second: Math.floor(ms / 1000) % 60
    };


    return Object.entries(time).filter(val => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ')
};


const formattedSring = formatDuration(diff);
console.log(formattedSring)
document.getElementById("timer").innerHTML = formattedSring

// Caged True/Fasle
var caged = false;

if(caged==true){
document.getElementById("cage").innerHTML = "caged"
}
else{
document.getElementById("cage").innerHTML = "uncaged"
}


