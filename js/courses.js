const mainCoursesDiv = document.querySelector(".main-courses");

const coursesData = [
  {
    courseImg: "../imgs/course-01.jpg",
    teamImg: "../imgs/team-01.png",
    h3: "mastering web design",
    p: "master the art of web designing and mocking, prototyping and creating web design architecture.",
    span: "course info",
    left: {
      icon: "fa-solid fa-user",
      span: "950",
    },
    right: "$ 165",
  },
  {
    courseImg: "../imgs/course-02.jpg",
    teamImg: "../imgs/team-02.png",
    h3: "data structure and algorithms",
    p: "master the art of data structure and famous algorithms like, sorting, dividing and conquering.",
    span: "course info",
    left: {
      icon: "fa-solid fa-user",
      span: "1150",
    },
    right: "$ 210",
  },
  {
    courseImg: "../imgs/course-03.jpg",
    teamImg: "../imgs/team-03.png",
    h3: "responsive web design",
    p: "mastering responsive wen design and media queries and know everything about breakpoints.",
    span: "course info",
    left: {
      icon: "fa-solid fa-user",
      span: "650",
    },
    right: "$ 90",
  },
  {
    courseImg: "../imgs/course-04.jpg",
    teamImg: "../imgs/team-04.png",
    h3: "mastering python",
    p: "mastering python to prepare for data science and AI and automating things in your life.",
    span: "course info",
    left: {
      icon: "fa-solid fa-user",
      span: "950",
    },
    right: "$ 250",
  },
  {
    courseImg: "../imgs/course-05.jpg",
    teamImg: "../imgs/team-05.png",
    h3: "PHP example",
    p: "PHP tutorials and examples and practice on web application and connecting with databases.",
    span: "course info",
    left: {
      icon: "fa-solid fa-user",
      span: "850",
    },
    right: "$ 150",
  },
  {
    courseImg: "../imgs/course-01.jpg",
    teamImg: "../imgs/team-01.png",
    h3: "data structure and algorithms",
    p: "master the art of data structure and famous algorithms like sorting, dividing and conquering.",
    span: "course info",
    left: {
      icon: "fa-solid fa-user",
      span: "1150",
    },
    right: "$ 210",
  },
  {
    courseImg: "../imgs/course-02.jpg",
    teamImg: "../imgs/team-02.png",
    h3: "responsive web design",
    p: "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints.",
    span: "course info",
    left: {
      icon: "fa-solid fa-user",
      span: "650",
    },
    right: "$ 90",
  },
  {
    courseImg: "../imgs/course-03.jpg",
    teamImg: "../imgs/team-03.png",
    h3: "mastering web design",
    p: "master the art of web designing and mocking, prototyping and creating web design architecture.",
    span: "course info",
    left: {
      icon: "fa-solid fa-user",
      span: "850",
    },
    right: "$ 145",
  },
  {
    courseImg: "../imgs/course-04.jpg",
    teamImg: "../imgs/team-04.png",
    h3: "PHP Examples",
    p: "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases.",
    span: "course info",
    left: {
      icon: "fa-solid fa-user",
      span: "850",
    },
    right: "$ 150",
  },
  {
    courseImg: "../imgs/course-05.jpg",
    teamImg: "../imgs/team-05.png",
    h3: "Mastering Python",
    p: "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life.",
    span: "course info",
    left: {
      icon: "fa-solid fa-user",
      span: "950",
    },
    right: "$ 250",
  },
];

function createAndLoopOnCourses() {
  coursesData.forEach((course, index) => {
    const mainDiv = document.createElement("div");
    mainDiv.className = "box bg-white rad-10 over-hidden p-relative opacity-0";
    setTimeout(() => {
      mainDiv.style.opacity = 1;
    }, index * 200);
    mainDiv.style.animation = `from-left 1s ${index * 0.1}s ease-in-out`;

    const courseImg = document.createElement("img");
    courseImg.className = "full-width";
    courseImg.src = course.courseImg;
    courseImg.alt = "course-img";
    mainDiv.appendChild(courseImg);

    const teamImg = document.createElement("img");
    teamImg.className = "wid-55 hei-55 rad-50 b-2white p-absolute";
    teamImg.src = course.teamImg;
    teamImg.alt = "team-img";
    mainDiv.appendChild(teamImg);

    const textDiv = document.createElement("div");
    textDiv.className = "text p-20";
    const h3 = document.createElement("h3");
    h3.className = "mb-10 fs-15";
    h3.appendChild(document.createTextNode(course.h3));
    textDiv.appendChild(h3);
    const p = document.createElement("p");
    p.className = "fs-13 c-grey";
    p.appendChild(document.createTextNode(course.p));
    textDiv.appendChild(p);
    mainDiv.appendChild(textDiv);

    const iconDiv = document.createElement("div");
    iconDiv.className =
      "icon p-relative bt-eee pt-15 mt-10 p-10 c-grey fs-13 between-flex";
    const span = document.createElement("span");
    span.className = "btn-shape bg-blue c-white fs-11 p-absolute";
    span.appendChild(document.createTextNode(course.span));
    iconDiv.appendChild(span);

    const leftDiv = document.createElement("div");
    leftDiv.className = "left";
    const i = document.createElement("i");
    i.classList = course.left.icon;
    const spanLeft = document.createElement("span");
    spanLeft.appendChild(document.createTextNode(" " + course.left.span));
    leftDiv.appendChild(i);
    leftDiv.appendChild(spanLeft);
    const rightDiv = document.createElement("div");
    rightDiv.className = "right";
    rightDiv.appendChild(document.createTextNode(course.right));

    iconDiv.appendChild(leftDiv);
    iconDiv.appendChild(rightDiv);
    mainDiv.appendChild(iconDiv);

    mainCoursesDiv.appendChild(mainDiv);
  });
}
createAndLoopOnCourses();
