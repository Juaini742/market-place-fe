import {useState} from "react";
import axios from "axios";
import {useEffect} from "react";
import {Container} from "../atoms";

function TryApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://shoes-collections.p.rapidapi.com/shoes",
        headers: {
          "X-RapidAPI-Key":
            "827beba685msh5859c2f6ae3cf84p1741b2jsn075a058a96ea",
          "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);

        return setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return <Container className="mt-10"></Container>;
}

export default TryApi;
