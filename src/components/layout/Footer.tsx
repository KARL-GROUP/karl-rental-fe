import tel from '../../../public/assets/phone.png'
import gmail from '../../../public/assets/gmail.png'
import insta from '../../../public/assets/instagram.png'
import twitter from '../../../public/assets/twitter.png'
import tsap from '../../../public/assets/WhatsApp.png'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <footer className="bg-[#3F3CD4] mt-28 px-20 xl:px-44 w-full py-5 flex flex-col gap-5 justify-between">
                <p className='text-white text-xl'>Any quesries? Contact us</p>

                <div className='flex gap-3 items-center text-white'>
                    <Image className='w-8 h-8' src={tel} width={100} height={100} alt="phone" />
                    <div>
                        <p>Telephone:</p>
                        <p>+2507800000</p>
                    </div>

                </div>
                <div className='flex gap-3 items-center text-white'>
                    <Image className='w-8 h-6' src={gmail} width={100} height={100} alt="gmail" />
                    <div>
                        <p>Telephone:</p>
                        <p>+2507800000</p>
                    </div>

                </div>



            </footer>
        </>
    );
}

export default Footer;