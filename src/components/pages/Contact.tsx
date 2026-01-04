// src/components/pages/Contact.tsx

import { Mail } from 'lucide-react';
import PageHero from '../patterns/PageHero';
import ContactFormSection from '../contact/ContactFormSection';
import ContactInfoSection from '../contact/ContactInfoSection';

export default function Contact() {
  return (
    <div>
      <PageHero
        icon={<Mail size={40} />}
        title="Me contacter"
        subtitle="Une question, un échange autour du Bassin, ou simplement un mot ?"
        align="center"
      />
      <ContactFormSection />
      <ContactInfoSection />
    </div>
  );
}
