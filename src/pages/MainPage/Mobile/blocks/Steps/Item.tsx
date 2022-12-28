import { Box, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';

type Props = {
  step: string;
  text: string;
};

export function Item({ step, text }: Props) {
  return (
    <Box flexDirection="row" gap={24} alignItems="center">
      <Box
        width={60}
        height={60}
        borderRadius={30}
        backgroundColor={COLORS.BLUE}
        alignItems="center"
        justifyContent="center"
        position="relative"
        boxSizing="border-box"
        style={{ minWidth: '60px' }}
      >
        <Box position="absolute" style={{ right: 6 }}>
          <Typography color={COLORS.WHITE} size={48} lineHeight={80} weight={900}>
            {step}
          </Typography>
        </Box>
      </Box>
      <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={600} flex={1}>
        {text}
      </Typography>
    </Box>
  );
}
