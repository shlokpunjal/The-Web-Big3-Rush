const devData = {
    name: "Shlok Punjal",
    title: "Web Developer",
    location: "India",
    bio: "Diploma student. Won a comp with pure CSS. Now learning JS and breaking things intentionally.",
    skills: ["HTML", "CSS", "JS"],
    links: {
        github: "https://github.com/shlokpunjal",
        linkedin: "https://www.linkedin.com/in/shlokpunjal/"
    }
}

const card = document.getElementById("card")

const buildCard = () => {
    card.innerHTML = `
        <div id = "card-header">
            <h1>${devData.name[0]}</h1>
            <h2>${devData.name}</h2>
            <p id = "metadata">${devData.title} · ${devData.location}</p>
        </div>
        <div id= "card-body">    
            <p id = "bio">${devData.bio}</p>
            <p id = "skills">${devData.skills.map(skill => `<span class = "skill">${skill}</span>`).join(" ")}</p>
            <hr>
            <a href = "${devData.links.github}" target="_blank">Github</a>
            <a href = "${devData.links.linkedin}" target="_blank">Linkedin</a>
        </div>
    `
}

buildCard()

const box = document.querySelector(".container")
const btn = document.querySelector("#btn")
const state = document.getElementById("State")

btn.addEventListener('click', function () {
    box.classList.toggle("highlighted")

    state.innerHTML = box.classList.contains("highlighted") ? "ON" : "OFF"
})