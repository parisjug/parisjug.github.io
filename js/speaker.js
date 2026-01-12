const speakers = [
    {
        name: "Amal Chaieb",
        title: "Software Engineer | Performance Testing Specialist",
        contact: "",
        avatar: "https://ui-avatars.com/api/?name=Amal+Chaieb&size=200&background=a30000&color=fff"
    },
    {
        name: "Sreenu Doosari",
        title: "Senior Software Engineer | Spring & AI Enthusiast",
        contact: "",
        avatar: "https://ui-avatars.com/api/?name=Sreenu+Doosari&size=200&background=a30000&color=fff"
    },
    {
        name: "Chloé Delphis",
        title: "Software Engineer | Security & Vulnerability Management",
        contact: "",
        avatar: "https://ui-avatars.com/api/?name=Chloe+Delphis&size=200&background=a30000&color=fff"
    },
    {
        name: "Marc Lecanu",
        title: "Software Developer | Clean Code Advocate",
        contact: "",
        avatar: "https://ui-avatars.com/api/?name=Marc+Lecanu&size=200&background=a30000&color=fff"
    },
    {
        name: "Christelle Prut",
        title: "Software Engineer | Agile Coach & Coding Dojo Facilitator",
        contact: "",
        avatar: "https://ui-avatars.com/api/?name=Christelle+Prut&size=200&background=a30000&color=fff"
    },
    {
        name: "Latfi Ghassane",
        title: "Software Engineer | Kotlin Developer | AI Engineer",
        contact: "",
        avatar: "https://ui-avatars.com/api/?name=Latfi+Ghassane&size=200&background=a30000&color=fff"
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
