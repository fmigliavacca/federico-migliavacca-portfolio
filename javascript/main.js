let chosenPageProjects = [-1,-1,-1];

function openGmail() {
    const email = "federicomigliavaccait@gmail.com";
    const subject = "Hello";
    const body = "Hi Federico,\n\nWrite your message here.";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank"); // Abre Gmail en una nueva pestaña
}


function goImage(image){
    document.getElementById("imgProjects1").src = image;
}

function handlePaginationProjects(project, page){
    if(chosenPageProjects[project - 1] !== -1){
        const elementToRemove = document.getElementById("p"+project+chosenPageProjects[project-1]);
        
        elementToRemove.classList.remove('black-text');
    }
    const elementToAdd = document.getElementById("p"+project+page);

    chosenPageProjects[project-1] = page;

    elementToAdd.classList.add('black-text');
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.hidden-section');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
  
    sections.forEach(section => observer.observe(section));
  });

// Seleccionar elementos
const avatar = document.getElementById("avatar");
const container = document.getElementById("avatar-container");

// Agregar evento de clic
avatar.addEventListener("click", () => {
  // Ocultar la imagen
  avatar.style.display = "none";

  // Cambiar el ancho del contenedor
  container.style.width = "900px"; // Puedes poner cualquier valor aquí, en px o % (por ejemplo "80%")

  const mensajes = [
    "I'm Federico, a 20-year-old systems engineering student currently in my third year of university.",
    "I am a passionate full-stack developer with a strong interest in both front-end and back-end technologies.",
    "My journey in programming began at a young age, and I’ve honed my skills over the years by building various web and software applications.",
    "As a dedicated and curious learner, I thrive in environments that challenge me to innovate and grow.",
    "Nothing excites me more than taking on challenging projects that push the boundaries of what's possible, from developing seamless user interfaces to optimizing server-side architecture.",
    "My technical toolbox includes languages and frameworks such as JavaScript, React, Node.js, Python, and SQL,", "and I’m always eager to explore new tools and technologies that enhance my development capabilities.",
    "Beyond coding, I am passionate about problem-solving, collaboration, and bringing ideas to life.",
    "I enjoy working in teams and believe that collaboration is key to creating impactful solutions.",
    "My goal is to build scalable, user-friendly, and efficient systems that make a difference.",
    "Let's create something amazing together!"
  ];

  let index = 0;

  mensajes.forEach((texto, i) => {
    setTimeout(() => {
      const mensaje = document.createElement("h3");

      // Crear el efecto de tipado
      let charIndex = 0;
      mensaje.textContent = ""; // Empezar con el texto vacío
      container.appendChild(mensaje);

      // Para simular el tipado, añadimos un carácter cada cierto tiempo
      const typingInterval = setInterval(() => {
        mensaje.textContent += texto[charIndex]; // Añadir un carácter a la vez
        charIndex++;

        if (charIndex === texto.length) {
          clearInterval(typingInterval); // Detener el intervalo cuando todo el texto haya sido escrito
        }
      }, 20); // Escribe cada 50 ms (puedes ajustarlo según la velocidad deseada)

      mensaje.style.display = "block";
      mensaje.style.opacity = 0;
      mensaje.style.transition = "opacity 0.5s";

      // Hacer que el mensaje se vuelva visible después de que se haya escrito
      setTimeout(() => {
        mensaje.style.opacity = 1;
      }, 0);

      // Después de un tiempo, ocultar el mensaje
      if (texto !== "Let's create something amazing together!") {
        setTimeout(() => {
          mensaje.style.display = "none";
        }, 4900); // Ajuste del tiempo para ocultar el mensaje después de 4.9 segundos
      }
    }, index);

    index += 5000; // Intervalo de 5 segundos entre cada mensaje
  });
});


// Funcionalidad para copiar el email al portapapeles
document.getElementById('copy-email').addEventListener('click', () => {
  const emailText = document.getElementById('email').textContent;

  const tempInput = document.createElement('input');
  tempInput.value = emailText;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  alert('Email copied to clipboard!');
});

// Funcionalidad para enviar el formulario con EmailJS
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  if (name && message) {
    // Enviar el formulario usando EmailJS
    emailjs.sendForm('service_1cx69vu', 'template_xypqvx4', this)
      .then(function(response) {
        console.log('Success:', response);
        document.getElementById('form-feedback').textContent = 'Your message has been sent successfully!';
        document.getElementById('contact-form').reset();
      }, function(error) {
        console.log('Error:', error);
        document.getElementById('form-feedback').textContent = 'There was an error sending your message. Please try again.';
      });
  } else {
    document.getElementById('form-feedback').textContent = 'Please fill in all fields.';
  }
});

