/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Tooltip, Whisper } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const Clock = () => {
  const [time, setTime] = useState(() => {
    const currentDate = new Date();
    return {
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
      seconds: currentDate.getSeconds(),
    };
  });

  function tConvert(time: any) {
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? "\n오전 " : "\n오후 ";
      time[0] = +time[0] % 12 || 12;
    }
    return time.join("");
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const currenTimeObject = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      };
      setTime(currenTimeObject);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Whisper
        followCursor
        placement="top"
        speaker={
          <Tooltip style={{ background: "#7048e8" }}>
            {tConvert(`${time.hours}:${time.minutes}:${time.seconds}`)}
          </Tooltip>
        }
      >
        <Wrapper>
          <HourHandStyle
            style={{
              transform: `rotateZ(${time.hours * 30}deg)`,
            }}
          />
          <MinHandStyle
            style={{
              transform: `rotateZ(${time.minutes * 6}deg)`,
            }}
          />
          <SecondHandStyle
            style={{
              transform: `rotateZ(${time.seconds * 6}deg)`,
            }}
          />
          <ClockTick12>12</ClockTick12>
          <ClockTick1>1</ClockTick1>
          <ClockTick2>2</ClockTick2>
          <ClockTick3>3</ClockTick3>
          <ClockTick4>4</ClockTick4>
          <ClockTick5>5</ClockTick5>
          <ClockTick6>6</ClockTick6>
          <ClockTick7>7</ClockTick7>
          <ClockTick8>8</ClockTick8>
          <ClockTick9>9</ClockTick9>
          <ClockTick10>10</ClockTick10>
          <ClockTick11>11</ClockTick11>
        </Wrapper>
      </Whisper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid grey;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
  font-size: 24px;
  color: #444;
  text-align: center;
`;

const HourHandStyle = styled.div`
  position: absolute;
  width: 6px;
  height: 60px;
  background: #343a40;
  top: 30%;
  left: 49%;
  transform-origin: bottom;
`;

const MinHandStyle = styled.div`
  position: absolute;
  width: 4px;
  height: 80px;
  background: #343a40;
  top: 22.5%;
  left: 49%;
  transform-origin: bottom;
`;

const SecondHandStyle = styled.div`
  position: absolute;
  width: 2px;
  height: 118px;
  background: red;
  top: 10.5%;
  left: 50%;
  transform-origin: bottom;
`;

const ClockTicks = styled.span`
  position: absolute;
  font-weight: 700;
  color: grey;
`;

const ClockTick12 = styled(ClockTicks)`
  top: 10px;
  left: 46%;
`;

const ClockTick1 = styled(ClockTicks)`
  top: 10%;
  right: 26%;
`;

const ClockTick2 = styled(ClockTicks)`
  top: 25%;
  right: 10%;
`;

const ClockTick3 = styled(ClockTicks)`
  right: 10px;
  top: 46%;
`;

const ClockTick4 = styled(ClockTicks)`
  right: 30px;
  top: 67%;
`;
const ClockTick5 = styled(ClockTicks)`
  right: 78px;
  top: 80%;
`;
const ClockTick6 = styled(ClockTicks)`
  bottom: 10px;
  left: 50%;
`;
const ClockTick7 = styled(ClockTicks)`
  left: 80px;
  top: 82%;
`;
const ClockTick8 = styled(ClockTicks)`
  left: 30px;
  top: 67%;
`;
const ClockTick9 = styled(ClockTicks)`
  left: 10px;
  top: 46%;
`;
const ClockTick10 = styled(ClockTicks)`
  top: 25%;
  left: 10%;
`;
const ClockTick11 = styled(ClockTicks)`
  top: 10%;
  left: 26%;
`;

export default Clock;
