const speakers = [
    {
        name: "Amal Chaieb",
        title: "Test Automation Engineer at Letreco (Equisign)",
        contact: "",
        avatar: "https://media.licdn.com/dms/image/v2/D4D03AQG1sZiFw8ILvw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724083578437?e=1769644800&v=beta&t=gDs40ZMkogTWEvSXW6XxvDyI-QPFaOm4eMN8-Iqd5Ok"
    },
    {
        name: "Sreenu Doosari",
        title: "Technical Lead Java / Spring Boot at Banque de France",
        contact: "",
        avatar: "https://media.licdn.com/dms/image/v2/C4E03AQHLYQuGTHC03Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1611866946222?e=1769644800&v=beta&t=hwQMXmflLclRqxRC2zQU85DDfsU-RR3ywvRcwAZOLz4"
    },
    {
        name: "Chloé Delphis",
        title: "Security Specialist at Letreco (Equisign)",
        contact: "",
        avatar: "https://media.licdn.com/dms/image/v2/D5603AQH5YytYCQnekw/profile-displayphoto-shrink_800_800/B56ZSUVwJPHwAc-/0/1737655518333?e=1769644800&v=beta&t=R26TH9CDlnBEEIuZpzKLsFNs57_2jQAQyM9VGvzZKio"
    },
    {
        name: "Marc Lecanu",
        title: "Software Engineer | Java & Angular Web Developer",
        contact: "",
        avatar: "https://media.licdn.com/dms/image/v2/D4E03AQGh1yYjcm7xvA/profile-displayphoto-shrink_800_800/B4EZUda458HMAc-/0/1739955343415?e=1769644800&v=beta&t=Z8ckdm42kyEq_lLYrcmIarqrCrRevpVG5-uZQXyTI40"
    },
    {
        name: "Christelle Prut",
        title: "Software Craftswoman / Developer",
        contact: "",
        avatar: "https://media.licdn.com/dms/image/v2/C5603AQGBZafPl6to5w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1589098433850?e=1769644800&v=beta&t=qQRBGqkbNJfZd3-SfZX8UnAEgysxbuE_ux198-8G9-M"
    },
    {
        name: "Latfi Ghassane",
        title: "Technical Lead & Software Architect",
        contact: "",
        avatar: "https://media.licdn.com/dms/image/v2/D5603AQFq3Pi9VXCTXA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730750860665?e=1769644800&v=beta&t=6lUTiG8HUEi65mtKLeALz9vmS_iHzAHexVYZ9wcXszE"
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
