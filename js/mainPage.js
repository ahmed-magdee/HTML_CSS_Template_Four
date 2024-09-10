const table = document.querySelector("table");
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");

// Start Head Of Table
const headData = ["name", "finish date", "client", "price", "team", "status"];

function headLoop() {
  const tr = document.createElement("tr");
  tr.className = "bg-eee fw-b";

  headData.forEach((head) => {
    const td = document.createElement("td");
    td.appendChild(document.createTextNode(head));
    tr.appendChild(td);
  });
  thead.appendChild(tr);
}
headLoop();
// End Head Of Table

// Start Body Of Table
const bodyData = [
  {
    name: "ministry wikipedia",
    "finish date": "10 may 2022",
    client: "ministry",
    price: "$5300",
    team: [
      "imgs/team-01.png",
      "imgs/team-02.png",
      "imgs/team-03.png",
      "imgs/team-04.png",
    ],
    status: "pending",
  },
  {
    name: "elzero shop",
    "finish date": "10 oct 2021",
    client: "elzero company",
    price: "$1500",
    team: ["imgs/team-01.png", "imgs/team-02.png", "imgs/team-04.png"],
    status: "inprogress",
  },
  {
    name: "bouba app",
    "finish date": "05 sep 2021",
    client: "bouba",
    price: "$800",
    team: ["imgs/team-02.png", "imgs/team-03.png"],
    status: "completed",
  },
  {
    name: "mahmoud webside",
    "finish date": "22 may 2021",
    client: "mahmoud",
    price: "$600",
    team: ["imgs/team-01.png", "imgs/team-02.png"],
    status: "completed",
  },
  {
    name: "sayed website",
    "finish date": "24 may 2021",
    client: "sayed",
    price: "$300",
    team: ["imgs/team-01.png", "imgs/team-03.png"],
    status: "reject",
  },
  {
    name: "arena application",
    "finish date": "01 mar 2021",
    client: "arena company",
    price: "$2600",
    team: [
      "imgs/team-01.png",
      "imgs/team-02.png",
      "imgs/team-03.png",
      "imgs/team-04.png",
    ],
    status: "completed",
  },
];

function bodyLoop() {
  bodyData.forEach((oneBody) => {
    const tr = document.createElement("tr");
    headData.forEach((head) => {
      const td = document.createElement("td");
      if (head === "team") {
        oneBody.team.forEach((img) => {
          const theImg = document.createElement("img");
          theImg.className = "wid-30 hei-30 rad-50 b-2white";
          theImg.src = img;
          theImg.alt = "team-image";
          td.appendChild(theImg);
        });
      } else if (head === "status") {
        const span = document.createElement("span");
        span.classList = `btn-shape c-white fs-13 ${
          oneBody[head] === "pending"
            ? "bg-orange"
            : oneBody[head] === "inprogress"
            ? "bg-blue"
            : oneBody[head] === "reject"
            ? "bg-red"
            : "bg-green"
        }`;
        span.appendChild(document.createTextNode(oneBody[head]));
        td.appendChild(span);
      } else {
        td.appendChild(document.createTextNode(oneBody[head]));
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}
bodyLoop();
// End Body Of Table
