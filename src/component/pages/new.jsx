import {useState} from "react";
import axios from "axios";
import {useEffect} from "react";
import {Container} from "../atoms";

function Thirds() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://shein-xi-yin-data-service.p.rapidapi.com/product/get_goods_similar_list",
        params: {
          goods_id: "8682882",
          cat_id: "6469",
          country: "US",
          language: "en",
          currency: "USD",
          page: "1",
          size: "20",
        },
        headers: {
          "X-RapidAPI-Key":
            "827beba685msh5859c2f6ae3cf84p1741b2jsn075a058a96ea",
          "X-RapidAPI-Host": "shein-Xi-Yin-data-service.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const newData = response.data.info.products;

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

export default Thirds;
