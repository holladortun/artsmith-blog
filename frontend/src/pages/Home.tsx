import QuickReads from '../components/Home/QuickReads';
import Technology from '../components/Home/Technology';

const Home = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-[50px] container'>
      <QuickReads />
      <Technology />
    </div>
  );
};

export default Home;
