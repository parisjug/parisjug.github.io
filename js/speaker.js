const speakers = [
    {
        name: "Pejman Tabassomi",
        title: "Field CTO at Datadog",
        contact: "",
        avatar: "https://www.parisjug.org/img/speakers/pejman-tabassomi.jpg"
    },
    {
        name: "Bruce Bujon",
        title: "Senior Software Engineer at Datadog",
        contact: "",
        avatar: "https://www.parisjug.org/img/speakers/bruce-bujon.jpg"
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
