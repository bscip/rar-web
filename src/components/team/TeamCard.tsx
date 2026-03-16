import { Box, Text, Title, Anchor, Group, rem } from '@mantine/core';
import { IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import type { TeamMember } from '../../content/team';

interface TeamCardProps {
  member: TeamMember;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Box
      className="rar-panel rar-card-hover"
      style={{ padding: rem(28), height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <Group gap="md" mb="md" wrap="nowrap">
        {member.imageUrl ? (
          <Box
            component="img"
            src={member.imageUrl}
            alt={member.name}
            style={{
              width: rem(52),
              height: rem(52),
              borderRadius: '50%',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
        ) : (
          <Box
            style={{
              width: rem(52),
              height: rem(52),
              borderRadius: '50%',
              backgroundColor: 'rgba(228, 166, 0, 0.12)',
              border: '1px solid rgba(228, 166, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              color: 'var(--rar-amber)',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: rem(16),
            }}
          >
            {getInitials(member.name)}
          </Box>
        )}
        <Box>
          <Title order={5} style={{ color: 'white', marginBottom: 2 }}>
            {member.name}
          </Title>
          <Text size="sm" style={{ color: 'var(--rar-amber)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}>
            {member.role}
          </Text>
          {member.company && (
            <Text size="xs" style={{ color: 'var(--rar-text-muted)' }}>
              {member.company}
            </Text>
          )}
        </Box>
      </Group>

      <Text size="sm" style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7, flex: 1 }}>
        {member.bio}
      </Text>

      {(member.linkedinUrl || member.email) && (
        <Group gap="sm" mt="md">
          {member.linkedinUrl && (
            <Anchor
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--rar-text-muted)', display: 'flex' }}
            >
              <IconBrandLinkedin size={18} />
            </Anchor>
          )}
          {member.email && (
            <Anchor
              href={`mailto:${member.email}`}
              style={{ color: 'var(--rar-text-muted)', display: 'flex' }}
            >
              <IconMail size={18} />
            </Anchor>
          )}
        </Group>
      )}
    </Box>
  );
}
