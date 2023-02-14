import React, { useState } from 'react'
import Header from '../components/Header'
import Donut from 'react-donut';

export default function BerryJuicer() {
  const [entries, setEntries] = useState(true)
  return (
    <div className='home'>
      {/* header */}
      <Header page={'berryjuice'}/>

      {/* main section */}
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-4 first-column">
              <div className="data-col">
                <div className="col-content">
                  <div className="top">
                    <div className="top-head">
                      <img src="/images/head.png" alt="head" className='head' />
                      <p className='text-stroke'>Juice squeeze</p>
                    </div>
                    <img src="/images/light-brown-bg.png" alt="brown" className='brown' />
                    <div className="top-content">
                      <img src="/images/mask.png" alt="mask" className='mask' />
                      <div className="content">
                        <p className='text-stroke'>1 daily ticket</p>
                        <p className='text-stroke'> = </p>
                        <p className='text-stroke'>5 $BY</p>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="top-labels">
                        <label className='text-stroke'>Amount</label>
                        <label className='text-stroke'>My balance: 100$BY</label>
                      </div>
                      <input type="text" className='input-field' />
                    </div>
                  </div>
                  <div className="bottom">
                    <img src="/images/light-brown-bg.png" alt="brown" className='bottom-brown' />
                    <div className="bottom-btns">
                      <div className="main-btn">
                        <img src="/images/24.png" alt="icon" className='icons' />
                        <p>2 daily tickets</p>
                      </div>
                      <p className='equal'><img src="/images/equal.png" alt="equal" /></p>
                      <div className="main-btn">
                        <img src="/images/time.png" alt="icon" className='icons' />
                        <p>2 weekly tickets</p>
                      </div>
                      <div className="main-btn">
                        <img src="/images/calendar.png" alt="icon" className='icons' />
                        <p>2 monthly tickets</p>
                      </div>
                      <div className="main-btn">
                        <img src="/images/year.png" alt="icon" className='icons' />
                        <p>2 yearly tickets</p>
                      </div>
                    </div>
                    <div className="buybtn">
                      <div className="green-btn text-stroke">Buy ticket</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 wheel-col">
              <div className="wheel">
                {/* <img src="/images/wheel.png" alt="wheel" /> */}
                <img src="/images/pump.png" alt="pump" className='pump' />
                <Donut
                  chartData={[
                    { name: 'Black Panther', data: 30 },
                    { name: 'Avengers', data: 50 },
                    { name: 'Antman', data: 20 },
                  ]}
                  chartWidth={400}
                  chartHeight={500}
                  title=" "
                  chartThemeConfig={{
                    series: {
                      colors: ['#ffe0bd', '#670303', '#6cbfce'],
                    },
                  }}
                />
              </div>
            </div>
            <div className="col-4 last-column">
              <div className="data-col">
                <div className="col-content">
                  <div className="top">
                    <div className="head">
                      <img src="/images/tabs.png" alt="head" className='head' />
                      <div className="content">
                        <p className={entries ? 'text-stroke entries active' : 'text-stroke entries'} onClick={() =>{setEntries(true)}}>Today’s Entries</p>
                        <p className='line'>|</p>
                        <p className={!entries ? 'text-stroke history active' : 'text-stroke history'} onClick={() =>{setEntries(false)}}>History</p>
                      </div>
                    </div>
                    <img src="/images/light-brown-bg.png" alt="brown" className='brown-image' />
                    {entries ? <>
                      <div className="table-content">
                      <div className="top-heading">
                        <p className='text-stroke'>User</p>
                        <p className='text-stroke'>Share</p>
                        <p className='text-stroke'>Amount</p>
                        <p className='text-stroke'>Type</p>
                      </div>
                      <div className="table-body">
                        <div className="table-data">
                          <div className="user">
                            <img src="/images/avatar2.png" alt="avatar" />
                            <p>0x029...00v</p>
                          </div>
                          <p className='data'>27 %</p>
                          <p className='data'>12 tickets</p>
                          <p className='data'>Daily</p>
                        </div>
                        <div className="table-data">
                          <div className="user">
                            <img src="/images/avatar2.png" alt="avatar" />
                            <p>0x029...00v</p>
                          </div>
                          <p className='data'>27 %</p>
                          <p className='data'>12 tickets</p>
                          <p className='data'>Daily</p>
                        </div>
                        <div className="table-data">
                          <div className="user">
                            <img src="/images/avatar2.png" alt="avatar" />
                            <p>0x029...00v</p>
                          </div>
                          <p className='data'>27 %</p>
                          <p className='data'>12 tickets</p>
                          <p className='data'>Daily</p>
                        </div>
                        <div className="table-data">
                          <div className="user">
                            <img src="/images/avatar2.png" alt="avatar" />
                            <p>0x029...00v</p>
                          </div>
                          <p className='data'>27 %</p>
                          <p className='data'>12 tickets</p>
                          <p className='data'>Daily</p>
                        </div>
                        <div className="table-data">
                          <div className="user">
                            <img src="/images/avatar2.png" alt="avatar" />
                            <p>0x029...00v</p>
                          </div>
                          <p className='data'>27 %</p>
                          <p className='data'>12 tickets</p>
                          <p className='data'>Daily</p>
                        </div>
                        <div className="table-data">
                          <div className="user">
                            <img src="/images/avatar2.png" alt="avatar" />
                            <p>0x029...00v</p>
                          </div>
                          <p className='data'>27 %</p>
                          <p className='data'>12 tickets</p>
                          <p className='data'>Daily</p>
                        </div>
                        <div className="table-data">
                          <div className="user">
                            <img src="/images/avatar2.png" alt="avatar" />
                            <p>0x029...00v</p>
                          </div>
                          <p className='data'>27 %</p>
                          <p className='data'>12 tickets</p>
                          <p className='data'>Daily</p>
                        </div>
                      </div>
                      </div>
                    </>: <>
                      <div className="table-content">
                      <div className="top-heading">
                        <p className='text-stroke'>User</p>
                        <p className='text-stroke'>Share</p>
                        <p className='text-stroke'>Amount</p>
                        <p className='text-stroke'>Type</p>
                      </div>
                      <div className="table-body">
                        <div className="table-data">
                          <div className="user">
                            <img src="/images/avatar2.png" alt="avatar" />
                            <p>0x029...00v</p>
                          </div>
                          <p className='data'>27 %</p>
                          <p className='data'>12 tickets</p>
                          <p className='data'>Daily</p>
                        </div>
                        <div className="table-data">
                          <div className="user">
                            <img src="/images/avatar2.png" alt="avatar" />
                            <p>0x029...00v</p>
                          </div>
                          <p className='data'>27 %</p>
                          <p className='data'>12 tickets</p>
                          <p className='data'>Daily</p>
                        </div>
                        <div className="table-data">
                          <div className="user">
                            <img src="/images/avatar2.png" alt="avatar" />
                            <p>0x029...00v</p>
                          </div>
                          <p className='data'>27 %</p>
                          <p className='data'>12 tickets</p>
                          <p className='data'>Daily</p>
                        </div>
                        <div className="table-data">
                          <div className="user">
                            <img src="/images/avatar2.png" alt="avatar" />
                            <p>0x029...00v</p>
                          </div>
                          <p className='data'>27 %</p>
                          <p className='data'>12 tickets</p>
                          <p className='data'>Daily</p>
                        </div>
                        <div className="table-data">
                          <div className="user">
                            <img src="/images/avatar2.png" alt="avatar" />
                            <p>0x029...00v</p>
                          </div>
                          <p className='data'>27 %</p>
                          <p className='data'>12 tickets</p>
                          <p className='data'>Daily</p>
                        </div>
                        <div className="table-data">
                          <div className="user">
                            <img src="/images/avatar2.png" alt="avatar" />
                            <p>0x029...00v</p>
                          </div>
                          <p className='data'>27 %</p>
                          <p className='data'>12 tickets</p>
                          <p className='data'>Daily</p>
                        </div>
                        <div className="table-data">
                          <div className="user">
                            <img src="/images/avatar2.png" alt="avatar" />
                            <p>0x029...00v</p>
                          </div>
                          <p className='data'>27 %</p>
                          <p className='data'>12 tickets</p>
                          <p className='data'>Daily</p>
                        </div>
                      </div>
                      </div>
                    
                    </>}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5 bottom-dark">
              <div className="bottom-menu">
                <div className="menu">
                  <img src="/images/dark-brown.svg" alt="menu" className='dark-brown' />
                  <p className='text-stroke'>1 <br /> Round</p>
                </div>
                <div className="menu">
                  <img src="/images/dark-brown.svg" alt="menu" className='dark-brown' />
                  <p className='text-stroke'>100 <br /> Tickets entered</p>
                </div>
                <div className="menu">
                  <img src="/images/dark-brown.svg" alt="menu" className='dark-brown' />
                  <p className='text-stroke'>7 <br /> Players now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
