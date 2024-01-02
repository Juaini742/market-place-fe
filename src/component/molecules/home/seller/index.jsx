import {useState} from "react";
import {Button, Container} from "../../../atoms";
import axios from "axios";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {rapidApiHost, rapidApiKey, rapidUrl} from "../../../../contants";

function HomeSeller() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: rapidUrl,
        params: {
          country: "us",
          lang: "en",
          currentpage: "0",
          pagesize: "30",
          categories: "men_all",
          concepts: "H&M MAN",
        },
        headers: {
          "X-RapidAPI-Key": rapidApiKey,
          "X-RapidAPI-Host": rapidApiHost,
        },
      };

      try {
        const response = await axios.request(options);
        const responseData = response.data.results;

        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="mt-10">
      <div className="">
        <span className="font-semibold">By Seller</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center mt-5 gap-5">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-2 rounded-lg hover:bg-gray-200 trans-300 group relative"
          >
            <Link to={item.pk}>
              <div>
                <img
                  src={item.allArticleImages[1]}
                  alt={item.name}
                  className="rounded-lg"
                />
              </div>
              <div className="hidden group-hover:block trans-300 absolute inset-0">
                <Button variant="primary" className="py-1 px-4">
                  + Add to cart
                </Button>
              </div>
              <div className="flex flex-col gap-3 mt-5 md:h-24 justify-between">
                <h2 className="font-bold">{item.name}</h2>
                <span>{item.categoryName}</span>
                <span className="font-bold">{item.price.formattedValue}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default HomeSeller;
