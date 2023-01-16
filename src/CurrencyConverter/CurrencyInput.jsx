import React from "react";
import "./currency.css";

export default function CurrencyInput(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onAmountChange,
  } = props;
  return (
    <div className="input_holder">
      <input
        className="currency_input"
        type="text"
        value={amount}
        onChange={onAmountChange}
      />
      <select
        value={selectedCurrency}
        onChange={onChangeCurrency}
        className="currency_option"
      >
        {currencyOptions.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
