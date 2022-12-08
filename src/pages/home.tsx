import React from "react";
import LandSection from "../components/landSection";
import Navbar from "../components/navbar";
import LandImg from "../assets/landphoto.jpg";
import FeatureSection from "../components/featureSection";
import AboutUsSection from "../components/aboutUsSection";
import ContactSection from "../components/contactSection";
import Footer from "../components/footer";
import Wave from "../assets/wave2.svg";

const FEATURES = [
  {
    img: "/icons/features_icon01.png",
    title: "Web applications",
    description:
      "Customized & responsive web applications, social apps, CMS, E-commerce websites. We build applications that are accessible across many devices.",
  },
  {
    img: "/icons/features_icon02.png",
    title: "Mobile applications",
    description:
      "Customized cross platform mobile applications for your business. We deliver high performant & usable mobile applications using the latest technologies. Complete management of both stores.",
  },
  {
    img: "/icons/features_icon04.png",
    title: "Machine learning",
    description:
      "Customized & responsive web applications, social apps, CMS, E-commerce websites. We build applications that are accessible across many devices.",
  },
  {
    img: "/icons/features_icon05.png",
    title: "Data analysis",
    description:
      "Combine all your knowledge into a smart analytics tool with dashboards, visualizations, and custom indicators. We can help you to reinforce quality across data governance, master data management, and technology components.",
  },
  {
    img: "/icons/features_icon06.png",
    title: "Support & Maintenance",
    description:
      "We offer support and maintenance services based on your system. Bringing the right talent, customized to your unique requirements.",
  },
  {
    img: "/icons/features_icon03.png",
    title: "Continuous Delivery",
    description:
      "The best processes for agile development. Accelerate the delivery speed of your projects with cutting edge methodologies and tooling.",
  },
];

const Home = () => {
  return (
    <nav className="relative">
      <Navbar
        brandTo={"content"}
        servicesTo={"services"}
        aboutTo={"about"}
        contactTo={"contact"}
      />
      <LandSection backgroundImage={LandImg} />
      <FeatureSection features={FEATURES} />
      <AboutUsSection />
      <ContactSection />

      <Footer />

      <img
        src={Wave}
        className="object-cover absolute bottom-0 -z-10 w-screen h-[40rem] sm:max-h-[32rem] origin-bottom"
      />
    </nav>
  );
};

export default Home;
