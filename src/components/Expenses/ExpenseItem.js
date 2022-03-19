import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // const clickHandler = () => {
  //   console.log('clicked!');
  // };

  // 아래 reack hook은 반드시 ExpenseItem function 안에서 호출되어야 함.
  const [title, setTitle] = useState(props.title); // retuns array [current state value, updating function]
  const clickHandler = () => {
    setTitle('updated!');
    console.log('clicked');
  };

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          {/* <h2>{props.title}</h2> */}
          <div className='expense-item__price'>${props.amount}</div>
        </div>
         {/* 아래와같이 event listener에 clickHandler() 지정으로 바로 실행하지않고 clickHandler 포인터로 지정해야 정상 작동함 */}
        <button onClick={clickHandler}>Click</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
