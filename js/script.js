const toggleFilter = () => {
  const rtToggle = document.querySelector(".rt-toggle-collapse");
  const rtCollapse = document.querySelector(".rt-collapse");

  if (rtToggle) {
    rtToggle.addEventListener("click", () => {
      rtToggle.classList.toggle("is-opened");
      rtCollapse.classList.toggle("is-opened");
    });
  }
};
toggleFilter();

const toggleMobileFilter = () => {
  const rtToggleBtn = document.querySelector(".js-catalog-btn");
  const rtCatalogBtn = document.querySelector(".rt-catalog-filter_btn");
  const rtCalendarBtn = document.querySelector(".rt-calendar-filter_btn");

  if (rtToggleBtn) {
    rtToggleBtn.addEventListener("click", () => {
      rtToggleBtn.nextElementSibling.classList.toggle("active");
    });
  }

  if (rtCatalogBtn) {
    rtCatalogBtn.addEventListener("click", () => {
      rtCatalogBtn.nextElementSibling.classList.toggle("active");
    });
  }

  if (rtCalendarBtn) {
    rtCalendarBtn.addEventListener("click", () => {
      rtCalendarBtn.nextElementSibling.classList.toggle("active");
    });
  }
};
toggleMobileFilter();
