/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

import sampleImg from '../assets/sampleimg.jpg';
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
    <div className='max-w-[1440px] mx-auto px-[50px] container flex justify-center py-20'>
      <div className=' w-[550px] flex flex-col items-center '>
        <h2 className='text-3xl font-bold text-primary'>Publish a Post</h2>
        <form
          className='flex flex-col w-full gap-8 p-5 mt-10 shadow-md rounded-xl'
          onSubmit={handleCreatePost}
        >
          <img src={sampleImg} alt='' className='rounded-md' />
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
              rows={10}
            ></textarea>
          </div>
          <input
            type='submit'
            value='Create Post'
            className='py-2 text-white rounded-md cursor-pointer bg-primary'
          />
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
