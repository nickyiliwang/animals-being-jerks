const contentContainer = document.querySelector(".contentContainer");

// firebase
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgafThYOjVfuXW2013wdwkA_IvuSuEkRE",
  authDomain: "animalsarejerks-808e2.firebaseapp.com",
  databaseURL: "https://animalsarejerks-808e2.firebaseio.com",
  projectId: "animalsarejerks-808e2",
  storageBucket: "animalsarejerks-808e2.appspot.com",
  messagingSenderId: "853121134194",
  appId: "1:853121134194:web:8bd8ba39979e96cbac5ceb"
};

fetch(
  "https://old.reddit.com/r/AnimalsBeingJerks/top.json?sort=top&t=${timeQuery}&limit=50"
)
  .then(response => response.json())
  .then(json => {
    json.data.children.forEach(post => {
      const { id, url, is_video } = post.data;
      if (!is_video) {
        const img = document.createElement("img");
        img.src = url;
        contentContainer.appendChild(img);
      } else if (is_video) {
        const videoUrl = post.data.media.reddit_video.fallback_url;
        const video = document.createElement("video");
        video.src = videoUrl;
        video.autoplay = true;
        video.muted = true;
        video.nodeType = "video/mp4";
        contentContainer.appendChild(video);
      }
    });
  });

const writeData = () => {
  firebase
    .database()
    .ref("animals/" + animalId)
    .set({
      animal: "dog",
      animalId: "123abc",
      url: "google.com"
    });
};

writeData();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
