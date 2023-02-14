import React, { useState } from 'react'
import Header from '../components/Header'

export default function Transactions() {
  const [entries, setEntries] = useState(true)

    return (
        <div className='transactions'>
            {/* header */}
            <Header page={'transactions'}/>
            {/* main */}
            <section className="main-transactions">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="left-transactions">
                                <div className="top-head">
                                    <img src="/images/head.png" alt="head" className='head' />
                                    <p className='text-stroke'>Your NFTs</p>
                                </div>
                                <div className="nft-card">
                                    <div className="card">
                                        <img src="/images/nft-card-1.png" alt="nft" />
                                        <div className="card-body">
                                            <img src="/images/menu.png" alt="bg" className='bg-image' />
                                            <p className='text-stroke'>Merchant <br /><span>24.02.2022</span></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="/images/nft-card-2.png" alt="nft" />
                                        <div className="card-body">
                                            <img src="/images/menu.png" alt="bg" className='bg-image' />
                                            <p className='text-stroke'>Merchant <br /><span>24.02.2022</span></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="/images/nft-card-3.png" alt="nft" />
                                        <div className="card-body">
                                            <img src="/images/menu.png" alt="bg" className='bg-image' />
                                            <p className='text-stroke'>Merchant <br /><span>24.02.2022</span></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="/images/nft-card-4.png" alt="nft" />
                                        <div className="card-body">
                                            <img src="/images/menu.png" alt="bg" className='bg-image' />
                                            <p className='text-stroke'>Merchant <br /><span>24.02.2022</span></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="/images/nft-card-5.png" alt="nft" />
                                        <div className="card-body">
                                            <img src="/images/menu.png" alt="bg" className='bg-image' />
                                            <p className='text-stroke'>Merchant <br /><span>24.02.2022</span></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="/images/nft-card-3.png" alt="nft" />
                                        <div className="card-body">
                                            <img src="/images/menu.png" alt="bg" className='bg-image' />
                                            <p className='text-stroke'>Merchant <br /><span>24.02.2022</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="first-row">
                                <div className="transactions-menu">
                                    <div className="menu">
                                        <img src="/images/blue.png" alt="blue" className='icon' />
                                        <img src="/images/menu-leaderboard.png" alt="menu" className='menu-image' />
                                        <p className='text-stroke price'>10 900</p>
                                        <p className='text-stroke spent'>tickets bought</p>
                                    </div>
                                    <div className="menu">
                                        <img src="/images/fire.png" alt="fire" className='icon' />
                                        <img src="/images/menu-leaderboard.png" alt="menu" className='menu-image' />
                                        <p className='text-stroke price'>34 432 $BY</p>
                                        <p className='text-stroke spent'>Spent</p>
                                    </div>
                                    <div className="menu">
                                        <img src="/images/dollar.png" alt="dollar" className='icon' />
                                        <img src="/images/menu-leaderboard.png" alt="menu" className='menu-image' />
                                        <p className='text-stroke price'>56 842 $BY</p>
                                        <p className='text-stroke spent'>earned</p>
                                    </div>
                                </div>
                            </div>
                            <div className="data-col">
                                <div className="col-content">
                                    <div className="top">
                                        <div className="head">
                                            <img src="/images/tabs.png" alt="head" className='head' />
                                            <div className="content">
                                                <p className={entries ? 'text-stroke entries active' : 'text-stroke entries'} onClick={() =>{setEntries(true)}}>Today’s Entries</p>
                                                <p className='line'>|</p>
                                                <p className={!entries ? 'text-stroke history active' : 'text-stroke history'} onClick={() =>{setEntries(false)}}>Game Results</p>
                                            </div>
                                        </div>
                                        <img src="/images/light-brown-bg.png" alt="brown" className='brown' />
                                        { entries ? <>
                                            <div className="table-content">
                                                <div className="top-heading">
                                                    <p className='text-stroke transaction'>Transaction</p>
                                                    <p className='text-stroke amount'>Amount</p>
                                                    <p className='text-stroke desc'>Description</p>
                                                    <p className='text-stroke date'>Date</p>
                                                    <p className='text-stroke time'>Time</p>
                                                </div>
                                                <div className="table-body">
                                                    <div className="table-data">
                                                        <div className="start">
                                                            <div className='green-plus' >
                                                                <img src="/images/green-plus.png" alt="avatar"/>
                                                            </div>
                                                            <p>Credited</p>
                                                        </div>
                                                        <p className='amount'>+ 10 000 $BY</p>
                                                        <p className='desc'>Metamask replenishment</p>
                                                        <p className='date'>24.02.2022</p>
                                                        <p className='time'>18:34</p>
                                                    </div>
                                                    <div className="table-data">
                                                        <div className="start">
                                                            <div className='red-minus' >
                                                                <img src="/images/red-minus.png" alt="avatar" />
                                                            </div>
                                                            <p>Debited</p>
                                                        </div>
                                                        <p className='amount'>+ 10 000 $BY</p>
                                                        <p className='desc'>Metamask replenishment</p>
                                                        <p className='date'>24.02.2022</p>
                                                        <p className='time'>18:34</p>
                                                    </div>
                                                    <div className="table-data">
                                                        <div className="start">
                                                            <div className='green-plus' >
                                                                <img src="/images/green-plus.png" alt="avatar"/>
                                                            </div>
                                                            <p>Credited</p>
                                                        </div>
                                                        <p className='amount'>+ 10 000 $BY</p>
                                                        <p className='desc'>Metamask replenishment</p>
                                                        <p className='date'>24.02.2022</p>
                                                        <p className='time'>18:34</p>
                                                    </div>
                                                    <div className="table-data">
                                                        <div className="start">
                                                            <div className='red-minus' >
                                                                <img src="/images/red-minus.png" alt="avatar" />
                                                            </div>
                                                            <p>Debited</p>
                                                        </div>
                                                        <p className='amount'>+ 10 000 $BY</p>
                                                        <p className='desc'>Metamask replenishment</p>
                                                        <p className='date'>24.02.2022</p>
                                                        <p className='time'>18:34</p>
                                                    </div>
                                                    <div className="table-data">
                                                        <div className="start">
                                                            <div className='green-plus' >
                                                                <img src="/images/green-plus.png" alt="avatar"/>
                                                            </div>
                                                            <p>Credited</p>
                                                        </div>
                                                        <p className='amount'>+ 10 000 $BY</p>
                                                        <p className='desc'>Metamask replenishment</p>
                                                        <p className='date'>24.02.2022</p>
                                                        <p className='time'>18:34</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pagination">
                                                <button className='green-btn text-stroke'>1</button>
                                                <button className='paginate-btn'>2</button>
                                                <button className='paginate-btn'>3</button>
                                                <button className='paginate-btn'>4</button>
                                                <button className='paginate-btn'>5</button>
                                                <button className='paginate-btn'>...</button>
                                                <button className='green-btn text-stroke'>Last</button>
                                            </div>
                                        </> : <>
                                            <div className="table-content">
                                                <div className="top-heading">
                                                    <p className='text-stroke transaction'>Transaction</p>
                                                    <p className='text-stroke amount'>Amount</p>
                                                    <p className='text-stroke desc'>Description</p>
                                                    <p className='text-stroke date'>Date</p>
                                                    <p className='text-stroke time'>Time</p>
                                                </div>
                                                <div className="table-body">
                                                    <div className="table-data">
                                                        <div className="start">
                                                            <div className='green-plus' >
                                                                <img src="/images/green-plus.png" alt="avatar"/>
                                                            </div>
                                                            <p>Credited</p>
                                                        </div>
                                                        <p className='amount'>+ 10 000 $BY</p>
                                                        <p className='desc'>Metamask replenishment</p>
                                                        <p className='date'>24.02.2022</p>
                                                        <p className='time'>18:34</p>
                                                    </div>
                                                    <div className="table-data">
                                                        <div className="start">
                                                            <div className='red-minus' >
                                                                <img src="/images/red-minus.png" alt="avatar" />
                                                            </div>
                                                            <p>Debited</p>
                                                        </div>
                                                        <p className='amount'>+ 10 000 $BY</p>
                                                        <p className='desc'>Metamask replenishment</p>
                                                        <p className='date'>24.02.2022</p>
                                                        <p className='time'>18:34</p>
                                                    </div>
                                                    <div className="table-data">
                                                        <div className="start">
                                                            <div className='green-plus' >
                                                                <img src="/images/green-plus.png" alt="avatar"/>
                                                            </div>
                                                            <p>Credited</p>
                                                        </div>
                                                        <p className='amount'>+ 10 000 $BY</p>
                                                        <p className='desc'>Metamask replenishment</p>
                                                        <p className='date'>24.02.2022</p>
                                                        <p className='time'>18:34</p>
                                                    </div>
                                                    <div className="table-data">
                                                        <div className="start">
                                                            <div className='red-minus' >
                                                                <img src="/images/red-minus.png" alt="avatar" />
                                                            </div>
                                                            <p>Debited</p>
                                                        </div>
                                                        <p className='amount'>+ 10 000 $BY</p>
                                                        <p className='desc'>Metamask replenishment</p>
                                                        <p className='date'>24.02.2022</p>
                                                        <p className='time'>18:34</p>
                                                    </div>
                                                    <div className="table-data">
                                                        <div className="start">
                                                            <div className='green-plus' >
                                                                <img src="/images/green-plus.png" alt="avatar"/>
                                                            </div>
                                                            <p>Credited</p>
                                                        </div>
                                                        <p className='amount'>+ 10 000 $BY</p>
                                                        <p className='desc'>Metamask replenishment</p>
                                                        <p className='date'>24.02.2022</p>
                                                        <p className='time'>18:34</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pagination">
                                                <button className='green-btn text-stroke'>1</button>
                                                <button className='paginate-btn'>2</button>
                                                <button className='paginate-btn'>3</button>
                                                <button className='paginate-btn'>4</button>
                                                <button className='paginate-btn'>5</button>
                                                <button className='paginate-btn'>...</button>
                                                <button className='green-btn text-stroke'>Last</button>
                                            </div>
                                        </>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
