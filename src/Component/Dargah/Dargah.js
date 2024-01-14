import { Link, Route, Routes } from "react-router-dom";
import Sabtc from "./Sabtcard";
import Sabtt from "./Sabttrakonesh";
import Tar from "./Trakonesh";
import { Children, useState } from "react";
// import Result from "./Natigeh";
import card from "@material-tailwind/react/theme/components/card";
export default function Daragah() {
    let drak = "#000000"
    const [bgcolor, setBgcolor] = useState(drak)
    const [bgcolor2, setBgcolor2] = useState(drak)
    const [bgcolor3, setBgcolor3] = useState(drak)
    const [arr, setarr] = useState([])
    const [number, setNumber] = useState([])
    const [show, setshow] = useState(true)
    const [transition, setTransition] = useState([])
    const [transition2, setTransition2] = useState([])
    const [result, setResult] = useState([])
    const [hh, sethh] = useState("")
    const [jj, setJJ] = useState("")
    // console.log(jj);

    const changecolor = () => {
        let yellow = "#fcd34d"
        if (bgcolor === drak) {
            setBgcolor(yellow)
            setBgcolor2(drak)
            setBgcolor3(drak)

        }

    }
    const changecolor2 = () => {
        let yellow = "#fcd34d"
        if (bgcolor2 === drak) {
            setBgcolor2(yellow)
            setBgcolor(drak)
            setBgcolor3(drak)

        }

    }
    const changecolor3 = () => {
        let yellow = "#fcd34d"
        if (bgcolor3 === drak) {
            setBgcolor3(yellow)
            setBgcolor2(drak)
            setBgcolor(drak)
        }


    }
    const updatecard = (card) => {
        const cop = [...arr]
        cop.push(card)
        setarr(cop)
        setshow(false)
    }
    function balance(bal) {
        setTransition(bal)
        console.log("fucckkkkkk", bal);
    }
    function BALANCE(price) {
        setTransition2(price)
        console.log("kir", price);
    }
    function minus(pr) {
        pr = BALANCE - balance
        setResult(pr)
    }
    function cc(b) {
        sethh(b)
        console.log('b', b);
    }
    function dd(r) {
        setJJ(r)
        console.log("k", r);
    }
    return (
        <div className=" w-[100%] h-[100%]  bg-[aqua]  flex flex-col justify-center items-center">
            <div className=" w-[80vw] h-[50vh] bg-black mt-10 rounded-3xl flex justify-center items-center overflow-x-scroll ">
                {show && (
                    <h1 className=" font-bold  text-4xl  text-white">کارت بانکی خود را اضافه کنید</h1>
                )}
                <div className=" flex ">
                    {/* <Result arr={arr} aa={cc} balance={balance} BALANCE={BALANCE} /> */}
                </div>
                <div>
                </div>
            </div>
            <div className="w-[40vw] h-[20vh]  mt-10 flex  justify-center items-center">
                <Link to={"Tar"}>
                    <button className="w-[10vw] h-[10vh] bg-black  rounded-2xl ml-10" onClick={changecolor3} style={{ backgroundColor: bgcolor3 }} >
                        <h4 className=" font-bold text-white">تراکنش ها</h4>
                    </button>
                </Link>
                <Link to={"Sabtt"}>
                    <button className="w-[10vw] h-[10vh] bg-black  rounded-2xl ml-10" onClick={changecolor2} style={{ backgroundColor: bgcolor2 }}>
                        <h4 className=" font-bold text-white">ثبت تراکنش</h4>
                    </button>
                </Link>
                <Link to={"/"}>
                    <button className="w-[10vw] h-[10vh]  rounded-2xl ml-10 bg-black" onClick={changecolor} style={{ backgroundColor: bgcolor }}>
                        <h4 className=" font-bold text-white">ثبت کارت</h4>
                    </button>
                </Link>

            </div>

            <Routes>
                <Route path="/" element={<Sabtc updatecard={updatecard} balance={balance} />} />
                <Route path="Sabtt" element={<Sabtt array={card} obj={hh} gg={dd} balance={balance} cop={arr} setTransition={transition} setResult={minus} />} />
                <Route path="Tar" element={<Tar />} />
            </Routes>

        </div>
    )
}