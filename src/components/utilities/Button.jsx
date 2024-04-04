import {cn} from '../../lib/utils'
import {motion} from 'framer-motion'

const Button = ({ children, className, ...props }) => {
	return (
		<motion.button
			initial={{ scale: 0}}
			whileInView={{scale: 1}} transition={{duration: 0.4, type: 'spring'}}
			viewport={{ once: true }}
			className={cn(
				'bg-white text-black px-4 lg:px-8 py-2 rounded-full font-sans font-semibold text-sm lg:text-lg ' +
				'2xl:text-xl flex justify-center items-center',
				className
			)}
			{...props}
		>
			{children}
		</motion.button>
	)
}

export default Button
