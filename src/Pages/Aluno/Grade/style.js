import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;

    #totalTabela {
        margin: 32px 0px 0px 300px;
        width: 65vw;
    }


    .etiqueta {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: #fff;
        padding: 32px 48px;
        border-radius: 10px;
        margin-bottom: 32px;
        span {
            flex: 1 2 320px;
            margin: 4px 0px;
        }
    }


`