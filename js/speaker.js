const speakers = [
    {
        name: "Laurent Broudoux",
        avatar: "https://pbs.twimg.com/profile_images/893039638071320577/4YP9KXnZ_400x400.jpg",
        contact: "@lbroudoux",
        title: "Architecte, Microcks founder"
    },
    {
        name: "Rafik Ferroukh",
        avatar: "https://pbs.twimg.com/profile_images/1042305319718801408/0-q_KfA3_400x400.jpg",
        contact: "@rafikFerroukh",
        title: "Software Architect chez Allianz Technology France"
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
