const speakers = [
    {
        name: "Mazlum Tosun",
        avatar: "https://pbs.twimg.com/profile_images/1706329431768260608/IguGoNQJ_400x400.jpg",
        contact: "@MazlumTosun3",
        title: "CoFounder Head of Cloud GroupBees"
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
