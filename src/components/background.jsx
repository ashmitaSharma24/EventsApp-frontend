import { Navbar } from "./navbar";

export const Background = ({children}) => {
    return (
        <div className="bg-slate-100 h-screen w-full overflow-scroll scrollbar-hide">
            <Navbar />
            {children}
        </div>
    );
};
