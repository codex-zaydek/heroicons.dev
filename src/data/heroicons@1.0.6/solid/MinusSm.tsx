import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@1.0.6/solid/minus-sm.svg
export function MinusSm(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path clipRule="evenodd" fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
		</svg>
	)
}