import Button from '../utilities/Button'
import HeroHead from './HeroHead'
import {cn} from '../../lib/utils'
import TypingAnimation from '../utilities/TypingAnimation'

const HeroSection = ({className}) => {
	return (
		<div className={cn('lg:h-[80vh] bg-orange', className)}>
			<div className="container mx-auto h-full items-end 2xl:max-w-[1920px] lg:pl-12 flex flex-col justify-between lg:flex-row-reverse">
				<div className="h-[400px] w-full lg:h-full lg:w-[40%] border-b-2 lg:border-l-2 lg:border-b-0 border-black flex justify-center items-center p-10">
					<HeroHead className="h-[100%]" />
				</div>

				<div className="w-full lg:w-auto mt-8 lg:mt-0 pb-12 flex flex-col items-center lg:items-start">
					<p className="text-white text-xs xl:text-sm font-sans uppercase tracking-[0.4em] font-bold mb-5 text-center lg:text-left">
						<TypingAnimation text="Start a blog for free" />
					</p>
					<h1 className="max-w-[900px] text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl text-center lg:text-left font-serif">
						<TypingAnimation text="Publish, grow, and earn, all in one place." />
					</h1>
					<p className="max-w-[600px] xl:text-lg font-sans font-medium mt-8 lg:mt-16 text-center lg:text-left">
						If you have a story to tell, knowledge to share, or a perspective to offer ——— welcome home.
						Sign up for free
						so your writing can thrive in a network supported by millions of readers ——— not ads.
					</p>
					<Button className="mt-8 lg:mt-16">Start writing</Button>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
