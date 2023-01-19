import Routes from './routes/index'
import GlobalStyle from './styles/global'
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  return (
    <>
    <ToastContainer />
    <GlobalStyle />
    <Routes />
    </>
  );
}

export default App;
