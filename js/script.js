const openSelect = () => {
  const multiselectBlocks = document.querySelectorAll(".multiselect");

  multiselectBlocks.forEach((parent) => {
    parent.addEventListener("click", function (event) {
      event.stopPropagation();
      parent.classList.toggle("open");
    });
  });
};

openSelect();
