import { useState, useEffect } from "react";
import axios from "axios";

export const useGetUserID = () => {
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const fetchUserID = async () => {
      try {
        const response = await axios.get("http://localhost:3001/getUserID");
        setUserID(response.data.userID);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserID();
  }, []);

  return userID;
};
