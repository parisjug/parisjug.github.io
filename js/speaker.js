const speakers = [
    {
        name: "Alban Clevy",
        title: "développeur, chef de projet, responsable d’équipe, architecte, techlead",
        contact: "",
        avatar: "https://pbs.twimg.com/profile_images/1268663631413215235/VSq2QFAV_400x400.jpg"
    },
    {
        name: "Hervé Letourneur",
        title: "Practice Leader Java",
        contact: "",
        avatar: "https://pbs.twimg.com/profile_images/1268663631413215235/VSq2QFAV_400x400.jpg"
    }, 
    {
        name: "Christophe Agoero",
        title: "Architecte Java",
        contact: "",
        avatar: "https://www.parisjug.org/about/introduction/christophe-agoero.png"
    }, 
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
