const speakers = [
    {
        name: "Amal Chaieb",
        title: "Performance Testing Expert",
        contact: "",
        avatar: "https://github.com/identicons/amalchaieb.png"
    },
    {
        name: "Sreenu Doosari",
        title: "Spring AI Developer",
        contact: "",
        avatar: "https://github.com/identicons/sreenudoosari.png"
    },
    {
        name: "Chloé Delphis",
        title: "Security Specialist",
        contact: "",
        avatar: "https://github.com/identicons/chloedelphis.png"
    },
    {
        name: "Marc Lecanu",
        title: "Clean Code Advocate",
        contact: "",
        avatar: "https://github.com/identicons/marclecanu.png"
    },
    {
        name: "Christelle Prut",
        title: "Coding Dojo Facilitator",
        contact: "",
        avatar: "https://github.com/identicons/christelleprut.png"
    },
    {
        name: "Latfi Ghassane",
        title: "Kotlin & AI Specialist",
        contact: "",
        avatar: "https://github.com/identicons/latfighassane.png"
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
