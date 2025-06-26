 const projectList = [
    {
        name:"To Do List", 
        description:"Gerencie tarefas com praticidade. Design responsivo e funcional.",
        link:"https://dominatarefa.netlify.app/",
        img:"./assets/to-do-list-project.png"
    },
    {
        name:"Blog Responsivo",
        description:"Layout adaptável para leitura fluida em qualquer dispositivo.",
        link:"https://thenewsdevblog.netlify.app/",
        img:"./assets/responsive-blogs.png"
    },
 ];
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
    projectList.forEach((task)=> {
        createAProject(task);
    })
};