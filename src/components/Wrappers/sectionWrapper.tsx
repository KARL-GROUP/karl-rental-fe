interface Props{
    children: string,
    className: string
}

const SectionWrapper = ({children}: Props) => {
    return ( 
        <>
        <SectionWrapper className="max-w-[80rem] mx-auto">
            {children}
        </SectionWrapper>
        </>
     );
}
 
export default SectionWrapper;