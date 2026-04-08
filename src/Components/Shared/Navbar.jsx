import React from 'react';
import logoImg from "../../assets/images/logo.png"
import { Link, NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';
import InstallApps from './../../InstallApps/InstallApps';
import MyNavLink from './MyNavLink';

const Navbar = () => {
    return (
        <nav className='shadow '>
            <div className='flex justify-between py-2 items-center gap-4 container mx-auto'>
                <img src={logoImg} alt="" className='w-12' />
            <ul className='flex justify-between item-center gap-2'>
                <li><MyNavLink to={"/"}>Home</MyNavLink></li>
                <li><MyNavLink to={"/apps"}>Apps</MyNavLink></li>
                <li><MyNavLink to={"/InstallApps"}>Installation</MyNavLink></li>
            </ul>
            <button className='btn btn-primary'>
                <FaGithub></FaGithub>
                Contribute</button>
            </div>
            
        </nav>
    );
};

export default Navbar;