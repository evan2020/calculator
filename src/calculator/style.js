import styled from "styled-components";

// 父容器
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(#fe4c42, #992e84);
    font-size: 0.3rem;
    box-sizing: border-box;
    border: 1px solid #fff;
    .bigSize {
        color: #fff;
    }
    .smallSize {
        font-size: 0.8rem;
    }
`;

// 当前输入的区域和值
export const TextValue = styled.div`
    width: 100%;
    height: 2.82rem;
    font-size: 1.5rem;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 0.2rem;
    padding-left: 0.2rem;
    box-sizing: border-box;
    border-bottom: 2px solid #ec6770;
`;

// 输入过程区域
export const ProcessText = styled.div`
    width: 100%;
    height: 0.59rem;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    padding-right: 0.2rem;
    padding-left: 0.2rem;
    font-size: 0.3rem;
    overflow: hidden;
    white-space: nowrap;
`;

// 键盘区域
export const KeyboardCon = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    top: 3.39rem;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-top: 2px solid #ec6770;
`;

// 单个键盘
export const Key = styled.div`
    width: 25%;
    height: 20%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 0.5rem;
    color: #fff;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
`;
