import { useState } from 'react';
import {
  Grid,
  Box,
  Title,
  Text,
  Stack,
  TextInput,
  Textarea,
  Select,
  Button,
  Anchor,
  Group,
  rem,
} from '@mantine/core';
import { IconMail, IconCheck } from '@tabler/icons-react';

export function ContactPanel() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Roll-A-Rack Inquiry — ${form.subject || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nInquiry type: ${form.subject}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@roll-a-rack.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Grid gutter={64}>
      {/* Left: contact details */}
      <Grid.Col span={{ base: 12, md: 5 }}>
        <Stack gap="xl">
          <Box>
            <Title order={3} mb="md" style={{ color: 'var(--rar-text)' }}>
              Get in touch
            </Title>
            <Text style={{ color: 'var(--rar-text-dim)', lineHeight: 1.7 }}>
              Whether you're evaluating a pilot installation, exploring an installer partnership, or looking at strategic collaboration, we'd like to hear from you.
            </Text>
          </Box>

          <Stack gap="lg">
            <Group gap="md" wrap="nowrap">
              <Box
                style={{
                  width: rem(40),
                  height: rem(40),
                  backgroundColor: 'rgba(228, 166, 0, 0.1)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--rar-amber)',
                  flexShrink: 0,
                }}
              >
                <IconMail size={18} />
              </Box>
              <Box>
                <Text size="xs" style={{ color: 'var(--rar-text-muted)', marginBottom: 2 }}>
                  Email
                </Text>
                <Anchor
                  href="mailto:info@roll-a-rack.com"
                  style={{ color: 'var(--rar-text)', fontWeight: 500 }}
                  underline="hover"
                >
                  info@roll-a-rack.com
                </Anchor>
              </Box>
            </Group>

            <Box
              style={{
                backgroundColor: 'var(--rar-panel)',
                border: '1px solid var(--rar-border)',
                borderRadius: 10,
                padding: rem(20),
              }}
            >
              <Text size="sm" fw={600} style={{ color: 'var(--rar-text)', marginBottom: rem(8), fontFamily: 'Space Grotesk, sans-serif' }}>
                Types of outreach welcome:
              </Text>
              <Stack gap="xs">
                {[
                  'Installer / pilot project opportunities',
                  'Developer partnerships',
                  'Partnership inquiries',
                  'General questions about the technology',
                ].map((item) => (
                  <Group key={item} gap="xs" wrap="nowrap">
                    <IconCheck size={14} color="var(--rar-amber)" style={{ flexShrink: 0 }} />
                    <Text size="sm" style={{ color: 'var(--rar-text-dim)' }}>
                      {item}
                    </Text>
                  </Group>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Grid.Col>

      {/* Right: form */}
      <Grid.Col span={{ base: 12, md: 7 }}>
        {submitted ? (
          <Box
            style={{
              backgroundColor: 'var(--rar-panel)',
              border: '1px solid rgba(228, 166, 0, 0.3)',
              borderRadius: 12,
              padding: rem(48),
              textAlign: 'center',
            }}
          >
            <Box
              style={{
                width: rem(56),
                height: rem(56),
                backgroundColor: 'rgba(228, 166, 0, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                marginBottom: rem(24),
                color: 'var(--rar-amber)',
              }}
            >
              <IconCheck size={28} />
            </Box>
            <Title order={3} mb="sm" style={{ color: 'var(--rar-text)' }}>
              Your email client should open shortly.
            </Title>
            <Text style={{ color: 'var(--rar-text-dim)' }}>
              If it didn't open automatically, email us directly at{' '}
              <Anchor href="mailto:info@roll-a-rack.com" style={{ color: 'var(--rar-amber)' }}>
                info@roll-a-rack.com
              </Anchor>
            </Text>
          </Box>
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit}
            style={{
              backgroundColor: 'var(--rar-panel)',
              border: '1px solid var(--rar-border)',
              borderRadius: 12,
              padding: rem(36),
            }}
          >
            <Stack gap="md">
              <Grid gutter="md">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Name"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Email"
                    placeholder="you@company.com"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                </Grid.Col>
              </Grid>

              <TextInput
                label="Company / Organization"
                placeholder="Optional"
                value={form.company}
                onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
              />

              <Select
                label="I'm reaching out about"
                placeholder="Select one"
                required
                data={[
                  { value: 'Installer / project opportunity', label: 'Installer / project opportunity' },
                  { value: 'Partnership inquiry', label: 'Partnership inquiry' },
                  { value: 'General question', label: 'General question' },
                ]}
                value={form.subject}
                onChange={(val) => setForm((f) => ({ ...f, subject: val ?? '' }))}
              />

              <Textarea
                label="Message"
                placeholder="Tell us about your project, question, or interest..."
                required
                minRows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              />

              <Button
                type="submit"
                variant="filled"
                color="denim"
                size="md"
                mt="xs"
                fullWidth
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
              >
                Send Message
              </Button>
            </Stack>
          </Box>
        )}
      </Grid.Col>
    </Grid>
  );
}
