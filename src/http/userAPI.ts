import axios from "axios";
import { $api } from ".";
import { cancelPreviousRequest } from "../utils/CancelTokenSource";

export const getUsersAPI = async (email: string, number?: string) => {
   try {
      // Calling the function to cancel the previous request
      cancelPreviousRequest();
      
      console.log(`userEmail: ${email} and userNumber: ${number} in getUsersAPI`);
      const response = await $api.post('api/user/search', { email, number });
      return response.data;
   } catch (error) {
      if (axios.isCancel(error)) {
         console.log("Запрос был отменен:", error.message);
      } else {
         console.error("Произошла ошибка при запросе:", error);
      }
   }
}

export const getAllUsers = async () => {
   try {
      const response = await $api.get('api/user/getAll');
      return response.data;
   } catch (error) {
      console.error("Error in getAllUsers:", error);
      throw error;
   }
}
