import { Route, Routes } from 'react-router-dom';
import Investors from './pages/Investors';
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
            path='/investors'
            element={
              <Grid
                title='Investors'
                child={<Investors />}
              />}
          />
          <Route path='/styleguide' element={<Styleguide />} />
      </Routes>
  )
}

export default Root;
