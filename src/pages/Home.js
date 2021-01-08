import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cities from '../components/Cities/Cities';

import Activities from '../components/Activities/Activities';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
//import Venues from '../../utility/Venue/Venues';

const Home = () => {
  const [appState, setAppState] = useState({
    cities: [],
    europeCities: {},
    asiaCities: {},
    exoticCities: {},
  });
  const [activitiesUrlState, setActivitiesUrl] = useState([]);
  const [venuesUrlState, setVenuesUrl] = useState({});
  console.log(venuesUrlState);

  useEffect(() => {
    const fetchData = async () => {
      const citiesUrl = `${window.apiHost}/cities/recommended`;
      const europeCitiesUrl = `${window.apiHost}/cities/europe`;
      const asiaCitiesUrl = `${window.apiHost}/cities/asia`;
      const exoticCitiesUrl = `${window.apiHost}/cities/exotic`;

      const citiesPromises = [];

      citiesPromises.push(axios.get(citiesUrl));
      citiesPromises.push(axios.get(europeCitiesUrl));
      citiesPromises.push(axios.get(asiaCitiesUrl));
      citiesPromises.push(axios.get(exoticCitiesUrl));

      Promise.all(citiesPromises).then((data) => {
        const recommendedCities = data[0].data;
        const europeCities = data[1].data;
        const asiaCities = data[2].data;
        const exoticCities = data[3].data;

        setAppState({
          ...appState,
          cities: recommendedCities,
          europeCities,
          asiaCities,
          exoticCities,
        });
      });
      const activitiesUrl = `${window.apiHost}/activities/today`;
      const activities = await axios(activitiesUrl);
      setActivitiesUrl(activities.data);

      const recVenuesUrl = `${window.apiHost}/venues/recommended`;
      const venues = await axios(recVenuesUrl);
      setVenuesUrl(venues.data);
    };
    fetchData();
    console.log(venuesUrlState + 'state');
  }, []);

  return (
    <div className=''>
      <Header />
      <Hero />
      <Layout>
        <Cities cities={appState.cities} header='Recommended Cities For You' />
        <Activities
          activities={activitiesUrlState}
          header='Today in your area'
        />
      </Layout>
      <Footer />
    </div>
  );
};

export default Home;
