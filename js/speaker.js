const speakers = [
    {
        name: "Paul Le Guillou",
        title: "Evangéliste chez BforBank"
    },
    {
        name: "Hervé Letourneur",
        avatar: "https://meritis.fr/wp-content/uploads/2024/06/photo-herve-letourneredited-478x480.jpg.webp",
        title: "Développeur Java chez Meritis"
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
