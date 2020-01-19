const contentContainer = document.querySelector(".contentContainer");

fetch(
  "https://old.reddit.com/r/AnimalsBeingJerks/top.json?sort=top&t=${timeQuery}&limit=30"
)
  .then(response => response.json())
  .then(json => {
    console.log(json.data.children);
    json.data.children.forEach(post => {
      const { id, url, is_video } = post.data;
      console.log(id);
      console.log(url);
      console.log(is_video);

      if (!is_video) {
        const img = document.createElement("img");
        img.src = url;
        contentContainer.appendChild(img);
      }
    });
  });
