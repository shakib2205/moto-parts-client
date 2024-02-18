import bgImg from '../../assets/carusel-home/img3.avif'

const Shipment = () => {
    return (
        <div className="hero h-[600px] w-full mb-6" style={{ backgroundImage: `url("${bgImg}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-bold">Coming Soon.....</h1>
                </div>
            </div>
        </div>
    );
};

export default Shipment;