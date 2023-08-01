
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PetObjects from './Pet/PetObjects';
import BoredAPI from './BoredAPI/BoredAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BoredAPI />
{/* <PetObjects/> */}
 </>
);

reportWebVitals();
