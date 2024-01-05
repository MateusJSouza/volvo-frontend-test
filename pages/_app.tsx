import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import "../public/css/styles.css";
import { HelloWorld } from "../src/components/HelloWorld";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <HelloWorld />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
