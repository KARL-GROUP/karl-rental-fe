
interface Props {
    testimony: string,
    name: string,
    index: number

}

const Testimony = ({ testimony, name, index }: Props) => {
    return (
        <div className={` ${index === 1 ? "bg-white shadow-xl" :" bg-stone-50  "} px-10 pt-5 rounded-xl flex flex-col gap-5 relative`}>
            <div className="flex justify-between px-20">
                <svg width="25" height="25" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5502 13.6668L17.5002 0.333496L13.4502 13.6668H0.833496L11.1335 21.0168L7.21683 33.6668L17.5002 25.8502L27.8002 33.6668L23.8835 21.0168L34.1668 13.6668H21.5502Z" fill="#3F3CD4" />
                </svg>
                <svg width="25" height="25" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5502 13.6668L17.5002 0.333496L13.4502 13.6668H0.833496L11.1335 21.0168L7.21683 33.6668L17.5002 25.8502L27.8002 33.6668L23.8835 21.0168L34.1668 13.6668H21.5502Z" fill="#3F3CD4" />
                </svg>

                <svg width="25" height="25" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5502 13.6668L17.5002 0.333496L13.4502 13.6668H0.833496L11.1335 21.0168L7.21683 33.6668L17.5002 25.8502L27.8002 33.6668L23.8835 21.0168L34.1668 13.6668H21.5502Z" fill="#3F3CD4" />
                </svg>

                <svg width="25" height="25" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.1668 12.4002L22.1835 11.3668L17.5002 0.333496L12.8168 11.3835L0.833496 12.4002L9.9335 20.2835L7.20016 32.0002L17.5002 25.7835L27.8002 32.0002L25.0835 20.2835L34.1668 12.4002ZM17.5002 22.6668V7.16683L20.3502 13.9002L27.6502 14.5335L22.1168 19.3335L23.7835 26.4668L17.5002 22.6668Z" fill="#3F3CD4" />
                </svg>
                <svg width="25" height="25" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.6665 15.4086L26.2865 14.1033L20.6665 0.166504L15.0465 14.1244L0.666504 15.4086L11.5865 25.3665L8.3065 40.1665L20.6665 32.3139L33.0265 40.1665L29.7665 25.3665L40.6665 15.4086ZM20.6665 28.377L13.1465 33.156L15.1465 24.1455L8.5065 18.0823L17.2665 17.2823L20.6665 8.79808L24.0865 17.3033L32.8465 18.1033L26.2065 24.1665L28.2065 33.177L20.6665 28.377Z" fill="#3F3CD4" />
                </svg>
            </div>
            <p className="text-xl">{testimony}</p>
            <p className="font-bold pb-10">{name}</p>

            <div className="flex justify-end absolute -bottom-5 bg-white right-10">
                <div className=" p-3">
                <svg width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.99984 21.4168H9.24984L13.4165 13.0835V0.583496H0.916504V13.0835H7.1665L2.99984 21.4168ZM19.6665 21.4168H25.9165L30.0832 13.0835V0.583496H17.5832V13.0835H23.8332L19.6665 21.4168Z" fill="#3F3CD4" />
                </svg>
                </div>
               

            </div>

        </div>
    );
}

export default Testimony;