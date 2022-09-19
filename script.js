let btn = document.querySelector("button");
let input = document.querySelector("input");
let ciudad;


function cargarCiudad() {
    ciudad = input.value;
  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" + ciudad +"&appid=1a9b3670ada3ece0551373f7325e028d",
    function (data) {
      console.log(data);
      document.querySelector(".container").style.visibility = "visible";
      document.querySelector("#ciudad").textContent = data.name;
      document.querySelector("#temperatura").innerHTML = parseInt(data.main.temp - 273.15) + "<sup>°C</sup>";
      document.querySelector("#wicon").setAttribute("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");
      document.querySelector("#descripcion").innerHTML = data.weather[0].description;
    }
  ).fail(function(){
    alert("Ingrese un país existente")
  })

  input.value = "";
}

btn.addEventListener("click", cargarCiudad)