import { ContentRef } from "@nteract/core";
import { GlobalCSSVariables } from "@nteract/presentational-components";
import { BlueprintCSS } from "@nteract/styled-blueprintjsx";
import * as React from "react";
import NotificationSystem, {
  System as ReactNotificationSystem
} from "react-notification-system";
import { createGlobalStyle } from "styled-components";

import { default as Contents } from "./contents";

const GlobalAppStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    font-family: "Source Sans Pro";
    font-size: 16px;
    background-color: var(--theme-app-bg);
    color: var(--theme-app-fg);
    margin: 0;
  }

  #app {
    padding-top: 20px;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  div#loading {
    animation-name: fadeOut;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
  }
`;

class App extends React.Component<{ contentRef: ContentRef }> {
  notificationSystem!: ReactNotificationSystem;

  shouldComponentUpdate(nextProps: { contentRef: ContentRef }) {
    return nextProps.contentRef !== this.props.contentRef;
  }

  render() {
    return (
      <React.Fragment>
        <BlueprintCSS />
        <GlobalCSSVariables />
        <GlobalAppStyle />

        <Contents contentRef={this.props.contentRef} />
        <NotificationSystem
          ref={(notificationSystem: ReactNotificationSystem) => {
            this.notificationSystem = notificationSystem;
          }}
        />
      </React.Fragment>
    );
  }
}

export default App;
