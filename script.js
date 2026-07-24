// ===============================
// blyytz Website Settings
// ===============================


// Discord copy button
function copyDiscord() {
    navigator.clipboard.writeText(".blyytz");
    alert("Discord copied: .blyytz");
}


// ===============================
// YouTube Subscriber Counter
// ===============================

// Replace this with your NEW YouTube API key
const API_KEY = "AIzaSyA7AsfLxuRL5cB5OCGcVFwA8viMBsY0dXY";

// Replace this with your YouTube Channel ID
const CHANNEL_ID = "UCXDKCpPYYtxhb2r_MDbNFsg";


async function getSubscribers() {

    try {

        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );

        const data = await response.json();

        const subscribers =
            data.items[0].statistics.subscriberCount;


        document.getElementById("subscriberCount").innerHTML =
            Number(subscribers).toLocaleString() + " Subscribers";


    } catch (error) {

        document.getElementById("subscriberCount").innerHTML =
            "Unable to load";

    }

}


// Run counter
getSubscribers();