import React from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-primary">
      <header className="flex h-24 items-center justify-between gap-6 px-7 font-body text-text">
        <a href="/">
          <img
            className="block w-36 py-2"
            src="/src/assets/logo.svg"
            alt="site logo"
          />
        </a>
        <ul className="hidden h-auto justify-evenly gap-5 text-sm xl:flex xl:text-base">
          <li className="whitespace-nowrap">
            <a href="#">Christmas decorations</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="#">Customer favorites</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="#">Great gifts</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="#">New arrivals</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="#">Tree themes</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="#">Sale</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="#">Shop By</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="#">More seasons</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="#">Catalog</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="#">Help</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="#">Login</a>
          </li>
          <li className="whitespace-nowrap">
            <a href="#">Cart</a>
          </li>
        </ul>
        <div className="text-bold block xl:hidden">MENU</div>
      </header>
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-full bg-[url('/src/assets/clouds.png')] bg-contain bg-repeat"></div>
        <div className="clouds absolute left-0 top-0 h-full w-full bg-[url('/src/assets/snow.png')] bg-contain bg-repeat"></div>
        <div className="flex h-full flex-col items-center justify-center">
          <img
            className="relative m-auto block max-w-sm px-[40px] py-3 lg:max-w-lg"
            src="/src/assets/search-hero.png"
            alt="Search"
          />
          <img
            className="relative m-auto max-w-full p-10"
            src="/src/assets/santa sale.png"
            alt="Search"
          />
        </div>
      </div>
      <div className="relative bg-secondary px-12 py-9 text-text">
        <img
          className="absolute right-0 top-0 max-w-[30vw]"
          src="/src/assets/snow-middle.svg"
          alt="Snow decor"
        />
        <div className="m-auto grid max-w-7xl grid-cols-1 justify-items-center gap-5 min-[450px]:grid-cols-2 md:grid-cols-4">
          <div className="max-w-[100%] rounded-[43px] border-t-[1px] border-text bg-white/[.18] p-4 text-center backdrop-blur sm:max-w-[180px]">
            <i className="m-auto block h-11 w-11 bg-[url('/src/assets/icons/icon-shipping.svg')]"></i>
            <strong>We ship worldwide</strong>
            <p>
              We Ship All Over the World! We Offer Free Shipping On US-48 Orders
              of $99+
            </p>
          </div>
          <div className="max-w-[100%] rounded-[43px] border-t-[1px] border-text bg-white/[.18] p-4 text-center backdrop-blur sm:max-w-[180px]">
            <i className="m-auto block h-11 w-11 bg-[url('/src/assets/icons/icon-security.svg')]"></i>
            <strong>Payments Accepted</strong>
            <p>Visa, Mastercard, AMEX, Discover, Paypal, Paypal Pay Later</p>
          </div>
          <div className="max-w-[100%] rounded-[43px] border-t-[1px] border-text bg-white/[.18] p-4 text-center backdrop-blur sm:max-w-[180px]">
            <i className="m-auto block h-11 w-11 bg-[url('/src/assets/icons/icon-payment.svg')]"></i>
            <strong>Secure Shopping</strong>
            <p>100% Secure Shopping and SSL Secured Checkout</p>
          </div>
          <div className="max-w-[100%] rounded-[43px] border-t-[1px] border-text bg-white/[.18] p-4 text-center backdrop-blur sm:max-w-[180px]">
            <i className="m-auto block h-11 w-11 bg-[url('/src/assets/icons/icon-support.svg')]"></i>
            <strong>Need Help?</strong>
            <p>
              For the fastest service use our chat feature. We are a US company
              located in Loganville, GA.
            </p>
          </div>
        </div>
      </div>
      <section className="py-24">
        <h2 className="block pb-24 text-center font-title text-5xl text-text">
          Popular Categories
        </h2>
        <div className="m-auto flex max-w-6xl flex-wrap justify-evenly gap-y-24">
          <div className="relative w-full md:w-1/2">
            <div className="m-auto h-80 w-80 rounded-full">
              <img
                className="h-full w-full rounded-[50%]"
                src="/src/assets/gingerbread.png"
              />
            </div>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-bl-[10px] rounded-br-[10px] rounded-tl-[58px] rounded-tr-[58px] bg-tertiery px-28 py-7 text-center text-text shadow-inner shadow-text">
              Gingerbread decor
            </span>
          </div>
          <div className="relative w-full md:w-1/2">
            <div className="m-auto h-80 w-80">
              <img
                className="h-full w-full rounded-[50%]"
                src="/src/assets/ornaments.png"
              />
            </div>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-bl-[10px] rounded-br-[10px] rounded-tl-[58px] rounded-tr-[58px] bg-tertiery px-28 py-7 text-center text-text shadow-inner shadow-text">
              Christmas ornaments
            </span>
          </div>
          <div className="relative w-full md:w-1/2">
            <div className="m-auto h-80 w-80">
              <img
                className="h-full w-full rounded-[50%]"
                src="/src/assets/raz-decor.png"
              />
            </div>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-bl-[10px] rounded-br-[10px] rounded-tl-[58px] rounded-tr-[58px] bg-tertiery px-28 py-7 text-center text-text shadow-inner shadow-text">
              Raz Decor
            </span>
          </div>
          <div className="relative w-full md:w-1/2">
            <div className="m-auto h-80 w-80">
              <img
                className="h-full w-full rounded-[50%]"
                src="/src/assets/christmas-tree-themes.png"
              />
            </div>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-bl-[10px] rounded-br-[10px] rounded-tl-[58px] rounded-tr-[58px] bg-tertiery px-28 py-7 text-center text-text shadow-inner shadow-text">
              Christmas tree themes
            </span>
          </div>
        </div>
      </section>
      <section className="relative pt-24">
        <h2 className="m-auto block max-w-2xl pb-24 text-center font-title text-5xl text-text">
          Be The First To Hear About Sales! Subscribe to Our Email List:
        </h2>
        <div className="relative m-auto w-full max-w-[90%] md:max-w-[576px]">
          <input
            className="block w-full rounded-[48px] border-b-[2px] border-text border-opacity-80 bg-secondary py-5 pl-20 pr-9 text-text shadow-inner backdrop-blur"
            type="text"
            placeholder="Your email address"
          />
          <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center pl-3">
            <img className="" src="/src/assets/icons/email.svg" />
          </div>
        </div>
        <div className="relative h-52 w-full">
          <img
            className="absolute bottom-0 right-0 h-[calc(100%-50px)]"
            src="/src/assets/santaclaus-footer.svg"
            alt=""
          />
        </div>
      </section>
      <footer className="relative flex flex-wrap justify-center gap-16 bg-secondary bg-[url('/src/assets/bg-footer.png')] bg-cover px-8 pt-16 text-center md:justify-evenly md:text-left">
        <img
          className="absolute right-0 top-0 max-w-[30vw]"
          src="/src/assets/snow-middle.svg"
          alt="Snow decor"
        />
        <img
          className="relative hidden xl:inline-block xl:w-[40%]"
          src="/src/assets/Snowman.svg"
          alt="Snowman footer"
        />
        <div className="relative flex flex-col text-text">
          <h3 className="pb-10 font-title text-2xl">head office</h3>
          <p>
            The Jolly Christmas Shop
            <br />
            270 Main St.GA.
            <br />
            Call us at 111-111-2222
          </p>
          <img
            className="mx-auto max-w-[100px] pt-8 lg:ml-0"
            src="/src/assets/logo.svg"
            alt="Logo"
          />
        </div>
        <div className="flex flex-col text-text">
          <h3 className="pb-10 font-title text-2xl">navigate</h3>
          <a href="">Accessibility Statement</a>
          <a href="">About Us</a>
          <a href="">Blog</a>
          <a href="">Employment Opportunities</a>
        </div>
        <div className="flex flex-col text-text">
          <h3 className="pb-10 font-title text-2xl">popular brands</h3>
          <a href="">Raz imports</a>
          <a href="">Polar X</a>
          <a href="">View All</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
