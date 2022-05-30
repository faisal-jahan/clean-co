import React from "react";
import BucketGirl from "../../assets/images/bucketgirl.png";

const Landing = () => {
  return (
    <div>
      <div class="hero h-screen lg:h-[60vh] bg-base-200 relative z-0">
        <div class="hero-content flex-col lg:flex-row">
          <div data-aos="fade-right">
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6 mx-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
            <div className="h-[60vh] shrink-0">
                <img
                src={BucketGirl} alt=""
                class="h-full"
            />
            </div>
        </div>
      </div>
      <div className="container mx-auto shadow-lg px-10 py-5 rounded-xl bg-base-300 relative z-20 mt-[-50px]">
        <div className="mb-3">
            <h1 className="text-xl font-bold">Get Free Estimate</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            <input type="text" placeholder="Type here" class="input w-full" />
            <input type="text" placeholder="Type here" class="input w-full" />
            <input type="text" placeholder="Type here" class="input w-full" />
            <input type="text" placeholder="Type here" class="input w-full" />
            <input type="text" placeholder="Type here" class="input w-full" />
            <input type="text" placeholder="Type here" class="input w-full" />
            <input type="text" placeholder="Type here" class="input w-full" />
            <input type="text" placeholder="Type here" class="input w-full" />
        </div>
        <button className="btn btn-primary mt-3">Get Quote</button>
      </div>
    </div>
  );
};

export default Landing;
