import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { NavbarData } from "./NavbarData";
import NavbarSubMenu from "./NavbarSubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
background: #15171c;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;



const SidebarNav = styled.nav`
background: #15171c;
// width: 250px;
// height: 100vh;
display: flex;
justify-content: end;
// position: fixed;
// top: 0;
// left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;



const Sidebar = () => {


return (
	<>
	<IconContext.Provider value={{ color: "#fff" }}>
		<Nav>
		<h1
			style={{ textAlign: "center",
					marginLeft: "200px",
					color: "green" }}
		>
			GeeksforGeeks
		</h1>
		</Nav>
		<SidebarNav >
		{/* <SidebarWrap> */}
			{NavbarData.map((item, index) => {
			return <NavbarSubMenu item={item} key={index} />;
			})}
		{/* </SidebarWrap> */}
		</SidebarNav>
	</IconContext.Provider>
	</>
);
};

export default Sidebar;
