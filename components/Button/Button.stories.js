

import Button from './Button';

export default {

  title: 'Button',
  component: Button,
};

export const Primary = () => <Button type="primary"> ورود</Button>;
export const Secondary = () => <Button type="secondary"> ارسال</Button>;
export const WidthAll = () => <Button widthAll> click me</Button>;


