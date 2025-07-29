
    function toggleTheme() {
      const html = document.documentElement;
      const icon = document.getElementById("themeIcon");
      const current = html.getAttribute("data-theme");

      if (current === "dark") {
        html.setAttribute("data-theme", "light");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      } else {
        html.setAttribute("data-theme", "dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      }
    }

    document.querySelector(".fa-solid").addEventListener("click", () => {
      document.querySelector(".nav-links").classList.toggle("show");
    });