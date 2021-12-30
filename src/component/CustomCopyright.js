import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export function CustomCopyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        비즈뿌리오 메일답변 추천시스템
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
