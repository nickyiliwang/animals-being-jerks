const contentContainer = document.querySelector(".contentContainer");

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
