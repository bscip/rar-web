import { useEffect } from 'react';
import { LegalPage } from '../features/legal/LegalPage';
import { TERMS_DOC } from '../content/legal';

export function TermsPage() {
  useEffect(() => {
    document.title = 'Terms of Use — Roll-A-Rack';
  }, []);

  return <LegalPage doc={TERMS_DOC} />;
}
