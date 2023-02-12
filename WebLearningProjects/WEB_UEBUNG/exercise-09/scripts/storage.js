const IMAGE_DATA = "IMAGE_DATA";

class ImageStorage {

    loadImages() {
        const st = window.localStorage;
        let data = st.getItem("IMAGE_DATA");
        if (data == undefined) {
            data = [];
        } else {
            try {
                data = JSON.parse(data);
            } catch (e) {
                console.warn(e);
                data = [];
                st.setItem(IMAGE_DATA, data);
            }
        }
        return data;
    }

    saveImages(images) {
        window.localStorage.setItem("IMAGE_DATA", JSON.stringify(images));
    }

    loadImageById(idx) {
        const items = this.loadImages();
        for (const item of items) {
            if (item.id === idx) {
                return item;
            }
        }
        return undefined;
    }

    incrementImageLikes(idx) {
        const items = this.loadImages();
        for (const item of items) {
            if (item.id === idx) {
                item.likes++;
            }
        }
        this.saveImages(items);
    }

    clear() {
        window.localStorage.clear();
    }

    saveImage(data) {
        //validate input data

        const images = this.loadImages();
        images.unshift(data);

        this.saveImages(images);
    }


}