import React from 'react'

export const SectionTitle = (props) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: `${props.padding ? props.padding : '60px 0'}`,
    }}>
      <h1
        style={{
          color: `${props.color ? props.color : '#3A3A3A'}`,
          fontSize: '43px',
          fontWeight: '100',
          padding: 0,
          margin: 0,
        }}
      >{props.children}</h1>
      <div
        style={{
          width: '80px',
          height: '5px',
          background: `${props.bgColor ? props.bgColor : '#F03C3C'}`
        }} />
    </div>
  );
}
