import {cn} from '../lib/utils'
import Button from './utilities/Button'
import Separator from './utilities/Separator'
import {motion} from 'framer-motion'

const CreateYourSpaceSection = ({className}) => {
	return (
		<div className={cn('bg-peach', className)}>
			<div className="container mx-auto h-full 2xl:max-w-[1920px] px-6 lg:px-12 pt-12 flex flex-col items-center lg:flex-row lg:items-stretch justify-between overflow-hidden">
				<div className="pb-12 lg:w-[50%] flex flex-col justify-between">
					<h2 className="lg:max-w-[500px] xl:max-w-[700px] text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-serif">
						Create your space.
					</h2>

					<div>
						<p className="max-w-[500px] font-sans font-medium text-lg leading-6">
							Tell your story your way ——— with different ways to write, style and brand your work.
						</p>

						<Button className="mt-6 bg-black text-white">Start writing</Button>
					</div>
				</div>

				<div className="lg:h-full lg:w-[50%] flex items-end">
					<motion.div
						initial={{y: '100%'}}
						whileInView={{y: 0}}
						transition={{duration: 0.8, type: 'spring'}}
						viewport={{ once: true }}
					>
						<img src='/phone_1.png' alt="phone1" />
					</motion.div>
					<motion.div
						initial={{y: '100%'}}
						whileInView={{y: 0}}
						transition={{duration: 1, type: 'spring', delay: 0.3}}
						viewport={{ once: true }}
						className="ml-[-30%]"
					>
						<img src='/phone_2.png' alt="phone2" />
					</motion.div>
				</div>
			</div>

			<Separator/>

			<div className="container mx-auto h-full 2xl:max-w-[1920px] flex p-0">
				<div className="w-[50%] border-l-2 border-black p-4 lg:p-12">
					<h3 className="text-3xl lg:text-4xl xl:text-5xl">Start a blog.</h3>
					<p className="max-w-[500px] font-sans font-medium text-lg leading-6 mt-8 lg:mt-12">
						Create a blog for free to have a personalized home for your writing. Brand your space and share
						your writing with readers on any device.
					</p>
				</div>

				<div className="w-[50%] border-x-2 border-black p-4 lg:p-12">
					<h3 className="text-3xl lg:text-4xl xl:text-5xl">Start a publication.</h3>
					<p className="max-w-[500px] font-sans font-medium text-lg leading-6 mt-8 lg:mt-12">
						Collaborate with others or publish under a brand name.
						Use our story submission system and expressive customization options
					</p>
				</div>
			</div>
		</div>
	)
}

export default CreateYourSpaceSection
