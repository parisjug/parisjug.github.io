const speakers = [
    {
        name: "Zineb Bendhiba",
        title: "Principal Software Engineer chez Red Hat",
        contact: "@zinebbendhiba.com",
        avatar: "https://cdn.bsky.app/img/avatar/plain/did:plc:7i5tlbxe74nfnuvzrvymap5m/bafkreihz2t6bllsd7zu7tfr3kuzcfscehd2wbukni7czgrfe36ccasq2kq@jpeg"
    },
    {
        name: "Salahddine Aberkan",
        title: "Solutions Architect chez Gitlab",
        contact: "",
        avatar: "https://media.licdn.com/dms/image/v2/D4E03AQGWjrcbrUOVlw/profile-displayphoto-shrink_800_800/B4EZUFjkcJHMAc-/0/1739554966623?e=1752710400&v=beta&t=-K7MBWNYD9JG01KBXajxEZBHFvHb_4lmgpZJuasKBIU"
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
