const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const container = document.getElementById("container");
const loading = document.getElementById("loading");

loading.style.display = "none";

searchButton.addEventListener("click", async () => {
  loading.style.display = "flex";

  const { data } = await getGiphyData(searchInput.value);
  console.log(data);

  loading.style.display = "none";

  data.forEach((element) => {
    const imgTag = `<img src=${element.images.original.url} />`;

    container.innerHTML += imgTag;
  });
});

const getGiphyData = async (searchInput) => {
  const url = `https://api.giphy.com/v1/videos/search?q=${searchInput}&limit=20&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g`;
  const result = await fetch(url);

  return result.json();
};

const render = (data) => {
  container.innerHTML = "";

  data.forEach((item) => {
    container.innerHTML += imgTag;
  });
};

render(getGiphyData);

searchInput.addEventListener("keyup", (el) => {
  const filteredData = imgTag.filter(() => {
    return;
  });
});
