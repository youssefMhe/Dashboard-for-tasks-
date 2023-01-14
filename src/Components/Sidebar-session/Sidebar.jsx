import React from 'react';
import "./sidebar.scss"
import logo from '../../Assets/logo-app.png'
import {AiOutlineCalculator, AiOutlinePieChart} from "react-icons/ai";
import {BsBatteryCharging,} from "react-icons/bs";
import {BsChatDots,} from "react-icons/bs";
import {BsFolderSymlink,} from "react-icons/bs";
import {GiComputerFan,} from "react-icons/gi";
import {TbToolsOff} from "react-icons/tb";


const Sidebar = (props) => (
    <div className={'sideBar'}>
        <div className={'logoDiv flex'}>
            <img src={logo} alt={"Logo Image"}/>
        </div>

        <div className={'menu'}>
            <ul className={'navItem'}>
                <li className={'navList'}>
                    <AiOutlinePieChart className={'icon'}/>
                </li>

                <li className={'navList'}>
                    <AiOutlineCalculator className={'icon'}/>
                </li>

                <li className={'navList'}>
                    <BsFolderSymlink className={'icon'}/>
                </li>

                <li className={'navList'}>
                    <BsBatteryCharging className={'icon'}/>
                </li>

                <li className={'navList'}>
                    <BsChatDots className={'icon'}/>
                </li>

                <li className={'navList'}>
                    <GiComputerFan className={'icon'}/>
                </li>

                <li className={'navList'}>
                    <TbToolsOff className={'icon'}/>
                </li>
            </ul>

        </div>

    </div>

);

export default Sidebar;