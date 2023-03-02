import tel from '../../../public/assets/phone.png'
import gmail from '../../../public/assets/gmail.png'
import insta from '../../../public/assets/instagram.png'
import twitter from '../../../public/assets/twitter.png'
import tsap from '../../../public/assets/WhatsApp.png'
import Image from 'next/image'
import Input from '../ui/Input'
import Button from '../ui/Button'

const Footer = () => {
    const quickLinks = [
        {
            path: "",
            linkName: "About Us",

        },
        {
            path: "",
            linkName: "Explore cars",

        },
        {
            path: "",
            linkName: "Terms & conditions",

        },
        
    ]
    return (
        <>
            <footer className="bg-black flex mt-28 px-20 xl:px-44 w-full py-20  gap-5 justify-between">
            <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl text-white'>Karl</h1>
                    <div className='flex gap-3'>
                        <svg width="30px" height="30px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#ffffff" stroke-width="12" d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z" /><circle cx="96" cy="96" r="30" stroke="#ffffff" stroke-width="12" /><circle cx="135" cy="57" r="9" fill="#ffffff" /></svg>
                        <svg fill="#ffffff" width="30px" height="30px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>twitter</title>
                            <path d="M24 8.531c-0.688 1-1.5 1.844-2.469 2.563 0.031 0.219 0.031 0.438 0.031 0.656 0 6.5-4.938 14-14 14-2.781 0-5.375-0.844-7.563-2.219 0.375 0.031 0.781 0.094 1.188 0.094 2.313 0 4.406-0.813 6.094-2.125-2.188-0.031-3.969-1.5-4.594-3.438 0.281 0.063 0.625 0.094 0.938 0.094 0.438 0 0.906-0.063 1.313-0.188-2.281-0.438-3.969-2.406-3.969-4.781v-0.063c0.688 0.344 1.406 0.563 2.219 0.594-1.313-0.906-2.188-2.406-2.188-4.094 0-0.906 0.25-1.75 0.656-2.5 2.438 2.969 6.063 4.969 10.156 5.156-0.063-0.344-0.125-0.75-0.125-1.125 0-2.719 2.188-4.938 4.906-4.938 1.438 0 2.719 0.625 3.625 1.594 1.125-0.219 2.156-0.656 3.094-1.219-0.344 1.156-1.125 2.156-2.125 2.75 1-0.125 1.906-0.406 2.813-0.813z"></path>
                        </svg>
                        <svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>youtube</title>
                            <path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"></path>
                        </svg>
                    </div>
                </div>

                <div className='text-white flex flex-col gap-3'>
                    <h1  className='text-2xl'>Quick links</h1>
                    <ul className='flex flex-col gap-2'>
                        {quickLinks.map((link, index) => {
                            return(
                                <li key={index}>{link.linkName}</li>
                            )
                        })}
                    </ul>
                </div>
               
               <div className='flex flex-col gap-3'>

              
                <p className='text-white text-xl'>Any quesries? Contact us</p>

                <div className='flex gap-3 items-center text-white'>
                    <Image className='w-4 h-4' src={tel} width={100} height={100} alt="phone" />
                    <div>
                        <p>Telephone:</p>
                        <p>+2507800000</p>
                    </div>

                </div>
                <div className='flex gap-3 items-center text-white'>
                    <Image className='w-4 h-4' src={gmail} width={100} height={100} alt="gmail" />
                    <div>
                        <p>Telephone:</p>
                        <p>+2507800000</p>
                    </div>

                </div>
                </div>

                <div className='w-[20rem]' >
                    <form className='flex flex-col gap-2'>
                    <input className='py-3 px-5 bg-white outline-none rounded-md' placeholder='Names'/>
                        <input className='py-3 px-5 bg-white outline-none rounded-md' placeholder='Names'/>
                       <textarea rows={4}></textarea>
                        <Button styles='bg-black' text="Send" />

                    </form>
                </div>

               



            </footer>
        </>
    );
}

export default Footer;