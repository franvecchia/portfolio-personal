import { skills, projects } from "./data.js"

let cardSkills = document.getElementById('card-skills')
let cardProjects = document.getElementById('card-projects')

skills.map((x) => {
    cardSkills.innerHTML += `
        <div class="habilidad-box col-sm-12 col-md-1">
            <img src="${x.img}" alt="habilidad" class="habilidades-img" />
            <p class="habilidades-nombres">${x.name}</p>
        </div>
    `
})

projects.map((x) => {
    cardProjects.innerHTML += `
        <div class="repositorio-box">
            <img src="${x.img}" alt="proyecto" class="repositorio-img" />
            <p class="repositorio-titulos">${x.title}</p>
            <p class="repositorio-textos">${x.description}</p>
            <a class="ver-codigo" href="${x.code}" target="_blank" >Ver Código</a>
            ${x.page === "" ? ` ` : `<a class="ver-pagina" href="${x.page}" target="_blank">Ver Página</a>`}
        </div>
    `
})