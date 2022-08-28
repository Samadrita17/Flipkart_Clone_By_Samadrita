

// components:  (routing(same folder))
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';

import DataProvider from './context/DataProvider';

import {Box} from '@mui/material';

//BrowserRouter:to enable routing on whole project, use BrowserRouter
//Routes: tp enable routing withing specific components(wrap)
//Route: to mention Url, for Url based routing
import { BrowserRouter , Routes, Route} from 'react-router-dom';  

function App() {
  return (
    <DataProvider >

      <BrowserRouter>

        <Header /> 
        <Box style={{marginTop:54}}>

          <Routes>
            <Route path='/' element= { <Home />} />  {/* when path is empty(/) then home component */}
            <Route path='/product/:id' element= { <DetailView />} />  {/* when path is product(id is variable) then DetailView component */}
          </Routes>

        </Box>

      </BrowserRouter>

    </DataProvider>
  );
}

export default App;


