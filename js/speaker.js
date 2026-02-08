const speakers = [
    {
        name: "Pejman Tabassomi",
        title: "Field CTO at Datadog",
        contact: "",
        avatar: ""
    },
    {
        name: "Bruce Bujon",
        title: "Senior Software Engineer at Datadog",
        contact: "@hardcoding.fr",
        avatar: "https://www.parisjug.org/images/speakers/bruce-bujon_hu_45a6de3f16094c5f.jpg"
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
