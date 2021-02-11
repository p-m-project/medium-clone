thumbnailElement.src = URL.createObjectURL(thumbnail.target.files[0]);
    thumbnailElement.onload = function() {
    URL.revokeObjectURL(thumbnailElement.src) 
    } 
    // هر پارت رو تعریف کنم
    // المان رو باید هدف قرار بدم