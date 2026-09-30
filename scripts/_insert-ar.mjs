import { readFileSync, writeFileSync } from 'node:fs'

const p = 'src/product/content.ts'
let s = readFileSync(p, 'utf8')

const block = `  ar: {
    kicker: 'تطوير منتجات SUP',
    title: 'من المواصفة إلى الدفعة — تطوير المنتج داخل مصنعنا',
    sub: 'من استلام المتطلبات إلى المنتج النهائي — كل خطوة داخل مصنعنا.',
    steps: [
      {
        title: 'استلام المتطلبات',
        body: 'نجمع مواصفتك وسوقك المستهدف ومتطلبات الامتثال وتوقّعات الحجم. وتُوقَّع اتفاقية السرية قبل تبادل أي ملف.',
      },
      {
        title: 'المراجعة الهندسية',
        body: 'يُقيَّم نوع اللوح والأبعاد وبنية الطبقات والخامات والقطع المعدنية من حيث قابلية التصنيع. وتتسلّم تقريرًا مكتوبًا يوضّح محركات التكلفة.',
      },
      {
        title: 'المتابعة الطباعية للرسومات',
        body: 'تُحوَّل ملفات علامتك إلى بيانات طباعة جاهزة للإنتاج. وتُطابَق الألوان ويُعتمد دليلها التجريبي قبل الطباعة.',
      },
      {
        title: 'النموذج الأولي',
        body: 'نموذج أولي فعلي ي确认 الشكل والصلابة والوزن والتشطيب. يُشحن خلال 7–12 يومًا.',
      },
      {
        title: 'الموافقة على العيّنة',
        body: 'تعتمد العيّنة الفعلية بنفسك. ولا يدخل شيء الإنتاج قبل اعتماد العيّنة المرجعية وحفظها كمرجع للدفعة.',
      },
      {
        title: 'إنتاج الدفعة',
        body: 'يُصنَّع في مصنعنا وفق عملية ضبط الجودة أعلاه، مع تتبّع للدفعة وصولًا إلى مستوى دفعة الخامة.',
      },
      {
        title: 'تسليم جاهز للتصدير',
        body: 'يُفرَّغ بالهواء، ويُحزم بالكرتون، وتُستكمل مستنداته، ويُسلَّم جاهزًا للتصدير.',
      },
    ],
    note: 'العيّنة المعتمدة هي العقد. وكل لوح في الدفعة يُقاس عليها.',
  },
`

const AR_LETTER = '[\\u0621-\\u063A\\u0641-\\u064A\\u066E-\\u066F\\u0671-\\u06D3\\u06D5\\u06FA-\\u06FF]'
for (const [re, label] of [
  [/[\u1100-\u11ff\u3130-\u318f\uac00-\ud7a3]/, 'Hangul'],
  [/\uFFFD/, 'U+FFFD'],
  [/\u4e00-\u9fff/, 'CJK'],
  // Any Latin letter inside an Arabic letter's word, i.e. a leaked fragment.
  [new RegExp('[A-Za-z]{2,}[\\u0600-\\u06FF]'), 'glued Latin'],
]) {
  const m = block.match(re)
  if (m) throw new Error(`${label} -> ${JSON.stringify(m[0])} @ ${JSON.stringify(block.slice(Math.max(0, m.index - 20), m.index + 20))}`)
}

const start = s.search(/^export const works:/m)
if (start < 0) throw new Error('works not found')
const es = s.indexOf('\n  es: {', start)
if (s.slice(start, es).includes('\n  ar: {')) throw new Error('works already has ar')
s = s.slice(0, es + 1) + block + s.slice(es + 1)
writeFileSync(p, s, 'utf8')
console.log('works: inserted, pre-flight clean')
