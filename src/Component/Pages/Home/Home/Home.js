import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import ClientReviews from '../ClientReviews/ClientReviews';
import Parts from '../Parts/Parts';



const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <Parts></Parts>
     <BusinessSummary></BusinessSummary>
     <ClientReviews></ClientReviews>
    </div>
  );
};

export default Home;