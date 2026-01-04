// src/components/contact/ContactFormSection.tsx

import ContactForm from '@/components/form/ContactForm';
import clsx from 'clsx';
import './ContactFormSection.css';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';

export default function ContactFormSection() {
  return (
    <Section className={clsx('contact-form-section')}>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Contact"
          title="Écrivez-moi un message"
          subtitle="Je réponds dès que possible. Vous pouvez aussi me contacter via Instagram."
          align="left"
        />

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 items-start">
          <div className="max-w-2xl">
            <ContactForm />
          </div>

          <aside className="contact-form-aside">
            <h3 className="text-lg font-subheading mb-2">À savoir</h3>

            <p className="font-body">
              Votre message est utilisé uniquement pour vous répondre. Aucune donnée n’est revendue.
            </p>

            <p className="mt-4 font-body">
              Si vous préférez, vous pouvez aussi m’écrire sur{' '}
              <a
                className="contact-link"
                href="https://instagram.com/TON_COMPTE"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              .
            </p>
          </aside>
        </div>
      </SectionWrapper>
    </Section>
  );
}
