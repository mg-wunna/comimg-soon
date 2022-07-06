import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import useWindowDimensions from './user-window.jsx';
import { SiFacebook } from 'react-icons/si';
import { IoCall } from 'react-icons/io5';
import logo from './images/vieline-logo.png';

const App = () => {
  const { width } = useWindowDimensions();
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='container relative mx-auto flex flex-col items-center'>
        <img className='z-10 h-[200px] w-[200px] lg:h-[400px] lg:w-[400px]' src={logo} alt='Vietline logo' />
        <h1 className='z-10 mt-1 text-3xl font-medium text-secondary lg:text-6xl'>WE ARE COMING SOON!!</h1>
        <h2 className='z-10 mt-8 text-center text-base text-secondary lg:text-center lg:text-3xl'>
          You could get the organic coffee and feel {width > '768' ? '' : <br />}
          <span className='text-primary'> the vietnamese coffee style</span>
          <br /> at our peaceful and charming {width > '768' ? '' : <br />} <span className='text-primary'>vietnam coffee house</span>
        </h2>

        <p className='mt-10 text-lg text-gray-500 lg:text-2xl '>Stay tuned for something amazing</p>
        <div className='z-10 mt-28 flex w-screen items-center justify-center'>
          <a className='flex items-center' href='https://www.facebook.com/vietlinecoffeemdy'>
            <SiFacebook />
            <p className='ml-2'>@vietlinecoffeemdy</p>
          </a>

          <a className='ml-10 flex items-center' href='tel:+959751249866'>
            <IoCall />
            <p className='ml-2'>09751249866</p>
          </a>
        </div>

        {/* Confetti Circle */}
        <svg className='absolute right-[30px] bottom-[40px] h-8 w-8 animate-heartbeat lg:right-[62px] lg:bottom-[72px] lg:h-14 lg:w-14' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M52 27.8362C52 40.7533 41.3219 51.3449 28 51.3449C14.6781 51.3449 4 40.7533 4 27.8362C4 14.9191 14.6781 4.32739 28 4.32739C41.3219 4.32739 52 14.9191 52 27.8362Z' stroke='#E40173' strokeWidth='8' />
        </svg>

        {/* Confetti Ribbon */}
        <svg className='absolute right-[0px] top-[200px] h-[30px] w-[100px] animate-heartbeat delay-75 lg:right-[160px] lg:top-[336px] lg:h-[84px] lg:w-[63px]' viewBox='0 0 63 84' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M6.11014 70.6425L26.6005 65.1521L21.1101 44.6617L41.6005 39.1713L36.1101 18.6809L56.6005 13.1906' stroke='#00A7E5' strokeWidth='8' strokeLinecap='round' strokeLinejoin='round' />
        </svg>

        {/* Confetti Arch */}
        <svg className='absolute right-[20px] top-[100px] h-[10px] w-[29px] animate-heartbeat delay-100 lg:right-[250px] lg:top-[176px] lg:h-[24px] lg:w-[71px]' viewBox='0 0 71 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.94171 20.7805C7.52445 15.6535 12.3024 11.4765 17.8622 8.61107C23.422 5.7456 29.5962 4.27787 35.8507 4.33485C42.1052 4.39183 48.2517 5.97181 53.7584 8.9381C59.265 11.9044 63.9661 16.1677 67.4548 21.3591'
            stroke='#E2A21F'
            strokeWidth='8'
          />
        </svg>

        {/* Confetti Dot */}
        <svg className='absolute left-[150px] top-[170px] h-[20px] w-[20px] animate-heartbeat delay-150 lg:left-[339px] lg:top-[299px] lg:h-[24px] lg:w-[24px]' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='12' cy='12' r='12' fill='#C19CFC' />
        </svg>

        {/* Confetti Triangle */}
        <svg className='absolute left-[100px] top-[30px] h-[20px] w-[20px] animate-heartbeat delay-200 lg:left-[342px] lg:top-[62px] lg:h-[37px] lg:w-[42px]' viewBox='0 0 42 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M21 0.333252L41.7846 36.3333H0.215393L21 0.333252Z' fill='#00CC67' />
        </svg>

        {/* Confetti Badge */}
        <svg className='absolute left-[10px] top-[180px] h-[30px] w-[30px] animate-heartbeat delay-300 lg:left-[79px] lg:top-[296px] lg:h-[56px] lg:w-[56px]' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M28 0L52.2487 14V42L28 56L3.75129 42V14L28 0Z' fill='#D9DBE9' />
        </svg>

        {/* Confetti Square */}
        <svg className='absolute left-[60px] bottom-[30px] h-[35px] w-[35px] animate-heartbeat delay-200 lg:left-[165px] lg:bottom-[138px] lg:h-[40px] lg:w-[40px]' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect width='40' height='40' fill='#D9DBE9' />
        </svg>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('vietline'));
root.render(<App />);
