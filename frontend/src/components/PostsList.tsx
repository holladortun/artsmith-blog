import useFetchPosts from '../swr/useFetchPosts';
import Post from './Post';

const PostsList = () => {
  const { data } = useFetchPosts();
  return (
    <div>
      <div className='grid grid-cols-4'>
        {data
          ?.slice(-4)
          .reverse()
          .map((item) => {
            return <Post key={item?.title} details={item} />;
          })}
      </div>
    </div>
  );
};

export default PostsList;
