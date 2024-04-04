import {cn} from '../lib/utils'
import Button from './utilities/Button'

const CTASection = ({className}) => {
	return (
		<div className={cn('relative overflow-hidden z-10', className)}>
			<div className="container mx-auto h-full 2xl:max-w-[1920px] px-6 lg:px-12 py-12 flex flex-col items-start gap-12">
				<h2 className="lg:max-w-[500px] xl:max-w-[700px] 2xl:max-w-[900px] text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-white font-serif">
					Earn money from your writing.
				</h2>
				<p className="max-w-[500px] font-sans font-medium text-sm lg:text-lg leading-6 text-white">
					Writing has its rewards when you join the Partner Program. Learn how to get paid for the content you publish
					and the audiences you build.
				</p>
				<Button className="bg-black text-white">Learn more</Button>
			</div>

			<img src='cta_bg.jpg' alt='BG for this CTA section' className="absolute inset-0 w-full h-full -z-10" />
		</div>
	)
}

export default CTASection
