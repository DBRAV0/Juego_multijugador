$(window).on('message', function(event) {
  var datoRecibido = event.originalEvent.data;

  console.log('Puntuacion: ', datoRecibido);
  $("#dato").text(datoRecibido.value);
});
