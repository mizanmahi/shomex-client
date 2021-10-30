import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            setLoading(true);

            const { data } = await axios(url);
            setData(data);

            setLoading(false);
         } catch (error) {
            setError(error.message);
         }
      };

      fetchData();
   }, [url]);

   return {
      data,
      setData,
      loading,
      setLoading,
      error,
   };
};

export default useFetch;
