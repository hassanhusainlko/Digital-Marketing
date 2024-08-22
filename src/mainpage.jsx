import { BrowserRouter } from "react-router-dom";
import Fourth from "./f";
import Footer from "./footer";
import Navbar from "./navbar";
import Second from "./s";
import Third from "./t";
import PricingSection from "./pricing";

export default function MainPage() {
  return (
    <BrowserRouter>
      <Navbar />
      <Second />
      <Third />
      <PricingSection />
      <Fourth />
      <Footer />
    </BrowserRouter>
  );
}
