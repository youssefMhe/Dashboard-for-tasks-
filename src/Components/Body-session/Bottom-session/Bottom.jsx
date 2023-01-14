import React, {useState} from 'react';
import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts"
import img from '../../../Assets/logo-laptop.png'
import img1 from '../../../Assets/css.png'
import img2 from '../../../Assets/user-onze.png'
import './bottom.scss'
import {GrPowerReset} from "react-icons/gr";

const Bottom = (props) => {

    const [state, setState] = useState({
        options: {
            colors: ["#015657", "#5ABA8A"],
            chart: {
                id: 'basic-bar',
                toolbar: {
                    show: true,
                    tools: {
                        selection: false,
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        pan: false,
                        reset: true | '<GrPowerReset/>',
                        customIcons: []
                    }
                }
            },
            xaxis: {
                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
            }
        },
        series: [
            {
                name: 'Updates',
                data: [45, 64, 23, 14, 45, 44, 56]
            },
            {
                name: 'New Tasks',
                data: [87, 31, 34, 78, 10, 87, 44]
            }
        ]
    })
    return (
        <div className={'bottom flex'}>
            <div className={'graphDiv'}>
                <span className={'title'}> All Activities (Graphical View) </span>
                <Chart options={state.options}
                       series={state.series}
                       type={'area'}
                       width={'500'}/>
            </div>
            <div className={'scheduleDiv'}>
                <span className={'title'}> Upcoming Schedule</span>
                <div className={'singleTask flex'}>
                    <div className={'imgDiv flex'}>
                        <img src={img} alt={'task'}/>
                    </div>
                    <div className={'taskInfo'}>
                        <span className={"task"}>New Landing Page </span>
                        <span className={"status"}>Working On</span>
                    </div>
                    <span className={"time"}>09:23 AM</span>
                </div>
                <div className={'singleTask flex'}>
                    <div className={'imgDiv flex'}>
                        <img src={img1} alt={'task'}/>
                    </div>
                    <div className={'taskInfo'}>
                        <span className={"task"}>Create Animation </span>
                        <span className={"status"}>Working On</span>
                    </div>
                    <span className={"time"}>011:23 AM</span>
                </div>
                <div className={'singleTask flex'}>
                    <div className={'imgDiv flex'}>
                        <img src={img2} alt={'task'}/>
                    </div>
                    <div className={'taskInfo'}>
                        <span className={"task"}>Update User Model </span>
                        <span className={"status"}>Working On</span>
                    </div>
                    <span className={"time"}>02:23 PM</span>
                </div>

                <div className={'btn'}>
                    See All Activities
                </div>
            </div>

        </div>)
}

export default Bottom;