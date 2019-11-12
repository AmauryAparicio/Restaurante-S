/* ----------Lightbox---------- */
(function () {
  /* ----------Propiedades---------- */
  var propLightbox = {
    imgContainer: document.getElementsByClassName('lightbox'),
    imagen: null,
    imagenSrc: null,
    cuerpoDom: document.getElementsByTagName('body')[0],
    lightbox_container: null,
    modal: null,
    cerrarModal: null,
    animacion: 'fade'
  };
  /* ----------Metodos---------- */
  var metLightbox = {
    inicio: function () {
      for (var i = 0; i < propLightbox.imgContainer.length; i++) {
        propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen);
      }
    },
    capturaImagen: function(){
      propLightbox.imagen = this;
      metLightbox.lightbox(propLightbox.imagen);
    },
    lightbox: function(imagen) {
      propLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);
      propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
      propLightbox.lightbox_container = document.getElementById('lightbox_container');
      propLightbox.lightbox_container.style.width = '100%';
      propLightbox.lightbox_container.style.height = '100%';
      propLightbox.lightbox_container.style.position = 'fixed';
      propLightbox.lightbox_container.style.zIndex = '1000';
      propLightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
      propLightbox.lightbox_container.style.top = '0';
      propLightbox.lightbox_container.style.left = '0';
      propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
      propLightbox.modal = document.getElementById('modal');
      propLightbox.modal.style.height = '100%';
      propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imagenSrc);
      propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal');
      if (propLightbox.animacion == 'fade') {
        document.getElementsByClassName('imagen-modal')[0].style.opacity =0;
        setTimeout(function(){
          document.getElementsByClassName('imagen-modal')[0].style.opacity = 1;
        }, 50);
      }
      propLightbox.modal.innerHTML += '<i id="cerrar_modal" class="fa fa-times" aria-hidden="true"></i>';
      propLightbox.cerrarModal = document.getElementById('cerrar_modal');
      propLightbox.cerrarModal.addEventListener('click', metLightbox.cerrarModal);
    },
    cerrarModal: function () {
      propLightbox.cuerpoDom.removeChild(propLightbox.lightbox_container);
    }
  };
  metLightbox.inicio();

}());
/* ----------Slider---------- */
(function () {
  /* ----------Propiedades---------- */
  var propSlider = {
    slider: document.getElementById('slider'),
    primerSlide: null
  };
  /* ----------Metodos---------- */
  var metSlider = {
    inicio: function () {
      setInterval(metSlider.moverSlide, 3000);
    },
    moverSlide:function () {
      propSlider.slider.style.transition = 'all 1s ease';
      propSlider.slider.style.marginLeft = '-100%';
      setTimeout(function () {
        propSlider.primerSlide = propSlider.slider.firstElementChild;
        propSlider.slider.appendChild(propSlider.primerSlide);
        propSlider.slider.style.transition = 'unset';
        propSlider.slider.style.marginLeft = '0';
      }, 1000);
    }
  };
  metSlider.inicio();
}());
/* ----------Tabs---------- */
(function () {
  /* ----------Propiedades---------- */
  var propTabs = {
    primer_encabezado: document.getElementById('encabezado_menu').firstElementChild,
    primer_contenido: document.getElementById('contenido_menu').firstElementChild,
    enlaces_encabezado: document.querySelectorAll('#encabezado_menu li a'),
    li_encabezado: document.querySelectorAll('#encabezado_menu li'),
    divs_contenido: document.querySelectorAll('#contenido_menu > div'),
    contenido_activo: null
  };
  /* ----------Metodos---------- */
  var metTabs = {
    inicio: function () {
      propTabs.primer_encabezado.className = 'active';
      propTabs.primer_contenido.className = 'active';
      for (var i = 0; i < propTabs.enlaces_encabezado.length; i++) {
        propTabs.enlaces_encabezado[i].addEventListener('click', metTabs.evento);
      }
    },
    evento: function (e) {
      e.preventDefault();
      for (var i = 0; i < propTabs.li_encabezado.length; i++) {
        propTabs.li_encabezado[i].className = '';
      }
      for (var x = 0; x < propTabs.divs_contenido.length; x++) {
        propTabs.divs_contenido[x].className = '';
      }
      this.parentElement.className = 'active';
      propTabs.contenido_activo = this.getAttribute('href');
      document.querySelector(propTabs.contenido_activo).className = 'active';
      document.querySelector(propTabs.contenido_activo).style.opacity = 0;
      setTimeout(function () {
        document.querySelector(propTabs.contenido_activo).style.opacity = 1;
      }, 100);
    }
  };
  metTabs.inicio();
}());
/* ----------Parallax---------- */
(function () {
  /* ----------Propiedades----------*/
  var propParallax = {
    seccion: document.querySelector('.parallax'),
    recorrido: null,
    limite: null
  };
  /* ----------Metodos---------- */
  var metParallax = {
    inicio: function () {
      window.addEventListener('scroll', metParallax.scrollParallax);
    },
    scrollParallax: function () {
      propParallax.recorrido = window.pageYOffset;
      propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;
      if (propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite) {
        propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + 'px';
      } else {
        propParallax.seccion.style.backgroundPositionY = 0;
      }
    }
  };
  metParallax.inicio();
}());
/* ----------Formulario---------- */
(function () {
  /* ----------Propiedades---------- */
  var propFormulario = {
    formulario: document.formulario_contacto,
    elementos: document.formulario_contacto.elements,
    error: null,
    textoError: null
  };
  /* ----------Metodos---------- */
  var metFormulario = {
    inicio: function () {
      for (var i = 0; i < propFormulario.elementos.length; i++) {
        if (propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' || propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea') {
          propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput);
          propFormulario.elementos[i].addEventListener('blur', metFormulario.blurInput);
        }
      }
      propFormulario.formulario.addEventListener('submit', metFormulario.validarInputs);
    },
    focusInput: function () {
      this.parentElement.children[1].className = 'label active';
    },
    blurInput: function () {
      if (this.value == '') {
        this.parentElement.children[1].className = 'label';
      }
    },
    validarInputs: function (e) {
      for (var i = 0; i < propFormulario.elementos.length; i++) {
        if (propFormulario.elementos[i].value == '') {
          e.preventDefault();
          if (propFormulario.elementos[i].parentElement.children.length < 3) {
            propFormulario.error = document.createElement('p');
            propFormulario.textoError = document.createTextNode('Por favor llena el campo con tu ' + propFormulario.elementos[i].name);
            propFormulario.error.appendChild(propFormulario.textoError);
            propFormulario.error.className = 'error';
            propFormulario.elementos[i].parentElement.appendChild(propFormulario.error);
          }
        } else {
          if (propFormulario.elementos[i].parentElement.children.length >= 3) {
            propFormulario.error = propFormulario.elementos[i].parentElement.getElementsByTagName('p')[0];
            propFormulario.elementos[i].parentElement.removeChild(propFormulario.error);
          }
        }
      }
    }
  };
  metFormulario.inicio();
}());
/* ----------Scroll---------- */
(function () {
  /* ----------Propiedades---------- */
  var propScroll = {
    posicion: window.pageYOffset,
    scroll_suave: document.getElementsByClassName('scroll-suave'),
    volver_arriba: document.getElementsByClassName('volver-arriba'),
    destino: null,
    seccion_distancia: null,
    intervalo: null
  };
  /* ----------Metodos---------- */
  var metScroll = {
    inicio: function () {
      for (var i = 0; i < propScroll.scroll_suave.length; i++) {
        propScroll.scroll_suave[i].addEventListener('click', metScroll.moverse);
      }
      for (var x = 0; x < propScroll.volver_arriba.length; x++) {
        propScroll.volver_arriba[x].addEventListener('click', metScroll.subir);
      }
    },
    moverse: function (e) {
      e.preventDefault();
      clearInterval(propScroll.intervalo);
      propScroll.destino = this.getAttribute("href");
      propScroll.seccion_distancia = document.querySelector(propScroll.destino).offsetTop - 94;
      propScroll.posicion = window.pageYOffset;
      propScroll.intervalo = setInterval(function () {
        if (propScroll.posicion < propScroll.seccion_distancia) {
          propScroll.posicion += 30;
          if (propScroll.posicion >= propScroll.seccion_distancia) {
            clearInterval(propScroll.intervalo);
          }
        } else{
          propScroll.posicion -= 30;
          if (propScroll.posicion <= propScroll.seccion_distancia) {
            clearInterval(propScroll.intervalo);
          }
        }
        window.scrollTo(0, propScroll.posicion);
      }, 15);
    },
    subir: function (e) {
      e.preventDefault();
      clearInterval(propScroll.intervalo);
      propScroll.posicion = window.pageYOffset;
      propScroll.intervalo = setInterval(function () {
        if (propScroll.posicion > 0) {
          propScroll.posicion -= 30;
          if (propScroll.posicion <= 0) {
            clearInterval(propScroll.intervalo);
          }
        } else {
          return;
        }
        window.scrollTo(0, propScroll.posicion);
      }, 15);
    }
  };
  metScroll.inicio();
}());
/* ----------Menu Movil---------- */
(function () {
  /* ----------Propiedades---------- */
  var propMenu = {
    burguer_menu: document.getElementById('burguer_menu'),
    slideMenu: document.getElementById('slideMenu'),
    menu_activo: false,
    elem_menu: document.querySelectorAll('#slideMenu .menu-principal a')
  };
  /* ----------Metodos---------- */
  var metMenu = {
    inicio: function () {
      propMenu.burguer_menu.addEventListener('click', metMenu.toggleMenu);
      for (var i = 0; i < propMenu.elem_menu.length; i++) {
        propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
      }
    },
    toggleMenu: function () {
      if (propMenu.menu_activo == false) {
        propMenu.menu_activo = true;
        propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';
      } else {
        propMenu.menu_activo = false;
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
      }
    },
    ocultarMenu: function () {
      propMenu.menu_activo = false;
      propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
    }
  };
  metMenu.inicio();
}());
