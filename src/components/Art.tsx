import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { featureLists, goodLists } from "../constants.tsx";
import { useMediaQuery } from "react-responsive";

const Art = () => {
  const isMobie = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const start = isMobie ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom 40%",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(".masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  });
  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img
                  // src="/images/check.png"
                  src="https://res.cloudinary.com/dvl1ejzlg/image/upload/v1755427417/check_lsqdey.png"
                  alt="check"
                />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              // src="/images/under-img.jpg"
              src="https://res.cloudinary.com/dvl1ejzlg/image/upload/v1755427458/under-img_qaspbx.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img
                  // src="/images/check.png"
                  src="https://res.cloudinary.com/dvl1ejzlg/image/upload/v1755427417/check_lsqdey.png"
                  alt="check"
                />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div className="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn't just a drink. It's a carefully crafted moment made just
              of you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
