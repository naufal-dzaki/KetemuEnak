import Navbar from "../../components/Navigation/Navbar";
import FooterComponent from "../../components/Footer/Footer";
import ProfileAlert from "../../components/Card/ProfileAlert";
import EventCard from "../../components/Card/EventCard";
import data from "../../json/dummy.json";

const UpcomingEvent = () => {
  const events = data.event;
  return (
    <>
      <Navbar />
      <main className="flex flex-col mx-8">
        <div className="flex items-center justify-center my-6">
          <ProfileAlert />
        </div>
        <div className="flex flex-col mt-6">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            Acara Terdaftar
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {events
              .filter((event) => event.isApplied === true)
              .map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  img={event.img}
                  applyBefore={event.apllyBefore}
                  eventDate={event.eventDate}
                  location={event.location}
                  desc={event.desc}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            Acara Mendatang
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {events
              .filter((event) => event.isApplied === false)
              .map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  img={event.img}
                  isApplied={event.isApplied}
                  applyBefore={event.apllyBefore}
                  eventDate={event.eventDate}
                  location={event.location}
                  desc={event.desc}
                />
              ))}
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default UpcomingEvent;
