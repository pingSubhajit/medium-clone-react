import {cn} from '../../lib/utils'
import * as React from 'react'

const Person = ({person, index, onMouseEnter, onMouseLeave, className}) => {
	return (
		<div
			key={index}
			className={cn(
				'py-2 xl:py-4 w-full border-b-[1px] border-white cursor-pointer flex items-center gap-6',
				className
			)}
			onMouseEnter={() => onMouseEnter(person)}
			onMouseLeave={onMouseLeave}
		>
			<div className="w-12 2xl:w-16 aspect-square overflow-hidden relative rounded-full">
				<img src={person.image} alt={person.name} className="object-fill"/>
			</div>

			<div>
				<h3 className="font-sans text-white text-xl 2xl:text-3xl">{person.name}</h3>
				<p className="mt-1 text-white uppercase font-sans text-xs lg:text-sm 2xl:text-base">{person.description}</p>
			</div>
		</div>
	)
}

export default Person
