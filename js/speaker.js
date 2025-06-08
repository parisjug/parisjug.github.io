const speakers = [
    {
        name: "Louis Jacomet",
        title: "Senior Lead Software Engineer at Gradle Inc.",
        contact: "@ljacomet",
        avatar: "https://avatars.githubusercontent.com/u/135308?v=4"
    },
    {
        name: "Trisha Gee",
        title: "Developer Advocate @ Gradle",
        contact: "@trisha_gee",
        avatar: "https://pbs.twimg.com/profile_images/1804074546808356865/MpWpJPba_400x400.jpg"
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
