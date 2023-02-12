// TODO 3: window.onload, demo data button listener -> DevTools
// TODO 3.1: support cleaning storage

const storage = new ImageStorage();

// window.addEventListener("load", function(){})

window.onload = function(){
    const loadBtn = document.getElementById("loadDemoDataButton");
    const clearBtn = document.getElementById("clearStorageButton");

    console.log(loadBtn);
    console.log(clearBtn);

    loadBtn.onclick = function(){
        console.log("loadBtn clicked");
        storage.saveImages(demoData); // demodata.js
        renderGallery();
    }

    clearBtn.onclick = function(){
        console.log("clearBtn clicked");
        storage.clear();
        renderGallery();
    }

    renderGallery();

}


// TODO 4: implement renderGallery() function

function renderGallery(){

    const items = storage.loadImages();
    let html; 
    if(items.length < 1){
        html = "<p>No images in storage</p>";
    } else {
        html = "<ul>";
        for(const item of items){
            html += `<li data-index-number="${item.id}">
                        <pre></pre>
                        <div class="meta-data">
                            <span class="user-name">${item.username}</span>
                            <span class="upload-time">${timestampToString(item.createdAt)}</span>
                        </div>
                        <button>
                            ${item.likes} likes
                        </button>
                     </li>`;
        }
        html += "</ul>";
    }

    const gallery = document.getElementById("gallery");
    gallery.innerHTML = html; // parse html -> add tree as child element 

    const elems = document.querySelectorAll("[data-index-number]");
    if(elems){
        for(const elem of elems){
            const id = Number(elem.dataset.indexNumber);  
            const data = storage.loadImageById(id);

            const pre = elem.getElementsByTagName("pre")[0];
            pre.textContent = data.image; 
        }
    }
 
}


// TODO 7: add "like" feature