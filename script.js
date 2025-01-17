let page = 0;

const nextButton = document.querySelector(".next .button");
const previousButton = document.querySelector(".previous .button");
const secondPage = document.querySelector(".second-page");

secondPage.classList.remove("active");

// Function to handle page transitions
const changePage = (direction) => {
  if (direction === "next" && page < 1) {
    page++;
  } else if (direction === "previous" && page > 0) {
    page--;
  }

  // Update classes based on the current page
  if (page === 0) {
    secondPage.classList.remove("active");
  } else {
    secondPage.classList.add("active");
  }
};

// Button event listeners
nextButton.addEventListener("click", () => changePage("next"));
previousButton.addEventListener("click", () => changePage("previous"));

// Scroll event listener
let isScrolling = false;

const handleScroll = (event) => {
  if (isScrolling) return;

  if (event.deltaY > 0) {
    // Scroll down
    changePage("next");
  } else if (event.deltaY < 0) {
    // Scroll up
    changePage("previous");
  }

  // Prevent rapid scrolling
  isScrolling = true;
  setTimeout(() => {
    isScrolling = false;
  }, 700);
};

window.addEventListener("wheel", handleScroll);

// Horizontal touch event for mobile users
let startX = 0;
let endX = 0;

// Detect the start of a touch event
document.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX;
});

// Detect the end of a touch event
document.addEventListener("touchend", (event) => {
  endX = event.changedTouches[0].clientX;
  handleHorizontalSwipe();
});

// Handle the horizontal swipe gesture
function handleHorizontalSwipe() {
  const swipeThreshold = 50; // Minimum distance for a swipe to be detected

  if (startX - endX > swipeThreshold) {
    changePage("next");
  } else if (endX - startX > swipeThreshold) {
    changePage("previous");
  }
}
