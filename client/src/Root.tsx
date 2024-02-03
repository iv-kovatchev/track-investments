import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Settings from './pages/Settings';
import Investments from './pages/Investments';
import Styleguide from './pages/Styleguide';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/asd'>
          <Route index element={<App />} />
          <Route path='settings' element={<Settings />}>
            <Route path='test' element={<Investments />} />
          </Route>
        </Route>
        <Route path='/'>
          <Route index path='styleguide' element={<Styleguide />} />
        </Route>
        {/*<Route path='/test'>*/}
        {/*  <Route index element={<Investments />} />*/}
        {/*</Route>*/}
      </Routes>
    </BrowserRouter>
  )
}

export default Root;
