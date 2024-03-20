const imageUpload = document.getElementById('imageUpload');
const imageCanvas = document.getElementById('imageCanvas');
const downloadBtn = document.getElementById('downloadBtn');
const downloadJpg = document.getElementById('downloadJpg');
const ctx = imageCanvas.getContext('2d');

imageUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            imageCanvas.width = img.width;
            imageCanvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
});

downloadBtn.addEventListener('click', function() {
    const image = imageCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const link = document.createElement('a');
    link.download = 'normalized-image.png';
    link.href = image;
    link.click();
});

downloadJpg.addEventListener('click', function() {
    const image = imageCanvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream");
    const link = document.createElement('a');
    link.download = 'normalized-image.jpg';
    link.href = image;
    link.click();
});
