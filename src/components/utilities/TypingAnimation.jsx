import {AnimatePresence, motion} from 'framer-motion'
import {cn} from '../../lib/utils'
import * as React from 'react'

const banner = {
	animate: {
		transition: {
			staggerChildren: 0.05,
		},
	},
	exit: {
		transition: {
			delayChildren: 0.5,
			staggerChildren: -0.1,
		},
	},
}

const letterAni = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			ease: 'easeOut',
			duration: 0.1,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			ease: 'easeOut',
			duration: 0.2,
		},
	}
}

const TypingAnimation = ({text, className}) => {
	return (
		<span className={cn('', className)}>
			<AnimatePresence mode='wait'>
				{text && <motion.span
					key={text}
					variants={banner}
					initial='initial'
					animate='animate'
					exit='exit'
				>
					{/* @ts-ignore */}
					{[...text].map((letter, index) => (
						<AnimatePresence key={index}>
							<motion.span variants={letterAni}>{letter}</motion.span>
						</AnimatePresence>
					))}
				</motion.span>}
			</AnimatePresence>
		</span>
	)
}

export default TypingAnimation
