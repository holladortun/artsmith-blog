/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { useState } from 'react';

const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState(false);

  const createPost = async (title: string, content: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post('https://artsmith-backend.onrender.com/api/posts', {
        title,
        content,
      });

      if (response.status === 201) {
        setSuccess(true);
      } else {
        setError('Failed to create the post. Please try again later.');
      }
    } catch (error) {
      setError('An error occurred while creating the post.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, createPost };
};

export default useCreatePost;
