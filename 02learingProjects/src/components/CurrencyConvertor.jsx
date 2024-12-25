import React from 'react'
import InputBox from './InputBox'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import { useState } from 'react'

const CurrencyConvertor = () => {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const[convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  
  
  const swap = () =>{
    let temp = from;
    setFrom(to);
    setTo(temp)
    temp = convertedAmount;
    setConvertedAmount(amount)
    setAmount(temp)
  }
  
  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
    // console.log(convertedAmount);
  }

  return (
      <div
          className="w-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat relative top-96 p-12 mb-10"
          style={{
              backgroundImage: `url('https://media.istockphoto.com/id/1954841243/photo/data-analysis-chart-graph-3d-statistics-background.jpg?s=2048x2048&w=is&k=20&c=iiUzvpDryyGCoLgayiyCir9ADn_p4e2LF9equ6W_zus=')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>setFrom(currency)}
                              selectCurrency={from}
                              onAmountChange={(amount)=>{setAmount(amount)}}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>setTo(currency)}
                              selectCurrency={to}
                              amountDisable
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert  {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default CurrencyConvertor
