import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 100px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Wrapper = styled.div`   
    width: 80%;
    margin-left: 40px;
}
`

export const Collumn = styled.div`
    flex: 1;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 70%;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleCad = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 38px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleCad = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const Text = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-Top: 20px;
    width: 70%;

    color: #FFFFFF;

    h4 {  
        margin-Top: 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
    }    

    strong {  
        cursor: pointer;     
        color: #008000 
    }      
`

export const DivButton = styled.div`
 width: 60%;
`