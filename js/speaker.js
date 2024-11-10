const speakers = [
    {
        name: "Jean-Michel Fayard",
        title: "Tech lead chez Sciam",
        contact: "",
        avatar: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa245d2d0-115c-4e81-aa2d-bad59df80288_1280x1280.jpeg"
    },
    {
        name: "Yassine Benabba",
        title: "DevRel @ Worldline",
        contact: "@yostane",
        avatar: "https://pbs.twimg.com/profile_images/1721472907153440768/XrZKlFuQ_400x400.jpg"
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
