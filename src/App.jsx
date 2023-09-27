import "./App.css";
// import LocofyTester from "./components/LocofyTester";
import Navbar from "./components/Tree Walker/Navbar";
import HomePage from "./components/Tree Walker/HomePage";
import TreeMessageCard from "./components/Tree Walker/TreeMessageCard";
import HealthyStormPage from "./components/Tree Walker/HealthyStormPage";
import TreeWalker from "./components/Tree Walker/TreeWalker";
import CustomersPage from "./components/Tree Walker/CustomersPage";
import HelpPage from "./components/Tree Walker/HelpPage";
import OfferPage from "./components/Tree Walker/OfferPage";
import ContactPage from "./components/Tree Walker/ContactPage";
import Footer from "./components/Tree Walker/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <TreeMessageCard />
      <HealthyStormPage />
      <TreeWalker />
      <CustomersPage />
      <HelpPage />
      <OfferPage />
      <ContactPage />
      <Footer />

      {/* <LocofyTester /> */}
    </>
  );
}

export default App;
