import React, { useEffect, useRef } from 'react';

export default function PayuSubmit({ data }: any) {
  const formRef = useRef({ submit: () => {} });
  useEffect(() => formRef.current.submit(), []);
  return (
    <form ref={formRef} action={data.action} method="post">
      {Object.entries(data).map(([key,val]) => (
        <input key={key} type="hidden" name={key} value={val} />
      ))}
    </form>
  );
}
