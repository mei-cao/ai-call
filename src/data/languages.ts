export interface UseCase {
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface LanguagePair {
  pair: string;
  from: { name: string; native: string; flag: string; code: string };
  to:   { name: string; native: string; flag: string; code: string };
  title: string;
  description: string;
  heroHeadline: string;
  heroSub: string;
  useCases: UseCase[];
  faq: FaqItem[];
  relatedSlugs: string[];
}

export const languagePairs: LanguagePair[] = [
  {
    pair: 'english-japanese',
    from: { name: 'English', native: 'English', flag: '🇺🇸', code: 'en' },
    to:   { name: 'Japanese', native: '日本語', flag: '🇯🇵', code: 'ja' },
    title: 'English to Japanese Phone Call Translation — AI Call',
    description: 'Call anyone in Japan in real time. AI Call translates English to Japanese (and back) live on the phone — no Japanese required. Free on iOS and Android.',
    heroHeadline: 'Call Japan.\nNo Japanese needed.',
    heroSub: 'AI Call translates both sides of your phone call between English and Japanese in real time. The other person just picks up normally.',
    useCases: [
      {
        icon: '✈️',
        title: 'Travel & reservations',
        description: 'Book ryokans, restaurants, and tours by phone. Handle lost luggage, train inquiries, and medical situations in Japan — all in English.',
      },
      {
        icon: '💼',
        title: 'Business with Japan',
        description: 'Negotiate with Japanese suppliers, join client calls, and close deals directly — without paying for a professional interpreter.',
      },
      {
        icon: '👨‍👩‍👧',
        title: 'Family & personal',
        description: "Stay in touch with Japanese friends, partners, or host families. Have real conversations even if your Japanese isn't fluent.",
      },
    ],
    faq: [
      { q: 'Can I call a Japanese phone number without speaking Japanese?', a: 'Yes. With AI Call, you speak English and the other person hears Japanese. Their Japanese replies are translated back to English for you — all in real time during the call.' },
      { q: 'Does the person in Japan need to install anything?', a: 'No. They receive a normal phone call and hear translated speech. Only you need AI Call installed on your phone.' },
      { q: 'How good is English to Japanese translation quality?', a: 'English ↔ Japanese is one of the highest-quality pairs in AI Call. The translation handles everyday conversation, business communication, and travel scenarios accurately.' },
    ],
    relatedSlugs: ['travel-japan-phone-calls', 'how-ai-call-translation-works'],
  },
  {
    pair: 'english-chinese',
    from: { name: 'English', native: 'English', flag: '🇺🇸', code: 'en' },
    to:   { name: 'Chinese', native: '普通话', flag: '🇨🇳', code: 'zh' },
    title: 'English to Chinese Phone Call Translation — AI Call',
    description: 'Call anyone in China or Taiwan in real time. AI Call translates English to Mandarin Chinese live on the phone — free on iOS and Android.',
    heroHeadline: 'Call China.\nNo Mandarin needed.',
    heroSub: 'AI Call translates both sides of your phone call between English and Mandarin Chinese in real time. Speak naturally — AI handles the rest.',
    useCases: [
      {
        icon: '💼',
        title: 'Supplier & factory calls',
        description: 'Manage Chinese manufacturers, negotiate pricing, and resolve quality issues directly over the phone — in English.',
      },
      {
        icon: '👨‍👩‍👧',
        title: 'Family across borders',
        description: 'Talk to Chinese-speaking relatives naturally. No typing, no delays — just a real phone conversation in each person\'s own language.',
      },
      {
        icon: '🏢',
        title: 'Business development',
        description: 'Build relationships with Chinese partners and clients. Close deals without language ever being the obstacle.',
      },
    ],
    faq: [
      { q: 'Can I call China without speaking Mandarin?', a: 'Yes. AI Call translates your English speech into Mandarin in real time and translates the other person\'s Mandarin replies back to English — all during the live call.' },
      { q: 'Does AI Call support both Simplified and Traditional Chinese?', a: 'AI Call supports Mandarin Chinese. The translation works for conversations with speakers from mainland China, Taiwan, and other Mandarin-speaking regions.' },
      { q: 'Is AI Call useful for managing Chinese suppliers?', a: 'Yes. Many importers and small business owners use AI Call to communicate directly with Chinese manufacturers and suppliers, saving thousands in interpreter fees.' },
    ],
    relatedSlugs: ['international-business-without-interpreter', 'how-ai-call-translation-works'],
  },
  {
    pair: 'english-spanish',
    from: { name: 'English', native: 'English', flag: '🇺🇸', code: 'en' },
    to:   { name: 'Spanish', native: 'Español', flag: '🇪🇸', code: 'es' },
    title: 'English to Spanish Phone Call Translation — AI Call',
    description: 'Translate phone calls between English and Spanish in real time. Call any Spanish speaker instantly — no Spanish required. Free on iOS and Android.',
    heroHeadline: 'Call in Spanish.\nSpeak in English.',
    heroSub: 'AI Call translates your phone calls between English and Spanish instantly. Both sides hear their own language — no app needed on their end.',
    useCases: [
      {
        icon: '🏥',
        title: 'Healthcare & services',
        description: 'Communicate with Spanish-speaking healthcare providers, local services, and government offices — clearly and confidently.',
      },
      {
        icon: '✈️',
        title: 'Travel in Latin America & Spain',
        description: 'Book hotels, call restaurants, and handle travel logistics across Spanish-speaking countries — all in English.',
      },
      {
        icon: '💼',
        title: 'Business & clients',
        description: 'Serve Spanish-speaking customers, coordinate with Latin American partners, and grow your business across language lines.',
      },
    ],
    faq: [
      { q: 'Can I use AI Call to translate English to Spanish on a phone call?', a: 'Yes. AI Call translates your speech from English to Spanish in real time during the call, and translates the other person\'s Spanish back to English for you.' },
      { q: 'Does AI Call work for Latin American Spanish dialects?', a: 'Yes. AI Call supports Castilian Spanish and major Latin American Spanish varieties including Mexican, Colombian, and Argentine Spanish.' },
      { q: 'Is there a free English to Spanish phone translator?', a: 'Yes. AI Call is free to download on iOS and Android. You can start making translated calls in English and Spanish without signing up.' },
    ],
    relatedSlugs: ['calling-international-customer-service', 'how-ai-call-translation-works'],
  },
  {
    pair: 'english-korean',
    from: { name: 'English', native: 'English', flag: '🇺🇸', code: 'en' },
    to:   { name: 'Korean', native: '한국어', flag: '🇰🇷', code: 'ko' },
    title: 'English to Korean Phone Call Translation — AI Call',
    description: 'Translate phone calls between English and Korean in real time. Call anyone in Korea instantly — no Korean required. Free on iOS and Android.',
    heroHeadline: 'Call Korea.\nNo Korean needed.',
    heroSub: 'AI Call translates both sides of your call between English and Korean instantly. The other person picks up their regular phone — no app required.',
    useCases: [
      {
        icon: '👨‍👩‍👧',
        title: 'Stay close with family',
        description: 'Talk to Korean-speaking parents, grandparents, or relatives naturally — in a real phone call, in each person\'s own language.',
      },
      {
        icon: '💼',
        title: 'K-business & partners',
        description: 'Communicate with Korean suppliers, brands, or business partners directly. No interpreter needed for everyday calls.',
      },
      {
        icon: '✈️',
        title: 'Travel in Korea',
        description: 'Book accommodations, call ahead to restaurants, and navigate daily situations in Korea — all from your phone, in English.',
      },
    ],
    faq: [
      { q: 'Can I call South Korea without speaking Korean?', a: 'Yes. With AI Call, you speak English and the other person hears Korean. Their Korean replies come back to you in English — in real time during the call.' },
      { q: 'How accurate is English to Korean translation?', a: 'English ↔ Korean is a well-supported pair in AI Call, with high accuracy for everyday conversation, family calls, and business communication.' },
      { q: 'Can Korean relatives call me using a regular phone?', a: 'Yes. The person in Korea uses their normal phone. They do not need AI Call or any app — they just receive and make regular calls.' },
    ],
    relatedSlugs: ['language-barriers-relationship', 'how-ai-call-translation-works'],
  },
  {
    pair: 'english-french',
    from: { name: 'English', native: 'English', flag: '🇺🇸', code: 'en' },
    to:   { name: 'French', native: 'Français', flag: '🇫🇷', code: 'fr' },
    title: 'English to French Phone Call Translation — AI Call',
    description: 'Translate phone calls between English and French in real time. Call anyone in France, Canada, or Africa instantly — no French required. Free on iOS and Android.',
    heroHeadline: 'Call France.\nNo French needed.',
    heroSub: 'AI Call translates your phone calls between English and French instantly. Speak naturally — the other person hears perfect French.',
    useCases: [
      {
        icon: '✈️',
        title: 'Travel in France & francophone countries',
        description: 'Call hotels, make restaurant reservations, and handle travel needs across France, Belgium, Switzerland, and French-speaking Africa — in English.',
      },
      {
        icon: '💼',
        title: 'European business',
        description: 'Communicate with French-speaking partners, clients, and suppliers. Expand into French markets without hiring an interpreter.',
      },
      {
        icon: '👨‍👩‍👧',
        title: 'Francophone family & friends',
        description: 'Stay connected with French-speaking people you care about. Have real conversations, not just text messages.',
      },
    ],
    faq: [
      { q: 'Can I call France without speaking French?', a: 'Yes. AI Call translates your English speech to French in real time on the phone call, and translates their French replies back to English for you instantly.' },
      { q: 'Does AI Call work for Canadian French (Québécois)?', a: 'Yes. AI Call supports standard French and handles Canadian French well for everyday conversation.' },
      { q: 'Is AI Call useful for calling French customer service lines?', a: 'Yes. Many users call French-speaking support lines for airlines, hotels, and other services using AI Call to communicate clearly in real time.' },
    ],
    relatedSlugs: ['calling-international-customer-service', 'travel-japan-phone-calls'],
  },
  {
    pair: 'english-german',
    from: { name: 'English', native: 'English', flag: '🇺🇸', code: 'en' },
    to:   { name: 'German', native: 'Deutsch', flag: '🇩🇪', code: 'de' },
    title: 'English to German Phone Call Translation — AI Call',
    description: 'Translate phone calls between English and German in real time. Call anyone in Germany, Austria, or Switzerland instantly — no German required. Free on iOS and Android.',
    heroHeadline: 'Call Germany.\nNo German needed.',
    heroSub: 'AI Call translates both sides of your call between English and German instantly. Business-grade accuracy, sub-0.5-second latency.',
    useCases: [
      {
        icon: '💼',
        title: 'DACH business',
        description: 'Call German, Austrian, and Swiss partners and suppliers directly. Negotiate, coordinate, and close deals in English — they hear German.',
      },
      {
        icon: '🏥',
        title: 'Healthcare & bureaucracy',
        description: 'Handle German government offices, health insurance calls, and administrative tasks that require a phone call — without needing fluent German.',
      },
      {
        icon: '✈️',
        title: 'Travel in German-speaking Europe',
        description: 'Book accommodation, contact local services, and get help during travel across Germany, Austria, and Switzerland — all in English.',
      },
    ],
    faq: [
      { q: 'Can I call Germany without speaking German?', a: 'Yes. With AI Call, you speak English and the other person hears German. Their German replies are translated to English for you in real time.' },
      { q: 'How accurate is English to German phone translation?', a: 'English ↔ German is one of the highest-accuracy language pairs in AI Call. It handles business terminology, formal communication, and everyday conversation well.' },
      { q: 'Is AI Call suitable for calling German customer service?', a: 'Yes. AI Call is well suited for calling German-speaking customer service lines, particularly for airlines, utilities, and insurance companies.' },
    ],
    relatedSlugs: ['international-business-without-interpreter', 'calling-international-customer-service'],
  },
];

export function getLanguagePair(pair: string): LanguagePair | undefined {
  return languagePairs.find((lp) => lp.pair === pair);
}
