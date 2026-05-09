const devData = {
    name: "Shlok Punjal",
    title: "Web Developer",
    location: "India",
    bio: "Diploma student. Won a comp with pure CSS. Now learning JS and breaking things intentionally.",
    skills: [],
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
            <p id = "skills">
                ${devData.skills.map((skill,index) => 
                    `<span data-index="${index}" onclick="toggleSkill(${index})" 
                        class = "skill ${skill.status === 'mastered' ? 'mastered' : ''}" >
                    ${skill.name} · ${skill.status} <button class="del-btn" onclick="deleteSkill(${index})">X</button></span>`).join(" ")}
            </p>
            <div id = "add-skill">
                <input id = "skill-inp" type = "text" placeholder="Enter Skill">
                <button id = "add">+ Add</button>
            </div>
            <hr>
            <a href = "${devData.links.github}" target="_blank">Github</a>
            <a href = "${devData.links.linkedin}" target="_blank">Linkedin</a>
        </div>
    `
    
    const btn = document.querySelector("#add")

    btn.addEventListener('click', function () {
        addSkill()
    })
}

buildCard()

const addSkill = () => {
    const inp = document.querySelector("#skill-inp")
    const skill = inp.value

    devData.skills.push({name: skill, status: "learning"})

    buildCard()
    inp.value = ""
}

const toggleSkill = (index) => {
    if(devData.skills[index].status === "learning"){
        devData.skills[index].status = "mastered"
    }else{
        devData.skills[index].status = "learning"
    }
    buildCard()
}

const deleteSkill = (index) => {
    devData.skills.splice(index, 1)
    buildCard()
}