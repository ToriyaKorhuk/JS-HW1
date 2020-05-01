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
  document.getElementById("box").style.display = "none";

  this.innerHTML= document.getElementById("one", "two").style.display = "flex";
  flexbox.innerHTML += '<div id="flexbox"> Что-то';
  document.getElementById("flexbox").style.backgroundColor = "pink";



 
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