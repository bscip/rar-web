import { Accordion, List, Text, rem } from '@mantine/core';

export interface AccordionItemData {
  value: string;
  title: string;
  body: string[];
  bullets?: string[];
}

interface FaqAccordionProps {
  items: AccordionItemData[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion
      multiple
      variant="separated"
      radius="md"
      styles={{
        item: {
          backgroundColor: 'var(--rar-panel)',
          border: '1px solid var(--rar-border)',
          borderLeft: '3px solid transparent',
          '&[data-active]': {
            backgroundColor: 'var(--rar-panel)',
            borderColor: 'var(--rar-border-strong)',
            borderLeftColor: 'var(--rar-amber)',
          },
        },
        control: {
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 700,
          fontSize: rem(20),
          color: 'var(--rar-text)',
          padding: `${rem(22)} ${rem(24)}`,
        },
        content: {
          padding: `${rem(4)} ${rem(24)} ${rem(24)}`,
        },
        chevron: {
          color: 'var(--rar-amber)',
        },
      }}
    >
      {items.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control>{item.title}</Accordion.Control>
          <Accordion.Panel>
            {item.body.map((paragraph, i) => (
              <Text
                key={i}
                mt={i > 0 ? 'sm' : undefined}
                style={{ color: 'var(--rar-text-dim)', lineHeight: 1.75 }}
              >
                {paragraph}
              </Text>
            ))}
            {item.bullets && item.bullets.length > 0 && (
              <List
                mt="md"
                spacing={6}
                size="sm"
                styles={{
                  itemWrapper: { color: 'var(--rar-text-dim)' },
                  itemLabel: { color: 'var(--rar-text-dim)' },
                }}
              >
                {item.bullets.map((bullet, i) => (
                  <List.Item key={i}>{bullet}</List.Item>
                ))}
              </List>
            )}
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
