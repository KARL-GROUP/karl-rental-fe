interface Props{
    children: any,
    className ?: string
}

const SectionWrapper = ({children}: Props) => {
    return ( 
        <>
        <section className="bg-[#F3F2EF]">
        <section className="px-8 xl:max-w-[85rem] mx-auto ">
            {children}
        </section>
        </section>
        </>
     );
}
 
export default SectionWrapper;