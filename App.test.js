// src/App.jsx
import React, { useState, useMemo } from "react";
import "./App.css";
import { DOCTORS } from "./data/doctors";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Specialties from "./components/Specialties";
import DoctorsSection from "./components/DoctorsSection";
import BookingModal from "./components/BookingModal";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import StatsBanner from "./components/StatsBanner";
import Footer from "./components/Footer";

export default function App() {
  const [query, setQuery]         = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation]   = useState("All Locations");
  const [activeSearch, setActiveSearch] = useState({ q: "", s: "", l: "All Locations" });
  const [bookingDoc, setBookingDoc] = useState(null);
  const [bookings, setBookings]   = useState([]);

  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter(doc => {
      const matchQ = !activeSearch.q ||
        doc.name.toLowerCase().includes(activeSearch.q.toLowerCase()) ||
        doc.tags.some(t => t.toLowerCase().includes(activeSearch.q.toLowerCase()));
      const matchS = !activeSearch.s || doc.specialty === activeSearch.s;
      const matchL = activeSearch.l === "All Locations" || doc.location === activeSearch.l;
      return matchQ && matchS && matchL;
    });
  }, [activeSearch]);

  function handleSearch() {
    setActiveSearch({ q: query, s: specialty, l: location });
    document.getElementById("doctors")?.scrollIntoView({ behavior: "smooth" });
  }

  function handleSpecialtyFilter(specId) {
    setSpecialty(specId);
    setActiveSearch(prev => ({ ...prev, s: specId }));
    document.getElementById("doctors")?.scrollIntoView({ behavior: "smooth" });
  }

  function handleBookNow() {
    setBookingDoc(DOCTORS[0]);
    document.getElementById("doctors")?.scrollIntoView({ behavior: "smooth" });
  }

  function handleConfirmBooking(booking) {
    setBookings(prev => [...prev, booking]);
    // Mark slot as booked in local state (in a real app, this would call an API)
    console.log("Booking confirmed:", booking);
  }

  return (
    <>
      <Navbar onBookNow={handleBookNow} />
      <Hero onBook={handleBookNow} />
      <SearchBar
        query={query} setQuery={setQuery}
        specialty={specialty} setSpecialty={setSpecialty}
        location={location} setLocation={setLocation}
        onSearch={handleSearch}
      />
      <Specialties onFilter={handleSpecialtyFilter} />
      <DoctorsSection doctors={filteredDoctors} onBook={setBookingDoc} />
      <Features />
      <HowItWorks />
      <StatsBanner />
      <Footer />

      {bookingDoc && (
        <BookingModal
          doctor={bookingDoc}
          onClose={() => setBookingDoc(null)}
          onConfirm={(b) => { handleConfirmBooking(b); }}
        />
      )}
    </>
  );
}