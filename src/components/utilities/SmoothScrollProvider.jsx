import Lenis from '@studio-freight/lenis'
import {useEffect} from 'react'

const SmoothScrollProvider = ({ children }) => {
	useEffect(() => {
		const lenis = new Lenis({
			smoothWheel: true,
		})

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])

	return (
		<div>
			{children}
		</div>
	)
}

export default SmoothScrollProvider