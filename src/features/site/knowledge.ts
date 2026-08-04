import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

/**
 * Knowledge Center (/knowledge/*). Informational articles answer the
 * question-style queries around SUP product development and manufacturing —
 * the queries buyers research before ever reaching out.
 */

export interface KnowledgeArticle {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string
  sections: { title: string; body: string[] }[]
}

export const knowledge: Localized<KnowledgeArticle[]> = {
  en: [
    {
      slug: 'how-custom-sup-boards-are-developed',
      navLabel: 'How Custom SUP Boards Are Developed',
      metaTitle: 'How Custom SUP Boards Are Developed: From Idea to Production',
      metaDescription:
        'How a custom SUP product moves from idea to factory: requirement definition, specification, design, prototyping, sampling and production — explained step by step.',
      kicker: 'Knowledge',
      h1: 'How Custom SUP Boards Are Developed',
      intro:
        'Before a custom paddle board ships to your customers, it travels a defined development path. Knowing each stage helps you brief the factory correctly, set realistic timelines, and avoid the classic mistakes first-time buyers make.',
      sections: [
        {
          title: 'Step 1: Define the Requirement',
          body: [
            'Every development project starts with the use case: who rides the board, where, and how often. A rental fleet board differs from a brand launch board or a school board — stability, durability and cost targets all shift with the answer.',
            'Write down quantity, target price, and must-have features before contacting a factory. Clear requirements produce better first quotes and shorter back-and-forth.',
          ],
        },
        {
          title: 'Step 2: Fix the Specification',
          body: [
            'The specification turns the requirement into measurable values: length, width, thickness, volume, materials (drop-stitch density, fabric weight), fin setup, weight limit, and packaging.',
            'This is the document that both sides quote against. Changes later in the process are slower and more expensive — a frozen spec is the cheapest thing you can control.',
          ],
        },
        {
          title: 'Step 3: Design and Graphics',
          body: [
            'With the spec fixed, design work begins: shape adjustments, color schemes, logo placement, deck pad graphics, and accessory matching (leash, paddle, fin, bag).',
            'Manufacturers can produce digital mockups so you approve the look before any physical sample is made — cheaper and faster than iterating on hardware.',
          ],
        },
        {
          title: 'Step 4: Prototype and Sample',
          body: [
            'The sample is the first physical proof. For inflatable boards this means a hand-built or pilot-run board that you can ride and test against the specification.',
            'Test the sample as your end user will: stability, stiffness, tracking, weight, and how the graphics hold up. One thorough sample round typically catches most issues before production.',
          ],
        },
        {
          title: 'Step 5: Production and Delivery',
          body: [
            'After sample approval, production runs in batches with QC checkpoints. Factory inspection before shipment — photos, videos or third-party inspection — protects the batch you receive.',
            'Plan delivery: sea freight for volume, air for small urgent runs. A good project schedule works backward from your launch date, not forward from the order.',
          ],
        },
      ],
    },
    {
      slug: 'inflatable-sup-construction-explained',
      navLabel: 'Inflatable SUP Construction Explained',
      metaTitle: 'Inflatable SUP Construction Explained: Materials, Layers, Quality',
      metaDescription:
        'What an inflatable SUP is made of — PVC layers, drop-stitch fabric, rails, and quality indicators. Understand construction to specify better boards for your project.',
      kicker: 'Knowledge',
      h1: 'Inflatable SUP Construction Explained',
      intro:
        'Most custom SUP projects today are inflatable boards. They are lighter, easier to store and ship, and more forgiving for beginners. This guide explains the construction so you can specify quality with confidence.',
      sections: [
        {
          title: 'The Core: Drop-Stitch Fabric',
          body: [
            'An inflatable board is built around drop-stitch fabric: thousands of polyester threads connecting the top and bottom PVC layers. When inflated, those threads keep the board at a fixed thickness — this is what gives an iSUP its shape and rigidity.',
            'Higher thread density (stitches per square inch) means a firmer, more stable board at the same pressure. Budget boards use lower densities; premium boards use higher ones.',
          ],
        },
        {
          title: 'PVC Layers and Rails',
          body: [
            'The fabric is sandwiched between PVC layers, which protect it from abrasion, UV and impacts. Heavier PVC (more mils or mm) resists punctures better but adds weight.',
            'The rails — the edges of the board — absorb the most impact in everyday use. Double- or triple-layer rail construction is a strong indicator of durability and rental suitability.',
          ],
        },
        {
          title: 'What Adds Weight vs. What Adds Strength',
          body: [
            'Weight is a trade-off: thicker PVC adds durability and weight; lighter layups suit riders who carry their boards far. This is one of the clearest ways a custom spec is tuned to the buyer\u2019s reality.',
            'Quality indicators to ask for: inflation pressure rating, seam construction, valve type, and the drop-stitch density. Reputable factories publish these numbers.',
          ],
        },
      ],
    },
    {
      slug: 'how-organizations-choose-sup-equipment',
      navLabel: 'How Organizations Choose SUP Equipment',
      metaTitle: 'How Resorts, Clubs and Schools Choose SUP Equipment',
      metaDescription:
        'A practical framework for choosing SUP equipment for resorts, clubs and schools: fleet sizing, board types, durability, storage, and budgeting for a program that lasts.',
      kicker: 'Knowledge',
      h1: 'How Organizations Choose SUP Equipment',
      intro:
        'Resorts, clubs and schools buy differently from consumer brands: equipment must survive daily use, serve mixed skill levels, and fit a program budget. This framework covers the decisions that matter.',
      sections: [
        {
          title: 'Size the Fleet Around Usage',
          body: [
            'Count how many riders will be on the water simultaneously, not how many guests you have. A resort renting in rotation needs fewer boards than a school running simultaneous classes — and more spares.',
            'A good rule of thumb: one board per simultaneous rider, plus 10–15% spare capacity for maintenance and growth.',
          ],
        },
        {
          title: 'Match Board Types to Skill Levels',
          body: [
            'Beginners benefit from wider, more voluminous boards that feel stable; experienced riders prefer narrower boards that paddle faster. A mixed fleet — mostly beginner-friendly with a few performance boards — serves most programs.',
            'Multi-person boards earn their place in schools and group experiences: they let instructors teach and can replace several single boards in class rotations.',
          ],
        },
        {
          title: 'Durability Is a Budget Decision',
          body: [
            'Rental-grade construction costs more upfront and saves money over two to three seasons. Ask about rail reinforcement, PVC thickness, and what warranty the factory provides on fleet orders.',
            'Also plan storage and inflation: compressors, racks, and packing routines set how much daily work the program is. Fleet-friendly suppliers include these in the package.',
          ],
        },
        {
          title: 'Plan the Program, Not Just the Order',
          body: [
            'The best equipment orders are part of a program plan: instructor training, maintenance routines, and a replacement cycle for worn boards. Organizations that plan the program renew equipment on schedule; those that don\u2019t buy emergency replacements at full price.',
          ],
        },
      ],
    },
  ],
  zh: [
    {
      slug: 'how-custom-sup-boards-are-developed',
      navLabel: '定制 SUP 板如何开发',
      metaTitle: '定制 SUP 板如何开发:从想法到量产',
      metaDescription:
        '定制 SUP 产品如何从想法走向工厂:需求定义、规格、设计、打样、样品确认与量产——逐步拆解。',
      kicker: '知识中心',
      h1: '定制 SUP 板如何开发',
      intro:
        '在定制桨板送达你的客户之前,它要经历一条明确的开发路径。了解每个阶段,你就能正确地向工厂传达需求、设定合理时间表,并避开初次采购的常见误区。',
      sections: [
        {
          title: '第一步:定义需求',
          body: [
            '每个开发项目都从使用场景开始:谁在使用板,在哪里用,频率如何。租赁舰队、品牌首发板与学校用板的要求不同——稳定性、耐用性与成本目标都会随之变化。',
            '联系工厂之前,先写清楚数量、目标价格与必备功能。清晰的需求能换来更好的首轮报价与更短的沟通周期。',
          ],
        },
        {
          title: '第二步:锁定规格',
          body: [
            '规格把需求变成可测量的数值:长度、宽度、厚度、体积、材料(织布密度、面料克重)、尾鳍设置、承重与包装。',
            '双方都依据这份文档报价。越晚变更规格,越慢越贵——冻结规格是你最省钱的杠杆。',
          ],
        },
        {
          title: '第三步:设计与图案',
          body: [
            '规格确定后进入设计:板型调整、配色、Logo 位置、甲板垫图案与配件搭配(脚绳、桨、尾鳍、背包)。',
            '工厂可以提供数字效果图,让你在制作实物样品之前就确认外观——比在硬件上反复迭代更便宜、更快。',
          ],
        },
        {
          title: '第四步:打样与样品',
          body: [
            '样品是第一件实物证据。充气板的样品通常是手工或小批量试制,你可以实际下水测试并对照规格验证。',
            '像最终用户那样测试样品:稳定性、硬度、直线滑行、重量与图案耐久性。充分的一轮样品确认通常能在量产前发现大部分问题。',
          ],
        },
        {
          title: '第五步:量产与交付',
          body: [
            '样品确认后,按批次生产并设置质检节点。发货前的工厂检验——照片、视频或第三方验货——保障你收到的整批质量。',
            '规划物流:大货走海运,小批紧急订单走空运。好的项目计划表从你的上市日期倒推,而不是从下单日期顺推。',
          ],
        },
      ],
    },
    {
      slug: 'inflatable-sup-construction-explained',
      navLabel: '充气 SUP 结构解析',
      metaTitle: '充气 SUP 结构解析:材料、层数与品质',
      metaDescription:
        '充气 SUP 由什么构成——PVC 层、织布结构、板边与品质指标。了解结构,为你的项目指定更合理的板。',
      kicker: '知识中心',
      h1: '充气 SUP 结构解析',
      intro:
        '如今多数定制 SUP 项目都是充气板。它们更轻、更易储存与运输,对新手也更友好。本文解析其结构,让你能自信地指定品质。',
      sections: [
        {
          title: '核心:织布结构',
          body: [
            '充气板围绕织布结构建造:数以千计的涤纶丝连接上下两层 PVC。充气时,这些丝线将板保持在固定厚度——这就是 iSUP 获得板型与刚性的原因。',
            '丝线密度(每平方英寸针数)越高,相同气压下板身越硬越稳。入门板密度较低,高端板密度更高。',
          ],
        },
        {
          title: 'PVC 层与板边',
          body: [
            '织布被夹在 PVC 层之间,保护它免受磨损、紫外线与撞击。更厚的 PVC 抗刺穿能力更强,但会增加重量。',
            '板边是日常使用中承受撞击最多的部位。双层或三层板边结构是耐用性与租赁适用性的强信号。',
          ],
        },
        {
          title: '什么增加重量,什么增加强度',
          body: [
            '重量是权衡:更厚的 PVC 增加耐用性也增加重量;轻量化组合适合需要长距离背负的用户。这正是定制规格贴合买家现实的最好体现。',
            '值得追问的品质指标:额定气压、接缝工艺、气阀类型与织布密度。可靠的工厂会公开这些数据。',
          ],
        },
      ],
    },
    {
      slug: 'how-organizations-choose-sup-equipment',
      navLabel: '机构如何选择 SUP 装备',
      metaTitle: '度假村、俱乐部与学校如何选择 SUP 装备',
      metaDescription:
        '为度假村、俱乐部与学校挑选 SUP 装备的实用框架:舰队规模、板型搭配、耐用性、储存与预算,让项目长期运转。',
      kicker: '知识中心',
      h1: '度假村、俱乐部与学校如何选择 SUP 装备',
      intro:
        '度假村、俱乐部与学校的采购逻辑不同于消费品牌:装备必须经受日常高频使用、服务不同水平的用户,并适配项目预算。本框架覆盖关键决策点。',
      sections: [
        {
          title: '按使用量规划舰队规模',
          body: [
            '统计的是同时下水的人数,而不是总客量。轮换出租的度假村需要的板少于同时开课的学校——还要预留备板。',
            '经验法则:每位同时使用者一块板,另加 10–15% 的备用量用于维护与增长。',
          ],
        },
        {
          title: '按水平搭配板型',
          body: [
            '初学者适合更宽、体积更大、感觉更稳的板;有经验者偏好更窄、滑行更快的板。多数项目适合混搭:以新手友好为主,配少量性能板。',
            '多人板在课堂与团体体验中价值很高:便于教学,还能在轮换中替代多块单人板。',
          ],
        },
        {
          title: '耐用性是预算决策',
          body: [
            '租赁级构造前期投入更高,但两到三季下来更省钱。询单时问清楚板边加强、PVC 厚度与工厂对舰队订单的质保。',
            '同时规划储存与充气:压缩机、货架与收纳流程决定了项目的日常工作量。舰队供应商通常把这类配套纳入方案。',
          ],
        },
        {
          title: '规划项目,而不只是一张订单',
          body: [
            '最好的装备订单是项目计划的一部分:教练培训、维护流程与旧板更新周期。规划了项目的机构会按计划更新装备;没规划的机构往往以全价紧急补货。',
          ],
        },
      ],
    },
  ],
}

export function getArticle(locale: Locale, slug: string): KnowledgeArticle | undefined {
  return knowledge[locale].find((a) => a.slug === slug)
}

export interface KnowledgeMeta {
  metaTitle: string
  metaDescription: string
  h1: string
}

export const knowledgeMeta: Localized<KnowledgeMeta> = {
  en: {
    metaTitle: 'Knowledge Center: SUP Product Development Guides | SUPsfactory',
    metaDescription:
      'Practical guides on custom SUP product development, inflatable board construction, and choosing SUP equipment for resorts, clubs and schools.',
    h1: 'Knowledge Center — Product Development, Explained',
  },
  zh: {
    metaTitle: '知识中心:SUP 产品开发指南 | SUPsfactory',
    metaDescription:
      '关于定制 SUP 产品开发、充气板结构与度假村、俱乐部、学校装备选型的实用指南。',
    h1: '知识中心——产品开发,讲清楚',
  },
}
