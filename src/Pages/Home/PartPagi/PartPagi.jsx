import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/carusel-home/img1.jpeg'
import slide2 from '../../../assets/carusel-home/img2.jpeg'
import slide3 from '../../../assets/carusel-home/img3.avif'


const PartPagi = () => {
    return (
        <section className='mt-8'>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24 "
            >
                <SwiperSlide>
                    <img className='h-[300px] w-full' src={slide1} alt="" />
                    <h3 className="text-4xl uppercase ml-12 -mt-44 text-red-700">Up to 30% of</h3>
                    <span className="text-xl ml-12 -mt-44 text-slate-200">On Every Spare Parts</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[300px] w-full' src={slide2} alt="" />
                    <h3 className="text-4xl ml-12 -mt-44 text-white">Shop Safely</h3>
                    <span className="text-xl ml-12 -mt-44 text-white">Shop with confidence!Your well-being is our priority.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[300px] w-full' src={slide3} alt="" />
                    <h3 className=" absolute text-4xl ml-12 -mt-44 text-white">We Ship WordWide</h3>
                    <span className="absolute text-xl ml-12 -mt-32 text-white">Quality bike parts delivered to your doorstep. 30 days return guaranteed.</span>
                </SwiperSlide>
                
            </Swiper>
        </section>
    );
};

export default PartPagi;