const speakers = [
    {
        name: "Laurent Doguin",
        avatar: "https://pbs.twimg.com/profile_images/1538156561880727553/jDE6dtaQ_400x400.jpg",
        contact: "@ldoguin",
        title: "Director Developer Relations & Strategy @couchbase"
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
