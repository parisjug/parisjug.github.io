const speakers = [
    {
        name: "Christian Nader",
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQHHtp2c5EJmKg/profile-displayphoto-shrink_200_200/0/1517865125982?e=1646265600&v=beta&t=CsaV3hGZEa2lN0hq58_laRKgchJ6mso6ZohecPlL-j8",
        contact: "",
        title: "JavaCorp : HashiCorp stack + Java microservices"
    },
    {
        name: "Benoit Lacelle",
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQE4xlp31Q_D5Q/profile-displayphoto-shrink_200_200/0/1535312783745?e=1646265600&v=beta&t=wviVE1SIr1mcjHNFQ45unmeOQ9HXbYwgz_5Gv6lDsC0",
        contact: "",
        title: "CleanThat, un bot cleaner de code"
    },
    {
        name: "Seddiki Sonia",
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQE-WpLz-6xypA/profile-displayphoto-shrink_200_200/0/1639224617582?e=1646265600&v=beta&t=873hdCuQslg5_4SZsZSzKK8r2aaKA3qJzFs-5ADhZpI",
        contact: "",
        title: "Simplifiez vos revues de code avec le rebase interactif"
    },
    {
        name: "Loïc Hermann",
        avatar: "https://pbs.twimg.com/profile_images/1015920014199803904/3etSUUe7_400x400.jpg",
        contact: "@loichrn",
        title: "Les Java Array Lists ne sont pas magiques"
    }
]

function loadSpeaker(speaker) {
    $('.avatar').attr('src', speaker.avatar);
    $('.name').text(speaker.name);
    $('.contact').text(speaker.contact);
    $('.title').text(speaker.title);
}

function getSpeakerFromLocation() {
    const hast = window.location.hash;
    const index = hast ? hast.substr(1) : 0;
    return speakers[index];
}

window.onload = function () {
    loadSpeaker(getSpeakerFromLocation());
}
