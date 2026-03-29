import { Accordion, Text, rem } from '@mantine/core';
import type { AccordionItemData } from '../../content/landfillSolar';

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
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
