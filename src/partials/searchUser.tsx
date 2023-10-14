import React, { useState } from "react";
import { ISearchUserProps } from "../models/ISearchUserProp";

const SearchUser: React.FC<ISearchUserProps> = ({fetchUsers}) => {

   const [userEmail, setUserEmail] = useState('')
   const [userNumber, setUserNumber] = useState('')

   const handleSearch = async () => {
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
         <input
            className="comment__input input"
            type="text"
            placeholder="Search user"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
         />
         <input
            className="comment__input input"
            type="text"
            placeholder="Add user number"
            value={userNumber}
            onChange={(e) => setUserNumber(e.target.value)}
         />
         </div>
         <button 
            className='comment__button button'
            onClick={handleSearch }
         >
            Search
         </button>
      </div>
      
   )
}

export default SearchUser;