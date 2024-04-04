import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { cn } from '../../lib/utils'
import UpArrow from '../../icons/UpArrow'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn('border-b', className)}
		{...props}
	/>
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'flex flex-1 items-center justify-between py-4 lg:py-8 font-medium transition-all ' +
				'[&[data-state=open]>svg]:rotate-0 text-white lg:text-lg font-sans text-left',
				className
			)}
			{...props}
		>
			{children}
			<UpArrow className="shrink-0 transition-transform duration-200 rotate-180" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up
		data-[state=open]:animate-accordion-down"
		{...props}
	>
		<div className={cn('pt-2 lg:pt-4 pb-4 lg:pb-6 text-white/70 font-sans text-sm lg:text-base', className)}>{children}</div>
	</AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
