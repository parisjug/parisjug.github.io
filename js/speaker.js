const speakers = [
    {
        name: "Martin Pernollet",
        avatar: "https://pbs.twimg.com/profile_images/3728021699/2f77db7831b4e638a72de3bbb0a5d263_400x400.png",
        contact: "@jzy3d",
        title: "Ingénieur en visualisation de données scientifiques et mainteneur de Jzy3D"
    },
    {
        name: "Brice Dutheil",
        avatar: "https://pbs.twimg.com/profile_images/1128275334/blacksad_medium_400x400.jpg",
        contact: "@BriceDutheil",
        title: "Ingénieur logiciel chez Datadog"
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
