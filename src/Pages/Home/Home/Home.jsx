import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import coverImg from '../../../assets/h-assets/cover-home.jpg'
import PartPagi from '../PartPagi/PartPagi';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Reviews from '../Reviews/Reviews';
import Upcoming from '../Upcoming/Upcoming';
import SpareParts from '../../SpareParts/SpareParts';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Moto || Home</title>
            </Helmet>
            <Cover img={coverImg}></Cover>
            <PartPagi></PartPagi>
            <SpareParts></SpareParts>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <Upcoming></Upcoming>
        </div>
    );
};

export default Home;