const searchInput = document.getElementById("searchInput");
const search = document.getElementById("search");
const container=document.getElementById("container")
const loading=document.getElementById("loading")

loading.style.display="none"

search.addEventListener("click", () => {
    loading.style.display="flex"

const {data}=await getGiphyData(input.value)
});



// https://api.giphy.com/v1/videos/search?q=${variable}&limit=20&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g

const get