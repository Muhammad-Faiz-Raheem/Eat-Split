import ResetPasswordForm from "../components/authentication/ResetPasswordForm";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

function ResetPassword() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <ResetPasswordForm />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ResetPassword;
