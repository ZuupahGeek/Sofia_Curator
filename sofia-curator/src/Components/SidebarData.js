import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";


// export const dropdownIcon = () => {
// 	return (
// 		<div>
// 			<FontAwesomeIcon icon="fa-solid fa-caret-down" />
// 		</div>
// 	)
// };

export const SidebarData = [
{
	title: "Om Mig",
	path: "/about-us",
	// icon: <AiIcons.AiFillHome />,
	// iconClosed: <RiIcons.RiArrowDownSFill />,
	// iconOpened: <RiIcons.RiArrowUpSFill />,

	
},
{
	title: "Min Konst",
	path: "/my-art",
	// icon: <FaIcons.FaEnvelopeOpenText />,

	// iconClosed: <RiIcons.RiArrowDownSFill />,
	// iconOpened: <RiIcons.RiArrowUpSFill />,
},
{
	title: "Tjänster",
	path: "/services",
	// icon: <IoIcons.IoIosArrowDropdown />,
	iconClosed: <IoIcons.IoIosArrowDropdown />,
	iconOpened: <IoIcons.IoIosArrowDropdownCircle />,

	subNav: [
	{
		title: "Curator",
		path: "/services/curator",
		// icon: ,
		cName: "sub-nav",
	},
	{
		title: "Konsult",
		path: "/services/consultant",
		// icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	],
},
{
	title: "Kontakta Mig",
	path: "/contact",
	// icon: <FaIcons.FaPhone />,
},


];
