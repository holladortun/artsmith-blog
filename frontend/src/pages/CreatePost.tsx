/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

import useCreatePost from '../hooks/useCreatePost';

const CreatePost = () => {
  const { createPost } = useCreatePost();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreatePost = (e: any) => {
    e.preventDefault();
    createPost(title, content);
    setContent('');
    setTitle('');
  };

  return (
    <div className='max-w-[1440px] mx-auto px-[50px] container flex justify-center pt-20'>
      <div className=' w-[550px] flex flex-col items-center '>
        <h2 className='text-3xl font-bold text-primary'>Publish a Post</h2>
        <form
          className='flex flex-col w-full gap-8 p-5 mt-10 shadow-md rounded-xl'
          onSubmit={handleCreatePost}
        >
          <div className='flex flex-col gap-1'>
            <label className='font-medium text-[18px]'>Title</label>
            <input
              type='text'
              className='px-2 py-2 border-2 rounded-md text-[15px] '
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-[18px] font-medium'>Content</label>
            <textarea
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              className='px-2 py-2 border-2 rounded-md text-[15px]'
            ></textarea>
          </div>
          <input type='submit' value='Create Post' />
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
