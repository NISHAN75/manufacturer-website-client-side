import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import ClientReviews from '../ClientReviews/ClientReviews';
import Contact from '../Contact/Contact';
import Parts from '../Parts/Parts';



const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <Parts></Parts>
     <BusinessSummary></BusinessSummary>
     <ClientReviews></ClientReviews>
     <About></About>
     <Contact></Contact>
    </div>
  );
};

export default Home;