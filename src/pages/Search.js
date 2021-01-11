import React, { useState, useEffect } from 'react';

import Spinner from '../components/Spinner';
import axios from 'axios';
import Cities from '../components/Cities/Cities';
import Activities from '../components/Activities/Activities';

function Search(props) {
  const [activities, setActivities] = useState([]);
  const [cities, setCities] = useState([]);

  const [apiResponse, setResponse] = useState(false);

  useEffect(() => {
    const fetchSearchData = async () => {
      const searchTerm = props.match.params.searchTerm;
      const url = `${window.apiHost}/search/${searchTerm}`;
      const resp = await axios.get(url);
      setActivities(resp.data.activities);
      setCities(resp.data.cities);

      setResponse(true);
    };
    fetchSearchData();
  }, []);

  if (!apiResponse) {
    return <Spinner />;
  }
  return (
    <div className=''>
      <div className=''>
        <div className=''>
          <Cities cities={cities} header='Cities Matching Your Search' />
        </div>
        <div className=''>
          <Activities
            activities={activities}
            header='Activies Matching Your Search'
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
