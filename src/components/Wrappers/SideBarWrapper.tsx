interface Props{
    children: any,
    className ?: string
}

const SideBarWrapper = ({children}: Props) => {
    return ( 
        <>
        <section className="flex flex-col gap-20 relative bg-slate-50">
            {children}
        </section>
        </>
     );
}
 
export default SideBarWrapper;