const form = document.querySelector("#searchForm");
const query = document.querySelector("#query");
const showsToWatchList = document.querySelector("#showsToWatch");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  try {
    const res = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query.value}`
    );

    if (!res.ok) {
      console.log("There is a status error", res);
      return;
    }

    const data = await res.json();
    console.log(data);
    console.log(data[0].show.name);
    console.log(data[0].show.image.medium);

    makeListOfShows(data);
  } catch (error) {
    console.log("There's been an error:", error);
  }

  query.value = "";
});

const makeListOfShows = (shows) => {
  showsToWatchList.innerHTML = "";

  for (let result of shows) {
    if (result.show.name && result.show.image) {
      const newLI = document.createElement("li");

      const title = document.createElement("h3");
      title.innerText = result.show.name;

      const newImg = document.createElement("img");
      newImg.src = result.show.image.medium;

      newLI.appendChild(title);
      newLI.appendChild(newImg);

      showsToWatchList.appendChild(newLI);
    }
  }
};
