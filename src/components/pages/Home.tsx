import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl capitalize font-black text-springBeige"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Welcome to AgriTrack
        </motion.h1>

        <motion.p
          className="my-4 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Your Smart Farming Companion — stay ahead with real-time updates on
          crop prices, harvest schedules, and weather forecasts tailored for
          your region.
        </motion.p>

        <motion.h2
          className="underline decoration-someBrown decoration-4 underline-offset-8 mb-4 mt-16 text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Key Features: 
        </motion.h2>

        <ul className="space-y-6">
          {[
            { to: "/markets", label: ["Live Market Prices", <FaArrowRight className="text-lg absolute right-48 top-12" key="arrow"/>]},
            { to: "/harvests", label: ["Harvest Alerts", <FaArrowRight className="text-lg absolute right-1/3 top-12" key="arrow"/>] },
            { to: "/weather", label: ["Weather Updates", <FaArrowRight className="text-lg absolute right-52 top-12" key="arrow"/>] },
          ].map((item, index) => (
            <motion.li
              key={item.to}
              className="text-8xl font-bold text-green-900"
              initial={{ opacity: 0, x: -120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
            >
              <div className="relative">
                <Link to={item.to} className=" hover:underline underline-offset-8  decoration-someBrown decoration-4 ">
                {item.label}
              
                  
                
              </Link>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <section>
        <h3></h3>
      </section>
    </main>
  );
}

export default Home;
