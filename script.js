document.addEventListener("DOMContentLoaded", function () {
  const carloAnimation = document.querySelector(".carlo-animation");

  if (carloAnimation) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    function stopGifAfterOneLoop() {
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = function () {
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;

        ctx.drawImage(this, 0, 0);

        const staticImageData = canvas.toDataURL("image/png");

        setTimeout(() => {
          carloAnimation.src = staticImageData;
          carloAnimation.style.animationPlayState = "paused";
        }, 3000);
      };

      img.src = carloAnimation.src;
    }

    function replaceWithStaticImage() {
      setTimeout(() => {
        carloAnimation.style.opacity = "0.6";
        carloAnimation.style.filter = "brightness(0.8)";
      }, 3000);
    }

    replaceWithStaticImage();

    carloAnimation.classList.add("animation-started");
  }
});

function addCompletionIndicator() {
  const carloContainer = document.querySelector(".carlo-gif-container");
  if (carloContainer) {
    setTimeout(() => {
      carloContainer.classList.add("animation-complete");
    }, 3100);
  }
}

document.addEventListener("DOMContentLoaded", addCompletionIndicator);
