const mainFriendsDiv = document.querySelector(".main-friends");

const friendsData = [
  {
    id: 1,
    phoneIcon:
      "fa-solid fa-phone bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    envelopeIcon:
      "fa-solid fa-envelope bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    friendImg: "../imgs/friend-01.jpg",
    friendName: "ahmed nasser",
    developer: "javaScript developer",
    friendInfo: {
      smileIcon: "fa-solid fa-face-smile",
      friendCount: "99 friend",
      projectIcon: "fa-solid fa-briefcase",
      projectsCount: "15 project",
      articlesIcon: "fa-regular fa-newspaper",
      articlesCount: "25 articles",
    },
    vip: true,
    joined: {
      date: "joined 02/10/2021",
    },
  },
  {
    id: 2,
    phoneIcon:
      "fa-solid fa-phone bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    envelopeIcon:
      "fa-solid fa-envelope bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    friendImg: "../imgs/friend-02.jpg",
    friendName: "omar fathy",
    developer: "cloud developer",
    friendInfo: {
      smileIcon: "fa-solid fa-face-smile",
      friendCount: "30 friend",
      projectIcon: "fa-solid fa-briefcase",
      projectsCount: "12 project",
      articlesIcon: "fa-regular fa-newspaper",
      articlesCount: "25 articles",
    },
    vip: true,
    joined: {
      date: "joined 02/8/2020",
    },
  },
  {
    id: 3,
    phoneIcon:
      "fa-solid fa-phone bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    envelopeIcon:
      "fa-solid fa-envelope bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    friendImg: "../imgs/friend-03.jpg",
    friendName: "omar ahmed",
    developer: "mobile developer",
    friendInfo: {
      smileIcon: "fa-solid fa-face-smile",
      friendCount: "80 friend",
      projectIcon: "fa-solid fa-briefcase",
      projectsCount: "20 project",
      articlesIcon: "fa-regular fa-newspaper",
      articlesCount: "18 articles",
    },
    vip: false,
    joined: {
      date: "joined 02/6/2020",
    },
  },
  {
    id: 4,
    phoneIcon:
      "fa-solid fa-phone bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    envelopeIcon:
      "fa-solid fa-envelope bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    friendImg: "../imgs/friend-04.jpg",
    friendName: "Shady Nabil",
    developer: "back-end developer",
    friendInfo: {
      smileIcon: "fa-solid fa-face-smile",
      friendCount: "70 friend",
      projectIcon: "fa-solid fa-briefcase",
      projectsCount: "30 project",
      articlesIcon: "fa-regular fa-newspaper",
      articlesCount: "18 articles",
    },
    vip: false,
    joined: {
      date: "joined 28/06/2021",
    },
  },
  {
    id: 5,
    phoneIcon:
      "fa-solid fa-phone bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    envelopeIcon:
      "fa-solid fa-envelope bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    friendImg: "../imgs/friend-05.jpg",
    friendName: "Mohamed Ibrahim",
    developer: "algorithm developer",
    friendInfo: {
      smileIcon: "fa-solid fa-face-smile",
      friendCount: "80 friend",
      projectIcon: "fa-solid fa-briefcase",
      projectsCount: "30 project",
      articlesIcon: "fa-regular fa-newspaper",
      articlesCount: "18 articles",
    },
    vip: false,
    joined: {
      date: "joined 28/08/2020",
    },
  },
  {
    id: 6,
    phoneIcon:
      "fa-solid fa-phone bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    envelopeIcon:
      "fa-solid fa-envelope bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    friendImg: "../imgs/friend-01.jpg",
    friendName: "Amr Hendawy",
    developer: "back-end developer",
    friendInfo: {
      smileIcon: "fa-solid fa-face-smile",
      friendCount: "70 friend",
      projectIcon: "fa-solid fa-briefcase",
      projectsCount: "30 project",
      articlesIcon: "fa-regular fa-newspaper",
      articlesCount: "18 articles",
    },
    vip: false,
    joined: {
      date: "joined 28/06/2021",
    },
  },
  {
    id: 7,
    phoneIcon:
      "fa-solid fa-phone bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    envelopeIcon:
      "fa-solid fa-envelope bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    friendImg: "../imgs/friend-02.jpg",
    friendName: "Mahmoud Adel",
    developer: "cloud developer",
    friendInfo: {
      smileIcon: "fa-solid fa-face-smile",
      friendCount: "30 friend",
      projectIcon: "fa-solid fa-briefcase",
      projectsCount: "11 project",
      articlesIcon: "fa-regular fa-newspaper",
      articlesCount: "12 articles",
    },
    vip: false,
    joined: {
      date: "joined 02/08/2020",
    },
  },
  {
    id: 8,
    phoneIcon:
      "fa-solid fa-phone bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    envelopeIcon:
      "fa-solid fa-envelope bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    friendImg: "../imgs/friend-03.jpg",
    friendName: "Ahmed Abuzaid",
    developer: "content creator",
    friendInfo: {
      smileIcon: "fa-solid fa-face-smile",
      friendCount: "80 friend",
      projectIcon: "fa-solid fa-briefcase",
      projectsCount: "30 project",
      articlesIcon: "fa-regular fa-newspaper",
      articlesCount: "18 articles",
    },
    vip: true,
    joined: {
      date: "joined 28/08/2020",
    },
  },
  {
    id: 9,
    phoneIcon:
      "fa-solid fa-phone bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    envelopeIcon:
      "fa-solid fa-envelope bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    friendImg: "../imgs/friend-04.jpg",
    friendName: "Gareeb Elshiekh",
    developer: "javaScript developer",
    friendInfo: {
      smileIcon: "fa-solid fa-face-smile",
      friendCount: "90 friend",
      projectIcon: "fa-solid fa-briefcase",
      projectsCount: "15 project",
      articlesIcon: "fa-regular fa-newspaper",
      articlesCount: "15 articles",
    },
    vip: true,
    joined: {
      date: "joined 02/10/2020",
    },
  },
  {
    id: 10,
    phoneIcon:
      "fa-solid fa-phone bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    envelopeIcon:
      "fa-solid fa-envelope bg-eee rad-50 wid-30 hei-30 transi-03 pointer center-flex",
    friendImg: "../imgs/friend-05.jpg",
    friendName: "hamza",
    developer: "front-end developer",
    friendInfo: {
      smileIcon: "fa-solid fa-face-smile",
      friendCount: "80 friend",
      projectIcon: "fa-solid fa-briefcase",
      projectsCount: "20 project",
      articlesIcon: "fa-regular fa-newspaper",
      articlesCount: "18 articles",
    },
    vip: false,
    joined: {
      date: "joined 02/06/2020",
    },
  },
];

function createAndLoopFriends(friends) {
  mainFriendsDiv.innerHTML = "";
  friends.forEach((friend) => {
    const friendDiv = document.createElement("div");
    friendDiv.className = "friend rad-10 bg-white p-20 p-relative";

    // Start Contact
    const contactDiv = document.createElement("div");
    contactDiv.className =
      "contact p-absolute c-grey fs-13 d-flex align-center gap-5";
    const phoneIcon = document.createElement("i");
    phoneIcon.className = friend.phoneIcon;
    const envelopeIcon = document.createElement("i");
    envelopeIcon.className = friend.envelopeIcon;
    contactDiv.appendChild(phoneIcon);
    contactDiv.appendChild(envelopeIcon);
    friendDiv.appendChild(contactDiv);
    // End Contact

    // Start Friend Info
    const infoDiv = document.createElement("div");
    infoDiv.className = "info txt-c";
    const friendImg = document.createElement("img");
    friendImg.className = "wid-100 hei-100 rad-50";
    friendImg.src = friend.friendImg;
    friendImg.alt = "friend-img";
    infoDiv.appendChild(friendImg);
    const h4 = document.createElement("h4");
    h4.className = "mb-5 mt-10";
    h4.appendChild(document.createTextNode(friend.friendName));
    infoDiv.appendChild(h4);
    const spanDeveloper = document.createElement("span");
    spanDeveloper.className = "fs-13 c-grey";
    spanDeveloper.appendChild(document.createTextNode(friend.developer));
    infoDiv.appendChild(spanDeveloper);
    friendDiv.appendChild(infoDiv);
    // End Friend Info

    // Start Friend Numbers
    const countsDiv = document.createElement("div");
    countsDiv.classList =
      "perso-info p-relative pt-15 pb-15 fs-14 bt-eee bb-eee mt-20 mb-20";
    if (friend.vip) {
      const spanVip = document.createElement("span");
      spanVip.className = "vip c-orange fs-30 p-absolute";
      spanVip.appendChild(document.createTextNode("VIP"));
      countsDiv.appendChild(spanVip);
    }
    const friendsCount = document.createElement("div");
    friendsCount.className = "d-flex align-center gap-10";
    const friendsIcon = document.createElement("i");
    friendsIcon.className = friend.friendInfo.smileIcon;
    friendsCount.appendChild(friendsIcon);
    const spanFriends = document.createElement("span");
    spanFriends.appendChild(
      document.createTextNode(friend.friendInfo.friendCount)
    );
    friendsCount.appendChild(spanFriends);
    countsDiv.appendChild(friendsCount);

    const projectsCountDiv = document.createElement("div");
    projectsCountDiv.className = "d-flex align-center gap-10 mt-10 mb-10";
    const projectCountIcon = document.createElement("i");
    projectCountIcon.className = friend.friendInfo.projectIcon;
    const spanProjectCount = document.createElement("span");
    spanProjectCount.appendChild(
      document.createTextNode(friend.friendInfo.projectsCount)
    );
    projectsCountDiv.appendChild(projectCountIcon);
    projectsCountDiv.appendChild(spanProjectCount);
    countsDiv.appendChild(projectsCountDiv);

    const articlesCountDiv = document.createElement("div");
    articlesCountDiv.className = "d-flex align-center gap-10";
    const articleIcon = document.createElement("i");
    articleIcon.className = friend.friendInfo.articlesIcon;
    articlesCountDiv.appendChild(articleIcon);
    const spanArticles = document.createElement("span");
    spanArticles.appendChild(
      document.createTextNode(friend.friendInfo.articlesCount)
    );
    articlesCountDiv.appendChild(spanArticles);
    countsDiv.appendChild(articlesCountDiv);
    friendDiv.appendChild(countsDiv);
    // End Friend Numbers

    // Start Joined Div
    const joinDiv = document.createElement("div");
    joinDiv.className = "join fs-13 between-flex gap-5";
    const joinSpan = document.createElement("span");
    joinSpan.className = "c-grey";
    joinSpan.appendChild(document.createTextNode(friend.joined.date));
    joinDiv.appendChild(joinSpan);
    friendDiv.appendChild(joinDiv);

    const linksDiv = document.createElement("div");
    linksDiv.className = "links d-flex gap-5";
    const profileLink = document.createElement("a");
    profileLink.className = "btn-shape c-white bg-blue";
    profileLink.href = "profile.html";
    profileLink.appendChild(document.createTextNode("profile"));
    linksDiv.appendChild(profileLink);
    const buttonRemove = document.createElement("button");
    buttonRemove.className = "btn-shape c-white bg-red";
    buttonRemove.appendChild(document.createTextNode("Remove"));
    buttonRemove.onclick = () => {
      removeFriend(friend.id);
    };
    linksDiv.appendChild(buttonRemove);
    joinDiv.appendChild(linksDiv);
    // End Joined Div

    friendDiv.appendChild(contactDiv);
    mainFriendsDiv.appendChild(friendDiv);
  });
}
createAndLoopFriends(friendsData);

// removeFriend Function
let array = [];

function removeFriend(friendIndex) {
  array = [...array, friendIndex];
  const newFriendsList = friendsData.filter(
    (friend) => !array.some((one) => friend.id === one)
  );
  createAndLoopFriends(newFriendsList);
}
