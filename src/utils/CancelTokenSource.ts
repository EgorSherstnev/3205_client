import axios, { CancelTokenSource } from "axios";

let cancelTokenSource: CancelTokenSource | null = null;

const cancelPreviousRequest = () => {
   if (cancelTokenSource) {
      cancelTokenSource.cancel("Request canceled by the user.");
   }

   cancelTokenSource = axios.CancelToken.source();
};

export { cancelPreviousRequest, cancelTokenSource };
