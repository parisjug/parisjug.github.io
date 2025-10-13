const speakers = [
    {
        name: "Nayel Ferai",
        title: "Co-fondateur de Flowlab",
        contact: "",
        avatar: "https://media.licdn.com/dms/image/v2/D4E03AQE1d5tDoauhlA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695636471485?e=1762992000&v=beta&t=bRrQgzURNwOKHOVboOXxvQeeFiEGJwrF2PS8Xhn9M2c"
    },
    {
        name: "Vincent Heuschling",
        title: "Fondateur de DataTask et du podcast BigDataHebdo",
        contact: "@vhe74",
        avatar: "https://media.licdn.com/dms/image/v2/C4E03AQGq9efo2bBgXQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516230536088?e=1762992000&v=beta&t=HsZAJeUC4lRkCn6OU7qdfMfTs-vgDZNw4GyAxYGhLnw"
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
