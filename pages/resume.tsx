import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";

const Resume = () => {



  return (
    <motion.div className="px-6 py-2"
    variants={routeAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    >
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate" >
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-semi-bold">
              MS in Computer Science
            </h5>
        
            <h5 className="my-2 font-bold text-l">
              Certifications
            </h5 >
            <div className="my-2 text-l font-semi-bold">

            <p>Microsoft Certified: DevOps Engineer Expert</p>
            <p>AWS Certified DevOps Engineer - Professional</p>
            <p>Google Cloud:Professional Cloud DevOps Engineer</p>
            <p>CompTIA A+ , Security+ and Linux+</p>
            <p>Project Management Professional</p>
            
            </div>


            {/* <p className="my-3">
              I am currently Working as a DevOps Developer at The Office of Information Technology Services of New York State
            </p> */}
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-semi-bold">New York State Office of IT Services (DevOps/Developer)</h5>
            <p className="my-3">Design/Maintain frontend web application and its Deployment to Server</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-semi-bold">IBM (DevOps Engineer)</h5>
            <p className="my-3">Design and Deploy Automated Solition for Web Applications</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-semi-bold">Canyon Community Bank (DevOps Engineer)</h5>
            <p className="my-3">Migrated the current Linux environment to Cloud</p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;