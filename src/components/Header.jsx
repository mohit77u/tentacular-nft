import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(props) {
    const [menu, setMenu] = useState(false)
    console.log(props.page)
    return (
        <header className={menu ? "header mobile-header" : "header"}>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src="/images/logo.svg" alt="logo" />
                    </div>
                    <div className="col-5 main-menu">
                        <div className="header-menu">
                            <div className="menu">
                                <NavLink to={'/'}>
                                <img src="/images/berry.png" alt="berry" className='icon' />
                                {props.page === 'berryjuice' ? 
                                <>
                                    <img src="/images/menu.png" alt="menu" />
                                </> : 
                                <>
                                    <img src="/images/dark-menu.png" alt="menu" />
                                </>
                                }
                                <p className='text-stroke'>Berry Juicer</p>
                                </NavLink>
                            </div>
                            <div className="menu">
                                <NavLink to={'/leaderboard'}>
                                <img src="/images/cup.png" alt="cup" className='icon' />
                                {props.page === 'leaderboard' ? 
                                <>
                                    <img src="/images/menu.png" alt="menu" />
                                </> : 
                                <>
                                    <img src="/images/dark-menu.png" alt="menu" />
                                </>
                                }
                                <p className='text-stroke'>Leaderboard</p>
                                </NavLink>
                            </div>
                            <div className="menu">
                                <NavLink to={'/farming'}>
                                <img src="/images/leaf.png" alt="leaf" className='icon' />
                                {props.page === 'farming' ? 
                                <>
                                    <img src="/images/menu.png" alt="menu" />
                                </> : 
                                <>
                                    <img src="/images/dark-menu.png" alt="menu" />
                                </>
                                }
                                <p className='text-stroke'>Farming</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="right-menu">
                            <div className="menu-btn">
                                <p>100 $BY</p>
                                <img src="/images/plus.png" alt="plus" />
                            </div>
                            <NavLink to={'/transactions'}>
                                <div className="menu-btn menu-avatar">
                                    <img src="/images/avatar1.png" alt="avatar" className='avatar' />
                                    <p>0x029...00v</p>
                                </div>
                            </NavLink>
                            <div className="green-btn text-stroke">Disconnect</div>
                        </div>
                    </div>
                    <div className="menu-icon">
                        <button onClick={() => { setMenu(!menu) }}>
                            <img src="/images/menu.svg" alt="menu" />
                        </button>
                    </div>
                </div>
                <div className='mobile-menu'>
                    <div className="top">
                        <img src="/images/logo.svg" alt="logo" />
                        <button className='close-icon' onClick={() => { setMenu(!menu) }}><img src="/images/close.svg" alt="close" /></button>
                    </div>
                    <div className="header-menu">
                        <div className="menu">
                            <NavLink to={'/'}>
                            <img src="/images/berry.png" alt="berry" className='icon' />
                            {props.page === 'berryjuice' ? 
                                <>
                                    <img src="/images/menu.png" alt="menu" />
                                </> : 
                                <>
                                    <img src="/images/dark-menu.png" alt="menu" />
                                </>
                            }
                            <p className='text-stroke'>Berry Juicer</p>
                            </NavLink>
                        </div>
                        <div className="menu">
                            <NavLink to={'/leaderboard'}>
                            <img src="/images/cup.png" alt="cup" className='icon' />
                            {props.page === 'leaderboard' ? 
                                <>
                                    <img src="/images/menu.png" alt="menu" />
                                </> : 
                                <>
                                    <img src="/images/dark-menu.png" alt="menu" />
                                </>
                                }
                            <p className='text-stroke'>Leaderboard</p>
                            </NavLink>
                        </div>
                        <div className="menu">
                            <NavLink to={'/farming'}>
                            <img src="/images/leaf.png" alt="leaf" className='icon' />
                            {props.page === 'farming' ? 
                                <>
                                    <img src="/images/menu.png" alt="menu" />
                                </> : 
                                <>
                                    <img src="/images/dark-menu.png" alt="menu" />
                                </>
                            }
                            <p className='text-stroke'>Farming</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className="before-bottom-menu">
                        <div className="menu-btn">
                            <p>100 $BY</p>
                            <img src="/images/plus.png" alt="plus" />
                        </div>
                    </div>
                    <div className="right-menu">
                        <NavLink to={'/transactions'}>
                        <div className="menu-btn menu-avatar">
                            <img src="/images/avatar1.png" alt="avatar" className='avatar' />
                            <p>0x029...00v</p>
                        </div>
                        </NavLink>
                        <div className="green-btn text-stroke">Disconnect</div>
                    </div>
                </div>
            </div>
        </header>
    )
}
