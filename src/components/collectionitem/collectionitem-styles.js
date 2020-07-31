import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';


export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 5px;
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
`;

export const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
    width: 10%;
`;

export const CustomButtonContainer = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`;

export const CollectionItemContainer = styled.div`
    width: 20vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover{
        ${ImageContainer}{
          opacity: 0.6;
        }
  
        ${CustomButtonContainer}{
          opacity: 0.75;
          display: flex;
        }
      }
`;