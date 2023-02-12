const MAXIMUM_WIDTH = 60;
const MAXIMUM_HEIGHT = 60;

const grayRamp = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\'. ';
const rampLength = grayRamp.length;

function toGrayScale(r, g, b) {
    return 0.21 * r + 0.72 * g + 0.07 * b;
}

function getFontRatio() {
    const pre = document.createElement('pre');
    pre.style.display = 'inline';
    pre.textContent = ' ';

    document.body.appendChild(pre);
    const { width, height } = pre.getBoundingClientRect();
    document.body.removeChild(pre);

    return height / width;
};


function clampDimensions(width, height) {
    const rectifiedWidth = Math.floor(getFontRatio() * width);

    if (height > MAXIMUM_HEIGHT) {
        const reducedWidth = Math.floor(rectifiedWidth * MAXIMUM_HEIGHT / height);
        return [reducedWidth, MAXIMUM_HEIGHT];
    }

    if (width > MAXIMUM_WIDTH) {
        const reducedHeight = Math.floor(height * MAXIMUM_WIDTH / rectifiedWidth);
        return [MAXIMUM_WIDTH, reducedHeight];
    }

    return [rectifiedWidth, height];
};

function getCharacterForGrayScale(grayScale) {
    return grayRamp[Math.ceil((rampLength - 1) * grayScale / 255)];
}

function generateAscii(grayScales, width) {
    let ascii = "";

    for (let idx = 0; idx < grayScales.length; idx++) {
        ascii += getCharacterForGrayScale(grayScales[idx]);
        if ((idx + 1) % width === 0) {
            ascii += '\n';
        }
    }

    return ascii;
};

function convertToGrayScales(context, width, height) {
    // TODO 
    const imageData = context.getImageData(0, 0, width, height);
    const grayScales = [];

    for (let idx = 0; idx < imageData.data.length; idx += 4) {
        const r = imageData.data[idx];
        const g = imageData.data[idx + 1];
        const b = imageData.data[idx + 2];
        const grayScale = toGrayScale(r, g, b);
        grayScales.push(grayScale);

        imageData.data[idx] = grayScale;
        imageData.data[idx + 1] = grayScale;
        imageData.data[idx + 2] = grayScale;
    }
    context.putImageData(imageData, 0, 0);
    return grayScales;
};

function convertImageToAscii(file, canvas, callback) {
   // TODO

   const reader = new FileReader();
   reader.onload = (event) => {
     //data loaded 

     const image = new Image();
     image.onload = () => {
        // binary data transformed into image

        const [width, height] = clampDimensions(image.width, image.height);

        canvas.width = width;
        canvas.height = height;

        ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, width, height);

        const grayScales = convertToGrayScales(ctx, width, height);

        const result = generateAscii(grayScales, width);
        callback(result);

     }
     image.src = event.target.result;

     // console.log(event.target.result);

   }
   reader.readAsDataURL(file);

};

