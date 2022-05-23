import React, { useEffect } from "react";
import { Close, Header, Wrapper } from "./styled";

export const PopUp = ({ isShow, onClose, title, children }) => {
  const handleClose = (e) => {
    if (e.key === "Escape") {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleClose);
    return () => {
      document.removeEventListener("keydown", handleClose);
    };
  }, []);

  return (
    isShow && (
      <Wrapper>
        <Header>
          {title}
          <Close size="small" onClick={onClose}>
            x
          </Close>
        </Header>
        {children}
      </Wrapper>
    )
  );
};
