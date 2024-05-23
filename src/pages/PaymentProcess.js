import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { formsFilledState } from './atoms';

const PaymentProcess = () => {
  const [formsFilled, setFormsFilled] = useRecoilState(formsFilledState);

    const navigate = useNavigate();

    const onsubmitHandler = () => {
        navigate('/');
        setFormsFilled((prevFormsFilled) => prevFormsFilled + 1);
    }

  return (
    <><div>
          Payment-Process
      </div>
      <button type='submit' onClick={onsubmitHandler}>Submit</button>
      </>
  )
}

export default PaymentProcess
