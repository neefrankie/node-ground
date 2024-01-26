import React from 'react';

export function TouchIcon(
  props: {
    brand: 'apple' | 'android',
    baseUrl: string; 
    size: string,
}) {
  return (
    <link
      rel={`${props.brand}-touch-icon`}
      sizes="{{size}}"
      href={`${props.baseUrl}/apple-touch-icon-${props.size}.png`}
    ></link>
  );
}

export function AppleTouchIcon(
  props: { 
    baseUrl: string; 
    size: number;
  }
) {
  return (
    <link
      rel="apple-touch-icon"
      sizes="{{size}}"
      href={`${props.baseUrl}/apple-touch-icon-${props.size}x${props.size}.png`}
    ></link>
  );
}

export function Favicon(props: { baseUrl: string }) {
  return (
    <link
      href={`${props.baseUrl}/favicon.ico`}
      type="image/x-icon"
      rel="shortcut icon"
    />
  );
}
