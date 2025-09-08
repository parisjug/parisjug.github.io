const speakers = [
    {
        name: "Remi Forax",
        title: "Maitre de conférence à l’université Paris Est - Marne la Vallée - Gustave-Eiffel",
        contact: "",
        avatar: "https://fosdem.org/2025/schedule/speaker/remi_forax/adcb0189aa68cf220291bd196b4f7fb2999ddc5d73448c70e0340ac071329cb3.jpg"
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
