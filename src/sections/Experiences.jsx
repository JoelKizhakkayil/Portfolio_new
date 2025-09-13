import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full" id="work-experience">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
