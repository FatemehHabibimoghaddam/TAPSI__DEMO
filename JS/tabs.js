const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContent.forEach((tabContent) => tabContent.classList.remove("active"));

    tab.classList.add("active");
    targeTabContent.classList.add("active");
  });
});
