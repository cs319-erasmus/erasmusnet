import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { MobileNavLinks } from "./mobileNavLinks";
import { Logo } from "../..";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  z-index: 0;
  sticky: top;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;


function Header() {

  const navigate = useNavigate();

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <NavbarContainer>
      <LeftSection>
      <Link to={"/"}>
          <Logo />
        </Link>
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}


export default Header;




// function Header() {
 
  // const home = () => {
  //   navigate("/", { replace: true });
  //   document.getElementById("hero").scrollIntoView();
  // };
  // const about = () => {
  //   navigate("/", { replace: true });
  //   document.getElementById("about").scrollIntoView();
  // };
  // const contact = () => {
  //   navigate("/", { replace: true });
  //   document.getElementById("contact").scrollIntoView();
  // };

//   return (
//     <header aria-label="Site Header" class="sticky top-0 z-0 bg-white border-b-2">
//       <div class="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        

//         <div class="flex flex-1 items-center justify-end md:justify-between">
//           <nav aria-label="Site Nav" class="hidden md:block">
//             <ul class="flex items-center gap-6 text-sm">
//               <li>
//                 <div
//                   onClick={home}
//                   class="text-gray-500 transition hover:text-gray-500/75 select-none ease-in-out cursor-pointer"
//                 >
//                   Home
//                 </div>
//               </li>

//               <li>
//                 <div
//                   onClick={about}
//                   class="text-gray-500 transition hover:text-gray-500/75 select-none ease-in-out cursor-pointer"
//                 >
//                   About
//                 </div>
//               </li>

//               <li>
//                 <div
//                   onClick={contact}
//                   class="text-gray-500 transition hover:text-gray-500/75 select-none ease-in-out cursor-pointer"
//                 >
//                   Contact
//                 </div>
//               </li>
//             </ul>
//           </nav>

//           <div className="flex select-none items-center space-x-4 ml-auto">
//             <motion.button
//               whileTap={{ scale: 0.9 }}
//               onClick={login}
//               className="hidden sm:block bg-indigo-700 hover:bg-indigo-900 duration-100 transition-all ease-in-out text-white px-4 py-2 rounded-xl"
//             >
//               Login
//             </motion.button>
//             <motion.button
//               whileTap={{ scale: 0.9 }}
//               onClick={signup}
//               className="hidden sm:block bg-indigo-700 hover:bg-indigo-900 duration-100 transition-all ease-in-out text-white px-4 py-2 rounded-xl"
//             >
//               Sign Up
//             </motion.button>

//             <button class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
//               <span class="sr-only">Toggle menu</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 class="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 stroke-width="2"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
