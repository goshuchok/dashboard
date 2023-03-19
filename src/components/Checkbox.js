import React, { forwardRef, useEffect, useRef } from 'react';
import styled from 'styled-components';

const InputStyle = styled.input``;

export const Checkbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <InputStyle type="checkbox" ref={resolvedRef} {...rest} />
    </>
  );
});
