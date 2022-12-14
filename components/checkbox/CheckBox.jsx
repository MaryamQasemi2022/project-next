import {useState} from 'react';

const CheckBox=({labelOn, labelOff})=>{
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };
  return(
    <label>
    <input type="checkbox" checked={isChecked} onChange={onChange}  />
    {isChecked ? labelOn : labelOff}
  </label>
  )
}
export default CheckBox;
