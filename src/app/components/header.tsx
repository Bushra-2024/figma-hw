import Link from 'next/link'
import Image from 'next/image'
import cart from '../../../public/cart.png'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'

const Header = () => {
	const { t } = useTranslation()

	return (
		<header className='flex lg:flex-row flex-col justify-between items-center max-w-[1400px]  px-[10%] py-[1.5%] mb-[2%] shadow-md shadow-[rgba(16,126,95,0.4)] m-auto'>
			<p className='text-2xl font-bold font-[WindSong] text-[30px] text-[#107E5F]'>
				Armaghan
			</p>

			<nav className='flex gap-[50px] '>
				<Link
					href='/'
					className='text-[#107E5F] hover:border-b-2 border-[#107E5F] text-[17px]'
				>
					{t('nav.home')}
				</Link>
				<Link
					href='/products'
					className='text-[#107E5F] hover:border-b-2 border-[#107E5F] text-[17px]'
				>
					{t('nav.products')}
				</Link>
				<Link
					href='/categories'
					className='text-[#107E5F] hover:border-b-2 border-[#107E5F] text-[17px]'
				>
					{t('nav.categories')}
				</Link>
			</nav>

			<div className='flex items-center gap-5'>
				<Link href='/cart/cart'>
					<Image
						src={cart}
						alt='img'
						className='hover:cursor-pointer border  pl-2 pt-1 hover:bg-[#107E5F59] rounded'
					/>
				</Link>
				<Link href='/login/login'>
					<button className='w-[120px] h-[40px] text-[#107E5F] border-2 border-[#107E5F] hover:bg-[#107E5F] hover:text-white transition'>
					{t('nav.login')}

					</button>
				</Link>
				<LanguageSwitcher />
			</div>
		</header>
	)
}

export default Header
