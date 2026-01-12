const speakers = [
    {
        name: "Amal Chaieb",
        title: "Software Engineer | Performance Testing Specialist",
        contact: "",
        avatar: "https://avatars.githubusercontent.com/u/amalchaieb?v=4"
    },
    {
        name: "Sreenu Doosari",
        title: "Senior Software Engineer | Spring & AI Enthusiast",
        contact: "",
        avatar: "https://avatars.githubusercontent.com/u/sreenudoosari?v=4"
    },
    {
        name: "Chloé Delphis",
        title: "Software Engineer | Security & Vulnerability Management",
        contact: "",
        avatar: "https://avatars.githubusercontent.com/u/chloedelphis?v=4"
    },
    {
        name: "Marc Lecanu",
        title: "Software Developer | Clean Code Advocate",
        contact: "",
        avatar: "https://avatars.githubusercontent.com/u/marclecanu?v=4"
    },
    {
        name: "Christelle Prut",
        title: "Software Engineer | Agile Coach & Coding Dojo Facilitator",
        contact: "",
        avatar: "https://avatars.githubusercontent.com/u/christelleprut?v=4"
    },
    {
        name: "Latfi Ghassane",
        title: "Software Engineer | Kotlin Developer | AI Engineer",
        contact: "",
        avatar: "https://avatars.githubusercontent.com/u/latfighassane?v=4"
    }
]

function loadSpeaker(speaker) {
    $('.avatar').attr('src', speaker.avatar);
    $('.name').text(speaker.name);
    $('.contact').text(speaker.contact);
    $('.title').html(speaker.title);
}

function getSpeakerFromLocation() {
    const hast = window.location.hash;
    const index = hast ? hast.substr(1) : 0;
    return speakers[index];
}

window.onload = function () {
    loadSpeaker(getSpeakerFromLocation());
}
