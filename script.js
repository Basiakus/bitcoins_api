

var request = new XMLHttpRequest();
var coinsValue = document.getElementById('coinsValue');
var coinsValueDate = document.getElementById('coinsValueDate');
var url = 'https://apiv2.bitcoinaverage.com/convert/local?from=PLN&to=BTC&amount=100';

function getValueOfCoins() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    coinsValue.innerHTML = response.price;
    coinsValueDate.innerHTML = response.time;
  });
  xhr.send();
};

var button = document.getElementById('get-coins');
button.addEventListener('click', function(){
  getValueOfCoins();
});

