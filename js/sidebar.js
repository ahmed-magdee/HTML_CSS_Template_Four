const navbarUl = document.querySelector(".side-bar ul");

const navbarLinks = [
  {
    name: "Dashboard",
    link: "/index.html",
    icon: "fa-solid fa-chart-bar",
  },
  {
    name: "Settings",
    link: "/html/settings.html",
    icon: "fa-solid fa-gear",
  },
  {
    name: "Profile",
    link: "/html/profile.html",
    icon: "fa-solid fa-user",
  },
  {
    name: "Projects",
    link: "/html/projects.html",
    icon: "fa-solid fa-diagram-project",
  },
  {
    name: "Courses",
    link: "/html/courses.html",
    icon: "fa-solid fa-graduation-cap",
  },
  {
    name: "Friends",
    link: "/html/friends.html",
    icon: "fa-solid fa-users",
  },
  {
    name: "Files",
    link: "/html/files.html",
    icon: "fa-solid fa-file",
  },
  {
    name: "Plans",
    link: "/html/plans.html",
    icon: "fa-solid fa-clipboard",
  },
];

function createNavbarLis() {
  navbarLinks.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const i = document.createElement("i");
    const span = document.createElement("span");

    a.href = link.link;
    a.className = `${
      window.location.pathname.includes(link.link) && "active"
    } d-flex align-center justify-flex-mobile gap-10 fs-13 c-black p-10 rad-6 transi-03`;
    i.className = link.icon;
    span.appendChild(document.createTextNode(link.name));
    span.className = "d-none-mobile";
    a.appendChild(i);
    a.appendChild(span);
    li.appendChild(a);
    navbarUl.appendChild(li);
  });
}

createNavbarLis();
