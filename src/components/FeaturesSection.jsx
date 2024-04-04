import {cn} from '../lib/utils'
import Separator from './utilities/Separator'
import {motion} from 'framer-motion'

const GridBoxContent = ({title, description}) => {
	return (
		<>
			<h3 className="text-3xl lg:text-4xl xl:text-5xl">{title}</h3>
			<p className="font-sans font-medium text-sm lg:text-lg leading-6 max-w-[400px]">{description}</p>
		</>
	)
}

const GridBox = ({children, className}) => {
	return (
		<div className={cn('col-span-2 p-4 lg:p-8 xl:p-10 2xl:p-11 border-black flex flex-col justify-between gap-8', className)}>
			{children}
		</div>
	)
}

const FeaturesSection = ({className}) => {
	return (
		<div className={cn('bg-white', className)}>
			<div className="container mx-auto h-full 2xl:max-w-[1920px] p-12 flex flex-col items-center">
				<h2 className="max-w-[900px] text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-center leading-tight font-serif">
					Find and grow your audience.
					</h2>
				<p className="mt-4 font-sans font-medium text-sm lg:text-lg leading-6 text-center lg:text-left">
						With simple tools and features, you have the chance to connect with over 100 million curious readers.
				</p>
			</div>

			<Separator />

			<div className="container mx-auto h-full 2xl:max-w-[1920px] p-0 grid grid-cols-9 grid-rows-2 border-x-2 border-black">
				<GridBox
					className="lg:pb-0 xl:pb-0 2xl:pb-0 col-span-9 md:col-span-3 xl:row-span-2 border-b-2 xl:border-b-0 md:border-r-2">
					<div className="flex flex-col gap-8">
						<GridBoxContent
							title='Audience insights.'
							description='Use data to learn what resonates with your readers so you can keep growing your audience'
						/>
					</div>

					<motion.div
						initial={{y: '100%'}}
						whileInView={{y: 0}}
						transition={{duration: 0.8, type: 'spring'}}
						viewport={{ once: true }}
						className="hidden lg:block"
					>
						<img src='/audience_insight_image.png' alt="audienceInsightImage"/>
					</motion.div>
				</GridBox>

				<GridBox className="col-span-9 md:col-span-3 md:border-r-2 border-b-2">
					<GridBoxContent
						title='Social connectivity.'
						description='Find people you are already connected with on Twitter and easily share your stories across
						platforms.'
					/>
				</GridBox>

				<GridBox className="col-span-9 md:col-span-3 border-b-2">
					<GridBoxContent
						title='Powerful network.'
						description='Readers can discover and follow you easily with tailored feeds and recommendations.'
					/>
				</GridBox>

				<GridBox className="col-span-9 md:col-span-3 xl:col-span-2 md:border-r-2 border-b-2 md:border-b-0">
					<GridBoxContent
						title='Email subscriptions.'
						description='Reach your readers by having your stories delivered directly to their inboxes.'
					/>
				</GridBox>

				<GridBox className="col-span-9 md:col-span-3 xl:col-span-2 md:border-r-2 border-b-2 md:border-b-0">
					<GridBoxContent
						title='Interactive discussions.'
						description='Build relationships with your readers through a threaded comments section.'
					/>
				</GridBox>

				<GridBox className="col-span-9 md:col-span-3 xl:col-span-2">
					<GridBoxContent
						title='Custom design.'
						description='Easily customize your page to stand out and build your brand.'
					/>
				</GridBox>
			</div>
		</div>
	)
}

export default FeaturesSection
