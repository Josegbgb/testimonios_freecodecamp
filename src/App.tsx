import Card from "./components/Card";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

import Section from "./components/Section";

function App() {
  return (
    <Suspense fallback="Loading">
      <Header />
      <Section />
      <Card />
    </Suspense>
  );
}

export default App;
