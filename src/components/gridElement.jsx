import { Link,useLocation } from 'react-router-dom';

export const GridElement = ({ bgColor = 'bg-blue-950', text = 'HACKATHONS', link = 'hackathons' }) => {
  const location = useLocation(); // current path
  const basePath = location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname;
  const fullPath = `${basePath}/${link.replace(/^\//, '')}`; // remove leading slash if present

  return (
    <Link to={fullPath}>
      <div
        className={`${bgColor} text-white font-bold h-[200px] w-[300px] rounded-xl shadow-lg mt-4 flex items-center justify-center p-2 hover:scale-105 transition-transform duration-300`}
      >
        <div
          className="w-full h-full flex items-center justify-center text-center leading-tight"
          style={{
            fontSize: 'clamp(0.75rem, 2vw, 2rem)',
          }}
        >
          {text}
        </div>
      </div>
    </Link>
  );
};
