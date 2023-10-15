import React, { FormEvent, useState } from "react";
import InputMask from "react-input-mask";
import { ISearchUserProps } from "../models/ISearchUserProp";

const SearchUser: React.FC<ISearchUserProps> = ({fetchUsers}) => {

   const [userEmail, setUserEmail] = useState('')
   const [userNumber, setUserNumber] = useState('')

   const handleSearch = async (e: FormEvent) => {
      e.preventDefault();
      try {
         const users = await fetchUsers(userEmail, userNumber);
         console.log(users); 
      } catch (error) {
         console.error("Error in handleSearch:", error);
         throw error;
      }
   }

   return (
      <div>
         <div>
            <form onSubmit={handleSearch}>
               <label>Email (обязательное):</label>
               <input
                  className="comment__input input"
                  type="text"
                  placeholder="Search user"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
               />
               <label>Number (опциональное):</label>
               <InputMask
                  mask="99-99-99"
                  maskChar="_"
                  className="comment__input input"
                  type="text"
                  placeholder="Add user number"
                  value={userNumber}
                  onChange={(e) => setUserNumber(e.target.value)}
               />
               <button type="submit">Submit</button>
            </form>
            
            
         </div>
      </div>
      
   )
}

export default SearchUser;