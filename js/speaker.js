let speakers = [];

function loadSpeaker(speaker) {
    $('.avatar').attr('src', speaker.avatar);
    $('.name').text(speaker.name);
    $('.contact').text(speaker.contact);
    $('.title').html(speaker.title);
}

function getSpeakerFromLocation() {
    const hash = window.location.hash;
    const index = hash ? hash.substr(1) : 0;
    return speakers[index];
}

function fetchSpeakerData() {
    fetch('event.json')
        .then(response => response.json())
        .then(data => {
            speakers = data.speakers || [];
            if (speakers.length > 0) {
                const speaker = getSpeakerFromLocation();
                if (speaker) {
                    loadSpeaker(speaker);
                }
            }
        })
        .catch(error => console.error('Error fetching the speaker data:', error));
}

window.onload = function () {
    fetchSpeakerData();
    // Refresh speaker data every 10 seconds to match other pages
    setInterval(fetchSpeakerData, 10000);
}
