# WDP3 exercise 09: DnD support and GeoLocation

## Tasks

Download project structure (starter package) from E-Learning. Open files in a text editor and the browser.

## Implement Drag and Drop for image upload

```
window.onload = () => {
  ...
  enableDnDSupport();  <-- call new init function
  renderGallery();
};


function enableDnDSupport() {

  const dropArea = document.querySelector(".js-drag-area");
  const dragText = dropArea.querySelector(".js-drag-text");

  dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent = "Release Image";
  });

  dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent = "Drag image or select text";
  });

  dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    dropArea.classList.remove("active");
    dragText.textContent = "Drag image or select text";

    const fileInput = document.getElementById("imageInput");
    fileInput.files = event.dataTransfer.files;
  });

}

```


## Include Position information to image upload

Implement fetch position function

```
function fetchPosition(callback) {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      callback({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      });
    }, err => {
      console.error(err);
      callback(undefined);
    });
  } else {
    // browser don't support geolocation api
    callback(undefined);
  }
}
```

Call fetchPosition method, before storing image data to webstorage

```
 fetchPosition(position => {
    convertImageToAscii(file, canvas, (result) => {
      storage.saveImage({
        ...
        position: position
      });

      renderGallery();
    });
  });
```

Update render function, that the location link is included

```
 for (const item of items) {

    let locationHtml = '';
    if (item.position) {
      locationHtml = `<a href="https://www.google.com/maps/place/${item.position.latitude },${item.position.longitude}"
                        target="_blank">show location</a>`;
    }

    html += `...
              <span class="user-name">${item.username}</span>
              <span class="upload-time">(${timestampToString(item.createdAt)}) </span>
              ${locationHtml}                  <---------------- add line
            </div>
           ...`;
  }
```

Open Chrome Dev Tools and show the change location feature. Open 'Sensors' tool and override the current position


## Helpful resources

- [Drag & Drop MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

