const pre = document.getElementById("pre");
const next = document.getElementById("next");

const image = [
  "./channels4_profile.jpg",
  "./YouTubeLogo.jpg",
  "./threads1.jpeg",
];
let a = 0;
zurag1.src = image[0];

pre.addEventListener("click", () => {
  if (a == 0) {
    a = image.length - 1;
  } else {
    a--;
  }
  zurag1.src = image[a];
});
next.addEventListener("click", () => {
  if (a == 0) {
    a = image.length + 1;
  }
  
  }

  zurag1.src = image[a];
});
