document.documentElement.classList.add("js-ready");

for (const link of document.querySelectorAll('a[href^="#"]')) {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function sendCourseHeightToParent() {
  const height = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight
  );

  window.parent.postMessage(
    {
      type: "ym-course-height",
      height: height + 40
    },
    "https://melamedy.com"
  );
}

window.addEventListener("load", sendCourseHeightToParent);
window.addEventListener("resize", sendCourseHeightToParent);

setTimeout(sendCourseHeightToParent, 300);
setTimeout(sendCourseHeightToParent, 1000);
setTimeout(sendCourseHeightToParent, 2000);