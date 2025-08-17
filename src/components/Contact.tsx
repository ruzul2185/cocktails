import { useGSAP } from "@gsap/react";
import { socials } from "../constants.tsx";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", {
      type: "words",
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });
  return (
    <footer id="contact">
      <img
        // src="/images/footer-right-leaf.png"
        src="https://res.cloudinary.com/dvl1ejzlg/image/upload/v1755427429/footer-right-leaf_sduilo.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        // src="/images/footer-left-leaf.png"
        src="https://res.cloudinary.com/dvl1ejzlg/image/upload/v1755427425/footer-left-leaf_aonpi0.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Creator</h3>
          <p>ruzul2185</p>
        </div>

        <div>
          <h3>Phone</h3>
          <p>+91 ***-***-****</p>
          <p>ruzulchaure2185@gmail.com</p>
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
