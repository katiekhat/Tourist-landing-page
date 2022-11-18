let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

//hot services card

let hotServices = [
  {
    picture: "./photo/airplane.jpg",
    title: "FLIGHT BOOKING",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    picture: "./photo/airplane.jpg",
    title: "HOTEL & RESORT BOOKING BOOKING",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    picture: "./photo/airplane.jpg",
    title: "FAMILY TRIP PLANNER",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    picture: "./photo/airplane.jpg",
    title: "CRUISE TOUR",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    picture: "./photo/airplane.jpg",
    title: "FIRE CAMP",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    picture: "./photo/airplane.jpg",
    title: "CORPORATE HOLIDAYS",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
];

function createHotServiceCard(index) {
  let div = document.createElement("div");
  div.classList.add("HotServiceCard");

  let img = document.createElement("img");
  img.setAttribute("src", hotServices[index].picture);
  img.classList.add("HotServiceCardImg");
  div.appendChild(img);

  let header = document.createElement("h3");
  header.innerText = hotServices[index].title;
  div.appendChild(header);

  let description = document.createElement("p");
  description.innerText = hotServices[index].description;
  div.appendChild(description);

  document.getElementById("hotServiceContainer").appendChild(div);
}

for (let i = 0; i < hotServices.length; i++) {
  createHotServiceCard(i);
}
