function main() {
  const btnSearch = document.getElementById('button-search');
  const formSearch = document.getElementById('search');

  btnSearch.addEventListener("click", function () {
    if (formSearch.style.display === "none") {
      formSearch.style.display = "flex";
    } else {
      formSearch.style.display = "none";
    }
  });
}

main();