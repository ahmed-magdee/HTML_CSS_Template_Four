const mainProjectsDiv = document.querySelector(".main-projects");

const projects = [
  {
    name: "Elzero Dashboard",
    text: "Elzero Dashboard Project Design And Programming And Hosting",
    date: "15/10/2021",
    imgs: [
      "../imgs/team-01.png",
      "../imgs/team-02.png",
      "../imgs/team-03.png",
      "../imgs/team-04.png",
      "../imgs/team-05.png",
    ],
    spans: ["programming", "design", "hosting", "marketing"],
    skill: "50%",
    price: "$ 2500",
  },
  {
    name: "Academy Portal",
    text: "Academy Portal Project Design And Programming",
    date: "15/06/2022",
    imgs: ["../imgs/team-01.png", "../imgs/team-02.png", "../imgs/team-03.png"],
    spans: ["programming", "design"],
    skill: "70%",
    price: "$ 1800",
  },
  {
    name: "Chatting Application",
    text: "Chatting Application Project Design",
    date: "15/06/2022",
    imgs: ["../imgs/team-01.png", "../imgs/team-02.png", "../imgs/team-03.png"],
    spans: ["design"],
    skill: "100%",
    price: "$ 950",
  },
  {
    name: "Ahmed Dashboard",
    text: "Ahmed Dashboard Project Design And Programming And Hosting",
    date: "15/10/2021",
    imgs: [
      "../imgs/team-01.png",
      "../imgs/team-02.png",
      "../imgs/team-03.png",
      "../imgs/team-04.png",
    ],
    spans: ["programming", "design", "hosting", "marketing"],
    skill: "60%",
    price: "$ 1700",
  },
  {
    name: "Ahmed Portal",
    text: "Ahmed Portal Project Design And Programming",
    date: "12/02/2022",
    imgs: ["../imgs/team-01.png", "../imgs/team-02.png", "../imgs/team-03.png"],
    spans: ["programming", "design"],
    skill: "70%",
    price: "$ 850",
  },
  {
    name: "Mohamed Application",
    text: "Mohamed Application Project Design",
    date: "09/03/2021",
    imgs: ["../imgs/team-01.png", "../imgs/team-02.png", "../imgs/team-03.png"],
    spans: ["design"],
    skill: "40%",
    price: "$ 950",
  },
  {
    name: "Mohamed Dashboard",
    text: "Mohamed Dashboard Project Design And Programming And Hosting",
    date: "15/10/2021",
    imgs: [
      "../imgs/team-01.png",
      "../imgs/team-02.png",
      "../imgs/team-03.png",
      "../imgs/team-04.png",
    ],
    spans: ["programming", "design", "hosting", "marketing"],
    skill: "70%",
    price: "$ 1950",
  },
  {
    name: "Mohamed Portal",
    text: "Elzero Dashboard Project Design And Programming And Hosting",
    date: "15/10/2021",
    imgs: ["../imgs/team-01.png", "../imgs/team-02.png", "../imgs/team-03.png"],
    spans: ["programming", "design"],
    skill: "60%",
    price: "$ 1650",
  },
  {
    name: "Ahmed Application",
    text: "Ahmed Application Project Design",
    date: "15/10/2021",
    imgs: ["../imgs/team-01.png", "../imgs/team-02.png", "../imgs/team-03.png"],
    spans: ["design"],
    skill: "90%",
    price: "$ 950",
  },
];

function createAndLoopProjects() {
  projects.forEach((project) => {
    const div = document.createElement("div");
    div.className = "project p-20 bg-white rad-10 p-relative";
    const span = document.createElement("span");
    span.className = "fs-13 c-grey p-absolute";
    const h4 = document.createElement("h4");
    h4.className = "mb-5 fw-n mt-10";
    const p = document.createElement("p");
    p.className = "c-grey fs-14 mb-30";

    span.appendChild(document.createTextNode(project.date));
    div.appendChild(span);

    h4.appendChild(document.createTextNode(project.name));
    div.appendChild(h4);

    p.appendChild(document.createTextNode(project.text));
    div.appendChild(p);

    project.imgs.forEach((img) => {
      const theImg = document.createElement("img");
      theImg.className = "p-relative wid-45 hei-45 b-2white rad-50 pointer";
      theImg.src = img;
      theImg.alt = "group-img";
      div.appendChild(theImg);
    });

    // Start Skills
    const divLang = document.createElement("div");
    divLang.className =
      "lang d-flex align-center justify-flex-end gap-5 flex-mobile mt-10 mb-20 pt-20 pb-20 bt-eee bb-eee fs-13";
    project.spans.forEach((skill) => {
      const span = document.createElement("span");
      span.className = "btn-shape bg-eee";
      span.appendChild(document.createTextNode(skill));
      divLang.appendChild(span);
      div.appendChild(divLang);
    });
    // End Skills

    // Start Dollar
    const divMainDollar = document.createElement("div");
    divMainDollar.className = "dollar between-flex flex-mobile gap-10";
    const divProg = document.createElement("div");
    divProg.className = "prog rad-6 bg-eee p-relative";
    const spanProg = document.createElement("span");
    spanProg.className = "p-absolute bg-green rad-6";
    const divDollar = document.createElement("div");
    divDollar.className = "c-grey fs-13";

    spanProg.style.width = project.skill;
    divProg.appendChild(spanProg);
    divMainDollar.appendChild(divProg);

    divDollar.appendChild(document.createTextNode(project.price));
    divMainDollar.appendChild(divDollar);
    divMainDollar.appendChild(divDollar);
    div.appendChild(divMainDollar);
    // End Dollar

    mainProjectsDiv.appendChild(div);
  });
}
createAndLoopProjects();
