const speakers = [
    {
        name: "Cyrille Le Clerc",
        avatar: "https://pbs.twimg.com/profile_images/573071024217985025/dBAgYo9m_400x400.jpeg",
        contact: "@cyrilleleclerc",
        title: "Product Director, Grafana Labs"
    },
    {
        name: "Vincent Behar",
        avatar: "https://pbs.twimg.com/profile_images/1521029841755287553/2HFIfLMg_400x400.jpg",
        contact: "@vbehar",
        title: "Dev, Ubisoft"
    },
        {
        name: "Bruce Bujon",
        avatar: "https://pbs.twimg.com/profile_images/598846876851535872/kIuVtgMY_400x400.png",
        contact: "@HardCoding",
        title: "Software Engineer, Datadog"
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
