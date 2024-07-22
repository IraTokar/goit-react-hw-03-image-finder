import styled from 'styled-components';

export const Overlay = styled.div`

  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  cursor: pointer;
`;


export const OverlayModal = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  max-height: 90vh;
  max-width: 100%;
`;