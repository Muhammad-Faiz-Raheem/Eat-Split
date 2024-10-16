import Footer from "../ui/Footer";
import Header from "../ui/Header";
import WelcomeContent from "../ui/WelcomeContent";

function Welcome() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <WelcomeContent />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Welcome;
