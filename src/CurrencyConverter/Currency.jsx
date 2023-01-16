import React, { useEffect, useState } from "react";
import "./currency.css";
import CurrencyInput from "./CurrencyInput";
var myHeaders = new Headers();
myHeaders.append("apikey", "qA192RE91MTC4OOdblIIykSCpw6Bn0Gz");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const Base_Url =
  "https://api.apilayer.com/fixer/latest?";

export default function Currency() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [exchangeRate, setExhangeRate] = useState();

  let toAmount, fromAmount;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }


  useEffect(() => {
    fetch(Base_Url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        const Firstcurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(Firstcurrency);
        setExhangeRate(data.rates[Firstcurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${Base_Url}?base=${fromCurrency}&symbols=${toCurrency}`, requestOptions)
        .then(res => res.json())
        .then(data =>  setExhangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);
  function handleFromAmountChnage(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }
  function handletoAmountChnage(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }
  return (
    <section className="currency">
      <h3 style={{color: "white", paddingBottom : "20px" }}>Currency Converter</h3>
      <CurrencyInput
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        amount={fromAmount}
        onAmountChange={handleFromAmountChnage}
      />
      <p style={{color : "white" , padding : "10px 0px" }}>=</p>
      <CurrencyInput
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        amount={toAmount}
        onAmountChange={handletoAmountChnage}
      />
    </section>
  );
}
