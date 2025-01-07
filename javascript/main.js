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