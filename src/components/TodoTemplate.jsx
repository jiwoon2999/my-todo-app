import React, { children } from 'react';

export default function TodoTemplate({ children }) {
  return (
    <div className='w-2/3 h-12 m-auto bg-red-200'>
      <h1 className='text-xl text-center'>MyTodo</h1>
      <div>{children}</div>
    </div>
  );
}
