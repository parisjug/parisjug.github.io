const speakers = [
    {
        name: "Rémi Forax",
        avatar: "https://pbs.twimg.com/profile_images/3723490094/0803d7111f1d20c57b30e2d88b0377ff_400x400.jpeg",
        contact: "@RemiForaxOff",
        title: ""
    }
]

function loadSpeaker(speaker) {
    $('.avatar').attr('src', speaker.avatar);
    $('.name').text(speaker.name);
    $('.contact').text(speaker.contact);
    $('.title').text(speaker.title);
}

function getSpeakerFromLocation() {
    const hast = window.location.hash;
    const index = hast ? hast.substr(1) : 0;
    return speakers[index];
}

window.onload = function () {
    loadSpeaker(getSpeakerFromLocation());
}