window.onload = () => {
        document.body.classList.remove("container");
      
        const music = document.getElementById("bg-music");
        if (music) {
          music.play().catch(() => {
            document.body.addEventListener("click", () => {
              music.play();
            }, { once: true });
          });
        }
      
        setTimeout(() => {
          const popup = document.getElementById("popup-message");
          if (popup) {
            popup.classList.remove("hidden");
            popup.classList.add("show");
          }
        }, 10000);
      };
      