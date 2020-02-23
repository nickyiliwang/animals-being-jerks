// DOM Select
const videoContainer = document.querySelector(".videoContainer");

// firebase
const firebaseConfig = {
  apiKey: "AIzaSyAgafThYOjVfuXW2013wdwkA_IvuSuEkRE",
  authDomain: "animalsarejerks-808e2.firebaseapp.com",
  databaseURL: "https://animalsarejerks-808e2.firebaseio.com",
  projectId: "animalsarejerks-808e2",
  storageBucket: "animalsarejerks-808e2.appspot.com",
  messagingSenderId: "853121134194",
  appId: "1:853121134194:web:8bd8ba39979e96cbac5ceb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// global variable
let index = 0;
let currentlyDisplaying = ["video0", "video1"];

// api
fetch("https://old.reddit.com/r/AnimalsBeingJerks/top.json")
  .then(response => response.json())
  .then(json => {
    const videosOnly = json.data.children.filter(post => post.data.is_video);

    videosOnly.forEach(post => {
      const { thumbnail, id, title } = post.data;
      const videoUrl = post.data.media.reddit_video.fallback_url;
      const handleOnClick = e => {
        console.log(e.target.className);
        console.log(e.target.play());
      };

      if (videoUrl.endsWith("?source=fallback")) {
        const video = document.createElement("video");
        video.src = videoUrl;
        video.title = title;
        video.className = `videos video${index}`;
        video.controls = true;
        video.preload = "none";
        video.autoplay = false;
        video.poster = thumbnail;
        video.muted = true;
        video.nodeType = "video/mp4";
        video.onclick = handleOnClick;
        videoContainer.appendChild(video);
        index++;
      }
    });
  });

// database
const db = firebase.database();
const animalId = "1221122";

const addUserVote = () => {
  db.ref("animals/" + animalId).set({
    animal: "dog",
    animalId,
    url: "google.com"
  });
};
