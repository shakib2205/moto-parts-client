import react from "../../assets/skills/react.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import reactBootstrap from "../../assets/skills/reactBoostrap.png";
import daisyUi from "../../assets/skills/daisyUi.png";
import tailwind from "../../assets/skills/taliwindBlack.png";
import firebase from "../../assets/skills/firebase.png";
import nodeJs from "../../assets/skills/nodejs.png";
import mongoDB from "../../assets/skills/mongodb.webp";
import express from "../../assets/skills/Express.png";

const AboutMe = () => {
    return (
        <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-1">
        <div className="flex flex-col justify-center items-center py-16">
          <h4 className="text-xl font-bold my-3">Md Shakibur Rahman</h4>
          <p className="my-3">
            <span className="font-bold">Email:</span>{" "}
            mshakib272@gmail.com
          </p>
          <p className="my-3">
            {" "}
            <span className="font-bold">University:</span> Daffodil
            International University
          </p>
          <p className="my-3">
            <span className="font-bold">Department:</span> Department of
            Software Engineering
          </p>
        </div>
        <div className="py-16 flex flex-col justify-center items-center">
          <h6 className="font-bold text-lg my-3"> Web Development Skills:</h6>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-3">
            <div className="flex flex-col justify-center items-center p-5 rounded-lg bg-gray-100">
              <img className="w-24 rounded-xl" src={react} alt="" />
              <p className="pt-3">ReactJS</p>
            </div>
            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24 rounded-xl" src={bootstrap} alt="" />
              <p className="pt-3">Bootstrap</p>
            </div>
            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24 rounded-xl" src={tailwind} alt="" />
              <p className="pt-3">Tailwind</p>
            </div>
            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24 rounded-xl" src={reactBootstrap} alt="" />
              <p className="pt-3">React-Bootstrap</p>
            </div>

            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24 rounded-xl" src={daisyUi} alt="" />
              <p className="pt-3">Daisy UI</p>
            </div>
            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24 rounded-xl" src={firebase} alt="" />
              <p className="pt-3">Firebase</p>
            </div>
            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24 rounded-xl" src={nodeJs} alt="" />
              <p className="pt-3">NodeJS</p>
            </div>
            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24 rounded-xl" src={mongoDB} alt="" />
              <p className="pt-3">MongoDB</p>
            </div>
            <div className="flex flex-col justify-center items-center p-5  rounded-lg bg-gray-100">
              <img className="w-24 rounded-xl" src={express} alt="" />
              <p className="pt-3">ExpressJS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AboutMe;