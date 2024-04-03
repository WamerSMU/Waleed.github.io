document.addEventListener("DOMContentLoaded", function() {
  var tabs = document.querySelectorAll(".tab");
  var content = document.querySelectorAll(".content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove active-tab class from all tabs
      tabs.forEach(t => t.classList.remove("active-tab"));
      // Hide all content
      content.forEach(c => c.style.display = 'none');

      // Set clicked tab as active
      tab.classList.add("active-tab");
      // Show corresponding content
      content[index].style.display = 'block';
    });
  });
});
