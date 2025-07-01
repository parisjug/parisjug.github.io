const speakers = [
    {
        name: "Youssef NAIT BELKACEM",
        title: "Lead tech @ Decathlon Digital",
        contact: "",
        avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFU9HYbl6B_xg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1675092265098?e=1756944000&v=beta&t=R7AyyR5bgNGhBe7KGWS-vPFA40iPeDAUwf3QrdTWItw"
    },
    {
        name: "Jean-Eudes Couignoux",
        title: "Leader technique chez Digipostee",
        contact: "",
        avatar: "https://media.licdn.com/dms/image/v2/C5603AQEdKV7K_8hk3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516972053647?e=1756944000&v=beta&t=CuX3j5DHzr2S5XjGDYi45no6zZGiNGqfuL_5ykfeKj8"
    },
    {
        name: "Ludovic Dubost",
        title: "Founder and CEO of XWiki SAS",
        contact: "framapiaf.org/@ldubost",
        avatar: "https://media.licdn.com/dms/image/v2/C4E03AQHVp9cB2Qho-Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516187646873?e=1756944000&v=beta&t=Iz54PgQZUYu_Bu077qIR9Xkyixlz_rrjwLGuEtHpQig"
    },
    {
        name: "Fabrice Mouhartem",
        title: "ingénieur R&D @ XWiki SAS",
        contact: "",
        avatar: "https://xwiki.com/fr/download/Blog/Fabrice-Mouhartem-ingenieur-R-D/WebHome/article%20Fabrice%20in%205%20things.webp"
    },
    {
        name: "Guillaume Laforge",
        title: "Developer Advocate for Google Cloud",
        contact: "@glaforge.dev",
        avatar: "https://media.licdn.com/dms/image/v2/D4E03AQGHi_QZO-xcuw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695718939279?e=1756944000&v=beta&t=ZLVcHauLRVrRliJCOSrflm4ewBiifTKURseo8zSs9H4"
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
