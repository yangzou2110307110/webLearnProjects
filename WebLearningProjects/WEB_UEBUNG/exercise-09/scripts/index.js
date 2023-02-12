const storage = new ImageStorage();

function renderGallery() {
  const gallery = document.getElementById("gallery");
  const items = storage.loadImages();

  if (items.length < 1) {
    gallery.innerHTML = "<p>No image data available</p>";
    return;
  }

  let html = "<ul>";

  for (const item of items) {

    let location = ""; 
    if(item.position) {
      location = `<a href="https://www.google.com/maps/place/${item.position.latitude },${item.position.longitude}"
                  target="_blank">show location</a>`;
    }


    html += `<li data-index-number="${item.id}">
            <pre></pre>
            <div class="meta-data">
              <span class="user-name">${item.username}</span>
              <span class="upload-time">(${timestampToString(item.createdAt)}) </span>
              ${location}
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

function uploadImage(event) {
  event.preventDefault();

  const username = document.getElementById("username");
  const fileInput = document.querySelector('input[type="file"');
  const canvas = document.getElementById("preview");
  
  const file = fileInput.files.item(0);
  const name = username.value;
  
  username.value = "";
  fileInput.value = "";
  
  fetchPosition(
    (posistion) => {
      convertImageToAscii(file, canvas, (result) => {
        storage.saveImage({
          id: calculateUID(),
          image: result,
          username: name,
          likes: 0,
          createdAt: new Date().getTime(),
          position: posistion
        });
    
        renderGallery();
      });
    }
  ); // fetchPosition


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

  document.getElementById("uploadImageForm").onsubmit = uploadImage;


  enableDnDSupport(); // call new init function
  renderGallery(); 
};

function enableDnDSupport() {

  // const dropArea = document.getElementsByClassName("js-drag-area")[0]; 
  const dropArea = document.querySelector(".js-drag-area");
  const dropText = document.querySelector(".js-drag-text");


  dropArea.ondrop = event => {
    event.preventDefault(); 

    const imageInput = document.getElementById("imageInput");
    imageInput.files = event.dataTransfer.files;

    // console.log(event.dataTransfer); 

    dropArea.classList.remove("active");
    dropText.textContent = "Drag image or select file";
  };

  dropArea.ondragover = event => {
    event.preventDefault();

    dropArea.classList.add("active");
    dropText.textContent = "Release Image";

  }; 

  dropArea.ondragleave = event => {
    
    dropArea.classList.remove("active");
    dropText.textContent = "Drag image or select file";

  };

}


function fetchPosition(callback) {

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(pos);
        callback({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      }, 

      (err) => {
        console.log(err);
        callback(undefined);
      }
    );


  } else {
    callback(undefined); 
  }


}