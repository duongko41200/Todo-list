import * as React from 'react';

export interface NavProps {
	id: number;
	name: string;
	isActive: boolean;
}

const About= (props: Array<NavProps>) =>{
  return (
	<div>
	  about page
	</div>
  );
}

export default About

