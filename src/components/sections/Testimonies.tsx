import Testimony from "../cards/Testimony";
import SectionWrapper from "../Wrappers/sectionWrapper";

const Testimonies = () => {
    const testimonies = [

        {
            person: "Emile",
            message: "Emile emile emile emile emile emile emile emile emile"
        },
        {
            person: "Emile",
            message: "Emile emile emile emile emile emile emile emile emile"
        },
        {
            person: "Emile",
            message: "Emile emile emile emile emile emile emile emile emile emile emile emile emile emilke"
        },
       
        
        

    ]
    return ( 
        <SectionWrapper>
            <section className="grid grid-cols-3 gap-10 px-28">
            {testimonies.map((test, index) => {
                return(
                    <Testimony key={index} index={index} name={test.person} testimony={test.message} />
                )

            })}
            </section>
            

        </SectionWrapper>
     );
}
 
export default Testimonies;