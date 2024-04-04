import {cn} from '../lib/utils'
import Button from './utilities/Button'
import * as React from 'react'

const Footer = ({className}) => {
	return (
		<footer className={cn(className)}>
			<div className="bg-black">
				<div className="container mx-auto 2xl:max-w-[1920px] py-6 2xl:py-12 px-6 lg:px-12 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8">
					<p className="text-white font-sans font-medium text-xl tracking-wide">Looking for help getting started?</p>
					<Button>Check out our guide</Button>
				</div>
			</div>

			<div className="container mx-auto 2xl:max-w-[1920px] py-4 px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8">
				<img src='logo.svg' alt="Medium logo" className="h-6"/>
				<p className="font-sans font-semibold text-sm lg:text-lg">Every idea needs a Medium</p>
				<nav>
					<ul className="flex gap-8 font-sans font-bold text-sm">
						<li>About</li>
						<li>Terms</li>
						<li>Privacy</li>
						<li>Help</li>
					</ul>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
