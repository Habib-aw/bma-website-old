import React from 'react';
import {useState} from 'react';
import './calendar.css';
import data from "../../data/times.json";
function Index() {
    const [start,setStart] = useState(true)
    const [jamaah,setJamaah] = useState(true)
    const [sunrise,setSunrise] = useState(true)
    const [fajr,setFajr] = useState(true)
    const [zuhr,setZuhr] = useState(true)
    const [asr,setAsr] = useState(true)
    const [mgrb,setMgrb] = useState(true)
    const [isha,setIsha] = useState(true)
    const [toggle,setToggle] = useState(false)
    const date = new Date()
    const currentDate = date.toLocaleString("en-GB", { day : '2-digit'})+"-"+date.toLocaleString("en-GB", { month: "short" })+"-"+(new Date().getFullYear()).toString().substring(2);
    var num = 0
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const monthsLong = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const [month,setMonth] = useState(date.getMonth())
    return (
        <div id='calendar'>
            <div className='bma-calendar-title'>
                <h1 className='bma-calendar-title-text'>BMA 2022 calendar</h1>

            </div>
            <div className='calendar-filter'>
            <div className='filter-checkbox-wrapper'>
                <div className='filter-checkbox'>
                <div className='filters-title-menu'><p>Filters</p><div className='filter-menu' onClick={()=>setToggle(!toggle)}><span className='filter-menu-item'></span><span className='filter-menu-item'></span><span className='filter-menu-item'></span></div></div>
                <div className={(toggle? 'view':null)+' checkbox'}>
                <div>
                    <h6>View times</h6>
                    <div>
                        <input type="checkbox" id="start" name="start" value="start" checked={start} onChange={()=>setStart(!start)}/>
                        <label for="start">View start times</label>
                    </div>
                    <div>
                        <input type="checkbox" id="jamaah" name="jamaah" value="jamaah" checked={jamaah} onChange={()=>setJamaah(!jamaah)}/>
                        <label for="jamaah">View jama'ah times</label>
                    </div>
                    <div>
                        <input type="checkbox" id="sunrise" name="sunrise" value="sunrise" checked={sunrise} onChange={()=>setSunrise(!sunrise)}/>
                        <label for="sunrise">View sunrise times</label>
                    </div>
                    </div>
                    <div>
                    <h6>View salahs</h6>
                    <div>
                        <input type="checkbox" id="fajr" name="fajr" value="fajr" checked={fajr} onChange={()=>setFajr(!fajr)}/>
                        <label for="fajr">View fajr times</label>
                    </div>
                    <div>
                        <input type="checkbox" id="zuhr" name="zuhr" value="zuhr" checked={zuhr} onChange={()=>setZuhr(!zuhr)}/>
                        <label for="zuhr">View zuhr times</label>
                    </div>
                    <div>
                        <input type="checkbox" id="asr" name="asr" value="asr" checked={asr} onChange={()=>setAsr(!asr)}/>
                        <label for="asr">View asr times</label>
                    </div>
                    <div>
                        <input type="checkbox" id="maghrib" name="maghrib" value="maghrib" checked={mgrb} onChange={()=>setMgrb(!mgrb)}/>
                        <label for="maghrib">View maghrib times</label>
                    </div>
                    <div>
                        <input type="checkbox" id="isha" name="isha" value="isha" checked={isha} onChange={()=>setIsha(!isha)}/>
                        <label for="isha">View isha times</label>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='calendar-with-title'>
            <div className='table-title'> 
                        <button onClick={(month===0)? ()=>setMonth(11):()=>setMonth(month-1)}>{"<"}</button>
                        <div className='months-title'>{monthsLong[month]}</div>
                        <button onClick={(month===11)? ()=>setMonth(0):()=>setMonth(month+1)}>{">"}</button>
            </div> 
            <div className='calendar'>
                <table border="2">
                    <thead>
                        <tr>
                            <th></th> 
                            {fajr ? <th colSpan={(start && jamaah && sunrise)? 3:(((start && jamaah) || (start && sunrise) || (jamaah &&sunrise))? 2:1)}>Fajr</th>:null}
                            {zuhr?<th colSpan={(start && jamaah)? 2:1}>Zuhr</th>:null}
                            {asr? <th colSpan={(start && jamaah)? 2:1}>Asr</th>:null}
                            {mgrb?<th colSpan={(start && jamaah)? 2:1}>Maghrib</th>:null}
                            {isha?<th colSpan={(start && jamaah)? 2:1}>Isha</th>:null}
                        </tr>
                        
                        <tr>
                            <th>{months[month]}</th>
                            {(start && fajr)?<th>Start</th> :null}
                            {(jamaah && fajr)? <th>Jama'ah</th>:null}
                            {(sunrise && fajr)?<th>Sunrise</th>:null}
                            {(start&&zuhr)? <th>Start</th> :null}
                            {(jamaah&&zuhr)? <th>Jama'ah</th>:null}
                            {(start&&asr)? <th>Start</th> :null}
                            {(jamaah&&asr)? <th>Jama'ah</th>:null}
                            {(start&&mgrb)? <th>Start</th> :null}
                            {(jamaah&&mgrb)? <th>Jama'ah</th>:null}
                            {(start&&isha)? <th>Start</th> :null}
                            {(jamaah&&isha)? <th>Jama'ah</th>:null}
                        </tr>
                    </thead>
                {data[month].map((day)=>{
                    num+=1
                    return <tr className={(day['Date'] === currentDate.toString())? "bg-danger":null}><td>{num}</td>{(start && fajr)? <td>{day['Fajr_start']}</td>:null} {(jamaah && fajr)? <td>{day['Fajr_jamaah']}</td>:null}{(sunrise && fajr)? <td>{day['sunrise']}</td>:null}{(start&&zuhr)? <td>{day['Zuhr_start']}</td>:null}{(jamaah&&zuhr)? <td>{day['Zuhr_jamaah']}</td>:null} {start&&asr? <td>{day['Asr_start']}</td>:null} {jamaah&&asr? <td>{day['Asr_jamaah']}</td>:null}{start&&mgrb? <td>{day['Maghrib_start']}</td>:null}{jamaah&&mgrb? <td>{day['Maghrib_jamaah']}</td>:null} {start&&isha? <td>{day['Isha_start']}</td>:null}{jamaah&&isha? <td>{day['Isha_jamaah']}</td>:null}</tr>
                })}
                </table>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Index