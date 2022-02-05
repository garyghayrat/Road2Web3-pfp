import React, { Fragment, useState } from "react";
import classes from "./App.module.css";

function App() {
  const [character, setCharacter] = useState({
    location: "random",
    industry: "random",
    personality: "random",
  });

  const [avatar, setAvatar] = useState({
    display: false,
  });

  const location = [
    "random",
    "Madrid",
    "London",
    "Merida",
    "Roatan",
    "Chicago",
    "Playa del Carmen",
  ];

  const industry = [
    "random",
    "AI Startup",
    "Black Hat",
    "Crypto",
    "Environmental",
    "FAANG",
    "Farming",
    "Government",
    "Hollywood",
    "Influencer",
    "Money Laundering",
    "Nonprofit",
    "Traveling Consultant",
    "Undercover",
    "VR",
    "White Hat",
  ];

  const personality = [
    "random",
    "extraverted thinking",
    "introverted thinking",
    "extraverted feeling",
    "introverted feeling",
    "extraverted sensation",
    "introverted sensation",
    "extraverted intuitive",
    "introverted intuitive",
  ];

  const onChange = (event) => {
    console.log("event.target.name: ", event.target.name);
    console.log("event.target.value: ", event.target.value);
    const tempCharacter = { ...character };
    if (event.target.name === "industry") {
      tempCharacter.industry = event.target.value;
    } else if (event.target.name === "location") {
      tempCharacter.location = event.target.value;
    } else if (event.target.name === "personality") {
      tempCharacter.personality = event.target.value;
    }
    console.log("tempCharacter: ", tempCharacter);
    setCharacter(tempCharacter);
  };

  const submit = () => {
    const final = { display: true };
    if (character.industry === "random") {
      let index = Math.floor(Math.random() * (industry.length - 1)) + 1;
      final.industry = industry[index];
    } else {
      final.industry = character.industry;
    }
    if (character.location === "random") {
      let index = Math.floor(Math.random() * (location.length - 1)) + 1;
      final.location = location[index];
    } else {
      final.location = character.location;
    }
    if (character.personality === "random") {
      let index = Math.floor(Math.random() * (personality.length - 1)) + 1;
      final.personality = personality[index];
    } else {
      final.personality = character.personality;
    }
    console.log("final: ", final);
    setAvatar(final);
  };

  const reset = () => {
    setCharacter({
      location: "random",
      industry: "random",
      personality: "random",
    });

    setAvatar({ display: false });
  };

  const lineBreak = (
    <hr
      style={{
        borderTop: "2px solid lightgrey",
        borderLeft: "none",
        borderRight: "none",
        borderBottom: "none",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    ></hr>
  );
  const display = (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "150px 230px",
        boxSizing: "border-box",
      }}
    >
      <div>Industry</div>
      <div>{avatar.industry}</div>
      <div>Location</div>
      <div>{avatar.location}</div>
      <div>Personality</div>
      <div>{avatar.personality}</div>
    </div>
  );

  return (
    <div style={{ paddingTop: "60px", paddingLeft: "calc((100vw - 810px)/2)" }}>
      <div
        style={{
          display: "grid",
          columnGap: "10px",
          gridTemplateColumns: "400px 400px",
        }}
      >
        <div
          style={{
            height: "800px",
            width: "400px",
            border: "2px solid grey",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: "600" }}>
            Customize your Avatar
          </div>
          <br></br>
          <br></br>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "180px 180px",
              boxSizing: "border-box",
            }}
          >
            <div>Industry</div>
            <select
              style={{ width: "180px" }}
              type="string"
              name="industry"
              required
              value={character.industry}
              //className={styles.SelectionBox}
              onChange={onChange}
            >
              {industry.map((opt, index) => (
                <option key={index}>{opt}</option>
              ))}
            </select>
          </div>

          {lineBreak}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "180px 180px",
              boxSizing: "border-box",
            }}
          >
            <div>Location</div>
            <div style={{ width: "180px" }}>
              <select
                style={{ width: "180px" }}
                type="string"
                name="location"
                required
                value={character.location}
                //className={styles.SelectionBox}
                onChange={onChange}
              >
                {location.map((opt, index) => (
                  <option key={index}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {lineBreak}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "180px 180px",
              boxSizing: "border-box",
            }}
          >
            <div>Personality</div>
            <div>
              <select
                style={{ width: "180px" }}
                type="string"
                name="personality"
                required
                value={character.personality}
                //className={styles.SelectionBox}
                onChange={onChange}
              >
                {personality.map((opt, index) => (
                  <option key={index}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div
            style={{
              display: "grid",
              columnGap: "10px",
              gridTemplateColumns: "175px 175px",
              boxSizing: "border-box",
            }}
          >
            <button onClick={submit} className={classes.ButtonBlue}>
              SUBMIT
            </button>
            <button onClick={reset} className={classes.ButtonGrey}>
              RESET
            </button>
          </div>
        </div>
        <div
          style={{
            height: "800px",
            width: "400px",
            border: "2px solid grey",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div>
            <div style={{ fontSize: "20px", fontWeight: "600" }}>My Avatar</div>
            {!avatar.display ? (
              <div
                style={{
                  paddingTop: "20px",
                }}
              >
                Submit your Avatar
              </div>
            ) : (
              <Fragment>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "150px 230px",
                    boxSizing: "border-box",
                    paddingTop: "20px",
                    borderBottom: "1px solid black",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>Trait</div>
                  <div style={{ fontWeight: "600" }}>Description</div>
                </div>
                {display}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
