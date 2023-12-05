import PageProgress from "./PageProgress";
import TextSizer from "./TextSizer";
import ThemeSwitcher from "./ThemeSwitcher";
import { Theme, ThemeOpts } from "./theme";

function App() {
  const persistedTheme =
    (localStorage.getItem("data-theme") as Theme) || ThemeOpts[0];
  if (persistedTheme) {
    document.documentElement.setAttribute("data-theme", persistedTheme);
  }

  return (
    <>
      <header className="header">
        <svg
          className="logo"
          data-name="Layer 1"
          id="Layer_1"
          viewBox="0 0 508.33 508.36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>
              {`
          .cls-1 {
            fill: #323232;
            fill-rule: evenodd;
          }
          .cls-2 {
            fill: #fff;
          }
        `}
            </style>
          </defs>
          <title />
          <path
            className="cls-1"
            d="M485,29.72c11.45,15.13,16.61,40.21,19.15,70.7,3.36,45.5,4.71,100.1,6,156.52-1.67,57.47-2.35,115.43-6,156.52-2.88,31.54-9,52.66-19.22,65.47-13,12.79-37.94,23.59-73.5,26.15-43.25,3.69-96.61,3.65-155.48,5.1-65.44-1.12-109.82-.64-156.38-5.08-36.32-2.52-60.08-13.19-74.7-26.07-10.83-14.54-14-30-17-66.24-3.75-41.85-4.58-98.56-6-155.54C4,200.57,4.13,143.44,7.9,100.74,10.43,67.05,14.42,44.4,24.65,30,39,17.77,63.48,11.69,100,8.69c50-5.85,102.06-7,155.88-6.87,55.39.09,108.56,1.67,156,6.34,32,2.56,58.48,8.07,73.07,21.56Z"
            transform="translate(-1.83 -1.82)"
          />
          <path
            className="cls-2"
            d="M331.37,258.19c-.38-37.95,30.94-56.15,32.35-57.07-17.6-25.74-45-29.27-54.79-29.67-23.32-2.37-45.53,13.74-57.36,13.74s-30.09-13.39-49.43-13c-25.44.38-48.89,14.8-62,37.57-26.42,45.83-6.76,113.76,19,151,12.59,18.18,27.6,38.64,47.29,37.89,19-.75,26.14-12.28,49.08-12.28s29.39,12.28,49.46,11.89c20.41-.37,33.35-18.53,45.83-36.78a165.67,165.67,0,0,0,20.75-42.61C371.12,318.57,331.78,303.5,331.37,258.19Z"
            transform="translate(-1.83 -1.82)"
          />
          <path
            className="cls-2"
            d="M293.65,146.83c10.44-12.68,17.52-30.29,15.59-47.83-15.07.61-33.31,10-44.13,22.68-9.69,11.24-18.17,29.14-15.9,46.36C266,169.34,283.17,159.48,293.65,146.83Z"
            transform="translate(-1.83 -1.82)"
          />
        </svg>

        <nav className="nav">
          <ul role="list" className="page-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <ThemeSwitcher persistedTheme={persistedTheme} />

        <TextSizer />
      </header>
      <PageProgress />
      <main>
        {/* <!-- Hero Section --> */}
        <section className="hero">
          <h1>Discover the Latest iPhone</h1>
        </section>

        {/* <!-- About Us Section --> */}
        <section className="about-us">
          <h2>About Us</h2>
          <p>
            Welcome to our iPhone promotions page. We are dedicated to bringing
            you the latest and greatest iPhone deals, ensuring you stay
            connected with cutting-edge technology. Explore our exclusive offers
            today!
          </p>
          <div className="company-logos">
            {/* <!-- Add logos of 5 companies here --> */}
            <img
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png"
              alt="Company Logo 1"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png"
              alt="Company Logo 2"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png"
              alt="Company Logo 3"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png"
              alt="Company Logo 4"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png"
              alt="Company Logo 5"
            />
          </div>
        </section>

        {/* <!-- Features Section --> */}
        <section className="features">
          <h2>Features</h2>
          <div className="grid">
            <article className="feature">
              <h3>Immersive Display</h3>
              <p>
                Experience stunning visuals with the iPhone's immersive display,
                delivering vibrant colors and crisp details for an unparalleled
                viewing experience.
              </p>
            </article>
            <article className="feature">
              <h3>Powerful Performance</h3>
              <p>
                Get ready for seamless multitasking and lightning-fast
                performance. The iPhone is equipped with cutting-edge processors
                to handle any task with ease.
              </p>
            </article>
            <article className="feature">
              <h3>Advanced Camera System</h3>
              <p>
                Capture every moment in stunning detail with the advanced camera
                system. From breathtaking landscapes to low-light selfies, the
                iPhone takes photography to the next level.
              </p>
            </article>
            <article className="feature">
              <h3>Long Battery Life</h3>
              <p>
                Stay connected all day with the iPhone's long-lasting battery
                life. Whether you're browsing, streaming, or gaming, the iPhone
                keeps up with your busy lifestyle.
              </p>
            </article>
          </div>
        </section>

        {/* <!-- Contact Us Section --> */}
        <section className="contact-us">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p>
              Email:{" "}
              <a href="mailto:support@example.com">support@example.com</a>
            </p>
            <p>
              Phone: <a href="tel:+123456789">+1 234-567-89</a>
            </p>
          </div>
          <div className="contact-form">
            <form action="#" method="post">
              <input type="text" name="name" placeholder="Your Name" />
              <input type="email" name="email" placeholder="Your Email" />
              <textarea name="message" placeholder="Your Message"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
