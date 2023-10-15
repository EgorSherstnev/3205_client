import React, { FormEvent, useState } from "react";
import InputMask from "react-input-mask";
import { ISearchUserProps } from "../models/ISearchUserProp";

const SearchUser: React.FC<ISearchUserProps> = ({fetchUsers}) => {

   const [userEmail, setUserEmail] = useState('')
   const [userNumber, setUserNumber] = useState('')
   const [emailError, setEmailError] = useState("");

   const handleSearch = async (e: FormEvent) => {
      e.preventDefault();

      if (!userEmail) {
         setEmailError("The Email field is required.");
         return;
      }

      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(userEmail)) {
      setEmailError("Please, enter a valid email.");
      return;
      }
      
      setEmailError("");

      try {
         const users = await fetchUsers(userEmail, userNumber);
         console.log(users); 
      } catch (error) {
         console.error("Error in handleSearch:", error);
         throw error;
      }
   }

   return (
      <div className="input-container">
         <form 
            onSubmit={handleSearch}
            className="input-container__form form"
         >
            <label 
               className="form-label__email label"
            >
               Email (mandatory):
            </label>
            <input
               className="email__input input"
               type="text"
               placeholder="Search user"
               value={userEmail}
               onChange={(e) => {            
                  setUserEmail(e.target.value);
                  setEmailError("");
               }}
            />
            {emailError && <div className="error-message">{emailError}</div>}
            <label
               className="form-label__number label"
            >
               Number (optional):
            </label>
            <InputMask
               mask="99-99-99"
               maskChar="_"
               className="number__input input"
               type="text"
               placeholder="Add user number"
               value={userNumber}
               onChange={(e) => setUserNumber(e.target.value)}
            />
            <button 
               className="button"
               type="submit"
            >Submit</button>
         </form>
      </div>
   )
}

export default SearchUser;