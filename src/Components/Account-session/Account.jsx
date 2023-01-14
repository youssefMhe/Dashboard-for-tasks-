import React from 'react';
import "./account.scss"
import {GrFormNext} from "react-icons/gr";
import profile from '../../Assets/profile_user.jpeg'
import {BsThreeDots} from "react-icons/bs";
import {AiFillEdit} from "react-icons/ai";

const Account = (props) => (
    <div className={'account'}>
        <div className={'icons flex'}>
            <GrFormNext className={'icon'}/>
            <BsThreeDots className={'icon'}/>
        </div>
        <div className={"accountDetails"}>
            <div className={'imageDiv'}>
                <img src={profile} alt={'image'}/>
                <span className={'name'}>Jake Charmaine</span>
                <span className={'position'}>Private Sector It Employee</span>
                <button className={'btn flex'}>
                    <AiFillEdit className={'icon'}/>
                    Edit Profile
                </button>

            </div>
            <div className={'hoursDiv'}>
                <span className={'title'}>Working Hours</span>
                <div className={'hoursCard flex'}>
                    <div className={'right bg'}>
                        <span> Work Starts</span>
                        <h6>9:30 AM</h6>
                    </div>

                    <div className={'left noBg'}>
                        <span> Work Ends</span>
                        <h6>4:30 PM</h6>
                    </div>

                </div>
            </div>
            <h1 className={'city'}>Paris</h1>
            <span className={'region'}>France , GMT+1</span>
        </div>


    </div>
);

export default Account;