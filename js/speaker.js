const speakers = [
    {
        name: "Amal Chaieb",
        title: "Speaker",
        contact: "",
        avatar: "https://avatars.githubusercontent.com/u/placeholder"
    },
    {
        name: "Sreenu Doosari",
        title: "Speaker",
        contact: "",
        avatar: "https://avatars.githubusercontent.com/u/placeholder"
    },
    {
        name: "Chloé Delphis",
        title: "Speaker",
        contact: "",
        avatar: "https://avatars.githubusercontent.com/u/placeholder"
    },
    {
        name: "Marc Lecanu",
        title: "Speaker",
        contact: "",
        avatar: "https://avatars.githubusercontent.com/u/placeholder"
    },
    {
        name: "Christelle Prut",
        title: "Speaker",
        contact: "",
        avatar: "https://avatars.githubusercontent.com/u/placeholder"
    },
    {
        name: "Latfi Ghassane",
        title: "Speaker",
        contact: "",
        avatar: "https://avatars.githubusercontent.com/u/placeholder"
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
