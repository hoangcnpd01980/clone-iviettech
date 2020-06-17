function toggleFormSearch() {
  const btnSearch = document.getElementById("button-search");
  const formSearch = document.getElementById("search");

  btnSearch.addEventListener("click", function () {
    if (formSearch.style.display === "none") {
      formSearch.style.display = "flex";
    } else {
      formSearch.style.display = "none";
    }
  });
}

function toggleMenu() {
  const formCollap = document.getElementById("form-collap");
  const menuList = document.querySelector(".menu .menu-list");
  const w = document.documentElement.clientWidth;
  document.getElementById("test").innerHTML = w;

  if (w >= 868) {
    let style = "block";
    menuList.style.display = style;
    console.log(w);
  } else if (w < 868) {
    let style = "none";
    menuList.style.display = style;
    formCollap.style.position = "inherit";

    formCollap.addEventListener("click", function () {
      if (menuList.style.display === "none") {
        menuList.style.display = "block";
        formCollap.style.position = "absolute";
      } else if (menuList.style.display === "block") {
        menuList.style.display = "none";
        formCollap.style.position = "inherit";
      }
    });
  }
}

function main() {
  toggleFormSearch();
}

main();
