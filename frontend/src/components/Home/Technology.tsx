import PostsList from '../PostsList';

const Technology = () => {
  return (
    <div className='mt-20'>
      <div className='flex items-center mb-12'>
        <h3 className='text-xl font-medium w-[15%]'>Technology</h3>
        <hr className='w-full border-1 border-[#BBB7B7]' />
      </div>
      <PostsList />
    </div>
  );
};

export default Technology;
