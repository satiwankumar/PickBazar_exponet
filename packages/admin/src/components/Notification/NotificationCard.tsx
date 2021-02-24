import React from 'react';
import {
  Title,
  Message,
  Time,
  TitleWrapper,
  Dot,
  Details,
} from './Notification.style';

export default function NotificationCard({ title, time, body }) {
  return (
    <Message>
      <TitleWrapper>
        <Title>{title}</Title>
        <Dot />
        <Time>{time}</Time>
      </TitleWrapper>

      <Details>{body}</Details>
    </Message>
  );
}
