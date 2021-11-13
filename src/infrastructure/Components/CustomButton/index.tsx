import { Button } from "antd";
import React from "react";

import "./style.scss";

type CustomButtonProps = {
  ButtonText: string,
  ButtonClassName?: string,
  ButtonHtmlType?: "submit" | "button" | "reset",
  ButtonType?: "link" | "text" | "ghost" | "default" | "primary" | "dashed",
  ButtonOnClick?: any,
  ButtonBlock?: boolean,
  ButtonDanger?: boolean,
  ButtonDisabled?: boolean,
  ButtonIcon?: any,
  ButtonSize?: 'large' | 'middle' | 'small',
  ButtonLoading?: boolean
}

const CustomButton:React.FC<CustomButtonProps> = ({
  ButtonText,
  ButtonClassName="",
  ButtonHtmlType="button",
  ButtonType="default",
  ButtonOnClick=()=>{},
  ButtonBlock=true,
  ButtonDanger=false,
  ButtonDisabled=false,
  ButtonIcon=<></>,
  ButtonSize="middle",
  ButtonLoading=false
}) => {
  return <Button 
  className={ButtonClassName}
  htmlType={ButtonHtmlType}
  type={ButtonType}
  onClick={ButtonOnClick}
  block={ButtonBlock}
  danger={ButtonDanger}
  disabled={ButtonDisabled}
  icon={ButtonIcon}
  size={ButtonSize}
  loading={ButtonLoading}
  >
    {ButtonText}
  </Button>;
};

export default CustomButton;