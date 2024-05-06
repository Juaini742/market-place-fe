import axios from "axios";

function Home() {
  const options = {
    method: "GET",
    url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
    params: {
      country: "us",
      lang: "en",
      currentpage: "0",
      pagesize: "30",
      categories: "men_all",
      concepts: "H&M MAN",
    },
    headers: {
      "X-RapidAPI-Key": "827beba685msh5859c2f6ae3cf84p1741b2jsn075a058a96ea",
      "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    },
  };

  const hanleApi = async () => {
    try {
      const response = await axios.request(options);

      const data = response.data.results;

      const newData = data.map((item) => item.defaultArticle);
      console.log(response.data.results);
      //   console.log("ini adalah default articles", newData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div onClick={hanleApi}>Home</div>
      <p>{}</p>
    </>
  );
}

export default Home;
