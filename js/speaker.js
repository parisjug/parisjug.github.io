const speakers = [
    {
        name: "Mario Loriedo",
        title: "Senior Principal Software Engineer at Red Hat - CNCF Ambassador",
        contact: "@mariolet.bsky.social",
        avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFePnX7H9guMg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682678678752?e=1739404800&v=beta&t=D1krNzdzUIO2qYVj3UVzyhjBdtQJYXi0TU0JQVNvzkw"
    },
    {
        name: "Jeff MAURY",
        title: " ngineering Manager - Principal Software Engineer at Red Hat",
        contact: "@jeffmaury.bsky.social",
        avatar: "https://media.licdn.com/dms/image/v2/C4E03AQERuGvh0IDX-w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516197439100?e=1739404800&v=beta&t=WKgu7NOoybdw22RuQzM7apORltwLS3oWvrNIz-Z1E8M"
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
