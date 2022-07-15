import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
import { useState } from "react";
// import logo from "../../images/unique.png";

const NavbarItem = ({ title, classProp }) => {
    return <li className={`mx-4 cursor-pointer ${classProp}`}>{title}</li>;
};

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Market", "Exchange", "Tutorials", "Wallets"].map(
                    (item, idx) => (
                        <NavbarItem key={item + idx} title={item} />
                    )
                )}
                <li className="bg-[#2952e3] py-2 px-7 rounded-full cursor-pointer mx-4 hover:bg-[#2546bd]">
                    Login
                </li>
            </ul>
            <div className="flex relative">
                {toggleMenu ? (
                    <AiOutlineClose
                        fontSize={28}
                        className="text-white md:hidden cursor-pointer"
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <HiMenuAlt4
                        fontSize={28}
                        className="text-white md:hidden cursor-pointer"
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <ul
                        className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                            flex-col justify-start items-end rounded-sm blue-glassmorphism text-white animate-slide-in"
                    
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose
                                onClick={() => setToggleMenu(false)}
                            />
                        </li>
                        {["Market", "Exchange", "Tutorials", "Wallets"].map(
                            (item, idx) => (
                                <NavbarItem
                                    key={item + idx}
                                    title={item}
                                    classProp={"my-2 text-lg"}
                                />
                            )
                        )}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
