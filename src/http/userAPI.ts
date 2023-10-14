import { $api } from ".";

export const getUsersAPI = async (email: string, number?: string) => {
   try {
      console.log(`userEmail: ${email} and userNumber: ${number} in getUsersAPI`);
      const response = await $api.post('api/user/search', { email, number });
      return response.data;
   } catch (error) {
      console.error("Error in getUsersAPI:", error);
      throw error;
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