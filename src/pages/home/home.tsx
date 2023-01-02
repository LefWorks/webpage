import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Land from "./components/landSection";
import { scroller } from "react-scroll";
import LandImg from "@assets/computer_business.svg";
import AboutImg from "@assets/about_img.svg";
import Features from "./components/featureSection";
import AboutUs from "./components/aboutUsSection";
import Contact from "./components/contactSection";
import { useSendContact } from "./api";

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
  const { send, isSent, isSending } = useSendContact();

  return (
    <div className="relative flex flex-col bg-indigo-50">
      <main className="relative flex flex-col">
        <Navbar
          onBrandTo={"content"}
          options={[
            {
              title: "Services",
              to: "services",
            },
            {
              title: "About us",
              to: "about",
            },
            {
              title: "Contact",
              to: "contact",
            },
          ]}
        />

        <Land.Container id="content">
          <Land.Description
            onContactPress={() =>
              scroller.scrollTo("contact", {
                duration: 1500,
                delay: 100,
                smooth: true,
              })
            }
          />
          <Land.Image src={LandImg} />
        </Land.Container>

        <Features.Container id="services">
          <Features.Description />
          <Features.Items features={FEATURES} />
        </Features.Container>

        <AboutUs.Container id="about">
          <AboutUs.Description />
          <AboutUs.Image src={AboutImg} />
        </AboutUs.Container>

        <Contact.Container id="contact">
          <Contact.Form
            onSendPress={({ name, email, description }) =>
              send(name, email, description)
            }
            isSent={isSent}
            isSending={isSending}
          />
        </Contact.Container>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
