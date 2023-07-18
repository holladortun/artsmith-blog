/* eslint-disable import/no-extraneous-dependencies */
import { BiSolidCircle } from 'react-icons/bi';

import authorImg from '../assets/authorImg.jpg';
import sampleImg from '../assets/sampleimg.jpg';
import { PostModel } from '../models/postModel';

interface Props {
  details: PostModel;
}

const Post = ({ details }: Props) => {
  return (
    <div className='w-[300px]'>
      <div>
        <img src={sampleImg} alt='' className='w-[300px] bg-top bg-cover rounded-[10px]' />
      </div>
      <div className='flex items-end gap-2 mt-5 '>
        <div>
          <img src={authorImg} alt='' className='rounded-[5px] w-[30px] h-[30px] bg-cover bg-top' />
        </div>
        <div>
          <h5>John Doe</h5>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='font-semibold text-[19px] leading-[23px]'>{details?.title}</h3>
        <p className='text-black/60 text-[15px] mt-1'>{details?.content} ...</p>
      </div>
      <div className='flex items-center text-[14px] gap-4 mt-4'>
        <p>Apr 23</p>
        <BiSolidCircle className='text-[5px]' />
        <p>7 min read</p>
        <p className='px-3 py-1 rounded-full bg-secondary'>Technology</p>
      </div>
    </div>
  );
};

export default Post;
