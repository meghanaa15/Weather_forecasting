const input = document.getElementById('ipt');
const button = document.getElementById('btn');
const present = document.getElementById('current day');

const API_KEY = "d481c0aeba3c80d66cb77ecf4f99d228";
const cardids = ["demo1","demo2","demo3","demo4"];


button.addEventListener("click",async()=>{
    const city = input.value.trim();
    console.log("working");
    console.log(city);

if(city ===""){
    alert("Please enter a place name");
    return;
}


const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
const jsondata = await data.json();
console.log(jsondata);

const today = jsondata.list[0];

present.innerHTML = `
<h3>${jsondata.city.name}</h3>
      <p>(${today.dt_txt})</p>
      <p> Temperature: ${today.main.temp} °C</p>
      <p>Weather: ${today.weather[0].description}</p>
      <p> Humidity: ${today.main.humidity}%</p>
`;

for (let i = 0; i < 4; i++) {
    const forecast = jsondata.list[(i+1)*8];
    const card = document.getElementById(cardids[i]);

card.innerHTML = `
      <p>(${forecast.dt_txt.split(" ")[0]})</p>
      <p> Temperature: ${forecast.main.temp} °C</p>
      <p>Weather: ${forecast.weather[0].description}</p>
      <p> Humidity: ${forecast.main.humidity}%</p>
`;
}   
});