import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderSection from "@/components/HeaderSection";
import AboutSection from "@/components/AboutSection";
import CounterSection from "@/components/CounterSection";
import ProgramSection from "@/components/ProgramSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import OurTeachersSection from "@/components/OurTeachersSection";
import FAQSection from "@/components/FAQSection";
import ContactUsSection from "@/components/ContactUsSection";
import OpenDay from "@/components/OpenDay";

export default function Home() {

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <Nav />
        <main className="flex-grow">
          <HeaderSection/>
          <AboutSection/>
          {/* <CounterSection/> */}
          <OpenDay/>
          <ProgramSection/>
          <WhyChooseUsSection/>
          <OurTeachersSection/>
          <FAQSection/>
          <ContactUsSection/>

          {/* <Carousel />
          <div className="container mx-auto mt-20">
          </div>
          <div className="min-h-screen flex flex-col justify-center items-center mt-10 mb-10">
            <h1 className="text-4xl font-bold mb-8">Timeline Example</h1>
            <Timeline />
          </div>
          <div className="container mx-auto mb-10">
          </div>*/}

        </main>
        <Footer /> 
      </div>
    </>
  );
}
