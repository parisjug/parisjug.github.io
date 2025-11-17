const speakers = [
    {
        name: "Cyrille Martraire",
        title: "CTO co-fondateur de la société Arolla",
        contact: "@cyriux",
        avatar: "https://pbs.twimg.com/profile_images/883397578330525698/O4L7ehw7_400x400.jpg"
    },
    {
        name: "Dorra Bartaguiz",
        title: "CTO d’Arolla",
        contact: "@DorraBartaguiz",
        avatar: "https://pbs.twimg.com/profile_images/1168814043924172800/tfbZpl_H_400x400.jpg"
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
