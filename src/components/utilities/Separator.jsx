import {cn} from '../../lib/utils'

const Separator = ({className}) => {
	return (
		<div className={cn('h-0.5 w-full bg-black', className)}/>
	)
}

export default Separator
