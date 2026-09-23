import Header from "./components/Header";
import Hero from "./components/Hero";
import ThreeSystems from "./components/ThreeSystems";
import PlatformEcosystem from "./components/PlatformEcosystem";
import CustomerJourney from "./components/CustomerJourney";
import RentalSpecialization from "./components/RentalSpecialization";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ThreeSystems />
        <PlatformEcosystem />
        <CustomerJourney />
        <RentalSpecialization />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
