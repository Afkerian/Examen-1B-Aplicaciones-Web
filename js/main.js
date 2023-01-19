'use strict'
window.addEventListener('load', () => {

  // Menu Responsive
  const ham = document.querySelector('.ham');
  const enlaces = document.querySelector('nav ul');
  const barras = document.querySelectorAll('.ham span');

  ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado')
    barras.forEach(child => { child.classList.toggle('animado') });
  });

  //Slider Actions
  var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 60,
      y2: 45,
      x3: 15
    }
  };

  var carousel = document.querySelector('[data-carousel]');
  var slides = document.getElementsByClassName('carousel-cell');
  var flkty = new Flickity(carousel, options);

  flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
      var image = slides[i];
      var x = (slide.target + flkty.x) * -1 / 3;
      image.style.backgroundPosition = x + 'px';
    });
  });

  //Traer Datos de un JSON

  document.querySelector('#BotonInicio').addEventListener('click', DatosInicio);

  function DatosInicio() {
    $('.hero-slider').hide();
    $('.articulos').hide();
    
    $('.acordeon').hide();
    $('#Reloj').hide();
    $('#Contacto').hide();
    

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'js/catalogo.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {

      if (this.readyState == 4 && this.status == 200) {
        let datos = JSON.parse(this.responseText);
        let respuesta = document.querySelector('#respuesta');
        respuesta.innerHTML = '';

        for (let i of datos) {
          respuesta.innerHTML += `
                    <tr>
                    <td>${i.nombreColor}</td>
                    <td>${i.valorHexadec}</td>
                  </tr>
                  `
        }
      }
    }
  }
  //Cambios de temas

  document.getElementById('btn_tema1').addEventListener('click', tema1);
  function tema1() {
    document.body.style.background = "url('Images/fondo1.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    console.log("Cambiado a tema 1")
  }
  document.getElementById('btn_tema2').addEventListener('click', tema2);
  function tema2() {
    document.body.style.background = "url('Images/fondo2.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  }
  document.getElementById('btn_tema3').addEventListener('click', tema3);
  function tema3() {
    document.body.style.background = "url('Images/fondo3.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  }
  setTimeout(() => {
    document.body.style.background = "url('Images/fondo1.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  }, 0);


  // Acordeon 
  document.querySelector('#BotonAbout').addEventListener('click', Acordeon);
  function Acordeon() {
    $('.hero-slider').hide();
    $('.articulos').hide();
    $('#Reloj').hide();
    $('#Inicio').hide();
    $('#Contacto').hide();
    $(".acordeon").on("click", ".acordeon-cabecera", function () {
      $(this).toggleClass("active").next().slideToggle();
    });
  }

  //Reloj

  document.querySelector('#BotonReloj').addEventListener('click', digitalClock);
  const $tiempo = document.querySelector('.tiempo'),
    $fecha = document.querySelector('.fecha');

  function digitalClock() {
    $('.hero-slider').hide();
    $('.articulos').hide();
    $('.acordeon').hide();
    $('#Inicio').hide();
    $('#Contacto').hide();
    let f = new Date(),
      dia = f.getDate(),
      mes = f.getMonth() + 1,
      anio = f.getFullYear(),
      diaSemana = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2)

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    let semana = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let showSemana = (semana[diaSemana]);
    $fecha.innerHTML = `${anio}-${mes}-${dia} ${showSemana}`
  }

  // Validacion de Form
  document.querySelector('#BotonContacto').addEventListener('click', Contacto)
  const btnEnviar = document.getElementById('btn-enviar');

  function Contacto() {
    $('.hero-slider').hide();
    $('.articulos').hide();
    $('.acordeon').hide();
    $('#Inicio').hide();
    $('#Reloj').hide();
    const validación = (e) => {
      e.preventDefault();
      const nombreDeUsuario = document.getElementById('usuario');
      const direcciónEmail = document.getElementById('email');
      if (usuario.value === "") {
        alert("Por favor, escribe tu nombre de usuario.");
        usuario.focus();
        return false;
      }

      if (email.value === "") {
        alert("Por favor, escribe tu correo electrónico");
        email.focus();
        return false;
      }

      if (!emailVálido(email.value)) {
        alert("Por favor, escribe un correo electrónico válido");
        emailAddress.focus();
        return false;
      }

      return true; //Se pueden enviar los datos del formulario al servidor
    }

    const emailVálido = email => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    btnEnviar.addEventListener('click', validación);
  }

  //Procesamiento de datos url: https://rickandmortyapi.com/api/character/?page=3
  document.querySelector('#BotonAmigos').addEventListener('click', Amigos);
  function Amigos() {
    traer_amigos();
    $('.hero-slider').hide();
    $('.articulos').hide();
    $('.acordeon').hide();
    $('#Inicio').hide();
    $('#Reloj').hide();
    $('#Contacto').hide();
  }

});
