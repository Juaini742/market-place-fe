import {useState} from "react";
import axios from "axios";
import {useEffect} from "react";
import {Container} from "../atoms";

function Second() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://asos2.p.rapidapi.com/products/v2/list",
        params: {
          store: "US",
          offset: "0",
          categoryId: "4209",
          limit: "48",
          country: "US",
          sort: "freshness",
          currency: "USD",
          sizeSchema: "US",
          lang: "en-US",
        },
        headers: {
          "X-RapidAPI-Key":
            "827beba685msh5859c2f6ae3cf84p1741b2jsn075a058a96ea",
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const newData = response.data.products;

        console.log(newData);
        return setData(newData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return <Container className="mt-10"></Container>;
}

export default Second;
