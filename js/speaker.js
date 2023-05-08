const speakers = [
    {
        name: "Sébastien Blanc",
        avatar: "https://pbs.twimg.com/profile_images/1588539610489126913/68Synunh_400x400.jpg",
        contact: "@sebi2706",
        title: "Staff Developer Advocate, Aiven"
    },
    {
        name: "Stéphane Philippart",
        avatar: "https://pbs.twimg.com/profile_images/1262830949143908354/Q-jPW2eH_400x400.png",
        contact: "@wildagsx",
        title: "DevRel, OVHcloud"
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
