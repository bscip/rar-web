import { useEffect } from 'react';
import { LegalPage } from '../features/legal/LegalPage';
import { PRIVACY_DOC } from '../content/legal';

export function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy — Roll-A-Rack';
  }, []);

  return <LegalPage doc={PRIVACY_DOC} />;
}
