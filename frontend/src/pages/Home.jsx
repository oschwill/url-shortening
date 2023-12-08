import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ShortenerInput from '../components/main/ShortenerInput';
import Brand from '../components/main/Brand';
import GetStarted from '../components/main/GetStarted';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <ShortenerInput />
        <Brand />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
};

export default Home;
