const speakers = [
    {
        name: "Sylvain Wallez",
        avatar: "https://pbs.twimg.com/profile_images/568183848706379776/-WvGr4jS_400x400.jpeg",
        contact: "@bluxte",
        title: "Lead developer chez Elastic"
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
