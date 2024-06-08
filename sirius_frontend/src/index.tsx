import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'App/style.scss';
import { Provider } from 'react-redux';
import { store } from './app/store/store';


const RootComponent = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(<RootComponent />);