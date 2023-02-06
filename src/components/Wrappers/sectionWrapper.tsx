interface Props{
    children: any,
    className ?: string
}

const SectionWrapper = ({children}: Props) => {
    return ( 
        <>
        <section className="px-8 xl:max-w-[80rem] mx-auto">
            {children}
        </section>
        </>
     );
}
 
export default SectionWrapper;