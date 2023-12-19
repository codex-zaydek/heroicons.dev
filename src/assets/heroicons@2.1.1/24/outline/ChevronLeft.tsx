import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.1.1/24/outline/chevron-left.svg
export function ChevronLeft(props: SVGAttributes<SVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" {...props}>
		  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
		</svg>
	)
}
