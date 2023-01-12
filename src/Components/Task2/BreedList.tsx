import React, { Fragment } from 'react'
import BreedItem from './BreedItem';

interface PropsBreedList {
  breeds: Object;
}
function BreedList({breeds}:PropsBreedList) {
	return (
    <div className='dog-gallery'>
			{ breeds &&
				Object.keys(breeds).map((breed, index)=><BreedItem key={index} breed={breed} />)
			}
    </div>
  );
}

export default BreedList