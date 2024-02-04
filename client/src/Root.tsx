import { Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings';
import Investments from './pages/Investments';
import Styleguide from './pages/Styleguide';
import Grid from './components/shared/Grid';

const Root = () => {
  return (
      <Routes>
          {['/', '/investments'].map((path) =>
            <Route
              key={path}
              path={path}
              element={
                <Grid
                  title='Investments'
                  child={<Investments
                  />}
                />}
            />
          )}
          <Route path='/settings' element={<Settings />} />
          <Route path='/styleguide' element={<Styleguide />} />
        {/*<Route path='/test'>*/}
        {/*  <Route index element={<Investments />} />*/}
        {/*</Route>*/}
      </Routes>
  )
}

export default Root;
