function Footer() {
  return (
    <footer className=" bg-black py-10 md:h-72 mt-10 flex items-center">
      <div className="container text-white grid grid-cols-1 md:grid-cols-4 justify-between font-juro gap-5">
        <div className="">
          <h6 className="font-bold">Exclusive</h6>
          <span>Subscribe</span>
        </div>
        <div className="">
          <h6 className="font-bold">Support</h6>
          <ul className="flex flex-col gap-3">
            <li>Jl, Antasari Pantai Hambawang Barat, Kal-Sel Indonesia</li>
            <li>juaini742@gmail.com</li>
            <li>+62-8575-1633-160</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold">Account</h6>
          <ul className="flex flex-col gap-3">
            <li>My Account</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold">Quick Link</h6>
          <ul className="flex flex-col gap-3">
            <li>Privacy Police</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
