document.querySelectorAll('a[href="#marquiz"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const marquizBlock = document.querySelector("#marquiz");

    if (!marquizBlock) {
      return;
    }

    event.preventDefault();
    marquizBlock.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
