import DetailMyProduct from "../molecules/myProductDetail";
import Template from "../templates";
import Footer from "../templates/Footer";

function MyproductDetailPage() {
  return (
    <>
      <Template>
        <DetailMyProduct />
        <div className="mt-10">
          <Footer />
        </div>
      </Template>
    </>
  );
}

export default MyproductDetailPage;
