const speakers = [
    {
        name: "Greg Wilkins",
        title: "Founder of Jetty, CTO emeritus of Webtide",
        contact: "@jettyproject.bsky.social",
        avatar: "https://avatars.githubusercontent.com/gregw"
    },
    {
        name: "Ivar Grimstad",
        title: "Jakarta EE Developer Advocate at Eclipse Foundation",
        contact: "@theguywiththeduketattoo.com",
        avatar: "https://avatars.githubusercontent.com/ivargrimstad"
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
