import { useState } from "react"
import Result from "./Natigeh"
import Daragah from "./Dargah"
export default function Sabtt({ obj, arr, balance, setTransition, bal, updatecard, cop, BALANCE, minus, setResult }) {
    const [secondpassword, setSecondpassword] = useState("")
    const [transfer, setTransfer] = useState("")
    const [destination, setDestination] = useState("")
    const regex = (e) => {
        let input = e.target.value.replace(/[^0-9]/g, "");
        if (input.length >= 17) {
            return
        }
        setTransfer(input)
    }
    const regex2 = (e) => {
        let input = e.target.value.replace(/[^0-9]/g, "");
        if (input.length >= 17) {
            return
        }
        setDestination(input)
    }
    const regex3 = (e) => {
        let inp = e.target.value.replace(/[^0-9]/g, "");
        if (inp !== e.target.value) {
        }
        setSecondpassword(inp)
    }
    const entry = () => {
        // const bb = {
        //     balance: obj.MOJOD
        //
        // const send = [...transfer]
        // BALANCE(send)
        // const send2 = [...setResult]
        // entry(send2)
        
    }
    return (
        < div className=" w-[55vw] h-[100vh] bg-green-500 rounded-3xl  flex flex-col justify-center items-center" dir="rtl" >
            <div>

                <input type="text" className=" w-[50vw] h-[11vh] bg-slate-50 rounded-2xl mt-10  border-[3px]" placeholder="شماره کارت" maxLength={16} value={obj.shomare}  >
                </input>
            </div>

            <input type="text" className=" w-[50vw] h-[11vh] bg-slate-50 rounded-2xl mt-10" placeholder="CVV2" maxLength={4} value={obj.CVV} >
            </input>
            <input type="text" className=" w-[50vw] h-[11vh] bg-slate-50 rounded-2xl mt-10" placeholder="تاریخ انقضا" maxLength={4} value={obj.EXP} >
            </input>
            <input type="text" className=" w-[50vw] h-[11vh] bg-slate-50 rounded-2xl mt-10" placeholder="رمز دوم" maxLength={8} value={secondpassword} onChange={regex3} >
            </input>
            <input type="text" className=" w-[50vw] h-[11vh] bg-slate-50 rounded-2xl mt-10" placeholder="مبلغ انتقال" maxLength={16} value={transfer} onChange={regex} >
            </input>
            <input type="text" className=" w-[50vw] h-[11vh] bg-slate-50 rounded-2xl mt-10" placeholder="کارت مقصد " maxLength={16} value={destination} onChange={regex2} >
            </input>
            <button className=" bg-blue-400 h-[10%] w-[20%] mt-10 rounded-xl hover:bg-blue-700" onClick={entry}>ثبت</button>

        </div >
    )
}