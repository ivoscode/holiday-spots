import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Spinner from './components/Spinner';

const Home = lazy(() => import('./pages/Home'));
//import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Route exact path='/' component={Home} />
      </Suspense>
    </Router>
  );
}

export default App;
