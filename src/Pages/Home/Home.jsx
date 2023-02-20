import "./Home.scss";
import bg from "../../assets/images/background1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section" id="home">
      <div className="home-c">
        <div className="shc">
          <img src={bg} alt="logo" />
          {/* <div className="test">
            <div className="quote">
              <p>
                "Setting goals is the first step in turning the invisible into
                the visible."<br></br> <span>- Tony Robbins -</span>
              </p>
            </div>
          </div> */}
        </div>

        <div className="desc-c">
          <header>
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#06493e"
                className="bi bi-bullseye"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
              <h1>
                Goal<span>Tracker</span>
              </h1>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-box-arrow-in-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
              />
              <path
                fill-rule="evenodd"
                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              />
            </svg>
          </header>
          <div className="desc">
            <h1>
              Goal<span>Tracker</span>
            </h1>
            <p>
              Stay on top of your to-do list and achieve your goals with our
              user-friendly task management.{" "}
              <span>Create and organize tasks</span>, set due dates and
              reminders, track progress, assign tasks to team members, and
              visualize your calendar. Sign up today and start being more
              productive!
            </p>
            <Link to={`/Login`} className="btn">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
