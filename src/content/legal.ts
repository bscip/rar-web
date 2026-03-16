export interface LegalBodyItem {
  type: 'p' | 'h3' | 'list';
  content: string | string[];
}

export interface LegalSection {
  id: string;
  heading: string;
  body: LegalBodyItem[];
}

export interface LegalDoc {
  title: string;
  lastUpdated: string;
  intro?: string;
  sections: LegalSection[];
}

export const PRIVACY_DOC: LegalDoc = {
  title: 'Privacy Policy',
  lastUpdated: '2026-03-01',
  intro:
    'Roll-A-Rack is committed to handling any information you share with us responsibly. This policy describes how we collect, use, and protect information submitted through this website.',
  sections: [
    {
      id: 'information-collected',
      heading: 'Information We Collect',
      body: [
        {
          type: 'p',
          content:
            'When you submit a contact inquiry through this website, we may collect the following information:',
        },
        {
          type: 'list',
          content: ['Your name', 'Your email address', 'Your company or organization', 'The nature of your inquiry', 'Any message or notes you include'],
        },
        {
          type: 'p',
          content:
            'We do not collect information passively through tracking pixels, third-party advertising networks, or advanced analytics tools at this time.',
        },
      ],
    },
    {
      id: 'how-we-use',
      heading: 'How We Use Your Information',
      body: [
        {
          type: 'p',
          content:
            'Information submitted through contact forms is used solely to respond to your inquiry and to follow up as appropriate. We do not sell, rent, or share your contact information with third parties for marketing purposes.',
        },
      ],
    },
    {
      id: 'data-retention',
      heading: 'Data Retention',
      body: [
        {
          type: 'p',
          content:
            'We retain inquiry information for as long as reasonably necessary to respond and follow up. You may request deletion of your information at any time by contacting us directly.',
        },
      ],
    },
    {
      id: 'cookies',
      heading: 'Cookies & Tracking',
      body: [
        {
          type: 'p',
          content:
            'This site may use minimal browser-standard cookies for basic functionality. We do not use targeted advertising cookies or third-party tracking services beyond basic, privacy-respecting analytics if any.',
        },
      ],
    },
    {
      id: 'contact-privacy',
      heading: 'Contact for Privacy Questions',
      body: [
        {
          type: 'p',
          content:
            'If you have questions about how your information is handled, please contact us at info@roll-a-rack.com.',
        },
      ],
    },
  ],
};

export const TERMS_DOC: LegalDoc = {
  title: 'Terms of Use',
  lastUpdated: '2026-03-01',
  intro:
    'By accessing this website, you agree to the following terms. This site is operated by Roll-A-Rack and is provided for informational purposes.',
  sections: [
    {
      id: 'informational-only',
      heading: 'Informational Use Only',
      body: [
        {
          type: 'p',
          content:
            'The content on this website is provided for general informational purposes. Nothing on this site constitutes a binding offer, guarantee, warranty, or contract of any kind.',
        },
        {
          type: 'p',
          content:
            'Technical claims use language such as "designed to," "aimed at," and "positioned to" to reflect development-stage characteristics. Product specifications, timelines, and performance estimates may change.',
        },
      ],
    },
    {
      id: 'no-warranty',
      heading: 'No Warranty',
      body: [
        {
          type: 'p',
          content:
            'Roll-A-Rack makes no representations or warranties, express or implied, about the accuracy, completeness, or suitability of information on this site. Use of this site is at your own risk.',
        },
      ],
    },
    {
      id: 'intellectual-property',
      heading: 'Intellectual Property',
      body: [
        {
          type: 'p',
          content:
            'All content on this site — including text, design, logos, and technology descriptions — is the property of Roll-A-Rack or its respective owners. Patents covering the Roll-A-Rack system are issued or pending.',
        },
        {
          type: 'p',
          content:
            'You may not reproduce, distribute, or use site content for commercial purposes without written permission from Roll-A-Rack.',
        },
      ],
    },
    {
      id: 'external-links',
      heading: 'External Links',
      body: [
        {
          type: 'p',
          content:
            'This site may contain links to third-party websites. Roll-A-Rack is not responsible for the content, accuracy, or practices of any linked external sites.',
        },
      ],
    },
    {
      id: 'contact-terms',
      heading: 'Questions',
      body: [
        {
          type: 'p',
          content:
            'Questions about these terms can be directed to info@roll-a-rack.com.',
        },
      ],
    },
  ],
};
