const skills = [
    {
        id: 1,
        name: "HTML",
        img: "../imagenes/iconos/habilidades/html.png"
    },
    {
        id: 2,
        name: "CSS",
        img: "../imagenes/iconos/habilidades/css-3.png"
    },
    {
        id: 3,
        name: "JavaScript",
        img: "../imagenes/iconos/habilidades/js.png"
    },
    {
        id: 4,
        name: "React.JS",
        img: "../imagenes/iconos/habilidades/react.png"
    },
    {
        id: 5,
        name: "Git",
        img: "../imagenes/iconos/habilidades/git.png"
    },
    {
        id: 6,
        name: "C++",
        img: "../imagenes/iconos/habilidades/C++.png"
    },
    {
        id: 7,
        name: "Java",
        img: "../imagenes/iconos/habilidades/java.png"
    },
    {
        id: 8,
        name: "Node.JS",
        img: "../imagenes/iconos/habilidades/nodejs.png"
    },
    {
        id: 1,
        name: "SQL",
        img: "../imagenes/iconos/habilidades/mysql.png"
    }
]

let card = document.getElementById('card')

skills.map((x) => {
    card.innerHTML += `
        <div class="habilidad-box col-sm-12 col-md-1">
              <img
                src="${x.img}"
                class="habilidades-img"
              />
              <p class="habilidades-nombres">${x.name}</p>
            </div>
    `
})