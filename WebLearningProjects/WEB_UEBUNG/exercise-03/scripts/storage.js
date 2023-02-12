
//TODO 2: Create ImageStorage class with methods saveImages() and clear()

const IMAGE_DATA = "IMAGE_DATA"; 
class ImageStorage {
    saveImages(images) {
        window.localStorage.setItem(IMAGE_DATA, JSON.stringify(images));
    }
    clear() {
        window.localStorage.removeItem(IMAGE_DATA);
    }
    loadImages() {
        let data = window.localStorage.getItem(IMAGE_DATA);
        if(data == undefined){
            data = []; 
        } else {
            try {
                data = JSON.parse(data);
            } catch (error) {
                console.warn(e);
                data = [];
            }    


        }
        return data; 
    }

    loadImageById(id) {
        const items = this.loadImages(); 
        // for (let i = 0; i < item.length; i++) {
        //     const item = items[i]     
        // }
        for(const item of items){
            if(item.id === id){
                return item; 
            }
        }
        return undefined; // optional default return value is undefined
    }   
}

//TODO 5: Implement loadImages() & loadImageById() methods

//TODO 8: Implement incrementImageLikes() method