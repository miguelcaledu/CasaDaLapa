import React, { useState } from "react";
import {
  Hero,
  Location,
  HouseDetails,
  Review,
  DetailedFeatures,
  Gallery,
  Footer,
  BookingForm,
  ScrollToTopButton,
  LanguageSwitcher,
} from "@/components/casa-da-lapa";

const Index: React.FC = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Function to handle booking button clicks
  const handleBookingClick = () => {
    setShowBookingForm(true);
  };

  // Function to handle closing the booking form
  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
  };

  // Add event listeners to all "Reserve Agora" buttons
  React.useEffect(() => {
    const bookingButtons = document.querySelectorAll("button");

    bookingButtons.forEach((button) => {
      if (button.textContent?.includes("Reserve Agora")) {
        button.addEventListener("click", handleBookingClick);
      }
    });

    return () => {
      bookingButtons.forEach((button) => {
        if (button.textContent?.includes("Reserve Agora")) {
          button.removeEventListener("click", handleBookingClick);
        }
      });
    };
  }, []);

  return (
    <main className="bg-white flex flex-col overflow-hidden items-center">
      <Hero />
      <Location />
      <HouseDetails />
      <Review />
      <DetailedFeatures />
      <Gallery />
      <Footer />

      {showBookingForm && <BookingForm onClose={handleCloseBookingForm} />}

      <ScrollToTopButton />
      <LanguageSwitcher />
    </main>
  );
};

export default Index;
