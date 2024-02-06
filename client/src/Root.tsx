import { Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings';
import Investments from './pages/Investments';
import Styleguide from './pages/Styleguide';
import Grid from './components/shared/Grid';

const Root = () => {
  console.log('render root');

  return (
      <Routes>
          {['/', '/investments'].map((path) =>
            <Route
              key={path}
              path={path}
              element={
                <Grid
                  title='Investments'
                  child={<Investments/>}
                />}
            />
          )}
          <Route
            path='/settings'
            element={
              <Grid
                title='Settings'
                child={<Settings />}
              />}
          />
          <Route path='/styleguide' element={<Styleguide />} />
      </Routes>
  )
}

export default Root;
