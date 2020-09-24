$(document).on("click", "#alerta", function() {
  navigator.notification.alert("Minha mensagem", null, "Aviso!", "Aceito");
});

$(document).on("click", "#confirmar", function() {
  function confirma(buttonIndex) {
    if(buttonIndex == 1) {
      navigator.notification.alert("Escolheu a opção B");
    }else{
      navigator.notification.alert("Escolheu a opção A");     
    }
  }
  navigator.notification.confirm("A ou B", confirma, "Escolha: ", ['B', 'A']);
});

$(document).on("click", "#notificar", function() {
  navigator.notification.beep(1);
});

$(document).on("click", "#vibrar", function() {
  navigator.vibrate(1000);
});

function mostraMapa(lat, long) {
  L.mapquest.key = 'ybliJHRjLaNpWqLLNi4n4sKAoDCSVflu';

  var map = L.mapquest.map('map', {
    center: [lat, long],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });

  map.addControl(L.mapquest.control());

}

$(document).on("click", "#local", function() {
  var onSuccess = function(position) {
    mostraMapa(position.coords.latitude, position.coords.longitude)
  };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});