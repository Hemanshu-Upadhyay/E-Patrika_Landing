import React from "react";
import { Opinion_Mockdata } from "../../Data/Mockdata_opinion";
import OpinionDisplay from "../../PureComponents/OpinionDisplay/OpinionDisplay";
import ReadMore from "../../PureComponents/Readmore/ReadMore";

const Opinion = () => {
	return (
		<div className="hidden md:block xl:m-percent md:mx-4">
		<ReadMore props={{Heading:"ओपिनियन"}}/>
			<div className="flex space-x-4 my-4 md:overflow-hidden xl:justify-between overflow-x-auto md:mx-0 mx-4 md:font-normal font-bold pb-2 md:pb-0">
				{Opinion_Mockdata?.map((item, index) => {
					return <OpinionDisplay opinion={item} />
	
				})}
			</div>
		</div>
	)
}

export default Opinion;


