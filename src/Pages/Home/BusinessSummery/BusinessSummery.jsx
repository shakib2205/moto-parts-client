import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLightbulb,
  faPeopleGroup,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const BusinessSummary = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  return (
    <div className="my-16">
      <h1 className="text-center text-5xl text-sky-700 my-10 font-serif">
        Our Services
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        <div className="card bg-gray-200 shadow-xl">
          <figure className="px-10 pt-10">
            <p className="text-4xl text-orange-600">
              <FontAwesomeIcon icon={faGlobe} />
            </p>
          </figure>
          <div className="card-body items-center text-center">
            <VisibilitySensor onChange={onVisibilityChange}>
              <div>
                <p>Countries: </p>
                {isVisible ? (
                  <h2 className="text-center text-4xl font-bold ">
                    <CountUp
                      start={1}
                      end={8}
                      duration={2}
                      separator=" "
                      decimals={1}
                      decimal=""
                    ></CountUp>
                  </h2>
                ) : null}
              </div>
            </VisibilitySensor>
          </div>
        </div>
        <div className="card bg-gray-200 shadow-xl">
          <figure className="px-10 pt-10">
            <p className="text-4xl text-orange-600">
              <FontAwesomeIcon icon={faLightbulb} />
            </p>
          </figure>
          <div className="card-body items-center text-center">
            <VisibilitySensor onChange={onVisibilityChange}>
              <div>
                <p>Products: </p>
                {isVisible ? (
                  <h2 className="text-center text-4xl font-bold ">
                    <CountUp
                      start={1}
                      end={2}
                      duration={2}
                      separator=""
                      decimals={3}
                      decimal=","
                    ></CountUp>
                  </h2>
                ) : null}
              </div>
            </VisibilitySensor>
          </div>
        </div>
        <div className="card  bg-gray-200 shadow-xl">
          <figure className="px-10 pt-10">
            <p className="text-4xl text-orange-600">
              <FontAwesomeIcon icon={faPeopleGroup} />
            </p>
          </figure>
          <div className="card-body items-center text-center">
            <VisibilitySensor onChange={onVisibilityChange}>
              <div>
                <p>Customers: </p>
                {isVisible ? (
                  <h2 className="text-center text-4xl font-bold ">
                    <CountUp
                      start={1}
                      end={10}
                      duration={2}
                      separator=" "
                      decimals={3}
                      decimal=","
                    ></CountUp>
                  </h2>
                ) : null}
              </div>
            </VisibilitySensor>
          </div>
        </div>
        <div className="card bg-gray-200 shadow-xl">
          <figure className="px-10 pt-10">
            <p className="text-4xl text-orange-600">
              <FontAwesomeIcon icon={faThumbsUp} />
            </p>
          </figure>
          <div className="card-body items-center text-center">
            <VisibilitySensor onChange={onVisibilityChange}>
              <div>
                <p>Reviews: </p>
                {isVisible ? (
                  <h2 className="text-center text-4xl font-bold ">
                    <CountUp
                      start={1}
                      end={5}
                      duration={2}
                      separator=" "
                      decimals={2}
                      decimal=""
                    ></CountUp>
                  </h2>
                ) : null}
              </div>
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
