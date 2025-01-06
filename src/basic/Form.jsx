// import './Form.css';

// function Form() {
//  // let name="avi";
//     return (
//         <div className='text1'>
//           {/* <h1>hello {name}</h1> */}
//             <h1>hello avi</h1>
//             <h1>hello harsa</h1>
//         </div>
//   )
// }
// export default Form;
//---------------------------------------------------------
import {Component } from 'react';
import Apple from './Apple';

class Form extends Component {
  render() {
    return (
      <div className='text1'>
        <h1>hello</h1>
        <Apple />
      </div>  
    ) 
  }
} 
export default Form
//---------------------------------------------------------------------------