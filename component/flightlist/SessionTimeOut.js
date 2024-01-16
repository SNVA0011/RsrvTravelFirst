import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import ButtonStyle from "../ButtonStyle/ButtonStyle";

const SessionTimeOut = ({
  imag,
  searchfrom,
  searchTo,
  time,
  open,
  setOpen,
  handleRefresh,
  handleNewSerarch,
  buttonShow,
  heading,
  refreshlebel,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, time);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <Modal
      show={open}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      className="cheapbook-modal call-model"
    >
      <Modal.Body className="p-0 text-center sessionBody">
        <div>
          <img src={imag} className="mb-2" width={120} height={120} />
          <h4>{heading}</h4>
          <h6>
            Still interested in flying from <b className="text-dark">{searchfrom}</b> to <b className="text-dark">{searchTo}</b> ?
          </h6>
          <h6>
            Please refresh your search results to review the latest air fares.
          </h6>
          {buttonShow && (
            <div className="sessionBtnWrapper">
              <ButtonStyle
                content={'New Search'}
                outline={true}
                fullwidth={false}
                onClick={() => handleNewSerarch()} 
              />

              <ButtonStyle
                content={refreshlebel}
                outline={false}
                fullwidth={false}
                onClick={() => handleRefresh()} 
              /> 
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SessionTimeOut;
