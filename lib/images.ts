// Deprecated

// Automatically run through the images folder and get all the image paths

const photoFilenames = Array.from({ length: 14 }, (_, i) => `/images/photo${i + 1}.png`);

export default photoFilenames;