import { useState, useCallback, useEffect } from "react"
import Sabtc from "./Sabtcard"
export default function Result({ arr, aa, dd, jj, setTransition, balance, BALANCE, minus }) {
    const [show, setshow] = useState(true)
    return (
        arr.map((item, index) => {
            const obj = {
                shomare: item.number,
                CVV: item.cvv,
                EXP: item.exp,
                MOJOD: item.inventory,
                index: index,
            }
            return (
                <div className="min-h-screen flex justify-center  items-center" onClick={() => { aa(obj) }}>
                    <div className="space-y-16">
                        <div className="w-96 h-56 m-auto bg-red-600 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">

                            <img className="relative object-cover w-full h-full rounded-xl"></img>

                            <div className="w-full px-8 absolute top-8">
                                <div className="flex justify-between">
                                    <div className="">
                                        <p className="font-light  text-black">
                                            Name
                                        </p>
                                        <p className="font-medium tracking-widest text-black">
                                            {item.saheb}
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-1">
                                    <p className="font-light text-black">
                                        Card Number
                                    </p>
                                    <p className="font-medium tracking-more-wider text-black">
                                        {item.number}
                                    </p>
                                </div>
                                <div className="pt-6 pr-6">
                                    <div className="flex justify-between">
                                        <div className="">
                                            <p className="font-light text-xs text-black">
                                                EXP
                                            </p>
                                            <p className="font-medium tracking-wider text-sm text-black">
                                                {item.exp}
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="font-light text-xs text-black">
                                                BALANCE
                                            </p>
                                            <p className="font-medium tracking-wider text-sm text-black">
                                                {item.inventory}
                                            </p>
                                        </div>

                                        <div className="">
                                            <p className="font-light text-xs text-black">
                                                CVV
                                            </p>
                                            <p className="font-bold tracking-more-wider text-sm text-black">
                                                {item.cvv}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

    )
}