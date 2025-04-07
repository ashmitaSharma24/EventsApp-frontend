import { Textfit } from 'react-textfit';
import { Link } from 'react-router-dom';

export const GridElement = ({ bgColor = 'bg-orange-600', text = 'Debate', link = '#' }) => {
  return (
    <Link to={link}>
      <div className={`${bgColor} text-white font-bold h-[160px] w-[160px] rounded-xl shadow-lg mt-4 flex items-center justify-center p-2 hover:scale-105 transition-transform duration-300`}>
        <Textfit
          mode="multi"
          max={32}
          className="w-full h-full flex items-center justify-center text-center leading-tight"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
        >
          {text}
        </Textfit>
      </div>
    </Link>
  );
};
