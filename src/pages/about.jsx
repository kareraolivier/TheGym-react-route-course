const About = () => {
  return (
    <div>
      <div className="bg-about bg-cover h-72 w-full "></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-5 p-6">
        <div className="">
          <h1 className="my-4 text-2xl font-bold">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="text-lg text-gray-600 my-2">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="text-lg text-gray-600 my-2">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="text-white bg-green-600 rounded-lg p-4 flex flex-col items-center justify-center">
          <h2 className="my-2 text-xl font-bold">
            Your destination is waiting. Your van is ready.
          </h2>
          <button
            className="bg-gray-800 p-4 rounded-lg font-bold my-2 text-lg"
            type="button"
          >
            Explore our vans
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
