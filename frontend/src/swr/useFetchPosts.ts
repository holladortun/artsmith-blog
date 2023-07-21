/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import useSWR from 'swr';

const fetcher = async (url: string) => {
  const res = await axios.get(url, {
    headers: {
      accept: 'application/json',
    },
  });
  return res.data;
};
const useFetchPosts = () => {
  const { data, error, isLoading } = useSWR(
    `https://artsmith-backend.onrender.com/api/posts`,
    fetcher,
  );

  return { data, error, isLoading };
};

export default useFetchPosts;
