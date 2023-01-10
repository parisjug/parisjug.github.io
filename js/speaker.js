const speakers = [
    {
        name: "Christophe Agoero",
        avatar: "/img/yb-christophe.png",
        contact: "19h30 : http delete 204vs404 quand la ressource n'existe pas",
        title: "@c_agoero"
    },
    {
        name: "Hicham Bellahcene",
        avatar: "https://pbs.twimg.com/profile_images/1490013462881357827/Vv_J66Kg_400x400.png",
        contact: "19h50 : Using lambda with Java Streams",
        title: "@hbellahc"
    },
    {
        name: "Coline Therial",
        avatar: "/img/yb-coline.jpg",
        contact: "20h10 : Faire du web ou du mobile ? Et pourquoi pas les deux !",
        title: ""
    },
    {
        name: "Martin Pernollet",
        avatar: "/img/yb-martin.jpg",
        contact: "21h00 : Avenir du rendu 3D sur la JVM avec Panama (JEP-412)",
        title: ""
    },
    {
        name: "Pierre Cheucle",
        avatar: "/img/yb-pierre.gif",
        contact: "21h20 : Tech Lead REX",
        title: ""
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
