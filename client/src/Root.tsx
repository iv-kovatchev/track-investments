import { Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';
import Styleguide from './pages/Styleguide';
import Grid from './components/shared/Grid';

const Root = () => {
  return (
      <Routes>
          {['/', '/dashboard'].map((path) =>
            <Route
              key={path}
              path={path}
              element={
                <Grid
                  title='Dashboard'
                  child={<Dashboard/>}
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
