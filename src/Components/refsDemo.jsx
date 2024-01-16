import React, { useRef, useEffect, useState } from 'react';

function Refs() {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    // Save the previous value using a ref
    const prevValueRef = useRef(value);
    prevValueRef.current = value;

    // Access the previous value when the input changes
    console.log('Previous Value:', prevValueRef.current);
  }, [value]);

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
export default Refs
