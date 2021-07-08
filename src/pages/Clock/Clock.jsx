import { useState, useEffect } from "react";

import {
  monthsArray,
  daysOfTheWeekArray,
  dateNowInitialState,
} from "./Clock.config";

import {
  StyledClock,
  StyledClockWrapper,
  StyledClockTop,
  StyledClockBottom,
  StyledClockLeft,
  StyledClockRight,
  StyledClockButton,
} from "./Clock.styles";

export const Clock = () => {
  const [dateNow, setDateNow] = useState(dateNowInitialState);
  const [maximized, setMaximized] = useState(true);

  // ### ### ### NORMALIZE DATE ### ### ###
  const normalize = (number, isHour = false) => {
    if (isHour) {
      if (number > 12) {
        number = number % 12;
      }
    }
    return number.toString().padStart(2, "00");
  };

  // ### ### ### GET DATE NOW ### ### ###
  const getDateNow = () => {
    const dateNow = new Date();
    const newDateNow = {
      hours: normalize(dateNow.getHours(), true),
      minutes: normalize(dateNow.getMinutes()),
      seconds: normalize(dateNow.getSeconds()),
      ampm: dateNow.getHours() >= 12 ? "PM" : "AM",
      dayOfTheMonth: dateNow.getDate(),
      month: dateNow.getMonth(),
      year: dateNow.getFullYear(),
      dayOfTheWeek: dateNow.getDay(),
    };
    setDateNow(newDateNow);
  };

  // ### ### ### COMPONENT CREATED ### ### ###
  useEffect(() => {
    const intervalClock = setInterval(getDateNow, 1000);
    return () => {
      clearInterval(intervalClock);
    };
    // eslint-disable-next-line
  }, []);

  // ### ### ### RENDER COMPONENT ### ### ###
  return (
    <StyledClock maximized={maximized}>
      <StyledClockWrapper>
        <StyledClockTop>
          <StyledClockLeft>
            {dateNow.hours}:{dateNow.minutes}
          </StyledClockLeft>
          <StyledClockRight>
            <span>{dateNow.seconds}</span>
            <span>{dateNow.ampm}</span>
          </StyledClockRight>
        </StyledClockTop>
        <StyledClockBottom>
          <StyledClockLeft>
            {dateNow.dayOfTheMonth} {monthsArray[dateNow.month]} {dateNow.year}
          </StyledClockLeft>
          <StyledClockRight>
            {daysOfTheWeekArray[dateNow.dayOfTheWeek]}
          </StyledClockRight>
        </StyledClockBottom>
      </StyledClockWrapper>
      <StyledClockButton
        onClick={() => setMaximized(!maximized)}
      ></StyledClockButton>
    </StyledClock>
  );
};
