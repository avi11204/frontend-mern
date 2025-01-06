// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import propsType from 'prop-types';
// import App from './App.jsx'
// // import Form from './Form.jsx'
// //import Dog from './Dog.jsx'
// import Cat from './basic/Cat.jsx'
// //import Slambook from './Slambook.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//           <App /> 
//             {/* // <Form /> */}
//              {/* <Slambook /> */}
//              {/* <Dog name="jerry" /> */}
//               {/* <Cat /> */}
              
//   </StrictMode>,
// )
//------------------------------------------------------
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apps from "./Apps";
createRoot(document.getElementById('root')).render(
  <StrictMode>
          <Apps />      
  </StrictMode>,
)