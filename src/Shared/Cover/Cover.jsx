
const Cover = ({ img }) => {
    return (
        <div className="hero h-[600px]" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-10 text-2xl text-slate-400 uppercase font-bold">Moto Parts</h1>
                    <h1 className="mb-5 text-3xl font-bold pb-12 uppercase text-lime-700">
                        <span className="text-orange-800 text-5xl">Precision Parts</span> <br />for a Smoother Ride
                    </h1>
                    <p className="mb-5 text-xl text-slate-300">
                        Welcome to our bike parts shop! Quality parts, friendly service. Elevate your ride today! </p>
                    <button className="btn btn-outline btn-info border-0 border-b-4 mt-4">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Cover;