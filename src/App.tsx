import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

// Regitering plugins in App file make them accessable globally
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return <div>App</div>;
};

export default App;
