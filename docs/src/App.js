import React, { Fragment, useState } from "react";
import ReactHtmlParser from "html-react-parser";

import {
  baseSVG,
  hair5,
  hair4,
  hair3,
  hair2,
  hair1,
  acc1,
  acc2,
  acc3,
  acc4,
  acc5,
  clothes1,
  clothes2,
  clothes3,
  clothes4,
  clothes5,
} from "./SVGStrings";
import MintModal from "./MintModal";

import classes from "./App.module.css";

function App() {
  const displaySvg = (final) => {
    let clothesHtml;
    let hairHtml;
    let accessoryHtml;

    if (final.clothes === "jeans") {
      clothesHtml = clothes1;
    } else if (final.clothes === "t-shirt") {
      clothesHtml = clothes2;
    } else if (final.clothes === "dress") {
      clothesHtml = clothes3;
    } else if (final.clothes === "socks") {
      clothesHtml = clothes4;
    } else if (final.clothes === "swimsuit") {
      clothesHtml = clothes5;
    } else {
      clothesHtml = null;
    }

    if (final.hair === "pink space buns") {
      hairHtml = hair1;
    } else if (final.hair === "seaform quiff") {
      hairHtml = hair2;
    } else if (final.hair === "purple layers") {
      hairHtml = hair3;
    } else if (final.hair === "brown curls") {
      hairHtml = hair4;
    } else if (final.hair === "blonde fringe up") {
      hairHtml = hair5;
    } else {
      hairHtml = null;
    }

    if (final.accessory === "Eth") {
      accessoryHtml = acc1;
    } else if (final.accessory === "sword") {
      accessoryHtml = acc2;
    } else if (final.accessory === "donut") {
      accessoryHtml = acc3;
    } else if (final.accessory === "bubble tea") {
      accessoryHtml = acc4;
    } else if (final.accessory === "wrench") {
      accessoryHtml = acc5;
    } else {
      accessoryHtml = null;
    }

    let svgstring = `${baseSVG}${clothesHtml}${hairHtml}${accessoryHtml}</svg>`;
    setAvatar(final);
    setSvgCode(svgstring);
    console.log("NEW FINAL SVG string: ", svgstring);
  };

  const [svgCode, setSvgCode] = useState("");

  const [modalView, setModalView] = useState("false");

  const [character, setCharacter] = useState({
    clothes: "random",
    hair: "random",
    accessory: "random",
  });

  const [avatar, setAvatar] = useState({
    display: false,
  });

  const clothes = ["random", "jeans", "t-shirt", "dress", "socks", "swimsuit"];

  const hair = [
    "random",
    "pink space buns",
    "seaform quiff",
    "purple layers",
    "brown curls",
    "blonde fringe up",
  ];

  const accessory = ["random", "Eth", "sword", "donut", "bubble tea", "wrench"];

  const onChange = (event) => {
    console.log("event.target.name: ", event.target.name);
    console.log("event.target.value: ", event.target.value);
    const tempCharacter = { ...character };
    if (event.target.name === "clothes") {
      tempCharacter.clothes = event.target.value;
    } else if (event.target.name === "hair") {
      tempCharacter.hair = event.target.value;
    } else if (event.target.name === "accessory") {
      tempCharacter.accessory = event.target.value;
    }
    setCharacter(tempCharacter);
  };

  const submit = () => {
    const final = { display: true };
    if (character.clothes === "random") {
      let index = Math.floor(Math.random() * (clothes.length - 1)) + 1;
      final.clothes = clothes[index];
    } else {
      final.clothes = character.clothes;
    }
    if (character.hair === "random") {
      let index = Math.floor(Math.random() * (hair.length - 1)) + 1;
      final.hair = hair[index];
    } else {
      final.hair = character.hair;
    }
    if (character.accessory === "random") {
      let index = Math.floor(Math.random() * (accessory.length - 1)) + 1;
      final.accessory = accessory[index];
    } else {
      final.accessory = character.accessory;
    }
    console.log("final: ", final);
    displaySvg(final);
  };

  const reset = () => {
    setCharacter({
      hair: "random",
      clothes: "random",
      accessory: "random",
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
      <div>Clothes</div>
      <div>{avatar.clothes}</div>
      <div>Hair</div>
      <div>{avatar.hair}</div>
      <div>Accessory</div>
      <div>{avatar.accessory}</div>
    </div>
  );

  const modalDisplay = () => {
    if (modalView) {
      console.log("showing modal");
      return (
        <MintModal
          show={true}
          //details={stripeModal.message}
          closeModal={() => {
            //let tempStripeModal = { ...stripeModal };
            //tempStripeModal.display = false;
            //setStripeModal(tempStripeModal);
          }}
        ></MintModal>
      );
    } else {
      console.log("NOT showing modal");
      return null;
    }
  };

  return (
    <Fragment>
      <button className={classes.ButtonGreen}>CONNECT WALLET</button>
      <div
        style={{ paddingTop: "60px", paddingLeft: "calc((100vw - 810px)/2)" }}
      >
        <div
          style={{
            display: "grid",
            columnGap: "10px",
            gridTemplateColumns: "400px 400px",
          }}
        >
          <div
            style={{
              height: "600px",
              width: "400px",
              border: "2px solid grey",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: "600",
                paddingBottom: "40px",
              }}
            >
              Customize your Avatar
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "180px 180px",
                boxSizing: "border-box",
              }}
            >
              <div>Clothes</div>
              <select
                style={{ width: "180px" }}
                type="string"
                name="clothes"
                required
                value={character.clothes}
                onChange={onChange}
              >
                {clothes.map((opt, index) => (
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
              <div>Hair</div>
              <div style={{ width: "180px" }}>
                <select
                  style={{ width: "180px" }}
                  type="string"
                  name="hair"
                  required
                  value={character.hair}
                  onChange={onChange}
                >
                  {hair.map((opt, index) => (
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
                paddingBottom: "60px",
              }}
            >
              <div>Accessory</div>
              <div>
                <select
                  style={{ width: "180px" }}
                  type="string"
                  name="accessory"
                  required
                  value={character.accessory}
                  onChange={onChange}
                >
                  {accessory.map((opt, index) => (
                    <option key={index}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                columnGap: "10px",
                gridTemplateColumns: "175px 175px",
                boxSizing: "border-box",
              }}
            >
              <button onClick={submit} className={classes.ButtonBlue}>
                PREVIEW
              </button>
              <button onClick={reset} className={classes.ButtonGrey}>
                RESET
              </button>
            </div>
          </div>
          <div
            style={{
              height: "600px",
              width: "400px",
              border: "2px solid grey",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <div>
              <div style={{ fontSize: "20px", fontWeight: "600" }}>
                My Avatar
              </div>
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
                  <div>{display}</div>
                  <div>{ReactHtmlParser(svgCode)}</div>
                  <div style={{ textAlign: "center" }}>
                    <button
                      onClick={() => {
                        setModalView(false);
                      }}
                      className={classes.ButtonGreen}
                    >
                      MINT
                    </button>
                  </div>
                  {modalDisplay}
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
