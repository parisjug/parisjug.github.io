const speakers = [
    {
        name: "Jean-Christophe Sirot",
        title: "Staff engineer chez Decathlon",
        contact: "@sirot.org",
        avatar: "https://cdn.bsky.app/img/avatar/plain/did:plc:3n634emyl24rng73wrsrcqef/bafkreic7qle5gqsrjch6zb25x7nx3mmcbr2j3j4jf25o4l3zjcm2yul7qu@jpeg"
    },
    {
        name: "Bruce Bujon",
        title: "Senior Software Engineer chez Datadog",
        contact: "@hardcoding.fr",
        avatar: "https://cdn.bsky.app/img/avatar/plain/did:plc:unv2ly5becx5ykia5urtgdz4/bafkreigg3zv3ifian4hugilmdldoblnt5i37qqd226pmur3aqeyrobasl4@jpeg"
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
