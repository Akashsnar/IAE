import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import Sidebar from '../Sidebar'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (


        <div className="grid grid-cols-4 p-4 bg-blend-lighten h-screen">
            <Sidebar />

            {/* Right Component */}
            <div className="col-span-3 h-full px-2 rounded-lg flex flex-col">
                <div className="main">
                    <div className="nav">
                        <p>Buddy's Wink</p>
                        <img src={assets.user_icon} alt="" />
                    </div>
                    <div className="main-container">

                        {!showResult
                            ? <>
                                <div className="greet">
                                    <p><span>Hello, Folks</span></p>
                                    <p>How can I help you today?</p>
                                </div>
                               
                            </>
                            : <div className="result">
                                <div className="result-title">
                                    <img src={assets.user_icon} alt="" />
                                    <p>{recentPrompt}</p>
                                </div>
                                <div className="result-data">
                                    <img src={assets.gemini_icon} alt="" />
                                    {loading
                                        ? <div className="loader">
                                            <hr />
                                            <hr />
                                            <hr />
                                        </div>
                                        : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                    }
                                </div>
                            </div>

                        }

                        <div className="main-bottom">
                            <div className="search-box">
                                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                                <div>
                                    <img src={assets.gallery_icon} alt="" />
                                    <img src={assets.mic_icon} alt="" />
                                    {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                                </div>
                            </div>
                            <p className="bottom-info">
                                Gemini may display inaccurate info, including about people, so double check it's responses. Your privacy and Gemini Apps
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main