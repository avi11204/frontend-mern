// import React from 'react';
// import './SlamBook.css';

// function Slambook() {
//   return (
//     <div className="slambook-container">
//       <div className="slambook-box">
//         <form className="slambook-form">
//           <fieldset>
//             <legend className="form-legend">Slambook Details</legend>

//             <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input
//                 id="name"
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="nickname">Nickname:</label>
//               <input
//                 id="nickname"
//                 type="text"
//                 name="nickname"
//                 placeholder="Your Nickname"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="address">Address:</label>
//               <input
//                 id="address"
//                 type="text"
//                 name="address"
//                 placeholder="Your Address"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="phone">Phone Number:</label>
//               <input
//                 id="phone"
//                 type="tel"
//                 name="phone"
//                 placeholder="Your Phone Number"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="memories">Good Memory:</label>
//               <textarea
//                 id="memories"
//                 name="memories"
//                 placeholder="A Good Memory of Yours"
//                 required
//               ></textarea>
//             </div>

//             <div className="form-group">
//               <label>Gender:</label>
//               <div className="gender-options">
//                 <label>
//                   <input type="radio" name="gender" value="male" required /> Male
//                 </label>
//                 <label>
//                   <input type="radio" name="gender" value="female" required /> Female
//                 </label>
//                 <label>
//                   <input type="radio" name="gender" value="other" required /> Other
//                 </label>
//               </div>
//             </div>

//             <div className="form-group">
//               <label>Favorite Actors:</label>
//               <div className="actor-options">
//                 <label>
//                   <input type="checkbox" name="actor" value="Suriya" /> Suriya
//                 </label>
//                 <label>
//                   <input type="checkbox" name="actor" value="Karthi" /> Karthi
//                 </label>
//                 <label>
//                   <input type="checkbox" name="actor" value="Rajini" /> Rajini
//                 </label>
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="school">School Name:</label>
//               <input
//                 id="school"
//                 type="text"
//                 name="school"
//                 placeholder="Your School Name"
//                 required
//               />
//             </div>

//             <button type="submit">Submit</button>
//           </fieldset>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Slambook;
import React from 'react';
import './SlamBook.css';

function Slambook() {
  return (
    <div className="slambook-container">
      <div className="slambook-box">
        <form className="slambook-form">
          <fieldset>
            <legend className="form-legend">Slambook Details</legend>

            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
<br></br>
            <div className="form-group">
              <label htmlFor="nickname">Nickname:</label>
              <input
                id="nickname"
                type="text"
                name="nickname"
                placeholder="Enter your nickname"
                required
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="Enter your address"
                required
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="memories">Memories:</label>
              <textarea
                id="memories"
                name="memories"
                placeholder="Write your memories"
                required
              ></textarea>
            </div>
            <br></br>
            <div className="form-group">
              <label>Gender:</label>
              <div className="gender-options">
                <label>
                  <input type="radio" name="gender" value="male" required /> Male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" required /> Female
                </label>
                <label>
                  <input type="radio" name="gender" value="other" required /> Other
                </label>
              </div>
            </div>
            <br></br>
            <div className="form-group">
              <label>Favorite Actors:</label>
              <div className="actor-options">
                <label>
                  <input type="checkbox" name="actor" value="Suriya" /> Suriya
                </label>
                <label>
                  <input type="checkbox" name="actor" value="Karthi" /> Karthi
                </label>
                <label>
                  <input type="checkbox" name="actor" value="Rajini" /> Rajini
                </label>
              </div>
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="school">School:</label>
              <input
                id="school"
                type="text"
                name="school"
                placeholder="Enter your school name"
                required
              />
            </div>
            <br></br>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Slambook;
