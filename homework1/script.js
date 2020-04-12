document.getElementById('mybutton').onclick = function() {
    window.location.href = 'https://www.google.by';
  };

  document.getElementById("elem").addEventListener("click",
  function() {
    document.getElementById("elem").style.backgroundColor = "red";
    document.getElementById("box").style.backgroundColor = "pink";

  }
);


document.getElementById('flex').onclick = function() {
    
    this.innerHTML = '<div class="container" id="box"style=display:"flex"; style="background-color: yellow;" style="width:50%" >';
    document.ElementById("box").style.display = none;

 
 };

/*температура*/
 var term = {
    Canada: 10,
    Germany: 3,
    Spain: 22,
    Belarus: 15,
    
    };

function sumTerm(){
    var sum = 0;
    for (var temperature of Object.values(term)){
        sum += temperature;
    }
    return resultterm = sum / Object.keys(term).length;
}
 
 alert('Средняя температура воздуха составляет :'+sumTerm(term) + '°C ' +  'Have a nice day;)');
 console.log('Средняя температура  воздуха составляет :'+sumTerm(term)+ '°C');


 function getMaxOfArray(term) {
     var term = Object.values(term);
    return max = Math.max.apply(null, term);
  }  
  console.log('Максимальная температура воздуха составила :' + getMaxOfArray(term) + '°C');