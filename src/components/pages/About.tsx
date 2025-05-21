


function About() {
  return (
    <>
      
      <div className="relative w-[80vw] ml-40 flex flex-col justify-center">
        <div>
          <h2 className="text-2xl font-bold">Empowering Farmers with Timely Information</h2>
          <p className="w-1/2">
            At AgriTrack, our mission is simple: to equip farmers with accurate,
            timely, and localized data that helps improve productivity, increase
            income, and make smarter farming decisions. We understand that
            farming is more than a job—it's a way of life. That’s why we’ve
            built a platform that provides real-time market prices, harvest
            schedules, and weather updates, all in one place.
          </p>
        </div>
          <br/>
        <div>
          <h2 className="text-2xl font-bold">What We Offer</h2>
          <ul>
            <li>
              <h3 className="font-semibold">Live Market Prices</h3>
              <p>
                Know the going rates for your crops in major markets across the
                country so you can sell at the best price.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Harvest Time Tracking</h3>
              <p>
                Get personalized alerts based on your crop type, planting date,
                and region to harvest at the right time for the best yields.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Accurate Weather Forecasts</h3>
              <p>
                Make daily decisions confidently with reliable, farmer-focused
                weather updates for your location.
              </p>
            </li>
          </ul>
        </div>
        <br/>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p>
            To create a connected farming community where smallholder and
            commercial farmers have equal access to tools that make farming more
            efficient, profitable, and sustainable.
          </p>
          <br/>
          <h2 className="font-bold text-2xl">Our Mission</h2>
          <p>
            To bridge the information gap in agriculture by using technology to
            deliver practical, real-time solutions to farmers across Kenya and
            beyond.
          </p>
          <br />
          <h2 className="font-bold text-2xl">Our Values</h2>
          <ul>
            <li>
              {" "}
              <span className="underline underline-offset-4 decoration-2">Transparency:</span> We provide clear and verified data.
            </li>
            <li>
              <span className="underline underline-offset-4 decoration-2">Reliability:</span> You can count on us for accurate, timely
              updates.
            </li>
            <li>
                <span className="underline underline-offset-4 decoration-2">Empowerment:</span> We help farmers make informed choices.
            </li>
            <li>
              <span className="underline underline-offset-4 decoration-2">Innovation:</span> We use modern technology to solve real
              farming challenges.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
