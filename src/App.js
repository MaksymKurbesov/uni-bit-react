import "./App.css";
import { Header } from "./components/Header/Header";
import { HeroBanner } from "./components/Hero-Banner/Hero-Banner";
import { WhoWeAre } from "./components/Who-We-Are/Who-We-Are";
import { WhichServices } from "./components/Which-Services/Which-Services";
import { OurClients } from "./components/Our-Clients/Our-Clients";
import { Contacts } from "./components/Contacts/Contacts";
import { Footer } from "./components/Footer/Footer";
import { UserForm } from "./components/User-Form/User-Form";
import { AboutUs } from "./components/About-Us/About-Us";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroBanner />
        {/*<WhoWeAre />*/}
        <WhichServices />
        <OurClients />
        <AboutUs />
        <UserForm />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
