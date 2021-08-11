$(document).ready(function(){
  $('#loginAluno').submit(function(evento){
    var usuario = $('#inputUsuario').val()
    var senha = $('#inputSenha').val()
    if(usuario == 'root' && senha == '1234'){
      $('#mensagem').addClass("alert alert-success alert-dismissible fade show")
      $('#mensagem').removeClass('alert-warning')
      $('#mensagem').text("usuario logado").show().fadeOut(3000)
    } else {
      $('#mensagem').addClass("alert alert-warning alert-dismissible fade show")
      $('#mensagem').removeClass('alert-success')
      $('#mensagem').text("usuario ou senha invalida").show().fadeOut(3000)
      evento.preventDefault() // bloqueia o evento de submit

    }
  })
})