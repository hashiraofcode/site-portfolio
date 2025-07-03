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
    projectList.forEach((task)=> {
        createAProject(task);
    })
};