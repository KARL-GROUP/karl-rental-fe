interface Props{
    children: any,
    className ?: string
}

const SectionWrapper = ({children}: Props) => {
    return ( 
        <>
        <section className="max-w-[80rem] mx-auto">
            {children}
        </section>
        </>
     );
}
 
export default SectionWrapper;