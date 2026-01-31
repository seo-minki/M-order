import Image from 'next/image';
import Link from 'next/link';
import ButtonComponent from '@/components/ButtonComponent';

const Home = () => {
  return (
    <div className="h-full w-full fixed pt-8 pb-4 px-4 flex items-center flex-col justify-between overflow-auto home">
      <section className="relative max-w-5xl w-full h-full mx-auto">
        <h1 className="text-4xl text-center text-white">M-Coffee</h1>
      </section>
      <ButtonComponent
        classNames="text-xl relative text-white font-bold w-full max-w-5xl h-[72px] bg-black rounded-xl relative flex-shrink-0"
        buttonText="메뉴 보기"
      >
        <Link href="/menu" className="absolute left-0 top-0 block w-full h-full"></Link>
      </ButtonComponent>
    </div>
  );
};

export default Home;
