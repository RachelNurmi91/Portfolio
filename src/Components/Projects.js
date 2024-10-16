import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="row py-4">
          <div className="col-3">
            <h3>Journi</h3>
          </div>
          <div className="col">
            <p>
              While traveling, I noticed confirmations and bookings get lost in
              emails, and there are too many accounts to sign into to access
              travel information quickly. To combat that issue, I created
              Journi, a Fullstack application that allows users to store
              upcoming travel plans in a single place. Journi uses JavaScript
              and React JS with MongoDB to store user data and travel plans as
              objects using the REST approach. The application communicates
              between the Front-End and Back-End to create, store, and fetch
              travel plans so a user can seamlessly locate their trip
              information in one place.
            </p>
            <div>
              <span className="fw-bold">GitHub Repo:</span>{" "}
              <a
                href="https://github.com/RachelNurmi91/Journi"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Journi Travel Companion
              </a>
            </div>
            <div className="mt-3">
              <span className="pill">JavaScript</span>
              <span className="pill">React</span>
              <span className="pill">Redux</span>
              <span className="pill">MongoDB</span>
              <span className="pill">NodeJs</span>
            </div>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-3">
            <h3>Jennifers Gift</h3>
          </div>
          <div className="col">
            <p>
              A application to host information about Jennifer's Gift. Every
              year the founders of Jennifer's Gift host an annual golf
              tournament. This application was made for users to view
              information about the event and sign up for the golf tournaments.
              It uses Next.Js to act as a serverless environment and relies on
              MongoDB to store data.
            </p>
            <div>
              <span className="fw-bold">GitHub Repo:</span>
              <a
                href="https://github.com/RachelNurmi91/Jennifers-Gift"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Jennifer's Gift
              </a>
            </div>
            <div className="mt-3">
              <span className="pill">JavaScript</span>
              <span className="pill">Next.js</span>
              <span className="pill">Tailwind</span>
            </div>
          </div>
        </div>

        <div className="row py-4">
          <div className="col-3">
            <h3>American Urban Legends</h3>
          </div>
          <div className="col">
            <p>
              American Urban Legends was created to learn Redux and React Router
              for the first time. The original American Urban Legends
              application was a static website. The code you see here was
              redesigned to be a more dynamic application through the use of
              React, JavaScript, Redux, and React Router. Additionally, it has
              been created to be responsive to all browser sizes, including
              mobile devices, and features advanced functionality and improved
              user experience. In this project, I honed my skills in React
              Router by implementing dynamic routing and direct linking to
              anchors, resulting in a more streamlined and efficient website
              with reduced code. I also discovered how to leverage passed-in
              data objects to create multiple pages within the website, allowing
              me to simulate distinct pages using a single function instead of
              manually creating pages for each region and story.
            </p>
            <div>
              <span className="fw-bold">GitHub Repo:</span>
              <a
                href="https://github.com/RachelNurmi91/American-Urban-Legends"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                American Urban Legends
              </a>
            </div>
            <div className="mt-3">
              <span className="pill">JavaScript</span>
              <span className="pill">React</span>
              <span className="pill">Redux</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
