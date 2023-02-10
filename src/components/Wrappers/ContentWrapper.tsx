interface Props{
    children: any,
    className ?: string
}

const ContentWrapper = ({children, className}: Props) => {
    return ( 
        <>
        <section className={`${className} w-4/5 xl:w-2/3 py-20 absolute left-10 xl:left-96 top-20`}>
            {children}
        </section>
        </>
     );
}
 
export default ContentWrapper;