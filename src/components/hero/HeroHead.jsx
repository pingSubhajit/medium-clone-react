import {cn} from '../../lib/utils'
import {motion} from 'framer-motion'

const banner = {
	animate: {
		transition: {
			staggerChildren: 0.05,
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

const HeroHead = ({className}) => {
	return (
		<svg
			width="543"
			height="727"
			viewBox="0 0 543 727"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn('', className)}
		>
			<g id="HEAD">
				<motion.g id="CI_1" variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit'
				>
					<motion.text variants={letterAni} id="C" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="374" y="15.3182">C</tspan></motion.text>
					<motion.text variants={letterAni} id="I" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="384" y="15.3182">I</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="CURRENCY_1"
				>
					<motion.text variants={letterAni} id="C_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="275" y="15.3182">C</tspan></motion.text>
					<motion.text variants={letterAni} id="U" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="288" y="15.3182">U</tspan></motion.text>
					<motion.text variants={letterAni} id="R" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="301" y="15.3182">R</tspan></motion.text>
					<motion.text variants={letterAni} id="R_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="313" y="15.3182">R</tspan></motion.text>
					<motion.text variants={letterAni} id="E" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="325" y="15.3182">E</tspan></motion.text>
					<motion.text variants={letterAni} id="N" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="336" y="15.3182">N</tspan></motion.text>
					<motion.text variants={letterAni} id="C_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="350" y="15.3182">C</tspan></motion.text>
					<motion.text variants={letterAni} id="Y" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="363" y="15.3182">Y</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="CRYPTO_1">
					<motion.text variants={letterAni} id="C_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="138" y="15.3182">C</tspan></motion.text>
					<motion.text variants={letterAni} id="R_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="159" y="15.3182">R</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="179" y="15.3182">Y</tspan></motion.text>
					<motion.text variants={letterAni} id="P" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="200" y="15.3182">P</tspan></motion.text>
					<motion.text variants={letterAni} id="T" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="219" y="15.3182">T</tspan></motion.text>
					<motion.text variants={letterAni} id="O" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="239" y="15.3182">O</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="POLITICS_1">
					<motion.text variants={letterAni} id="P_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="114" y="30.3182">P</tspan></motion.text>
					<motion.text variants={letterAni} id="O_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="132" y="30.3182">O</tspan></motion.text>
					<motion.text variants={letterAni} id="L" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="153" y="30.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="I_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="172" y="30.3182">I</tspan></motion.text>
					<motion.text variants={letterAni} id="T_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="184" y="30.3182">T</tspan></motion.text>
					<motion.text variants={letterAni} id="I_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="204" y="30.3182">I</tspan></motion.text>
					<motion.text variants={letterAni} id="C_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="217" y="30.3182">C</tspan></motion.text>
					<motion.text variants={letterAni} id="S" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="237" y="30.3182">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="HEALTH_3">
					<motion.text variants={letterAni} id="H" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="337" y="45.3182">H</tspan></motion.text>
					<motion.text variants={letterAni} id="E_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="361" y="45.3182">E</tspan></motion.text>
					<motion.text variants={letterAni} id="A" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="384" y="45.3182">A</tspan></motion.text>
					<motion.text variants={letterAni} id="L_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="408" y="45.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="T_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="430" y="45.3182">T</tspan></motion.text>
					<motion.text variants={letterAni} id="H_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="453" y="45.3182">H</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="TECHNOLOGY_1">
					<motion.text variants={letterAni} id="Y_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="224" y="60.3182">Y</tspan></motion.text>
					<motion.text variants={letterAni} id="G" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="204" y="60.3182">G</tspan></motion.text>
					<motion.text variants={letterAni} id="O_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="184" y="60.3182">O</tspan></motion.text>
					<motion.text variants={letterAni} id="O_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="147" y="60.3182">O</tspan></motion.text>
					<motion.text variants={letterAni} id="L_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="167" y="60.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="N_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="127" y="60.3182">N</tspan></motion.text>
					<motion.text variants={letterAni} id="H_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="107" y="60.3182">H</tspan></motion.text>
					<motion.text variants={letterAni} id="C_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="88" y="60.3182">C</tspan></motion.text>
					<motion.text variants={letterAni} id="E_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="70" y="60.3182">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="WELLNESS_1">
					<motion.text variants={letterAni} id="E_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="60" y="75.3182">E</tspan></motion.text>
					<motion.text variants={letterAni} id="L_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="73" y="75.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="L_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="85" y="75.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="N_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="97" y="75.3182">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="112" y="75.3182">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="124" y="75.3182">S</tspan></motion.text>
					<motion.text variants={letterAni} id="S_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="136" y="75.3182">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="WELLNESS_2">
					<motion.text variants={letterAni} id="E_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="174" y="75.3182">E</tspan></motion.text>
					<motion.text variants={letterAni} id="W" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="156" y="75.3182">W</tspan></motion.text>
					<motion.text variants={letterAni} id="L_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="187" y="75.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="L_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="199" y="75.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="N_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="211" y="75.3182">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="226" y="75.3182">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="238" y="75.3182">S</tspan></motion.text>
					<motion.text variants={letterAni} id="S_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="250" y="75.3182">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="WELLNESS_3">
					<motion.text variants={letterAni} id="E_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="289" y="75.3182">E</tspan></motion.text>
					<motion.text variants={letterAni} id="W_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="271" y="75.3182">W</tspan></motion.text>
					<motion.text variants={letterAni} id="L_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="302" y="75.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="L_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="314" y="75.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="N_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="326" y="75.3182">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="341" y="75.3182">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="353" y="75.3182">S</tspan></motion.text>
					<motion.text variants={letterAni} id="S_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="365" y="75.3182">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="WELLNESS_4">
					<motion.text variants={letterAni} id="E_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="402" y="75.3182">E</tspan></motion.text>
					<motion.text variants={letterAni} id="W_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="384" y="75.3182">W</tspan></motion.text>
					<motion.text variants={letterAni} id="L_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="415" y="75.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="L_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="427" y="75.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="N_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="439" y="75.3182">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="454" y="75.3182">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="466" y="75.3182">S</tspan></motion.text>
					<motion.text variants={letterAni} id="S_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="478" y="75.3182">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="DIPLOMACY_1">
					<motion.text variants={letterAni} id="Y_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="113" y="91.3182">Y</tspan></motion.text>
					<motion.text variants={letterAni} id="C_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="94" y="91.3182">C</tspan></motion.text>
					<motion.text variants={letterAni} id="A_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="75" y="91.3182">A</tspan></motion.text>
					<motion.text variants={letterAni} id="M" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="53" y="91.3182">M</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="JUSTICE_1">
					<motion.text variants={letterAni} id="E_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="46" y="106.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="JUSTICE_2">
					<motion.text variants={letterAni} id="J" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="63" y="106.318">J</tspan></motion.text>
					<motion.text variants={letterAni} id="U_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="73" y="106.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="S_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="86" y="106.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="T_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="98" y="106.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="I_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="110" y="106.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="C_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="116" y="106.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="E_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="130" y="106.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="JUSTICE_3">
					<motion.text variants={letterAni} id="J_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="146" y="106.318">J</tspan></motion.text>
					<motion.text variants={letterAni} id="U_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="156" y="106.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="S_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="169" y="106.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="T_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="181" y="106.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="I_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="193" y="106.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="C_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="199" y="106.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="E_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="213" y="106.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="JUSTICE_4">
					<motion.text variants={letterAni} id="J_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="229" y="106.318">J</tspan></motion.text>
					<motion.text variants={letterAni} id="U_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="239" y="106.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="S_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="252" y="106.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="T_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="264" y="106.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="I_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="276" y="106.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="C_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="282" y="106.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="E_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="296" y="106.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="JUSTICE_5">
					<motion.text variants={letterAni} id="J_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="312" y="106.318">J</tspan></motion.text>
					<motion.text variants={letterAni} id="U_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="322" y="106.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="S_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="335" y="106.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="T_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="347" y="106.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="I_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="359" y="106.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="C_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="365" y="106.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="E_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="379" y="106.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="JUSTICE_6">
					<motion.text variants={letterAni} id="J_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="395" y="106.318">J</tspan></motion.text>
					<motion.text variants={letterAni} id="U_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="405" y="106.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="S_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="418" y="106.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="T_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="430" y="106.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="I_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="442" y="106.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="C_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="448" y="106.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="E_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="462" y="106.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="NEERING_1">
					<motion.text variants={letterAni} id="G_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="449" y="121.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="N_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="384" y="121.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="I_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="327" y="121.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="R_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="263" y="121.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="E_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="200" y="121.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="E_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="137" y="121.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="N_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="72" y="121.318">N</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="POETRY_5">
					<motion.text variants={letterAni} id="P_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="447" y="135.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="O_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="456" y="135.318">O</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="GAMING_5">
					<motion.text variants={letterAni} id="G_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="487" y="150.318">G</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="GAMING_4">
					<motion.text variants={letterAni} id="G_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="430" y="150.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="G_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="474" y="150.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="A_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="441" y="150.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="M_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="449" y="150.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="I_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="462" y="150.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="N_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="465" y="150.318">N</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="GAMING_3">
					<motion.text variants={letterAni} id="G_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="418" y="150.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="G_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="374" y="150.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="A_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="384" y="150.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="M_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="393" y="150.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="I_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="406" y="150.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="N_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="409" y="150.318">N</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="PHILOSOPHY_3">
					<motion.text variants={letterAni} id="P_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="444" y="165.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="H_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="452" y="165.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="I_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="462" y="165.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="L_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="465" y="165.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="O_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="479" y="165.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="S_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="490" y="165.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="PHILOSOPHY_1">
					<motion.text variants={letterAni} id="P_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="34" y="165.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="H_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="71" y="165.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="I_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="108" y="165.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="L_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="140" y="165.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="O_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="175" y="165.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="S_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="212" y="165.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="O_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="249" y="165.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="P_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="287" y="165.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="H_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="323" y="165.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="347" y="165.318">Y</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="PHILOSOPHY_2">
					<motion.text variants={letterAni} id="P_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="358" y="165.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="H_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="367" y="165.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="I_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="377" y="165.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="L_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="380" y="165.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="O_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="386" y="165.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="S_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="396" y="165.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="O_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="404" y="165.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="P_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="415" y="165.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="H_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="423" y="165.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="433" y="165.318">Y</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="ADVENTURE_2">
					<motion.text variants={letterAni} id="A_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="153" y="195.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="D" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="173" y="195.318">D</tspan></motion.text>
					<motion.text variants={letterAni} id="V" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="192" y="195.318">V</tspan></motion.text>
					<motion.text variants={letterAni} id="E_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="212" y="195.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="N_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="230" y="195.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="T_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="250" y="195.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="U_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="269" y="195.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="R_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="289" y="195.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="E_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="308" y="195.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="ADVENTURE_3">
					<motion.text variants={letterAni} id="A_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="340" y="195.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="D_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="360" y="195.318">D</tspan></motion.text>
					<motion.text variants={letterAni} id="V_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="379" y="195.318">V</tspan></motion.text>
					<motion.text variants={letterAni} id="E_22" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="399" y="195.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="N_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="417" y="195.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="T_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="437" y="195.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="U_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="456" y="195.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="R_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="476" y="195.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="E_23" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="495" y="195.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="BIOHTE_1">
					<motion.text variants={letterAni} id="E_24" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="451" y="211.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="T_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="352" y="211.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="H_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="267" y="211.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="O_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="251" y="211.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="I_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="158" y="211.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="B" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="60" y="211.318">B</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="LOAGY_1">
					<motion.text variants={letterAni} id="L_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="49" y="226.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="O_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="176" y="226.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="A_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="203" y="226.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="G_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="307" y="226.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="436" y="226.318">Y</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="DATA_SCIENCE_4">
					<motion.text variants={letterAni} id="D_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="470" y="241.318">D</tspan></motion.text>
					<motion.text variants={letterAni} id="A_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="480" y="241.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="T_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="489" y="241.318">T</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="FITNESS_7">
					<motion.text variants={letterAni} id="F" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="513" y="272.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="I_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="521" y="272.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="T_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="524" y="272.318">T</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="FITNESS_1">
					<motion.text variants={letterAni} id="F_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="37" y="272.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="I_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="52" y="272.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="T_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="62" y="272.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="N_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="77" y="272.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_25" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="94" y="272.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="109" y="272.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="S_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="124" y="272.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="FITNESS_3">
					<motion.text variants={letterAni} id="F_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="261" y="272.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="I_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="276" y="272.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="T_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="286" y="272.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="N_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="302" y="272.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_26" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="318" y="272.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="326" y="272.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="S_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="334" y="272.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="FITNESS_4">
					<motion.text variants={letterAni} id="F_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="345" y="272.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="I_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="353" y="272.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="T_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="356" y="272.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="N_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="364" y="272.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_27" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="374" y="272.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_22" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="382" y="272.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="S_23" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="390" y="272.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="FITNESS_5">
					<motion.text variants={letterAni} id="F_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="401" y="272.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="I_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="409" y="272.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="T_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="412" y="272.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="N_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="420" y="272.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_28" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="430" y="272.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_24" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="438" y="272.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="S_25" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="446" y="272.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="ACTIVISM_1">
					<motion.text variants={letterAni} id="M_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="46" y="286.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="S_26" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="32" y="286.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="ICTAON_1">
					<motion.text variants={letterAni} id="I_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="36" y="301.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="C_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="125" y="301.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="T_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="218" y="301.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="A_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="310" y="301.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="O_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="401" y="301.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="N_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="495" y="301.318">N</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="MACHINE_1">
					<motion.text variants={letterAni} id="M_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="31" y="331.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="A_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="63" y="331.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="C_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="92" y="331.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="H_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="121" y="331.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="I_22" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="151" y="331.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="N_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="174" y="331.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_29" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="204" y="331.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="LEARNING_1">
					<motion.text variants={letterAni} id="L_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="255" y="331.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="E_30" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="282" y="331.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="A_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="307" y="331.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="R_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="317" y="331.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="N_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="326" y="331.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="I_23" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="336" y="331.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="N_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="338" y="331.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="G_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="348" y="331.318">G</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="MATH_1">
					<motion.text variants={letterAni} id="A_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="4" y="377.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="T_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="20" y="377.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="H_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="35" y="377.318">H</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="MATH_2">
					<motion.text variants={letterAni} id="A_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="78" y="377.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="M_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="60" y="377.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="T_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="94" y="377.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="H_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="108" y="377.318">H</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="MATH_3">
					<motion.text variants={letterAni} id="A_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="152" y="377.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="M_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="134" y="377.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="T_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="168" y="377.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="H_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="182" y="377.318">H</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="MATH_4">
					<motion.text variants={letterAni} id="A_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="226" y="377.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="M_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="208" y="377.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="T_22" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="242" y="377.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="H_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="256" y="377.318">H</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="MATH_5">
					<motion.text variants={letterAni} id="A_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="300" y="377.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="M_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="282" y="377.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="T_23" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="316" y="377.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="H_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="330" y="377.318">H</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="MATH_6">
					<motion.text variants={letterAni} id="A_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="373" y="377.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="M_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="355" y="377.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="T_24" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="389" y="377.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="H_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="403" y="377.318">H</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="MATH_7">
					<motion.text variants={letterAni} id="A_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="447" y="377.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="M_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="429" y="377.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="T_25" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="463" y="377.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="H_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="477" y="377.318">H</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="RACE_1">
					<motion.text variants={letterAni} id="E_31" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="0" y="391.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="Group 88">
					<motion.text variants={letterAni} id="Y_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="28" y="422.318">Y</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="RCUE_1">
					<motion.text variants={letterAni} id="U_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="290" y="452.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="E_32" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="335" y="452.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="R_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="97" y="452.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="C_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="109" y="452.318">C</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="LEADERSHIP_4">
					<motion.text variants={letterAni} id="D_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="453" y="482.318">D</tspan></motion.text>
					<motion.text variants={letterAni} id="A_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="443" y="482.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="E_33" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="435" y="482.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="L_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="428" y="482.318">L</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="LEADERSHIP_3">
					<motion.text variants={letterAni} id="P_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="417" y="482.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="H_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="404" y="482.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="S_27" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="395" y="482.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="R_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="387" y="482.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="E_34" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="379" y="482.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="D_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="369" y="482.318">D</tspan></motion.text>
					<motion.text variants={letterAni} id="A_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="361" y="482.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="E_35" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="353" y="482.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="L_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="345" y="482.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="I_24" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="414" y="482.318">I</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="LEADERSHIP_2">
					<motion.text variants={letterAni} id="P_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="334" y="482.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="H_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="321" y="482.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="S_28" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="312" y="482.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="R_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="302" y="482.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="E_36" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="286" y="482.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="D_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="268" y="482.318">D</tspan></motion.text>
					<motion.text variants={letterAni} id="A_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="251" y="482.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="E_37" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="235" y="482.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="L_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="220" y="482.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="I_25" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="331" y="482.318">I</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="LEADERSHIP_1">
					<motion.text variants={letterAni} id="P_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="194" y="482.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="H_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="164" y="482.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="S_29" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="147" y="482.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="R_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="131" y="482.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="E_38" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="115" y="482.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="D_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="97" y="482.318">D</tspan></motion.text>
					<motion.text variants={letterAni} id="A_22" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="80" y="482.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="E_39" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="64" y="482.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="L_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="49" y="482.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="I_26" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="182" y="482.318">I</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="NGE_1">
					<motion.text variants={letterAni} id="E_40" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="344" y="543.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="G_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="229" y="543.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="N_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="115" y="543.318">N</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="ART_1">
					<motion.text variants={letterAni} id="T_26" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="196" y="587.318">T</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="ART_2">
					<motion.text variants={letterAni} id="A_23" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="258" y="587.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="R_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="293" y="587.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="T_27" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="326" y="587.318">T</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="ART_3">
					<motion.text variants={letterAni} id="A_24" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="389" y="587.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="R_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="424" y="587.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="T_28" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="457" y="587.318">T</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="MAKERS_2">
					<motion.text variants={letterAni} id="R_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="452" y="618.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="E_41" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="422" y="618.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="M_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="329" y="618.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="A_25" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="361" y="618.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="K" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="393" y="618.318">K</tspan></motion.text>
					<motion.text variants={letterAni} id="S_30" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="481" y="618.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="MAKERS_1">
					<motion.text variants={letterAni} id="R_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="246" y="618.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="E_42" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="216" y="618.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_31" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="275" y="618.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="FMI_1">
					<motion.text variants={letterAni} id="I_27" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="483" y="648.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="M_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="322" y="648.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="F_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="314" y="648.318">F</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="DESIGN_2">
					<motion.text variants={letterAni} id="D_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="428" y="723.318">D</tspan></motion.text>
					<motion.text variants={letterAni} id="E_43" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="438" y="723.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_32" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="445" y="723.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="I_28" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="467" y="723.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="I_29" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="454" y="723.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="G_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="457" y="723.318">G</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="DESIGN_1">
					<motion.text variants={letterAni} id="D_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="276" y="723.318">D</tspan></motion.text>
					<motion.text variants={letterAni} id="E_44" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="305" y="723.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_33" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="332" y="723.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="I_30" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="361" y="723.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="G_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="384" y="723.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="N_22" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="413" y="723.318">N</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="SM_1">
					<motion.text variants={letterAni} id="S_34" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="294" y="708.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="M_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="368" y="708.318">M</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="FOOD_1">
					<motion.text variants={letterAni} id="F_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="318" y="694.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="O_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="363" y="694.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="O_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="410" y="694.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="D_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="458" y="694.318">D</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="TRAVEL_1">
					<motion.text variants={letterAni} id="E_45" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="244" y="679.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="L_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="257" y="679.318">L</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="TRAVEL_2">
					<motion.text variants={letterAni} id="E_46" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="360" y="679.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="T_29" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="286" y="679.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="R_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="304" y="679.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="A_26" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="322" y="679.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="V_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="341" y="679.318">V</tspan></motion.text>
					<motion.text variants={letterAni} id="L_22" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="377" y="679.318">L</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="TRAVEL_3">
					<motion.text variants={letterAni} id="E_47" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="479" y="679.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="T_30" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="405" y="679.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="R_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="423" y="679.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="A_27" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="441" y="679.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="V_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="460" y="679.318">V</tspan></motion.text>
					<motion.text variants={letterAni} id="L_23" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="496" y="679.318">L</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="FASHION_2">
					<motion.text variants={letterAni} id="F_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="343" y="663.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="A_28" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="363" y="663.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="S_35" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="384" y="663.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="H_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="404" y="663.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="I_31" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="425" y="663.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="O_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="440" y="663.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="N_23" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="461" y="663.318">N</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="FASHION_1">
					<motion.text variants={letterAni} id="H_22" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="249" y="663.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="I_32" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="270" y="663.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="O_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="285" y="663.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="N_24" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="306" y="663.318">N</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="COMEDY_1">
					<motion.text variants={letterAni} id="M_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="284" y="632.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="E_48" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="333" y="632.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="D_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="381" y="632.318">D</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="429" y="632.318">Y</tspan></motion.text>
					<motion.text variants={letterAni} id="O_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="234" y="632.318">O</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="SPORTS_2">
					<motion.text variants={letterAni} id="R_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="423" y="603.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="T_31" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="444" y="603.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="S_36" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="464" y="603.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="S_37" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="359" y="603.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="P_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="380" y="603.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="O_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="400" y="603.318">O</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="SPORTS_1">
					<motion.text variants={letterAni} id="R_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="283" y="603.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="S_38" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="219" y="603.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="S_39" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="323" y="603.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="P_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="240" y="603.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="O_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="260" y="603.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="T_32" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="303" y="603.318">T</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="PROGRAMMING_1">
					<motion.text variants={letterAni} id="I_33" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="467" y="572.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="M_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="454" y="572.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="A_29" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="444" y="572.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="R_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="408" y="572.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="G_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="329" y="572.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="O_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="249" y="572.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="R_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="170" y="572.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="P_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="92" y="572.318">P</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="CURRENCY_3">
					<motion.text variants={letterAni} id="C_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="279" y="558.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="C_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="399" y="558.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="U_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="299" y="558.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="N_25" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="379" y="558.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="419" y="558.318">Y</tspan></motion.text>
					<motion.text variants={letterAni} id="R_22" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="319" y="558.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="R_23" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="340" y="558.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="E_49" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="360" y="558.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="CRYPTO_2">
					<motion.text variants={letterAni} id="C_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="145" y="558.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="R_24" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="165" y="558.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="185" y="558.318">Y</tspan></motion.text>
					<motion.text variants={letterAni} id="P_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="205" y="558.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="T_33" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="224" y="558.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="O_22" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="244" y="558.318">O</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="CURRENCY_2">
					<motion.text variants={letterAni} id="E_50" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="51" y="558.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="N_26" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="70" y="558.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="C_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="91" y="558.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="111" y="558.318">Y</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="CES_1">
					<motion.text variants={letterAni} id="C_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="160" y="527.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="E_51" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="188" y="527.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_40" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="355" y="527.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="MUSIC_1">
					<motion.text variants={letterAni} id="C_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="84" y="512.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="I_34" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="67" y="512.318">I</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="MUSIC_4">
					<motion.text variants={letterAni} id="C_22" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="472" y="512.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="I_35" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="455" y="512.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="S_41" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="432" y="512.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="U_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="408" y="512.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="M_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="383" y="512.318">M</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="MUSIC_3">
					<motion.text variants={letterAni} id="C_23" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="343" y="512.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="I_36" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="326" y="512.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="S_42" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="303" y="512.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="U_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="279" y="512.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="M_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="254" y="512.318">M</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="MUSIC_2">
					<motion.text variants={letterAni} id="C_24" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="214" y="512.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="I_37" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="197" y="512.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="S_43" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="174" y="512.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="U_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="150" y="512.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="M_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="125" y="512.318">M</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="DISABILiTY_3">
					<motion.text variants={letterAni} id="I_38" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="353" y="497.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="S_44" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="356" y="497.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="A_30" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="365" y="497.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="B_2" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="374" y="497.318">B</tspan></motion.text>
					<motion.text variants={letterAni} id="I_39" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="383" y="497.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="L_24" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="386" y="497.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="I_40" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="393" y="497.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="T_34" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="397" y="497.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="405" y="497.318">Y</tspan></motion.text>
					<motion.text variants={letterAni} id="D_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="343" y="497.318">D</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="DISABILiTY_4">
					<motion.text variants={letterAni} id="S_45" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="428" y="497.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="A_31" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="437" y="497.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="B_3" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="446" y="497.318">B</tspan></motion.text>
					<motion.text variants={letterAni} id="I_41" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="455" y="497.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="L_25" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="459" y="497.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="I_42" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="467" y="497.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="D_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="415" y="497.318">D</tspan></motion.text>
					<motion.text variants={letterAni} id="I_43" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="425" y="497.318">I</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="DISABILiTY_1">
					<motion.text variants={letterAni} id="D_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="46" y="497.318">D</tspan></motion.text>
					<motion.text variants={letterAni} id="I_44" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="65" y="497.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="S_46" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="77" y="497.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="A_32" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="94" y="497.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="B_4" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="112" y="497.318">B</tspan></motion.text>
					<motion.text variants={letterAni} id="I_45" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="131" y="497.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="L_26" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="144" y="497.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="I_46" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="160" y="497.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="T_35" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="172" y="497.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="189" y="497.318">Y</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="DISABILiTY_2">
					<motion.text variants={letterAni} id="I_47" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="238" y="497.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="S_47" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="250" y="497.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="A_33" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="268" y="497.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="B_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="286" y="497.318">B</tspan></motion.text>
					<motion.text variants={letterAni} id="I_48" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="304" y="497.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="L_27" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="314" y="497.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="I_49" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="322" y="497.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="T_36" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="325" y="497.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="333" y="497.318">Y</tspan></motion.text>
					<motion.text variants={letterAni} id="D_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="220" y="497.318">D</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="NEUROSCIENCE_1">
					<motion.text variants={letterAni} id="C_25" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="79" y="467.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="N_27" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="64" y="467.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_52" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="51" y="467.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="E_53" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="93" y="467.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="I_50" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="42" y="467.318">I</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="NEUROSCIENCE_2">
					<motion.text variants={letterAni} id="C_26" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="251" y="467.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="N_28" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="236" y="467.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="N_29" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="115" y="467.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_54" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="223" y="467.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="E_55" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="130" y="467.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="U_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="142" y="467.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="R_25" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="158" y="467.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="O_23" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="171" y="467.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="S_48" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="186" y="467.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="C_27" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="200" y="467.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="E_56" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="266" y="467.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="I_51" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="214" y="467.318">I</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="NEUROSCIENCE_3">
					<motion.text variants={letterAni} id="C_28" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="423" y="467.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="N_30" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="408" y="467.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="N_31" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="287" y="467.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_57" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="395" y="467.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="E_58" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="302" y="467.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="U_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="314" y="467.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="R_26" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="330" y="467.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="O_24" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="343" y="467.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="S_49" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="358" y="467.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="C_29" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="372" y="467.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="E_59" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="438" y="467.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="I_52" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="386" y="467.318">I</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="BUSINESS_1">
					<motion.text variants={letterAni} id="B_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="44" y="437.318">B</tspan></motion.text>
					<motion.text variants={letterAni} id="U_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="79" y="437.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="S_50" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="116" y="437.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="I_53" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="152" y="437.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="N_32" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="183" y="437.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_60" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="220" y="437.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_51" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="255" y="437.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="S_52" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="290" y="437.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="BUSINESS_2">
					<motion.text variants={letterAni} id="B_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="356" y="437.318">B</tspan></motion.text>
					<motion.text variants={letterAni} id="U_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="365" y="437.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="S_53" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="375" y="437.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="I_54" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="384" y="437.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="N_33" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="386" y="437.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_61" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="397" y="437.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_54" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="404" y="437.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="S_55" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="413" y="437.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="BUSINESS_3">
					<motion.text variants={letterAni} id="B_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="423" y="437.318">B</tspan></motion.text>
					<motion.text variants={letterAni} id="U_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="431" y="437.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="S_56" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="441" y="437.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="I_55" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="450" y="437.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="N_34" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="452" y="437.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_62" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="463" y="437.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_57" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="470" y="437.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="S_58" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="479" y="437.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="EQUALITY_1">
					<motion.text variants={letterAni} id="Y_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="459" y="422.318">Y</tspan></motion.text>
					<motion.text variants={letterAni} id="T_37" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="411" y="422.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="I_56" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="367" y="422.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="L_28" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="320" y="422.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="A_34" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="269" y="422.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="U_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="219" y="422.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="Q" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="169" y="422.318">Q</tspan></motion.text>
					<motion.text variants={letterAni} id="E_63" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="121" y="422.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="PHOTOGRAPHY_3">
					<motion.text variants={letterAni} id="T_38" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="385" y="406.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="O_25" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="375" y="406.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="O_26" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="393" y="406.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="G_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="403" y="406.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="R_27" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="413" y="406.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="P_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="357" y="406.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="H_23" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="365" y="406.318">H</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="PHOTOGRAPHY_1">
					<motion.text variants={letterAni} id="P_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="17" y="406.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="H_24" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="35" y="406.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="O_27" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="54" y="406.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="T_39" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="74" y="406.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="O_28" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="91" y="406.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="G_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="110" y="406.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="R_28" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="129" y="406.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="A_35" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="148" y="406.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="P_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="167" y="406.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="H_25" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="185" y="406.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="204" y="406.318">Y</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="PHOTOGRAPHY_2">
					<motion.text variants={letterAni} id="T_40" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="282" y="406.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="O_29" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="290" y="406.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="O_30" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="271" y="406.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="G_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="300" y="406.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="R_29" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="311" y="406.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="A_36" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="319" y="406.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="P_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="328" y="406.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="P_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="234" y="406.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="H_26" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="337" y="406.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="H_27" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="252" y="406.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="346" y="406.318">Y</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="REFORM_3">
					<motion.text variants={letterAni} id="M_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="446" y="391.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="R_30" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="431" y="391.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="O_31" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="415" y="391.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="F_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="401" y="391.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="E_64" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="386" y="391.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="R_31" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="371" y="391.318">R</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="REFORM_2">
					<motion.text variants={letterAni} id="M_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="272" y="391.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="R_32" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="257" y="391.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="O_32" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="241" y="391.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="F_10" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="227" y="391.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="E_65" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="212" y="391.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="R_33" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="197" y="391.318">R</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="REFORM_1">
					<motion.text variants={letterAni} id="M_22" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="98" y="391.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="R_34" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="83" y="391.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="O_33" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="67" y="391.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="F_11" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="53" y="391.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="E_66" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="38" y="391.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="R_35" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="23" y="391.318">R</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="RACE_3">
					<motion.text variants={letterAni} id="R_36" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="300" y="391.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="A_37" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="315" y="391.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="C_30" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="331" y="391.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="E_67" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="347" y="391.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="RACE_2">
					<motion.text variants={letterAni} id="R_37" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="126" y="391.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="A_38" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="141" y="391.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="C_31" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="157" y="391.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="E_68" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="173" y="391.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="CYYBE_1">
					<motion.text variants={letterAni} id="C_32" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="54" y="362.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="160" y="362.318">Y</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="180" y="362.318">Y</tspan></motion.text>
					<motion.text variants={letterAni} id="B_9" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="266" y="362.318">B</tspan></motion.text>
					<motion.text variants={letterAni} id="E_69" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="373" y="362.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="SMISM_1">
					<motion.text variants={letterAni} id="N_35" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="369" y="347.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="S_59" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="339" y="347.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="I_57" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="230" y="347.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="M_23" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="82" y="347.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="S_60" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="56" y="347.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="MACHINE_2">
					<motion.text variants={letterAni} id="M_24" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="361" y="331.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="A_39" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="372" y="331.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="C_33" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="381" y="331.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="H_28" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="390" y="331.318">H</tspan></motion.text>
					<motion.text variants={letterAni} id="I_58" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="400" y="331.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="N_36" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="403" y="331.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_70" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="413" y="331.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="ATIONE_1">
					<motion.text variants={letterAni} id="O_34" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="350" y="316.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="I_59" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="264" y="316.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="T_41" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="174" y="316.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="A_40" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="81" y="316.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="N_37" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="437" y="316.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_71" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="453" y="316.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="ACTIVISM_5">
					<motion.text variants={letterAni} id="M_25" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="528" y="286.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="S_61" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="514" y="286.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="I_60" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="505" y="286.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="I_61" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="480" y="286.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="V_5" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="490" y="286.318">V</tspan></motion.text>
					<motion.text variants={letterAni} id="T_42" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="465" y="286.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="C_34" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="450" y="286.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="A_41" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="435" y="286.318">A</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="ACTIVISM_4">
					<motion.text variants={letterAni} id="M_26" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="407" y="286.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="S_62" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="393" y="286.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="I_62" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="384" y="286.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="I_63" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="359" y="286.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="V_6" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="369" y="286.318">V</tspan></motion.text>
					<motion.text variants={letterAni} id="T_43" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="344" y="286.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="C_35" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="329" y="286.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="A_42" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="314" y="286.318">A</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="ACTIVISM_3">
					<motion.text variants={letterAni} id="M_27" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="287" y="286.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="S_63" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="273" y="286.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="I_64" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="264" y="286.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="I_65" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="239" y="286.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="V_7" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="249" y="286.318">V</tspan></motion.text>
					<motion.text variants={letterAni} id="T_44" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="224" y="286.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="C_36" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="209" y="286.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="A_43" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="194" y="286.318">A</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="ACTIVISM_2">
					<motion.text variants={letterAni} id="M_28" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="166" y="286.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="S_64" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="152" y="286.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="I_66" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="143" y="286.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="I_67" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="118" y="286.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="V_8" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="128" y="286.318">V</tspan></motion.text>
					<motion.text variants={letterAni} id="T_45" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="103" y="286.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="C_37" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="88" y="286.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="A_44" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="73" y="286.318">A</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="FITNESS_6">
					<motion.text variants={letterAni} id="F_12" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="456" y="272.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="I_68" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="464" y="272.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="T_46" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="467" y="272.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="N_38" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="475" y="272.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_72" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="485" y="272.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_65" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="493" y="272.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="S_66" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="501" y="272.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="FITNESS_2">
					<motion.text variants={letterAni} id="F_13" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="149" y="272.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="I_69" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="164" y="272.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="T_47" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="174" y="272.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="N_39" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="189" y="272.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="E_73" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="206" y="272.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_67" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="221" y="272.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="S_68" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="236" y="272.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="SELF_1">
					<motion.text variants={letterAni} id="F_14" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="50" y="257.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="L_29" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="32" y="257.318">L</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="SELF_5">
					<motion.text variants={letterAni} id="F_15" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="486" y="257.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="L_30" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="468" y="257.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="E_74" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="449" y="257.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_69" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="430" y="257.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="SELF_4">
					<motion.text variants={letterAni} id="F_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="312" y="257.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="L_31" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="294" y="257.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="E_75" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="275" y="257.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_70" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="256" y="257.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="SELF_3">
					<motion.text variants={letterAni} id="F_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="225" y="257.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="L_32" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="207" y="257.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="E_76" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="188" y="257.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_71" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="169" y="257.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="SELF_2">
					<motion.text variants={letterAni} id="F_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="138" y="257.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="L_33" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="120" y="257.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="E_77" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="101" y="257.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_72" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="82" y="257.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="SELF_5_2">
					<motion.text variants={letterAni} id="F_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="398" y="257.318">F</tspan></motion.text>
					<motion.text variants={letterAni} id="L_34" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="380" y="257.318">L</tspan></motion.text>
					<motion.text variants={letterAni} id="E_78" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="361" y="257.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="S_73" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="342" y="257.318">S</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="DATA_SCIENCE_1">
					<motion.text variants={letterAni} id="D_16" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="24" y="241.318">D</tspan></motion.text>
					<motion.text variants={letterAni} id="A_45" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="44" y="241.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="T_48" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="62" y="241.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="A_46" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="80" y="241.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="S_74" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="111" y="241.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="C_38" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="128" y="241.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="I_70" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="147" y="241.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="E_79" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="160" y="241.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="N_40" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="177" y="241.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="C_39" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="197" y="241.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="E_80" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="215" y="241.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="DATA_SCIENCE_2">
					<motion.text variants={letterAni} id="D_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="245" y="241.318">D</tspan></motion.text>
					<motion.text variants={letterAni} id="A_47" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="264" y="241.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="T_49" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="283" y="241.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="A_48" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="300" y="241.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="S_75" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="316" y="241.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="C_40" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="324" y="241.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="I_71" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="334" y="241.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="E_81" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="337" y="241.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="N_41" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="345" y="241.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="C_41" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="355" y="241.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="E_82" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="364" y="241.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="DATA_SCIENCE_3">
					<motion.text variants={letterAni} id="D_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="374" y="241.318">D</tspan></motion.text>
					<motion.text variants={letterAni} id="A_49" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="384" y="241.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="T_50" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="392" y="241.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="A_50" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="401" y="241.318">A</tspan></motion.text>
					<motion.text variants={letterAni} id="S_76" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="412" y="241.318">S</tspan></motion.text>
					<motion.text variants={letterAni} id="C_42" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="420" y="241.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="I_72" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="430" y="241.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="E_83" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="433" y="241.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="N_42" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="441" y="241.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="C_43" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="451" y="241.318">C</tspan></motion.text>
					<motion.text variants={letterAni} id="E_84" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="460" y="241.318">E</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="TRUE_1">
					<motion.text variants={letterAni} id="E_85" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="218" y="180.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="U_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="173" y="180.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="R_38" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="129" y="180.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="T_51" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="86" y="180.318">T</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="ADVENTURE_1">
					<motion.text variants={letterAni} id="E_86" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="121" y="195.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="E_87" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="26" y="195.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="N_43" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="43" y="195.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="U_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="82" y="195.318">U</tspan></motion.text>
					<motion.text variants={letterAni} id="R_39" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="102" y="195.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="T_52" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="63" y="196.318">T</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="CRIME_1">
					<motion.text variants={letterAni} id="E_88" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="470" y="180.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="M_29" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="424" y="180.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="I_73" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="386" y="180.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="R_40" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="342" y="180.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="C_44" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="298" y="180.318">C</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="GAMING_1">
					<motion.text variants={letterAni} id="G_17" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="202" y="150.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="G_18" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="41" y="150.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="N_44" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="169" y="150.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="I_74" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="142" y="150.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="M_30" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="107" y="150.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="A_51" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="74" y="150.318">A</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="GAMING_2">
					<motion.text variants={letterAni} id="G_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="361" y="150.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="G_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="262" y="150.318">G</tspan></motion.text>
					<motion.text variants={letterAni} id="I_75" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="349" y="150.318">I</tspan></motion.text>
					<motion.text variants={letterAni} id="N_45" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="352" y="150.318">N</tspan></motion.text>
					<motion.text variants={letterAni} id="M_31" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="328" y="150.318">M</tspan></motion.text>
					<motion.text variants={letterAni} id="A_52" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="296" y="150.318">A</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="POETRY_1">
					<motion.text variants={letterAni} id="P_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="38" y="135.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="O_35" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="63" y="135.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="E_89" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="91" y="135.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="T_53" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="116" y="135.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="R_41" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="142" y="135.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="167" y="135.318">Y</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="POETRY_2">
					<motion.text variants={letterAni} id="P_22" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="214" y="135.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="O_36" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="239" y="135.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="E_90" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="267" y="135.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="T_54" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="292" y="135.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="R_42" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="318" y="135.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_22" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="328" y="135.318">Y</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="POETRY_3">
					<motion.text variants={letterAni} id="P_23" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="339" y="135.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="O_37" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="347" y="135.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="E_91" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="357" y="135.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="T_55" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="365" y="135.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="R_43" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="373" y="135.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_23" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="382" y="135.318">Y</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="POETRY_4">
					<motion.text variants={letterAni} id="P_24" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="393" y="135.318">P</tspan></motion.text>
					<motion.text variants={letterAni} id="O_38" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="401" y="135.318">O</tspan></motion.text>
					<motion.text variants={letterAni} id="E_92" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="411" y="135.318">E</tspan></motion.text>
					<motion.text variants={letterAni} id="T_56" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="419" y="135.318">T</tspan></motion.text>
					<motion.text variants={letterAni} id="R_44" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="427" y="135.318">R</tspan></motion.text>
					<motion.text variants={letterAni} id="Y_24" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="436" y="135.318">Y</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="DIGITAL_1">
					<motion.text variants={letterAni} id="L_35" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="250" y="91.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="A_53" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="230" y="91.3182">A</tspan></motion.text>
					<motion.text variants={letterAni} id="T_57" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="211" y="91.3182">T</tspan></motion.text>
					<motion.text variants={letterAni} id="I_76" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="198" y="91.3182">I</tspan></motion.text>
					<motion.text variants={letterAni} id="G_21" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="178" y="91.3182">G</tspan></motion.text>
					<motion.text variants={letterAni} id="I_77" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="165" y="91.3182">I</tspan></motion.text>
					<motion.text variants={letterAni} id="D_19" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="145" y="91.3182">D</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="DIPLOMACY_2">
					<motion.text variants={letterAni} id="Y_25" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="430" y="91.3182">Y</tspan></motion.text>
					<motion.text variants={letterAni} id="C_45" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="411" y="91.3182">C</tspan></motion.text>
					<motion.text variants={letterAni} id="A_54" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="392" y="91.3182">A</tspan></motion.text>
					<motion.text variants={letterAni} id="M_32" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="369" y="91.3182">M</tspan></motion.text>
					<motion.text variants={letterAni} id="O_39" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="349" y="91.3182">O</tspan></motion.text>
					<motion.text variants={letterAni} id="L_36" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="332" y="91.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="P_25" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="314" y="91.3182">P</tspan></motion.text>
					<motion.text variants={letterAni} id="I_78" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="300" y="91.3182">I</tspan></motion.text>
					<motion.text variants={letterAni} id="D_20" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="280" y="91.3182">D</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="TECHNOLOGY_2">
					<motion.text variants={letterAni} id="Y_26" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="427" y="60.3182">Y</tspan></motion.text>
					<motion.text variants={letterAni} id="G_22" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="407" y="60.3182">G</tspan></motion.text>
					<motion.text variants={letterAni} id="O_40" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="387" y="60.3182">O</tspan></motion.text>
					<motion.text variants={letterAni} id="O_41" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="350" y="60.3182">O</tspan></motion.text>
					<motion.text variants={letterAni} id="L_37" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="370" y="60.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="N_46" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="330" y="60.3182">N</tspan></motion.text>
					<motion.text variants={letterAni} id="H_29" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="310" y="60.3182">H</tspan></motion.text>
					<motion.text variants={letterAni} id="C_46" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="291" y="60.3182">C</tspan></motion.text>
					<motion.text variants={letterAni} id="E_93" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="273" y="60.3182">E</tspan></motion.text>
					<motion.text variants={letterAni} id="T_58" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="255" y="60.3182">T</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="HEALTH_1">
					<motion.text variants={letterAni} id="L_38" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="93" y="45.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="T_59" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="115" y="45.3182">T</tspan></motion.text>
					<motion.text variants={letterAni} id="H_30" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="137" y="45.3182">H</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="HEALTH_2">
					<motion.text variants={letterAni} id="L_39" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="251" y="45.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="T_60" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="272" y="45.3182">T</tspan></motion.text>
					<motion.text variants={letterAni} id="H_31" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="295" y="45.3182">H</tspan></motion.text>
					<motion.text variants={letterAni} id="H_32" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="179" y="45.3182">H</tspan></motion.text>
					<motion.text variants={letterAni} id="E_94" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="204" y="45.3182">E</tspan></motion.text>
					<motion.text variants={letterAni} id="A_55" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="227" y="45.3182">A</tspan></motion.text>
				</motion.g>
				<motion.g variants={banner}
				   initial='initial'
				   animate='animate'
				   exit='exit' id="POLITICS_2">
					<motion.text variants={letterAni} id="P_26" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="268" y="30.3182">P</tspan></motion.text>
					<motion.text variants={letterAni} id="O_42" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="288" y="30.3182">O</tspan></motion.text>
					<motion.text variants={letterAni} id="L_40" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="308" y="30.3182">L</tspan></motion.text>
					<motion.text variants={letterAni} id="I_79" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="326" y="30.3182">I</tspan></motion.text>
					<motion.text variants={letterAni} id="T_61" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="339" y="30.3182">T</tspan></motion.text>
					<motion.text variants={letterAni} id="I_80" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="359" y="30.3182">I</tspan></motion.text>
					<motion.text variants={letterAni} id="C_47" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="372" y="30.3182">C</tspan></motion.text>
					<motion.text variants={letterAni} id="S_77" fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter"
					      fontSize="16" letterSpacing="0em"><tspan x="391" y="30.3182">S</tspan></motion.text>
				</motion.g>
			</g>
		</svg>
	)
}

export default HeroHead
