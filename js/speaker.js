const speakers = [
    {
        name: "Christophe Agoero",
        avatar: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
        contact: "@c_agoero",
        title: "19h30 : 204VS404 le duel du bon code http"
    },
    {
        name: "Hicham Bellahcene",
        avatar: "https://pbs.twimg.com/profile_images/1490013462881357827/Vv_J66Kg_400x400.png",
        contact: "@hbellahc",
        title: "19h50 : Using lambda with Java Streams"
    },
    {
        name: "Coline Therial",
        avatar: "/img/yb-coline.jpg",
        contact: "",
        title: "20h10 : Faire du web ou du mobile ? Et pourquoi pas les deux !"
    },
    {
        name: "Martin Pernollet",
        avatar: "/img/yb-martin.jpg",
        contact: "",
        title: "21h00 : Avenir du rendu 3D sur la JVM avec Panama (JEP-412)"
    },
    {
        name: "Pierre Cheucle",
        avatar: "/img/yb-pierre.gif",
        contact: "",
        title: "21h20 : Tech Lead REX"
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
