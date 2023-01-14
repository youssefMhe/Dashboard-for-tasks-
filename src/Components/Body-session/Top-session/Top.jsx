import './top.scss'
import React from 'react';
import {HiOutlineSearch} from "react-icons/hi";

const Top = (props) => {

    return (
        <div className={'top'}>
            <div className={'topDiv flex'}>
                <div className={'titleText'}>
                    <span className={'title'}>Working Productivity</span>
                    <p>Let's see your progress</p>
                </div>
                <div className={'searchInput flex'}>
                    <HiOutlineSearch className={'icon'}/>
                    <input type={'text'} placeholder={"Search"}/>
                </div>
            </div>
            <div className={"cardsDiv flex"}>
                <div className={'cards'}>
                    <div className={'card yellowCard flex'}>
                        <div className={"date"}>
                            <span> Mon</span>
                            <h3>17</h3>
                        </div>
                        <div className={'percentage'}>
                            <span className={'text'}> Productive</span>
                            <div className={'flex'}>
                                <span className={'line'}></span>
                                <span className={'pctg'}>78%</span>
                            </div>
                        </div>
                        <div className={'time'}>
                            <span className={'text'}>Productive time</span>
                            <h2> 5h 12m</h2>
                        </div>
                        <div className={'workTime'}>
                            <span className={'text'}>Time at work</span>
                            <h2> 8h 17m</h2>
                        </div>
                    </div>
                    <div className={'card lightGreenCard flex'}>
                        <div className={"date"}>
                            <span> Mon</span>
                            <h3>17</h3>
                        </div>
                        <div className={'percentage'}>
                            <span className={'text'}> Productive</span>
                            <div className={'flex'}>
                                <span className={'line'}></span>
                                <span className={'pctg'}>78%</span>
                            </div>
                        </div>
                        <div className={'time'}>
                            <span className={'text'}>Productive time</span>
                            <h2> 5h 12m</h2>
                        </div>
                        <div className={'workTime'}>
                            <span className={'text'}>Time at work</span>
                            <h2> 8h 17m</h2>
                        </div>
                    </div>
                    <div className={'card darkGreenNCard flex'}>
                        <div className={"date"}>
                            <span> Mon</span>
                            <h3>17</h3>
                        </div>
                        <div className={'percentage'}>
                            <span className={'text'}> Productive</span>
                            <div className={'flex'}>
                                <span className={'line'}></span>
                                <span className={'pctg'}>78%</span>
                            </div>
                        </div>
                        <div className={'time'}>
                            <span className={'text'}>Productive time</span>
                            <h2> 5h 12m</h2>
                        </div>
                        <div className={'workTime'}>
                            <span className={'text'}>Time at work</span>
                            <h2> 8h 17m</h2>
                        </div>
                    </div>
                </div>
                <div className={'statsDiv'}>
                <span className={'title'}>
                    Statistic on this October
                </span>
                    <div className={'stat'}>
                        <div className={'singleStat'}>
                            <div className={"statInfo flex"}>
                                <span className={'status'}> Complete Works</span>
                                <span className={'percentage'}> 81%</span>
                            </div>
                            <div className={'line'}>
                                <span className={"range"}></span>
                            </div>

                        </div>
                        <div className={'singleStat'}>
                            <div className={"statInfo flex"}>
                                <span className={'status'}> Complete Works</span>
                                <span className={'percentage'}> 81%</span>
                            </div>
                            <div className={'line'}>
                                <span className={"range"}></span>
                            </div>

                        </div>
                        <div className={'singleStat'}>
                            <div className={"statInfo flex"}>
                                <span className={'status'}> Complete Works</span>
                                <span className={'percentage'}> 81%</span>
                            </div>
                            <div className={'line'}>
                                <span className={"range"}></span>
                            </div>

                        </div>
                        <div className={'singleStat'}>
                            <div className={"statInfo flex"}>
                                <span className={'status'}> Complete Works</span>
                                <span className={'percentage'}> 81%</span>
                            </div>
                            <div className={'line'}>
                                <span className={"range"}></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Top;