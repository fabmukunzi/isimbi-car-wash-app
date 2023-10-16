import { BrowserRouter } from 'react-router-dom';
// import './App.css';
import './assets/css/global.css';
import AppRoutes from './routes';
// import { Provider } from 'react-redux';
// import store from './store';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <BrowserRouter>
        {/* <Provider store={store}> */}
          {/* <ToastContainer /> */}
          <AppRoutes />
        {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;
