import { useEffect } from 'react';
import { PageHero } from '../components/site/PageHero';
import { ContentSection } from '../components/site/ContentSection';
import { ContactPanel } from '../components/marketing/ContactPanel';

export function ContactPage() {
  useEffect(() => {
    document.title = 'Contact — Roll-A-Rack';
  }, []);

  return (
    <>
      <PageHero
        label="Contact"
        headline="Contact Roll-A-Rack."
        subhead="Whether you're evaluating a pilot, a landfill or brownfield project, or a broader deployment partnership, we'd like to hear from you."
        gridBg
      />

      <ContentSection py={80}>
        <ContactPanel />
      </ContentSection>
    </>
  );
}
