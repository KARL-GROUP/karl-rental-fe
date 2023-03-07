interface Props{
    children: any,
    className ?: string
}

const SectionWrapper = ({children}: Props) => {
    return ( 
        <>
        <section className="bg-main">
        <section className="px-8 xl:max-w-[85rem] mx-auto ">
            {children}
        </section>
        </section>
        </>
     );
}
 
export default SectionWrapper;