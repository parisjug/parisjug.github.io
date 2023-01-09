const speakers = [
    {
        name: "Christophe Agoero",
        avatar: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
        contact: "@c_agoero",
        title: "19h30 : 204VS404 le duel du bon code http"
    },
    {
        name: "Pierre Cheucle",
        avatar: "/img/yb-pierre.gif",
        contact: "",
        title: "21h20 : Tech Lead REX"
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
