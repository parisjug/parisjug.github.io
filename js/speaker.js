const speakers = [
    {
        name: "Jean-Philippe Bempel",
        title: "Senior Software Engineer chez Datadog",
        contact: "@jpbempel.bsky.social",
        avatar: "https://pbs.twimg.com/profile_images/1019190216995811328/YARM51Fl_400x400.jpg"
    },
    {
        name: "William Montaz",
        title: "SRE chez Criteo",
        contact: "@willymontaz",
        avatar: "https://pbs.twimg.com/profile_images/535013706048864256/rkvDpOhg_400x400.jpeg"
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
