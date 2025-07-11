 const projectList = [
    {
        name:"To Do List", 
        description:"Gerencie tarefas com praticidade. Design responsivo e funcional.",
        link:"https://dominatarefa.netlify.app/",
        img:"./assets/to-do-list-project.png",
        class: "animation-scale"
    },
    {
        name:"Blog Responsivo",
        description:"Layout adaptável para leitura fluida em qualquer dispositivo.",
        link:"https://thenewsdevblog.netlify.app/",
        img:"./assets/responsive-blogs.png",
        class: "animation-traslate"
    },
    {
        name: "Site da Microssoft",
        description: "Clone responsivo da Microsoft feito com HTML, CSS e JavaScript.",
        link:"https://layoutmicrossoft.netlify.app/",
        img:"./assets/microssoftLayout.png",
        class: "animation-traslate"
    },
    {
        name: "Jogo Jokenpô",
        description:"Jogo de Jokenpô com lógica em JavaScript e interface simples e responsiva.",
        link: "https://jokempogame.netlify.app/",
        img: "./assets/jokenpoGame.png",
        class: "animation-scale"
    },
 ];
 const languages = [
    {
        name: "HTML 5",
        img: "./assets/html-1.svg"
    },
      {
        name: "CSS 3",
        img: "./assets/css-3.svg"
    },
      {
        name: "JAVASCRIPT",
        img: "./assets/javascript-1.svg"
    },
      {
        name: "TAILWIND",
        img: "./assets/tailwind-css-2.svg"
    },
      {
        name: "BOOTSTRAP",
        img: "./assets/bootstrap-5-1.svg"
    },
      {
        name: "GIT AND GITHUB",
        img: "./assets/github-icon-2.svg"
    },
 ]
 // const que cria os cards das linguages que sei;
 const cardsLanguages = (arrayLanguages) => {
    const containerCards = document.querySelector(".container-languages-cards")
    const card = document.createElement("div");
    card.classList.add("card-languages");
    const containerImg = document.createElement("div");
    containerImg.classList.add("container-img-languages");
    const img = document.createElement("img");
    const title = document.createElement("h4");

    img.src = arrayLanguages.img;
    img.alt = arrayLanguages.name;
    containerImg.appendChild(img);
    title.textContent = arrayLanguages.name;
    card.appendChild(containerImg);
    card.appendChild(title);
    containerCards.appendChild(card);
};
 // função que envia menssagem do usuário;
 const getMessage = (event) => {
     event.preventDefault();
     const nameArea = document.getElementById("name");
     const messageArea = document.getElementById("menssage-area");
     const nameValue = nameArea.value;
     const messageValue = messageArea.value;
     const text = `Olá me chamo ${nameValue}, \n ${messageValue}`;
     const textFormated = encodeURIComponent(text);
     // facilitar a manutebilidade do número de telefone caso necessário;
     const contato = 5514988110406;
     const url = `https://wa.me/${contato}?text=${textFormated}`
     window.open(url,"_blank");
 }
 // função que troca o src do video bg de acordo com o tamanho da tela
 const trocarBg = () => {
    const source = document.getElementById("source");
    const displayWidth = window.innerWidth;
    if (displayWidth <= 768) {
        source.src = "https://archive.org/download/video-bg-mobile/video-bg-mobile.ia.mp4";
    } else {
        source.src = "https://archive.org/download/video-bg-desktop/video-bg-desktop.ia.mp4";
    }
 }
 // função que constroi os cards;
const createAProject = (arrayProjects) => {
    //itens 
    const img = document.createElement("img");
    const wrapperImg = document.createElement("div");
    const title = document.createElement("h3")
    const description = document.createElement("p");
    const link = document.createElement("a");
    const wrapperContent = document.createElement("div");
    
    img.src = arrayProjects.img;
    img.classList.add(arrayProjects.class);
    img.alt = arrayProjects.name;   
    wrapperImg.appendChild(img);
    wrapperImg.classList.add("img-cards-container");
    description.textContent = arrayProjects.description;
    title.textContent = arrayProjects.name;
    link.href = arrayProjects.link;
    link.target = "blank";
    link.textContent = "Visite o Projeto"
    link.ariaLabel = `Visite o meu projeot ${arrayProjects.name}`;
    wrapperContent.appendChild(wrapperImg);
    wrapperContent.appendChild(title);
    wrapperContent.appendChild(description);
    wrapperContent.appendChild(link);
    wrapperContent.classList.add("card-project");
    document.getElementById("cards-projects-container")
    .appendChild(wrapperContent);
}



window.onload = () => {
    // impedi o comportamento padrão do Form e pe;
    document.getElementById("form").addEventListener("submit",getMessage)
    const submitButton = document.getElementById("contact-button");
    submitButton.addEventListener("click", getMessage);
    // função que troca o video bg do inicio de acordo com o dispositivo;
    trocarBg();
    // renderiza os projetos;
    projectList.forEach((projects)=> {
        createAProject(projects);
    })
    languages.forEach((cardInformation) => {
        cardsLanguages(cardInformation);
    })
};