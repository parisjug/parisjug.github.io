const speakers = [
    {
        name: "Julien Dubois",
        avatar: "https://pbs.twimg.com/profile_images/729555955030044673/jBxOqmsB_400x400.jpg",
        contact: "@juliendubois",
        title: "Cloud Developer Advocate, Microsoft"
    },
    {
        name: "Jean-Francois James",
        avatar: "https://pbs.twimg.com/profile_images/1201869350107566081/zcZed08W_400x400.jpg",
        contact: "@jefrajames",
        title: "Senior Software Architect, Worldline"
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
