import type { Locale } from './locales';

export interface UIStrings {
  // Meta
  'meta.title': string;
  'meta.description': string;
  'meta.pct.title': string;
  'meta.pct.description': string;

  // Nav
  'nav.features': string;
  'nav.how': string;
  'nav.languages': string;
  'nav.blog': string;
  'nav.download': string;

  // Hero
  'hero.badge': string;
  'hero.headline': string;
  'hero.subline': string;
  'hero.dl.ios': string;
  'hero.dl.android': string;
  'hero.trust': string;

  // Stats
  'stats.languages': string;
  'stats.downloads': string;
  'stats.rating': string;

  // How it works
  'how.eyebrow': string;
  'how.title': string;
  'how.sub': string;
  'how.step1.title': string;
  'how.step1.desc': string;
  'how.step2.title': string;
  'how.step2.desc': string;
  'how.step3.title': string;
  'how.step3.desc': string;

  // CTA
  'cta.eyebrow': string;
  'cta.title': string;
  'cta.sub': string;

  // Phone Call Translator page
  'pct.eyebrow': string;
  'pct.title': string;
  'pct.sub': string;
  'pct.trust': string;
  'pct.what.title': string;
  'pct.what.p1': string;
  'pct.what.p2': string;
  'pct.what.p3': string;
  'pct.how.title': string;
  'pct.how.sub': string;
  'pct.how.step1.title': string;
  'pct.how.step1.desc': string;
  'pct.how.step2.title': string;
  'pct.how.step2.desc': string;
  'pct.how.step3.title': string;
  'pct.how.step3.desc': string;
  'pct.uc.title': string;
  'pct.uc1.title': string;
  'pct.uc1.desc': string;
  'pct.uc2.title': string;
  'pct.uc2.desc': string;
  'pct.uc3.title': string;
  'pct.uc3.desc': string;
  'pct.uc4.title': string;
  'pct.uc4.desc': string;
  'pct.uc5.title': string;
  'pct.uc5.desc': string;
  'pct.uc6.title': string;
  'pct.uc6.desc': string;
  'pct.compare.title': string;
  'pct.compare.sub': string;
  'pct.faq.title': string;
  'pct.cta.title': string;
  'pct.cta.sub': string;
}

export const ui: Record<Locale, UIStrings> = {
  en: {
    'meta.title': "AI Call — The World's Leading Real-Time Phone Call Translator",
    'meta.description': 'AI Call is a free phone call translator app that translates both sides of any call in real time across 100+ languages. No sign-up needed. iOS & Android.',
    'meta.pct.title': 'Phone Call Translator — Real-Time AI Translation for Any Call | AI Call',
    'meta.pct.description': 'AI Call is the best free phone call translator app. It translates both sides of any phone call in real time across 100+ languages. Download free for iOS and Android.',

    'nav.features': 'Features',
    'nav.how': 'How it works',
    'nav.languages': 'Languages',
    'nav.blog': 'Blog',
    'nav.download': 'Download',

    'hero.badge': '100+ languages · Real-time translation',
    'hero.headline': 'Call anyone,\nin any language',
    'hero.subline': 'AI Call is the real-time phone call translator that works in both directions — you speak your language, they hear theirs. 100+ languages, no interpreter needed.',
    'hero.dl.ios': 'App Store',
    'hero.dl.android': 'Google Play',
    'hero.trust': 'Free to download · No sign-up required to try',

    'stats.languages': '100+ Languages',
    'stats.downloads': '50K+ Downloads',
    'stats.rating': '5.0★ App Store',

    'how.eyebrow': 'How It Works',
    'how.title': 'Three steps. Just like a normal call.',
    'how.sub': 'No training, no setup. Works with any phone number.',
    'how.step1.title': 'Open AI Call and dial',
    'how.step1.desc': 'Select the other person\'s language and dial their number — just like a normal call.',
    'how.step2.title': 'Speak naturally',
    'how.step2.desc': 'Talk in your language. AI Call instantly translates and the other person hears their language.',
    'how.step3.title': 'Both sides translated',
    'how.step3.desc': 'Their reply is translated back to you in real time. A full two-way conversation.',

    'cta.eyebrow': 'Free · No sign-up needed',
    'cta.title': 'Start calling across languages',
    'cta.sub': 'Download AI Call free. Works on iOS and Android.',

    'pct.eyebrow': 'Free · iOS & Android · 100+ Languages',
    'pct.title': 'Phone Call Translator',
    'pct.sub': 'The AI-powered real-time phone call translator that lets you call anyone in any language. You speak yours — they hear theirs. Both sides translated, instantly.',
    'pct.trust': 'Free to download · No account required · Works with any phone number',
    'pct.what.title': 'What is a phone call translator?',
    'pct.what.p1': 'A phone call translator is software that listens to a live phone call and translates each speaker\'s voice into the other person\'s language in real time.',
    'pct.what.p2': 'AI Call is a phone call translator app for iOS and Android. Your spoken words are instantly translated and delivered to the other person as natural speech in their language.',
    'pct.what.p3': 'The person you call does not need any app. They pick up their phone and hear a normal translated voice.',
    'pct.how.title': 'How real-time call translation works',
    'pct.how.sub': 'Three steps. The other person just picks up normally.',
    'pct.how.step1.title': 'Open AI Call and dial',
    'pct.how.step1.desc': 'Select the language the other person speaks and dial their number. No special setup on their end.',
    'pct.how.step2.title': 'Speak in your language',
    'pct.how.step2.desc': 'Talk naturally. AI instantly converts your speech, translates it, and delivers a natural voice to the other person.',
    'pct.how.step3.title': 'Hear their reply in yours',
    'pct.how.step3.desc': 'When they respond, their speech is translated back to your language instantly.',
    'pct.uc.title': 'When you need a phone call translator',
    'pct.uc1.title': 'International travel',
    'pct.uc1.desc': 'Book hotels, make reservations, and handle travel logistics abroad — all in English.',
    'pct.uc2.title': 'Business & suppliers',
    'pct.uc2.desc': 'Call overseas manufacturers and partners directly — without hiring an interpreter.',
    'pct.uc3.title': 'Family & relationships',
    'pct.uc3.desc': 'Stay connected with relatives who speak a different language. Real phone conversations.',
    'pct.uc4.title': 'Healthcare & services',
    'pct.uc4.desc': 'Communicate clearly with providers and government offices across language gaps.',
    'pct.uc5.title': 'Customer support calls',
    'pct.uc5.desc': 'Call international customer service lines even when they only speak their local language.',
    'pct.uc6.title': 'Language learning',
    'pct.uc6.desc': 'Practice real conversations with native speakers and follow along with live transcripts.',
    'pct.compare.title': 'AI Call vs other translation approaches',
    'pct.compare.sub': 'Why a dedicated phone call translator app makes the difference.',
    'pct.faq.title': 'Frequently asked questions',
    'pct.cta.title': 'Try the phone call translator free',
    'pct.cta.sub': 'Download AI Call and make your first translated call in minutes.',
  },

  zh: {
    'meta.title': 'AI Call — 全球领先的实时电话翻译 App',
    'meta.description': 'AI Call 是免费的电话翻译 App，支持 100+ 种语言实时双向翻译。无需注册，iOS 和 Android 均可使用。',
    'meta.pct.title': '电话翻译 — 任意通话实时 AI 翻译 | AI Call',
    'meta.pct.description': 'AI Call 是最佳免费电话翻译 App，支持 100+ 语言实时翻译通话双方内容。iOS 和 Android 免费下载。',

    'nav.features': '功能',
    'nav.how': '使用方式',
    'nav.languages': '支持语言',
    'nav.blog': '博客',
    'nav.download': '下载',

    'hero.badge': '100+ 种语言 · 实时翻译',
    'hero.headline': '打给任何人，\n用你自己的语言',
    'hero.subline': 'AI Call 是实时电话翻译 App，双向翻译通话内容——你说你的语言，对方听到他们的语言。支持 100+ 种语言，无需翻译员。',
    'hero.dl.ios': 'App Store',
    'hero.dl.android': 'Google Play',
    'hero.trust': '免费下载 · 无需注册即可试用',

    'stats.languages': '100+ 种语言',
    'stats.downloads': '50,000+ 次下载',
    'stats.rating': 'App Store 5.0★',

    'how.eyebrow': '使用方式',
    'how.title': '三个步骤，就像正常打电话一样。',
    'how.sub': '无需培训，无需配置，支持任意电话号码。',
    'how.step1.title': '打开 AI Call 并拨号',
    'how.step1.desc': '选择对方的语言，拨打他们的号码——和普通电话完全一样。',
    'how.step2.title': '用你的语言正常说话',
    'how.step2.desc': '自然对话即可。AI Call 即时翻译，对方听到的是他们的语言。',
    'how.step3.title': '双向实时翻译',
    'how.step3.desc': '对方的回复也会实时翻译给你，完整的双向对话。',

    'cta.eyebrow': '免费 · 无需注册',
    'cta.title': '立即开始跨语言通话',
    'cta.sub': '免费下载 AI Call，支持 iOS 和 Android。',

    'pct.eyebrow': '免费 · iOS & Android · 100+ 语言',
    'pct.title': '电话翻译',
    'pct.sub': 'AI 驱动的实时电话翻译，让你用任意语言联系任何人。你说你的语言，对方听到他们的——双向即时翻译。',
    'pct.trust': '免费下载 · 无需账号 · 支持任意电话号码',
    'pct.what.title': '什么是电话翻译？',
    'pct.what.p1': '电话翻译是一种软件，能在通话过程中实时将每位说话者的语音翻译成对方的语言。',
    'pct.what.p2': 'AI Call 是适用于 iOS 和 Android 的电话翻译 App。你的话语会被即时翻译，以自然语音传递给对方。',
    'pct.what.p3': '被叫方无需安装任何 App，接起电话后直接听到翻译后的声音即可。',
    'pct.how.title': '实时通话翻译的工作原理',
    'pct.how.sub': '三个步骤，对方只需正常接听。',
    'pct.how.step1.title': '打开 AI Call 并拨号',
    'pct.how.step1.desc': '选择对方的语言并拨打号码，对方无需任何特殊设置。',
    'pct.how.step2.title': '用你的语言说话',
    'pct.how.step2.desc': '自然说话即可，AI 即时翻译并以自然语音传递给对方。',
    'pct.how.step3.title': '听到对方翻译后的回复',
    'pct.how.step3.desc': '对方回复时，其语言会即时翻译成你的语言。',
    'pct.uc.title': '什么时候需要电话翻译',
    'pct.uc1.title': '出境旅游',
    'pct.uc1.desc': '用中文预订酒店、餐厅，处理海外旅行中的各类事务。',
    'pct.uc2.title': '商务与供应商',
    'pct.uc2.desc': '直接联系海外供应商和合作伙伴，无需雇用口译员。',
    'pct.uc3.title': '家人与亲友',
    'pct.uc3.desc': '与说不同语言的家人保持联系，真正的电话通话。',
    'pct.uc4.title': '医疗与政务',
    'pct.uc4.desc': '与医疗机构、政府部门跨语言清晰沟通。',
    'pct.uc5.title': '客服电话',
    'pct.uc5.desc': '拨打只提供当地语言服务的国际客服热线。',
    'pct.uc6.title': '语言学习',
    'pct.uc6.desc': '与母语者进行真实对话练习，配合实时字幕跟进。',
    'pct.compare.title': 'AI Call 与其他翻译方式对比',
    'pct.compare.sub': '为什么专用电话翻译 App 更有优势。',
    'pct.faq.title': '常见问题',
    'pct.cta.title': '免费体验电话翻译',
    'pct.cta.sub': '下载 AI Call，几分钟内即可完成第一次翻译通话。',
  },

  ja: {
    'meta.title': 'AI Call — リアルタイム通話翻訳アプリ世界最高峰',
    'meta.description': 'AI Callは100以上の言語に対応した無料のリアルタイム通話翻訳アプリです。登録不要。iOS・Android対応。',
    'meta.pct.title': '電話翻訳 — あらゆる通話をリアルタイムAI翻訳 | AI Call',
    'meta.pct.description': 'AI Callは最高の無料電話翻訳アプリ。100以上の言語で通話の両側をリアルタイム翻訳。iOS・Android無料ダウンロード。',

    'nav.features': '機能',
    'nav.how': '使い方',
    'nav.languages': '対応言語',
    'nav.blog': 'ブログ',
    'nav.download': 'ダウンロード',

    'hero.badge': '100以上の言語 · リアルタイム翻訳',
    'hero.headline': '誰にでも電話できる、\nどんな言語でも',
    'hero.subline': 'AI Callはリアルタイム通話翻訳アプリ。あなたは自分の言語で話し、相手は自分の言語で聞こえます。100以上の言語に対応、通訳不要。',
    'hero.dl.ios': 'App Store',
    'hero.dl.android': 'Google Play',
    'hero.trust': '無料ダウンロード · 登録不要で試せます',

    'stats.languages': '100以上の言語',
    'stats.downloads': '5万回以上のダウンロード',
    'stats.rating': 'App Store 5.0★',

    'how.eyebrow': '使い方',
    'how.title': '3ステップ。普通の電話と同じです。',
    'how.sub': '設定不要。どの電話番号にも使えます。',
    'how.step1.title': 'AI Callを開いてダイヤル',
    'how.step1.desc': '相手の言語を選んで電話番号を入力 — 普通の電話と同じです。',
    'how.step2.title': '自分の言語で自然に話す',
    'how.step2.desc': 'AI Callが即座に翻訳し、相手には相手の言語で届きます。',
    'how.step3.title': '両方向リアルタイム翻訳',
    'how.step3.desc': '相手の返答もリアルタイムであなたの言語に翻訳されます。',

    'cta.eyebrow': '無料 · 登録不要',
    'cta.title': '言語を超えた通話を始めよう',
    'cta.sub': 'AI Callを無料ダウンロード。iOS・Android対応。',

    'pct.eyebrow': '無料 · iOS & Android · 100以上の言語',
    'pct.title': '電話翻訳',
    'pct.sub': 'AIを活用したリアルタイム電話翻訳で、どんな言語の相手にも電話できます。あなたは自分の言語で話し、相手は相手の言語で聞こえます。',
    'pct.trust': '無料ダウンロード · アカウント不要 · どの電話番号にも対応',
    'pct.what.title': '電話翻訳とは？',
    'pct.what.p1': '電話翻訳とは、通話中に各話者の音声を相手の言語にリアルタイムで翻訳するソフトウェアです。',
    'pct.what.p2': 'AI CallはiOS・Android向けの電話翻訳アプリです。あなたの言葉は即座に翻訳され、相手には自然な音声で届きます。',
    'pct.what.p3': '電話を受ける相手はアプリをインストールする必要はありません。普通に電話に出るだけで翻訳された声が聞こえます。',
    'pct.how.title': 'リアルタイム通話翻訳の仕組み',
    'pct.how.sub': '3ステップ。相手は普通に電話に出るだけ。',
    'pct.how.step1.title': 'AI Callを開いてダイヤル',
    'pct.how.step1.desc': '相手の言語を選んで番号をダイヤル。相手側の設定は不要。',
    'pct.how.step2.title': '自分の言語で話す',
    'pct.how.step2.desc': '自然に話すだけ。AIが即座に翻訳し相手に届けます。',
    'pct.how.step3.title': '相手の返答が自分の言語で聞こえる',
    'pct.how.step3.desc': '相手が話すと、その言葉があなたの言語に即座に翻訳されます。',
    'pct.uc.title': '電話翻訳が必要な場面',
    'pct.uc1.title': '海外旅行',
    'pct.uc1.desc': 'ホテルや飲食店の予約、旅先でのトラブル対応を日本語で。',
    'pct.uc2.title': 'ビジネス・サプライヤー',
    'pct.uc2.desc': '海外のメーカーやパートナーに通訳なしで直接電話。',
    'pct.uc3.title': '家族・友人',
    'pct.uc3.desc': '異なる言語を話す家族と、テキストではなく本当の電話で話す。',
    'pct.uc4.title': '医療・行政',
    'pct.uc4.desc': '言語の壁を越えて医療機関や行政窓口に明確に伝える。',
    'pct.uc5.title': 'カスタマーサポート',
    'pct.uc5.desc': '現地語のみ対応の国際的なカスタマーサービスに電話する。',
    'pct.uc6.title': '語学学習',
    'pct.uc6.desc': 'ネイティブスピーカーとリアルな会話練習、ライブ字幕で確認。',
    'pct.compare.title': 'AI Callと他の翻訳方法の比較',
    'pct.compare.sub': '専用電話翻訳アプリが違いを生む理由。',
    'pct.faq.title': 'よくある質問',
    'pct.cta.title': '電話翻訳を無料で試す',
    'pct.cta.sub': 'AI Callをダウンロードして数分で最初の翻訳通話を。',
  },

  ko: {
    'meta.title': 'AI Call — 세계 최고의 실시간 전화 통역 앱',
    'meta.description': 'AI Call은 100개 이상의 언어를 실시간으로 번역하는 무료 전화 통역 앱입니다. 회원가입 불필요. iOS & Android.',
    'meta.pct.title': '전화 통역 — 모든 통화를 실시간 AI 번역 | AI Call',
    'meta.pct.description': 'AI Call은 최고의 무료 전화 통역 앱입니다. 100개 이상 언어로 통화 양측을 실시간 번역. iOS & Android 무료 다운로드.',

    'nav.features': '기능',
    'nav.how': '사용 방법',
    'nav.languages': '지원 언어',
    'nav.blog': '블로그',
    'nav.download': '다운로드',

    'hero.badge': '100개 이상 언어 · 실시간 번역',
    'hero.headline': '누구에게나 전화하세요,\n어떤 언어로든',
    'hero.subline': 'AI Call은 실시간 전화 통역 앱으로 양방향 번역이 됩니다. 당신은 한국어로 말하고, 상대방은 자신의 언어로 듣습니다. 100개 이상 언어 지원, 통역사 불필요.',
    'hero.dl.ios': 'App Store',
    'hero.dl.android': 'Google Play',
    'hero.trust': '무료 다운로드 · 회원가입 없이 체험 가능',

    'stats.languages': '100개 이상 언어',
    'stats.downloads': '5만 회 이상 다운로드',
    'stats.rating': 'App Store 5.0★',

    'how.eyebrow': '사용 방법',
    'how.title': '3단계. 일반 전화와 똑같습니다.',
    'how.sub': '설정 불필요. 모든 전화번호에 사용 가능.',
    'how.step1.title': 'AI Call을 열고 전화 걸기',
    'how.step1.desc': '상대방의 언어를 선택하고 전화번호를 누르세요 — 일반 전화와 동일합니다.',
    'how.step2.title': '자연스럽게 말하기',
    'how.step2.desc': 'AI Call이 즉시 번역하여 상대방에게 그들의 언어로 전달합니다.',
    'how.step3.title': '양방향 실시간 번역',
    'how.step3.desc': '상대방의 답변도 실시간으로 번역되어 들립니다.',

    'cta.eyebrow': '무료 · 회원가입 불필요',
    'cta.title': '언어를 넘어 전화하세요',
    'cta.sub': 'AI Call 무료 다운로드. iOS & Android 지원.',

    'pct.eyebrow': '무료 · iOS & Android · 100개 이상 언어',
    'pct.title': '전화 통역',
    'pct.sub': 'AI 기반 실시간 전화 통역으로 어떤 언어의 상대에게도 전화할 수 있습니다. 당신은 한국어로, 상대는 자신의 언어로.',
    'pct.trust': '무료 다운로드 · 계정 불필요 · 모든 전화번호 지원',
    'pct.what.title': '전화 통역이란?',
    'pct.what.p1': '전화 통역은 통화 중 각 화자의 음성을 실시간으로 상대방의 언어로 번역하는 소프트웨어입니다.',
    'pct.what.p2': 'AI Call은 iOS & Android용 전화 통역 앱입니다. 당신의 말은 즉시 번역되어 자연스러운 음성으로 상대에게 전달됩니다.',
    'pct.what.p3': '전화를 받는 상대방은 앱을 설치할 필요가 없습니다. 일반 전화로 받으면 번역된 목소리가 들립니다.',
    'pct.how.title': '실시간 통화 번역 작동 원리',
    'pct.how.sub': '3단계. 상대방은 그냥 전화만 받으면 됩니다.',
    'pct.how.step1.title': 'AI Call을 열고 전화 걸기',
    'pct.how.step1.desc': '상대 언어를 선택하고 번호를 누르세요. 상대방 측 설정은 불필요.',
    'pct.how.step2.title': '자신의 언어로 말하기',
    'pct.how.step2.desc': '자연스럽게 말하면 AI가 즉시 번역하여 상대에게 전달합니다.',
    'pct.how.step3.title': '상대 답변이 내 언어로 들림',
    'pct.how.step3.desc': '상대가 말하면 즉시 한국어로 번역되어 들립니다.',
    'pct.uc.title': '전화 통역이 필요한 순간',
    'pct.uc1.title': '해외여행',
    'pct.uc1.desc': '한국어로 해외 호텔, 레스토랑 예약 및 여행 관련 업무 처리.',
    'pct.uc2.title': '비즈니스 & 공급업체',
    'pct.uc2.desc': '통역사 없이 해외 파트너와 직접 통화.',
    'pct.uc3.title': '가족 & 친구',
    'pct.uc3.desc': '다른 언어를 쓰는 가족과 진짜 전화 통화로 소통.',
    'pct.uc4.title': '의료 & 행정',
    'pct.uc4.desc': '언어 장벽 없이 의료기관, 관공서와 명확하게 소통.',
    'pct.uc5.title': '고객 서비스 전화',
    'pct.uc5.desc': '현지어로만 서비스하는 국제 고객센터에 전화하기.',
    'pct.uc6.title': '언어 학습',
    'pct.uc6.desc': '원어민과 실전 대화 연습, 실시간 자막으로 확인.',
    'pct.compare.title': 'AI Call vs 다른 번역 방법',
    'pct.compare.sub': '전용 전화 통역 앱이 다른 이유.',
    'pct.faq.title': '자주 묻는 질문',
    'pct.cta.title': '전화 통역 무료로 시작하기',
    'pct.cta.sub': 'AI Call을 다운로드하고 몇 분 안에 첫 번역 통화를.',
  },

  es: {
    'meta.title': 'AI Call — El Mejor Traductor de Llamadas Telefónicas en Tiempo Real',
    'meta.description': 'AI Call es una app gratuita para traducir llamadas en tiempo real en más de 100 idiomas. Sin registro. iOS y Android.',
    'meta.pct.title': 'Traductor de Llamadas — Traducción AI en Tiempo Real | AI Call',
    'meta.pct.description': 'AI Call es la mejor app gratuita para traducir llamadas telefónicas. Traduce ambos lados en tiempo real en más de 100 idiomas. Descarga gratis para iOS y Android.',

    'nav.features': 'Funciones',
    'nav.how': 'Cómo funciona',
    'nav.languages': 'Idiomas',
    'nav.blog': 'Blog',
    'nav.download': 'Descargar',

    'hero.badge': 'Más de 100 idiomas · Traducción en tiempo real',
    'hero.headline': 'Llama a cualquiera,\nen cualquier idioma',
    'hero.subline': 'AI Call es el traductor de llamadas en tiempo real que funciona en ambas direcciones. Tú hablas tu idioma, ellos escuchan el suyo. Más de 100 idiomas, sin intérprete.',
    'hero.dl.ios': 'App Store',
    'hero.dl.android': 'Google Play',
    'hero.trust': 'Descarga gratuita · Sin registro para probar',

    'stats.languages': 'Más de 100 idiomas',
    'stats.downloads': 'Más de 50.000 descargas',
    'stats.rating': 'App Store 5.0★',

    'how.eyebrow': 'Cómo funciona',
    'how.title': 'Tres pasos. Como una llamada normal.',
    'how.sub': 'Sin configuración. Funciona con cualquier número de teléfono.',
    'how.step1.title': 'Abre AI Call y marca',
    'how.step1.desc': 'Selecciona el idioma de la otra persona y marca su número — igual que una llamada normal.',
    'how.step2.title': 'Habla en tu idioma',
    'how.step2.desc': 'AI Call traduce al instante y la otra persona escucha en su idioma.',
    'how.step3.title': 'Traducción bidireccional',
    'how.step3.desc': 'Su respuesta también se traduce en tiempo real para ti.',

    'cta.eyebrow': 'Gratis · Sin registro',
    'cta.title': 'Empieza a llamar sin barreras',
    'cta.sub': 'Descarga AI Call gratis. Compatible con iOS y Android.',

    'pct.eyebrow': 'Gratis · iOS & Android · +100 idiomas',
    'pct.title': 'Traductor de Llamadas',
    'pct.sub': 'El traductor de llamadas con IA en tiempo real que te permite llamar a cualquiera en cualquier idioma. Tú hablas el tuyo, ellos escuchan el suyo.',
    'pct.trust': 'Descarga gratuita · Sin cuenta · Funciona con cualquier número',
    'pct.what.title': '¿Qué es un traductor de llamadas?',
    'pct.what.p1': 'Un traductor de llamadas es un software que escucha una llamada en vivo y traduce la voz de cada hablante al idioma del otro en tiempo real.',
    'pct.what.p2': 'AI Call es una app de traducción de llamadas para iOS y Android. Tus palabras se traducen al instante y llegan a la otra persona como voz natural.',
    'pct.what.p3': 'La persona a quien llamas no necesita ninguna app. Solo descuelga el teléfono y escucha una voz traducida normal.',
    'pct.how.title': 'Cómo funciona la traducción en tiempo real',
    'pct.how.sub': 'Tres pasos. La otra persona solo necesita contestar.',
    'pct.how.step1.title': 'Abre AI Call y marca',
    'pct.how.step1.desc': 'Selecciona el idioma de la otra persona y marca el número. Sin configuración previa.',
    'pct.how.step2.title': 'Habla en tu idioma',
    'pct.how.step2.desc': 'Habla con naturalidad. La IA traduce y entrega la voz al instante.',
    'pct.how.step3.title': 'Escucha su respuesta en tu idioma',
    'pct.how.step3.desc': 'Cuando responden, su discurso se traduce a tu idioma al instante.',
    'pct.uc.title': 'Cuándo necesitas un traductor de llamadas',
    'pct.uc1.title': 'Viajes internacionales',
    'pct.uc1.desc': 'Reserva hoteles, restaurantes y gestiona trámites en el extranjero en tu idioma.',
    'pct.uc2.title': 'Negocios y proveedores',
    'pct.uc2.desc': 'Llama a socios y fabricantes extranjeros directamente, sin intérprete.',
    'pct.uc3.title': 'Familia y relaciones',
    'pct.uc3.desc': 'Mantén el contacto con familiares de otro idioma por teléfono de verdad.',
    'pct.uc4.title': 'Salud y servicios',
    'pct.uc4.desc': 'Comunícate claramente con proveedores de salud y oficinas gubernamentales.',
    'pct.uc5.title': 'Atención al cliente',
    'pct.uc5.desc': 'Llama a servicios internacionales aunque solo atiendan en su idioma local.',
    'pct.uc6.title': 'Aprendizaje de idiomas',
    'pct.uc6.desc': 'Practica conversaciones reales con hablantes nativos y sigue la transcripción en vivo.',
    'pct.compare.title': 'AI Call vs otros métodos de traducción',
    'pct.compare.sub': 'Por qué una app dedicada marca la diferencia.',
    'pct.faq.title': 'Preguntas frecuentes',
    'pct.cta.title': 'Prueba el traductor de llamadas gratis',
    'pct.cta.sub': 'Descarga AI Call y haz tu primera llamada traducida en minutos.',
  },

  fr: {
    'meta.title': 'AI Call — Le Meilleur Traducteur d\'Appels Téléphoniques en Temps Réel',
    'meta.description': 'AI Call est une app gratuite de traduction d\'appels en temps réel dans plus de 100 langues. Sans inscription. iOS et Android.',
    'meta.pct.title': 'Traducteur d\'Appels — Traduction IA en Temps Réel | AI Call',
    'meta.pct.description': 'AI Call est la meilleure app gratuite de traduction d\'appels téléphoniques. Traduit les deux côtés en temps réel dans plus de 100 langues. Téléchargement gratuit iOS et Android.',

    'nav.features': 'Fonctionnalités',
    'nav.how': 'Comment ça marche',
    'nav.languages': 'Langues',
    'nav.blog': 'Blog',
    'nav.download': 'Télécharger',

    'hero.badge': 'Plus de 100 langues · Traduction en temps réel',
    'hero.headline': 'Appelez n\'importe qui,\ndans n\'importe quelle langue',
    'hero.subline': 'AI Call est le traducteur d\'appels en temps réel qui fonctionne dans les deux sens. Vous parlez votre langue, ils entendent la leur. Plus de 100 langues, sans interprète.',
    'hero.dl.ios': 'App Store',
    'hero.dl.android': 'Google Play',
    'hero.trust': 'Téléchargement gratuit · Sans inscription pour essayer',

    'stats.languages': 'Plus de 100 langues',
    'stats.downloads': 'Plus de 50 000 téléchargements',
    'stats.rating': 'App Store 5.0★',

    'how.eyebrow': 'Comment ça marche',
    'how.title': 'Trois étapes. Comme un appel normal.',
    'how.sub': 'Sans configuration. Fonctionne avec n\'importe quel numéro.',
    'how.step1.title': 'Ouvrez AI Call et composez',
    'how.step1.desc': 'Sélectionnez la langue de l\'autre personne et composez son numéro — comme un appel normal.',
    'how.step2.title': 'Parlez dans votre langue',
    'how.step2.desc': 'AI Call traduit instantanément et l\'autre personne entend dans sa langue.',
    'how.step3.title': 'Traduction bidirectionnelle',
    'how.step3.desc': 'Sa réponse est aussi traduite en temps réel pour vous.',

    'cta.eyebrow': 'Gratuit · Sans inscription',
    'cta.title': 'Commencez à appeler sans frontières',
    'cta.sub': 'Téléchargez AI Call gratuitement. Compatible iOS et Android.',

    'pct.eyebrow': 'Gratuit · iOS & Android · 100+ langues',
    'pct.title': 'Traducteur d\'Appels',
    'pct.sub': 'Le traducteur d\'appels IA en temps réel pour appeler n\'importe qui dans n\'importe quelle langue. Vous parlez le vôtre, ils entendent le leur.',
    'pct.trust': 'Téléchargement gratuit · Sans compte · Fonctionne avec tout numéro',
    'pct.what.title': 'Qu\'est-ce qu\'un traducteur d\'appels ?',
    'pct.what.p1': 'Un traducteur d\'appels est un logiciel qui écoute un appel en direct et traduit la voix de chaque interlocuteur en temps réel.',
    'pct.what.p2': 'AI Call est une app de traduction d\'appels pour iOS et Android. Vos mots sont traduits instantanément et transmis en voix naturelle.',
    'pct.what.p3': 'La personne appelée n\'a besoin d\'aucune app. Elle décroche normalement et entend une voix traduite.',
    'pct.how.title': 'Comment fonctionne la traduction en temps réel',
    'pct.how.sub': 'Trois étapes. L\'autre personne décroche normalement.',
    'pct.how.step1.title': 'Ouvrez AI Call et composez',
    'pct.how.step1.desc': 'Sélectionnez la langue et composez le numéro. Aucune configuration de l\'autre côté.',
    'pct.how.step2.title': 'Parlez dans votre langue',
    'pct.how.step2.desc': 'Parlez naturellement. L\'IA traduit et livre instantanément.',
    'pct.how.step3.title': 'Entendez la réponse dans votre langue',
    'pct.how.step3.desc': 'Quand l\'autre parle, ses mots sont instantanément traduits dans votre langue.',
    'pct.uc.title': 'Quand vous avez besoin d\'un traducteur d\'appels',
    'pct.uc1.title': 'Voyage international',
    'pct.uc1.desc': 'Réservez hôtels et restaurants à l\'étranger en français.',
    'pct.uc2.title': 'Business et fournisseurs',
    'pct.uc2.desc': 'Appelez vos partenaires étrangers directement, sans interprète.',
    'pct.uc3.title': 'Famille et relations',
    'pct.uc3.desc': 'Restez en contact avec des proches qui parlent une autre langue.',
    'pct.uc4.title': 'Santé et services',
    'pct.uc4.desc': 'Communiquez clairement avec les soignants et administrations.',
    'pct.uc5.title': 'Service client',
    'pct.uc5.desc': 'Appelez des services internationaux même en langue étrangère.',
    'pct.uc6.title': 'Apprentissage des langues',
    'pct.uc6.desc': 'Pratiquez avec des locuteurs natifs, suivez la transcription en direct.',
    'pct.compare.title': 'AI Call vs autres approches de traduction',
    'pct.compare.sub': 'Pourquoi une app dédiée fait la différence.',
    'pct.faq.title': 'Questions fréquentes',
    'pct.cta.title': 'Essayez le traducteur d\'appels gratuitement',
    'pct.cta.sub': 'Téléchargez AI Call et faites votre premier appel traduit en quelques minutes.',
  },

  de: {
    'meta.title': 'AI Call — Der weltbeste Echtzeit-Telefon-Übersetzer',
    'meta.description': 'AI Call ist eine kostenlose App für Echtzeit-Telefonübersetzung in über 100 Sprachen. Kein Konto nötig. iOS und Android.',
    'meta.pct.title': 'Telefonübersetzer — KI-Echtzeit-Übersetzung für jeden Anruf | AI Call',
    'meta.pct.description': 'AI Call ist die beste kostenlose App für Telefonübersetzung. Übersetzt beide Seiten in Echtzeit in über 100 Sprachen. Kostenlos für iOS und Android.',

    'nav.features': 'Funktionen',
    'nav.how': 'So funktioniert es',
    'nav.languages': 'Sprachen',
    'nav.blog': 'Blog',
    'nav.download': 'Herunterladen',

    'hero.badge': 'Über 100 Sprachen · Echtzeit-Übersetzung',
    'hero.headline': 'Rufen Sie jeden an,\nin jeder Sprache',
    'hero.subline': 'AI Call ist der Echtzeit-Telefonübersetzer für beide Richtungen. Sie sprechen Ihre Sprache, die andere Person hört ihre. Über 100 Sprachen, kein Dolmetscher nötig.',
    'hero.dl.ios': 'App Store',
    'hero.dl.android': 'Google Play',
    'hero.trust': 'Kostenloser Download · Kein Konto zum Testen nötig',

    'stats.languages': 'Über 100 Sprachen',
    'stats.downloads': 'Über 50.000 Downloads',
    'stats.rating': 'App Store 5.0★',

    'how.eyebrow': 'So funktioniert es',
    'how.title': 'Drei Schritte. Wie ein normaler Anruf.',
    'how.sub': 'Keine Einrichtung. Funktioniert mit jeder Telefonnummer.',
    'how.step1.title': 'AI Call öffnen und wählen',
    'how.step1.desc': 'Wählen Sie die Sprache der anderen Person und wählen Sie deren Nummer — wie ein normaler Anruf.',
    'how.step2.title': 'In Ihrer Sprache sprechen',
    'how.step2.desc': 'AI Call übersetzt sofort und die andere Person hört in ihrer Sprache.',
    'how.step3.title': 'Bidirektionale Übersetzung',
    'how.step3.desc': 'Die Antwort wird auch in Echtzeit für Sie übersetzt.',

    'cta.eyebrow': 'Kostenlos · Kein Konto nötig',
    'cta.title': 'Sprachbarrieren überwinden',
    'cta.sub': 'Laden Sie AI Call kostenlos herunter. Für iOS und Android.',

    'pct.eyebrow': 'Kostenlos · iOS & Android · 100+ Sprachen',
    'pct.title': 'Telefonübersetzer',
    'pct.sub': 'Der KI-gestützte Echtzeit-Telefonübersetzer, mit dem Sie jeden in jeder Sprache anrufen können. Sie sprechen Ihre Sprache, die andere Person hört ihre.',
    'pct.trust': 'Kostenloser Download · Kein Konto · Funktioniert mit jeder Nummer',
    'pct.what.title': 'Was ist ein Telefonübersetzer?',
    'pct.what.p1': 'Ein Telefonübersetzer ist Software, die ein Live-Gespräch abhört und die Stimme jedes Sprechers in Echtzeit in die Sprache des anderen übersetzt.',
    'pct.what.p2': 'AI Call ist eine Telefonübersetzer-App für iOS und Android. Ihre Worte werden sofort übersetzt und als natürliche Stimme übermittelt.',
    'pct.what.p3': 'Die angerufene Person braucht keine App. Sie nehmen einfach ab und hören eine übersetzte Stimme.',
    'pct.how.title': 'Wie Echtzeit-Anrufübersetzung funktioniert',
    'pct.how.sub': 'Drei Schritte. Die andere Person nimmt ganz normal ab.',
    'pct.how.step1.title': 'AI Call öffnen und wählen',
    'pct.how.step1.desc': 'Sprache auswählen und Nummer wählen. Keine Einrichtung auf der anderen Seite.',
    'pct.how.step2.title': 'In Ihrer Sprache sprechen',
    'pct.how.step2.desc': 'Natürlich sprechen. KI übersetzt und übermittelt sofort.',
    'pct.how.step3.title': 'Antwort in Ihrer Sprache hören',
    'pct.how.step3.desc': 'Wenn die andere Person spricht, wird es sofort in Ihre Sprache übersetzt.',
    'pct.uc.title': 'Wann Sie einen Telefonübersetzer brauchen',
    'pct.uc1.title': 'Auslandsreisen',
    'pct.uc1.desc': 'Hotels und Restaurants im Ausland auf Deutsch buchen.',
    'pct.uc2.title': 'Business & Lieferanten',
    'pct.uc2.desc': 'Ausländische Partner direkt anrufen — ohne Dolmetscher.',
    'pct.uc3.title': 'Familie & Beziehungen',
    'pct.uc3.desc': 'Mit anderssprachigen Angehörigen per echtem Telefonat in Kontakt bleiben.',
    'pct.uc4.title': 'Gesundheit & Behörden',
    'pct.uc4.desc': 'Klar mit Ärzten und Behörden über Sprachgrenzen hinweg kommunizieren.',
    'pct.uc5.title': 'Kundendienst',
    'pct.uc5.desc': 'Internationale Kundendienstleitungen anrufen, auch wenn nur Lokalsprache.',
    'pct.uc6.title': 'Sprachlernen',
    'pct.uc6.desc': 'Mit Muttersprachlern üben und Live-Transkripte verfolgen.',
    'pct.compare.title': 'AI Call vs andere Übersetzungsansätze',
    'pct.compare.sub': 'Warum eine dedizierte App den Unterschied macht.',
    'pct.faq.title': 'Häufig gestellte Fragen',
    'pct.cta.title': 'Telefonübersetzer kostenlos testen',
    'pct.cta.sub': 'Laden Sie AI Call herunter und führen Sie Ihren ersten übersetzten Anruf in Minuten.',
  },

  pt: {
    'meta.title': 'AI Call — O Melhor Tradutor de Chamadas Telefônicas em Tempo Real',
    'meta.description': 'AI Call é um app gratuito de tradução de chamadas em tempo real em mais de 100 idiomas. Sem cadastro. iOS e Android.',
    'meta.pct.title': 'Tradutor de Chamadas — Tradução IA em Tempo Real | AI Call',
    'meta.pct.description': 'AI Call é o melhor app gratuito para traduzir chamadas. Traduz ambos os lados em tempo real em mais de 100 idiomas. Download gratuito para iOS e Android.',

    'nav.features': 'Recursos',
    'nav.how': 'Como funciona',
    'nav.languages': 'Idiomas',
    'nav.blog': 'Blog',
    'nav.download': 'Baixar',

    'hero.badge': 'Mais de 100 idiomas · Tradução em tempo real',
    'hero.headline': 'Ligue para qualquer pessoa,\nem qualquer idioma',
    'hero.subline': 'AI Call é o tradutor de chamadas em tempo real que funciona nos dois sentidos. Você fala no seu idioma, a outra pessoa ouve no dela. Mais de 100 idiomas, sem intérprete.',
    'hero.dl.ios': 'App Store',
    'hero.dl.android': 'Google Play',
    'hero.trust': 'Download gratuito · Sem cadastro para experimentar',

    'stats.languages': 'Mais de 100 idiomas',
    'stats.downloads': 'Mais de 50.000 downloads',
    'stats.rating': 'App Store 5.0★',

    'how.eyebrow': 'Como funciona',
    'how.title': 'Três etapas. Como uma ligação normal.',
    'how.sub': 'Sem configuração. Funciona com qualquer número.',
    'how.step1.title': 'Abra AI Call e disque',
    'how.step1.desc': 'Selecione o idioma da outra pessoa e disque o número — igual a uma ligação normal.',
    'how.step2.title': 'Fale no seu idioma',
    'how.step2.desc': 'AI Call traduz instantaneamente e a outra pessoa ouve no idioma dela.',
    'how.step3.title': 'Tradução bidirecional',
    'how.step3.desc': 'A resposta também é traduzida em tempo real para você.',

    'cta.eyebrow': 'Grátis · Sem cadastro',
    'cta.title': 'Comece a ligar sem barreiras',
    'cta.sub': 'Baixe AI Call gratuitamente. Disponível para iOS e Android.',

    'pct.eyebrow': 'Grátis · iOS & Android · 100+ idiomas',
    'pct.title': 'Tradutor de Chamadas',
    'pct.sub': 'O tradutor de chamadas com IA em tempo real que permite ligar para qualquer pessoa em qualquer idioma. Você fala no seu, eles ouvem no deles.',
    'pct.trust': 'Download gratuito · Sem conta · Funciona com qualquer número',
    'pct.what.title': 'O que é um tradutor de chamadas?',
    'pct.what.p1': 'Um tradutor de chamadas é um software que escuta uma ligação ao vivo e traduz a voz de cada falante em tempo real.',
    'pct.what.p2': 'AI Call é um app de tradução de chamadas para iOS e Android. Suas palavras são traduzidas instantaneamente e entregues como voz natural.',
    'pct.what.p3': 'A pessoa que você liga não precisa de nenhum app. Ela atende normalmente e ouve uma voz traduzida.',
    'pct.how.title': 'Como funciona a tradução de chamadas em tempo real',
    'pct.how.sub': 'Três etapas. A outra pessoa só precisa atender.',
    'pct.how.step1.title': 'Abra AI Call e disque',
    'pct.how.step1.desc': 'Selecione o idioma e disque o número. Sem configuração do outro lado.',
    'pct.how.step2.title': 'Fale no seu idioma',
    'pct.how.step2.desc': 'Fale naturalmente. A IA traduz e entrega instantaneamente.',
    'pct.how.step3.title': 'Ouça a resposta no seu idioma',
    'pct.how.step3.desc': 'Quando a outra pessoa fala, é traduzido instantaneamente para o seu idioma.',
    'pct.uc.title': 'Quando você precisa de um tradutor de chamadas',
    'pct.uc1.title': 'Viagens internacionais',
    'pct.uc1.desc': 'Reserve hotéis e restaurantes no exterior em português.',
    'pct.uc2.title': 'Negócios e fornecedores',
    'pct.uc2.desc': 'Ligue para parceiros estrangeiros diretamente, sem intérprete.',
    'pct.uc3.title': 'Família e relacionamentos',
    'pct.uc3.desc': 'Mantenha contato com parentes que falam outro idioma por telefone de verdade.',
    'pct.uc4.title': 'Saúde e serviços',
    'pct.uc4.desc': 'Comunique-se claramente com profissionais de saúde e órgãos públicos.',
    'pct.uc5.title': 'Atendimento ao cliente',
    'pct.uc5.desc': 'Ligue para serviços internacionais mesmo que só atendam no idioma local.',
    'pct.uc6.title': 'Aprendizado de idiomas',
    'pct.uc6.desc': 'Pratique conversas reais com falantes nativos com transcrição ao vivo.',
    'pct.compare.title': 'AI Call vs outras abordagens de tradução',
    'pct.compare.sub': 'Por que um app dedicado faz a diferença.',
    'pct.faq.title': 'Perguntas frequentes',
    'pct.cta.title': 'Experimente o tradutor de chamadas grátis',
    'pct.cta.sub': 'Baixe AI Call e faça sua primeira chamada traduzida em minutos.',
  },
};

export function useTranslations(locale: Locale) {
  return function t(key: keyof UIStrings): string {
    return ui[locale][key] ?? ui['en'][key];
  };
}
