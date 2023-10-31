import Navbar from "../../components/Navigation/Navbar";
import FooterComponent from "../../components/Footer/Footer";
import ProfileAlert from "../../components/Card/ProfileAlert";
import SellerCard from "../../components/Card/SellerCard";

const PotentialSeller = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mx-8">
        <div className="flex items-center justify-center my-6">
          <ProfileAlert />
        </div>
        <div className="flex flex-col mt-6">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            Potential Seller
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <SellerCard />
            <SellerCard />
            <SellerCard />
            <SellerCard />
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default PotentialSeller;
