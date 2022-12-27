import { useSettings } from 'application/SettingsProvider';
import { Box, Container, TouchableOpacity, Typography } from 'components';
import { COLORS } from 'constant';
import React from 'react';
import { Logo } from 'svg';

export function Header() {
  const settings = useSettings();

  function handleLinkClick(id: string) {
    const element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <Container>
      <Box
        paddingTop={14}
        paddingBottom={14}
        backgroundColor={COLORS.WHITE}
        flexDirection="row"
        alignItems="center"
        gap={80}
      >
        <Logo />
        <Box flex={1} />
        <TouchableOpacity onPress={() => handleLinkClick('info')}>
          <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
            {settings?.menu.info}
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkClick('map')}>
          <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
            {settings?.menu.map}
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkClick('faq')}>
          <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
            {settings?.menu.faq}
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkClick('tariff')}>
          <Typography color={COLORS.BLACK} size={16} lineHeight={24} weight={500}>
            {settings?.menu.tariff}
          </Typography>
        </TouchableOpacity>
      </Box>
    </Container>
  );
}