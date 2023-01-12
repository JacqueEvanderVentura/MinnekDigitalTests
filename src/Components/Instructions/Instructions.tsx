import React from 'react'

interface PropsInstructions{
	url: string;
}
const Instructions = ({url}:PropsInstructions) => {
	return (
		<a className='text-2xl font-semibold' href={url} target='_blank'>Instructions</a>
	)
}

export default Instructions