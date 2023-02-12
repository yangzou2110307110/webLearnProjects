const storage = new ImageStorage();

function renderGallery() {
  const gallery = document.getElementById("gallery");
  const items = storage.loadImages();

  console.log(items);
  if (items.length < 1) {
    gallery.innerHTML = "<p>No image data available</p>";
    return;
  }

  let html = "<ul>";

  for (const item of items) {
    html += `<li data-index-number="${item.id}">
            <pre></pre>
            <div class="meta-data">
              <span class="user-name">${item.username}</span>
              <span class="upload-time">(${timestampToString(item.createdAt)}) </span>
            </div>
            <button> 
                ${item.likes} likes
            </button>
        </li>`;
  }

  html += "</ul>";
  gallery.innerHTML = html;

  const elems = document.querySelectorAll("[data-index-number]");
  if (elems) {
    for (const e of elems) {
      const idx = Number(e.dataset.indexNumber);
      const data = storage.loadImageById(idx);

      const pre = e.getElementsByTagName("pre")[0];
      pre.textContent = data.image;

      const btn = e.getElementsByTagName("button")[0]
      btn.onclick = likeImage;
    }
  }
}

function likeImage(event) {
  const listItem = event.target.parentElement;
  const idx = Number(listItem.dataset.indexNumber);
  storage.incrementImageLikes(idx);
  renderGallery();
}

window.onload = () => {

  document.getElementById("clearStorageButton").addEventListener("click", () => {
    console.log("Clear local storage");
    storage.clear();
    renderGallery();
  });

  document.getElementById("loadDemoDataButton").addEventListener("click", () => {
    console.log("Load Demo Data");

    storage.clear();
    storage.saveImages(demoData);
    renderGallery();
  });

  const imageForm = document.getElementById("uploadImageForm"); 
  imageForm.onsubmit = uploadImage;

  renderGallery();
};


function uploadImage(event) {
  event.preventDefault();

  const username = document.getElementById("username");
  const fileInput = document.getElementById("imageInput");

  const name = username.value;
  const file = fileInput.files.item(0); 

  username.value = ""; 
  fileInput.value = "";

  const canvas = document.getElementById("preview"); 
  convertImageToAscii(file, canvas, result => {
    //console.log("Ascii Image: ", result);
    storage.saveImage({
      id: calculateUID(), 
      image: result,
      username: name,
      likes: 0, 
      createdAt: new Date().getTime()
    }); 

    renderGallery();

  }); 

}