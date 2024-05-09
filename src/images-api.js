import axios from "axios";

const ACCESS_KEY = "S_dctB1N-WZbjYeJh5ZFMpWSVj4EkDO16aYty3dw4KE";

axios.defaults.baseURL = "https://api.unsplash.com";

const fetchImages = async (searchQuery, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      page: currentPage,
      per_page: 12,
      orientation: "landscape",
    },
  });
  return response.data.results;
};

export default fetchImages;