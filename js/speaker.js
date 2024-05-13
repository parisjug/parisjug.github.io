const speakers = [
    {
        name: "Ricken BAZOLO",
        avatar: "https://pbs.twimg.com/profile_images/1060715337551921162/--QkkMo8_400x400.jpg",
        contact: "@rickenbrice",
        title: "Technologue Java sénior"
    },
    {
        name: "Jean-François James",
        avatar: "https://pbs.twimg.com/profile_images/1201869350107566081/zcZed08W_400x400.jpg",
        contact: "@jefrajames",
        title: "Software Architect, Distinguished Expert at Worldline"
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
