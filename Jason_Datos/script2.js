$(window).on('message', function(event) {
  var datoRecibido = event.originalEvent.data;

  console.log('Simulación de envío de puntuación:', datoRecibido);
  $("#dato").text(datoRecibido.dato);
});

// $(window).on('message', function(event) {
//   var datoRecibido = event.originalEvent.data;

//   console.log('Datos:', datoRecibido);
//   $("#dato").text(datoRecibido);
// });