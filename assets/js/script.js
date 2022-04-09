$(function(){

    $("h5").dblclick(function(){
        $(this).toggleClass("text-danger");
    });

    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    });

    $('.card-title').on('click', function(){
        $('.card-text').toggle();
      })
      
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
