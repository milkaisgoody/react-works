import { useReducer, useState } from "react";

const initialState = {balance: 0};

const reducer = (state, action) => {
    // 예금: Deposit, 출금: withdraw, action.payload - Amount(액수)
    switch(action.type){
        case "DEPOSIT": //입금
            return { ...state, balance: state.balance + action.payload}
        case "WITHDRAW": //출금
            if(state.balance < action.payload){
                alert("잔액이 부족합니다.");
                return state;
            }
            return { ...state, balance: state.balance - action.payload}
        default:
            return state; //현재 잔액
    }
}

const Bankreducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [amount, setAmount] = useState(0); //금액(입.출금)
    return(
        <div>
            <h2>예금 및 출금</h2>
            <h3>현재 잔액: {state.balance}원</h3>
            <input 
                type="number" 
                value={amount}
                //e.target.value는 문자열이므로 숫자형으로 변환
                onChange={(e) => setAmount(Number(e.target.value))}
                step={1000}
            />
            <button onClick={() => 
                dispatch({type: "DEPOSIT", payload: amount})}>예금</button>
            <button onClick={() => 
                dispatch({type: "WITHDRAW", payload: amount})}>출금</button>
        </div>
    )
}

export default Bankreducer;