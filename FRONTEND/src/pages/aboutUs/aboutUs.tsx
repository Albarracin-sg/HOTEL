import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <Header logoText="Quienes somos?" />
      
      <Footer />
    </div>
  );
}