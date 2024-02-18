import upImg1 from '../../../assets/upcoming/up1.jpeg'
import upImg2 from '../../../assets/upcoming/up2.webp'
import upImg3 from '../../../assets/upcoming/up3.jpg'
const Upcoming = () => {
    return (
        <div className="">
            <h3 className='text-5xl text-center text-sky-700 my-4 font-serif'>Upcoming Parts</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 py-6 w-full h-[400px] ">
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={upImg1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-600">RCB S1 Master Brake Pump</h2>
                        <p>To level up your riding performance, you’ve got to have the right parts! The RCB S1 Master Brake Pump was designed to enhance your inner ‘RIDER’. Level up your game now!
                            Features include:
                            <br />
                            – Ergonomic design lever adjuster for optimal response
                            <br />
                            – Visible brake fluid reservoir tank
                            <br />
                            – 14MM Brake Cylinder
                            <br />
                            – 28° adjustable lever angle</p>
                        <div className="card-actions justify-end">
                            <a
                                href="https://gearxbd.com/product/rcb-s1-radial-master-brake-pump-17mm-black/"
                                className="btn btn-outline btn-success border-0 border-b-4 btn-xs"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Show Details
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card ml-4 bg-base-100 shadow-xl image-full">
                    <figure><img src={upImg2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-600">UMA Racing Iridium Spark Plug</h2>
                        <p>UMA Racing U Tech Laser Iridium Spark Plug
                            Model: AB8 & AB9 (Racing Use)
                            UNIVERSAL Model
                            Product Benefits:
                            <br />
                            1. Improved Throttle Response
                            <br />
                            2. Promotes Better Combustion
                            <br />
                            3. Longer Plug Service Life</p>
                        <div className="card-actions justify-end">
                            <a
                                href="https://gearxbd.com/product/uma-racing-laser-iridium-plug/"
                                className="btn btn-outline btn-success border-0 border-b-4 btn-xs"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Show Details
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card ml-4 bg-base-100 shadow-xl image-full">
                    <figure><img src={upImg3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-orange-600">Alpinestars Andes V2 Drystar Jacket</h2>
                        <p>Designed using Alpinestars exclusive DRYSTAR® construction, the Andes V2 Jacket is versatile with 100% waterproofing and great levels of breathability, even in difficult riding conditions.
                            <br />
                            -Advanced reinforced poly-fabric textile and Alpinestars exclusive DRYSTAR® waterproof.</p>
                        <div className="card-actions justify-end">
                            <a
                                href="https://gearxbd.com/product/alpinestars-andes-v2-drystar-jacket-camo-red/"
                                className="btn btn-outline btn-success border-0 border-b-4 btn-xs"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Show Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upcoming;