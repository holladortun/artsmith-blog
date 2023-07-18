import PostsList from '../PostsList';

const QuickReads = () => {
  return (
    <div className='mt-16'>
      <div className='flex items-center mb-12'>
        <h3 className='text-xl font-medium w-[15%]'>Quick Reads</h3>
        <hr className='w-full border-1 border-[#BBB7B7]' />
      </div>

      <PostsList />
    </div>
  );
};

export default QuickReads;
