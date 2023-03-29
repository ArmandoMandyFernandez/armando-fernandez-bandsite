const baseURL = 'https://project-1-api.herokuapp.com/'
const APIKey = '844592e2-0f3f-48b8-b6a7-a111bd6d8554';

axios.get(baseURL + 'showdates/?api_key=' + APIKey)
  .then((response) => {
    const shows = response.data;
    const showsSection = createShows(shows);
    document.querySelector(".hero").after(showsSection);

    const showsCard = document.querySelectorAll(".shows__card");
    showsCard.forEach((container) => {
      container.addEventListener("click", () => {
        showsCard.forEach((c) => c.classList.remove("selected"));
        container.classList.add("selected");
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });

// const shows = [
//   {
//     date: "Mon Sept 06 2021",
//     venue: "Ronald Lane",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Tue Sept 21 2021",
//     venue: "Pier 3 East",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Fri Oct 15 2021",
//     venue: "View Lounge",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Sat Nov 06 2021",
//     venue: "Hyatt Agency",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Fri Nov 26 2021",
//     venue: "Moscow Center",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Wed Dec 15 2021",
//     venue: "Press Club",
//     location: "San Francisco, CA",
//   },
// ];

const showsSection = createShows(shows);
document.querySelector(".hero").after(showsSection);

function createShows(shows) {
  //creating shows section
  const section = document.createElement("section");
  section.className = "shows";

  const heading = document.createElement("h2");
  heading.innerText = "Shows";
  heading.className = "shows__title";
  section.appendChild(heading);

  const mainContainer = document.createElement("div");
  mainContainer.className = "shows__container-main";
  section.appendChild(mainContainer);

  const container = document.createElement("div");
  container.className = "shows__container-header";
  mainContainer.appendChild(container);

  const containerLabel1 = document.createElement("p");
  containerLabel1.className = "shows__container-header-label";
  containerLabel1.innerText = "DATE";
  container.appendChild(containerLabel1);

  const containerLabel2 = document.createElement("p");
  containerLabel2.className = "shows__container-header-label";
  containerLabel2.innerText = "VENUE";
  container.appendChild(containerLabel2);

  const containerLabel3 = document.createElement("p");
  containerLabel3.className = "shows__container-header-label";
  containerLabel3.innerText = "LOCATION";
  container.appendChild(containerLabel3);

  const button = document.createElement("button");
  button.className = "shows__button-hidden";
  button.innerText = "BUY TICKETS";
  container.appendChild(button);

  const dataContainer = document.createElement("div");
  dataContainer.className = "shows__container-data";
  mainContainer.appendChild(dataContainer);

  shows.forEach((show) => {
    const showsCard = document.createElement("div");
    showsCard.className = "shows__card";

    const dateLabel = document.createElement("p");
    dateLabel.className = "shows__label";
    dateLabel.innerText = "DATE";
    showsCard.appendChild(dateLabel);

    const date = document.createElement("h3");
    date.className = "shows__date";
    date.innerText = show.date;
    showsCard.appendChild(date);

    const venueLabel = document.createElement("p");
    venueLabel.className = "shows__label";
    venueLabel.innerText = "VENUE";
    showsCard.appendChild(venueLabel);

    const venue = document.createElement("p");
    venue.className = "shows__venue";
    venue.innerText = show.place;
    showsCard.appendChild(venue);

    const locationLabel = document.createElement("p");
    locationLabel.className = "shows__label";
    locationLabel.innerText = "LOCATION";
    showsCard.appendChild(locationLabel);

    const location = document.createElement("p");
    location.className = "shows__location";
    location.innerText = show.location;
    showsCard.appendChild(location);

    const button = document.createElement("button");
    button.className = "shows__button";
    button.innerText = "BUY TICKETS";
    showsCard.appendChild(button);

    dataContainer.appendChild(showsCard);
  });
  mainContainer.appendChild(dataContainer);
  return section;
}

const showsCard = document.querySelectorAll(".shows__card");

showsCard.forEach((container) => {
  container.addEventListener("click", () => {
    showsCard.forEach((c) => c.classList.remove("selected"));
    container.classList.add("selected");
  });
});
