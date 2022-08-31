import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Main.css";
import NavigationBar from "./NavigationBar";
import FrontPage from "./FrontPage";
import CreateCard from "./CreateCard";
import About from "./About";
import DemoSection from "./DemoSection";
import Footer from "./Footer";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

const App = () => {
  return (
    <div>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <NotificationsProvider>
          <div>
            <NavigationBar />
          </div>
          <div>
            <FrontPage />
            <DemoSection />
            <About />
            <CreateCard />
            <Footer />
          </div>
        </NotificationsProvider>
      </MantineProvider>
    </div>
  );
};

export default App;
