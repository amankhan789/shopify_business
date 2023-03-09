import React from 'react'
import { useState } from 'react';
import '../App.css';

const ToggleButton = () => {

    const [css, setCss] = useState();
    const [statusChangerOne, setStatusChangerOne] = useState(false);
    const [statusChangerTwo, setStatusChangerTwo] = useState(false);
    const [statusChangerThree, setStatusChangerThree] = useState(false);

    const changeHandler = (e) => {
        setCss(e.target.checked)
    }
    const textHandler1 = () => {
        setStatusChangerOne((prev) => !prev)
    }
    const textHandler2 = () => {
        setStatusChangerTwo((prev) => !prev)
    }
    const textHandler3 = () => {
        setStatusChangerThree((prev) => !prev)
    }
    
    return (
        <>
            <p>App status</p>
            <div className='toggle_box'>
                <span className='On'>OFF</span><label className="switch">
                    <input type="checkbox" onChange={(e) => changeHandler(e)} />
                    <span className="slider"></span>
                </label> <span className='off'>ON</span>
            </div>
            {
                (css === true)
                    ? <>
                        <div className='toggle_wrapper'>
                            <div class='toggle-item'>
                                <div className='flex25'>
                                    <div className='toggle_box'>
                                        <span className='On'>OFF</span><label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider"></span>
                                        </label> <span className='off'>ON</span>
                                    </div>
                                </div>
                                <div className='flex25'>
                                    <div className='toggle_box'>
                                        <span className='On'>OFF</span><label className="switch">
                                            <input type="checkbox" onChange={(e) => textHandler1()} />
                                            <span className="slider"></span>
                                        </label> <span className='off'>ON</span>
                                    </div>
                                </div>
                                {
                                    (statusChangerOne)
                                        ?
                                        <div className='input_file'>
                                            <input type='file' />
                                        </div>
                                        : ""
                                }

                                {
                                    (statusChangerOne == false) ?
                                        <>
                                            <div className='btn_text'>
                                                <input type="text" />
                                            </div>
                                            <div>
                                            <input type="color" />
                                            </div>
                                        </> : ''
                                }

                            </div>
                            <div class='toggle-item'>
                                <div className='flex25'>
                                    <div className='toggle_box'>
                                        <span className='On'>OFF</span><label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider"></span>
                                        </label> <span className='off'>ON</span>
                                    </div>
                                </div>
                                <div className='flex25'>
                                    <div className='toggle_box'>
                                        <span className='On'>OFF</span><label className="switch">
                                            <input type="checkbox" onChange={(e) => textHandler2()} />
                                            <span className="slider"></span>
                                        </label> <span className='off'>ON</span>
                                    </div>
                                </div>
                                {
                                    (statusChangerTwo)
                                        ?
                                        <div className='input_file'>
                                            <input type='file' />
                                        </div>
                                        : ""
                                }
                                {
                                    (statusChangerTwo == false) ?
                                        <>
                                            <div className='btn_text'>
                                                <input type="text" />
                                            </div>
                                            <div>
                                            <input type="color" />
                                            </div>
                                        </> : ''
                                }
                            </div>
                            <div class='toggle-item'>
                                <div className='flex25'>
                                    <div className='toggle_box'>
                                        <span className='On'>OFF</span><label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider"></span>
                                        </label> <span className='off'>ON</span>
                                    </div>
                                </div>
                                <div className='flex25'>
                                    <div className='toggle_box'>
                                        <span className='On'>OFF</span><label className="switch">
                                            <input type="checkbox" onChange={(e) => textHandler3()} />
                                            <span className="slider"></span>
                                        </label> <span className='off'>ON</span>
                                    </div>
                                </div>
                                {
                                    (statusChangerThree)
                                        ?
                                        <div className='input_file'>
                                            <input type='file' />
                                        </div>
                                        : ""
                                }

                                {
                                    (statusChangerThree== false) ?
                                        <>
                                            <div className='btn_text'>
                                                <input type="text" />
                                            </div>
                                            <div>
                                            <input type="color" />
                                            </div>
                                        </> : ''
                                }
                            </div>
                        </div>

                    </>
                    : ""

            }


        </>
    )
}

export default ToggleButton