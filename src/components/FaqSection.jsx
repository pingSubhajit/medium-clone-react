import {cn} from '../lib/utils'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from './utilities/Accordion'

const faqItems = [
	{
		question: 'How do I start writing on Medium?',
		answer: 'First make a free account. Then, to create a story, click on your profile picture in the top-right corner of the page, then "Write a Story"'
	},
	{
		question: 'How can I make money writing on Medium?',
		answer: 'Making money on Medium primarily involves leveraging its Partner Program, where writers are paid based on how many Medium members read their stories.'
	},
	{
		question: 'Who writes on Medium?',
		answer: 'Anyone can write on Medium. Whether you\'ve never written or are ready to create full publication, it\'s easy to get started and we allow you to focus more on big ideas and less on driving clicks. With the option to earn for your work, you can also be directly rewarded for the value you provider readers.'
	},
	{
		question: 'Do I need to be in the Partner Program to write on Medium?',
		answer: 'No, you can write on Medium even if you are not in the Partner Program. If you are in the Partner Program you can choose which of the stories you publish are eligible for the Program. For more about the Partner Program, click here'
	},
	{
		question: 'What can I write about on Medium?',
		answer: 'On Medium, you can write about a myriad of topics spanning personal development, technology, health and wellness, creativity, entrepreneurship, literature, politics, culture, science, and more. Whether you\'re passionate about sharing insights on self-improvement strategies, exploring the latest advancements in AI and tech, offering wellness advice, unleashing your creativity through writing or visual arts, providing entrepreneurial guidance, delving into literature and culture critiques, or discussing scientific breakthroughs, Medium offers a platform to express your ideas and connect with readers who share your interests. The key is to write engaging, informative content that resonates with your audience and showcases your expertise and unique perspective.'
	},
	{
		question: 'Who can read the work I publish on Medium?',
		answer: 'When you publish work on Medium, it\'s accessible to a diverse audience of readers ranging from fellow writers to casual readers interested in a wide array of topics. Medium has a broad reach, attracting readers from various demographics and interests due to its curated content, topic-based collections, and recommendation algorithms. Your articles can be discovered through Medium\'s homepage, topic pages, email digests, and social media shares. Additionally, Medium offers a membership program where paying subscribers have access to exclusive content, including stories behind the paywall, which can further expand your potential readership and earnings. Overall, publishing on Medium provides an opportunity to reach a broad and engaged audience interested in diverse subjects.'
	},
	{
		question: 'How can I grow my audience on Medium?',
		answer: 'Growing your audience on Medium involves several strategies. First, consistently publish high-quality content that resonates with your target audience. Engage with readers by responding to comments and participating in Medium\'s community. Utilize relevant tags and keywords to improve the discoverability of your articles. Cross-promote your Medium articles on social media platforms and other channels to attract new readers. Collaborate with other writers and publications to expand your reach. Finally, analyze your statistics to understand what type of content performs best and tailor your future articles accordingly. By implementing these strategies consistently, you can gradually grow your audience on Medium and increase your influence as a writer.'
	}
]

const FaqSection = ({className}) => {
	return (
		<div className={cn('bg-black', className)}>
			<div className="container mx-auto h-full 2xl:max-w-[1920px] px-6 lg:px-12 py-12 flex flex-col items-start gap-12">
				<h3 className="text-3xl lg:text-4xl xl:text-5xl leading-tight text-white">More about writing on Medium:</h3>

				<Accordion type="multiple" className="w-full">
					{faqItems.map((item, index) => (
						<AccordionItem value={item.question} key={index}>
							<AccordionTrigger>{item.question}</AccordionTrigger>
							<AccordionContent>{item.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	)
}

export default FaqSection
