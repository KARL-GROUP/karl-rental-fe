import SectionWrapper from "../Wrappers/sectionWrapper";
import HowItWorksCard from "../cards/HowItWorksCard";
import { steps } from "@/data/steps";

const HowItWorks = () => {
    return ( 
        <>
        <SectionWrapper>
        <h1 className="text-center mt-16 font-bold text-2xl">How it works</h1>


        <section className="px-22 py-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-16">

          {steps.map((step: any, index:number) => {
            return(
              <HowItWorksCard key={index} title={step.title} image={step.image} description={step.description} />
            )
          })}





        </section>
        </SectionWrapper>

        </>
     );
}
 
export default HowItWorks;