import React from 'react';

import './Wrapper.scss';

export default function Wrapper({ children }) {
  return <main className="wrapper">{children}</main>;
}
