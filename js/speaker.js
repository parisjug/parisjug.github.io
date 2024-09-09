const speakers = [
    {
        name: "Simon Ritter",
        title: "Deputy CTO at @AzulSystems",
        contact: "@speakjava",
        avatar: "https://pbs.twimg.com/profile_images/1526915578253934592/P2LxtdAr_400x400.jpg"
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
