import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope, FaPowerOff } from "react-icons/fa";

const navItems = [
    { to: "/", icon: <FaHome />, label: "Home" },
    { to: "/about", icon: <FaUser />, label: "About" },
    { to: "/skills", icon: <FaTools />, label: "Skills" },
    { to: "/project", icon: <FaProjectDiagram />, label: "Project" },
    // { to: "/contect", icon: <FaEnvelope />, label: "Hire me" },
];


const ToggleButton = ({ expanded, onClick }) => (
    <button
        onClick={onClick}
        aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        className="bg-[var(--black)] w-10 h-10 rounded-full m-2 flex items-center justify-center relative border-none cursor-pointer focus:outline-none"
    >
        <div className="relative w-6 h-6 flex items-center justify-center">
            <span
                className="absolute h-0.5 w-5 bg-[var(--white)] transition-all duration-300 ease-in-out"
                style={{
                    top: expanded ? "50%" : "35%",
                    transform: expanded ? "translateY(-50%) rotate(45deg)" : "none",
                }}
            />
            <span
                className="absolute h-0.5 w-5 bg-[var(--white)] transition-all duration-300 ease-in-out"
                style={{
                    top: expanded ? "50%" : "65%",
                    transform: expanded ? "translateY(-50%) rotate(-45deg)" : "none",
                }}
            />
        </div>
    </button>
);

function Sidebar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="fixed h-screen">
            <ToggleButton expanded={expanded} onClick={() => setExpanded((prev) => !prev)} />

            <div className="bg-[var(--black)] h-[75vh] mt-4 rounded-r-[30px] w-14">
                {/* Logo Section */}
                <div className="flex justify-center pt-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--white)]">
                        <img
                            src="/path-to-your-logo.png"
                            alt="Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Navigation Items */}
                <div className={`flex flex-col items-center bg-[var(--black)] mt-12 transition-all duration-500 overflow-hidden ${expanded ? "w-48" : "w-14"} py-8 rounded-r-[30px]`}>
                    <div className="flex flex-col space-y-4 w-full">
                        {navItems.map(({ to, icon, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                className={({ isActive }) =>
                                    `group flex items-center space-x-3 w-full px-4 py-2.5 transition-all duration-200
                                    ${isActive
                                        ? "border-r-4 border-white bg-[var(--gray)] font-bold"
                                        : "border-r-4 border-transparent hover:border-white"}
                                    `
                                }
                                onClick={() => setExpanded(false)}
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className={`text-lg transition-colors duration-200 ${isActive ? "text-[var(--white)]" : "text-gray-400 group-hover:text-[var(--white)]"}`}>{icon}</span>
                                        {expanded && (
                                            <span className={`text-sm whitespace-nowrap transition-colors duration-200 ${isActive ? "text-[var(--white)] font-bold" : "text-gray-400"}`}>
                                                {label}
                                            </span>
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Sidebar