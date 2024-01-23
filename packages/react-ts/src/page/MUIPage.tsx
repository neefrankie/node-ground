import * as React from 'react';
import Button from '@mui/material/Button';

export function MUIPage() {
  return (
    <div>
      <ButtonUsage></ButtonUsage>
    </div>
  )
}
export function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;
}
