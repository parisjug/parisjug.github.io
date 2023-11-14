const speakers = [
    {
        name: "Jean-François James",
        avatar: "https://pbs.twimg.com/profile_images/1201869350107566081/zcZed08W_400x400.jpg",
        contact: "@jefrajames",
        title: "Software Architect, Distinguished Expert at Worldline"
    },
    {
        name: "David Pequegnot",
        avatar: "https://pbs.twimg.com/profile_images/960495789008146432/nLFmC1um_400x400.jpg",
        contact: "@foxlegend",
        title: "Performance Engineer chez Wordline"
    },
    {
        name: "François Joubaud",
        title: "Dev leader chez Worldline"
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
