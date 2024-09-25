const speakers = [
    {
        name: "Sun Tan",
        title: "Super developer at Sciam",
        contact: "@__sunix_",
        avatar: "https://pbs.twimg.com/profile_images/1640301246123761664/aVIYwE4b_400x400.jpg"
    },
    {
        name: "Charles Sabourdin",
        title: "Super great developer at Sciam",
        contact: "@kanedafromparis",
        avatar: "https://pbs.twimg.com/profile_images/852073008772648960/OHbbEu8Y_400x400.jpg"
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
