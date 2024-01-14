import { useState, useCallback, useEffect } from "react"
import keshavarzi from "../../img/keshavarzi.png"
import saman from "../../img/saman.png"
import saderat from "../../img/saderat.png"
import meli from "../../img/meli.png"
import pasargad from "../../img/pasargad.png"
import shahr from "../../img/shahr.png"
import ansar from "../../img/ansar.png"
import resalat from "../../img/resalat.png"
import sepah from "../../img/sepah.png"
import maskan from "../../img/maskan.png"
import post from "../../img/post.png"
import mehre from "../../img/mehre.png"
import sina from "../../img/sina.png"
import pasian from "../../img/pasian.png"
import mellat from "../../img/mellat.png"
import Result from "./Natigeh"
export default function Sabtc({ updatecard, balance }) {
    const [card, setCard] = useState("")
    const [cvv, setCvv] = useState("")
    const [cash, setCash] = useState("")
    const [date, setDate] = useState("")
    const [owner, setOwner] = useState("")
    const add = () => {
        const obj = {
            number: card,
            cvv: cvv,
            exp: date,
            saheb: owner,
            inventory: cash,
            id: Math.random(),
            txs: [],
        }
        updatecard((prev) => [...prev, obj]);
        setCard("")
        setCvv("")
        setDate("")
        setOwner("")
        setCash("")
    }
    const regex = (e) => {
        let input = e.target.value.replace(/[^0-9]/g, "");
        if (input.length >= 17) {
            return
        }
        setCard(input)
    }
    const regex2 = (e) => {
        let input1 = e.target.value.replace(/[^0-9]/g, "");
        if (input1.length >= 5) {
            return
        }
        setCvv(input1)

    }
    const regex4 = (e) => {
        let input2 = e.target.value.replace(/[^0-9]/g, "");
        if (input2.length >= 5) {
            return
        }
        setDate(input2)
    }
    const regex3 = (e) => {
        let input2 = e.target.value.replace(/[^0-9]/g, "");
        setCash(input2)
    }
    const regex5 = (e) => {
        let input = e.target.value.replace(/[^\sآ-ی]/g, "");
        if (input !== e.target.value) {
            return
        }
        setOwner(e.target.value)
    }
    const baank = (items) => {
        const a = items.slice(0, 6)

        switch (a) {

            case "603770": {
                return (<img src={keshavarzi} className=" w-[40px] h-[40px] mr-1" />)
            }

            case "603769": {
                return (<img src={saderat} className=" w-[40px]  h-[40px] mr-1" />)
            }
            case "621986": {
                return (<img src={saman} className=" w-[40px] h-[40px] mr-1" />)
            }
            case "603799": {
                return (<img src={meli} className=" w-[40px] h-[40px] mr-1" />)
            }
            case "502229": {
                return (<img src={pasargad} className=" w-[40px] h-[40px] mr-1" />)
            }
            case "504706": {
                return (<img src={shahr} className=" w-[40px] h-[40px] mr-1" />)
            }
            case "627381": {
                return (<img src={ansar} className=" w-[40px] h-[40px] mr-1" />)
            }
            case "504172": {
                return (<img src={resalat} className=" w-[40px] h-[40px] mr-1" />)
            }
            case "589210": {
                return (<img src={sepah} className=" w-[40px] h-[40px] mr-1" />)
            }
            case "628023": {
                return (<img src={maskan} className=" w-[40px] h-[40px] mr-1" />)
            }
            case "628023": {
                return (<img src={maskan} className=" w-[40px] h-[40px] mr-1" />)
            }
            case "627760": {
                return (<img src={post} className=" w-[40px] h-[40px] mr-1" />)
            }
            case "639346": {
                return (<img src={sina} className=" w-[40px] h-[40px] mr-1" />)
            }
            case "639370": {
                return (<img src={mehre} className=" w-[60px] h-[40px] " />)
            }
            case "622106": {
                return (<img src={pasian} className=" w-[40px] h-[40px] mr-2 " />)
            }
            case "622106": {
                return (<img src={pasian} className=" w-[40px] h-[40px] mr-2 " />)
            }
            case "610433": {
                return (<img src={mellat} className=" w-[50px] h-[40px] mr-1" />)
            }
            default:
        }
    }
    return (
        <div className=" w-[55vw] h-[100vh] bg-violet-100 flex flex-col  items-center rounded-3xl" dir="rtl">
            <div className=" h-[10vh] w-[55vw]  mt-10 mr-10  flex  items-center">
                <input type="text" className=" w-[50vw] h-[10vh] bg-slate-50 rounded-2xl" placeholder="شماره کارت" value={card} onChange={regex}>
                </input>{baank(card)}
            </div>

            <input type="text" className=" w-[50vw] h-[10vh] bg-slate-50 rounded-2xl mt-10" placeholder="CVV2" value={cvv} onChange={regex2}>
            </input>
            <input type="text" className=" w-[50vw] h-[10vh] bg-slate-50 rounded-2xl mt-10" placeholder=" تاریخ انقضا" value={date} onChange={regex4}>
            </input>
            <input type="text" className=" w-[50vw] h-[10vh] bg-slate-50 rounded-2xl mt-10" placeholder="صاحب کارت" value={owner} onChange={regex5}>
            </input>
            <input type="text" className=" w-[50vw] h-[10vh] bg-slate-50 rounded-2xl mt-10" placeholder="موجودی" value={cash} onChange={regex3}>
            </input>
            <button onClick={add} className="bg-red-400 h-[10%] w-[20%] mt-10 rounded-xl hover:bg-red-700">ثبت</button>
        </div>
    )
}