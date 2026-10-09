import type { SiteCopy } from "./types";

export const en: SiteCopy = {
  meta: {
    title: "Leaftech · Notibox v3 — live IoT monitoring, 3D digital twins & AI",
    description:
      "Notibox v3 by Leaftech turns Modbus, MQTT and SNMP devices into live 3D digital twins, SCADA dashboards and alerts by SMS, LINE, Telegram and e-mail — AI-native through MCP.",
  },
  nav: {
    notibox: "Notibox v3",
    twin: "Digital twin",
    ai: "AI",
    appboox: "AppBoox",
    contact: "Contact",
    demo: "Live demo",
    menu: "Open menu",
    close: "Close menu",
    language: "Language",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "Notibox v3 · AI-native monitoring & alerting",
    titleLead: "See every site, room and rack —",
    titleAccent: "live.",
    sub: "Notibox v3 connects your Modbus, MQTT and SNMP devices, turns them into live 3D digital twins and SCADA dashboards, and alerts the right people the moment something drifts. On site or hosted — and ready for your AI assistant.",
    ctaDemo: "Open live demo",
    ctaTalk: "Talk to us",
    frameLabel: "DC2 · Meridian One tower",
    live: "Live",
    caption:
      "The real Notibox v3 widget, running in your browser on simulated data. Drag to orbit — click a room to open the full demo.",
  },
  twinFrame: {
    load: "Run live 3D",
    loading: "Loading live model…",
    openFull: "Open full demo",
  },
  trust: [
    { value: "30+ years", label: "of SCADA engineering behind every box" },
    {
      value: "Modbus · MQTT · SNMP",
      label: "Industrial protocols out of the box",
    },
    {
      value: "6 alert channels",
      label: "SMS · LINE · Telegram · Pushover · Discord · e-mail",
    },
    {
      value: "MCP-ready",
      label: "Works with Claude, ChatGPT, Cursor and more",
    },
  ],
  notibox: {
    eyebrow: "Notibox v3",
    title: "From raw signals to the right action — in one box.",
    lead: "A fanless Debian mini-PC that clips onto the DIN rail in your cabinet, plus the platform that runs on it. It reads your devices, keeps the history, runs the logic and tells people what matters.",
    boxAlt:
      "Notibox edge box mounted on a DIN rail inside a control cabinet, with network and terminal cables connected",
    boxBadges: ["Fanless", "Debian", "DIN rail"],
    steps: [
      {
        title: "Connect",
        body: "Devices on Modbus RTU/TCP, MQTT and SNMP become points — a value, a status and rules.",
        chips: ["Modbus", "MQTT", "SNMP"],
      },
      {
        title: "Decide",
        body: "Flowbox turns readings into states you can read at a glance. No hidden code.",
        chips: ["Point", "Condition", "Update Status"],
      },
      {
        title: "Notify",
        body: "The right people hear about it on the channel they actually read — with escalation.",
        chips: ["SMS", "LINE", "Telegram", "e-mail"],
      },
      {
        title: "See",
        body: "Drill-down boards, 3D twins, history and reports — on the wall, the desk or the phone.",
        chips: ["IoTDash", "3D twins", "History"],
      },
    ],
    featuresTitle: "Everything a control room needs",
    features: {
      points: {
        title: "Everything is a point",
        body: "Every reading from every protocol becomes a point with a value, a status and rules — one model for widgets, flows, history and AI.",
      },
      alerts: {
        title: "Alerts that escalate",
        body: "SMS, LINE, Telegram, Pushover, Discord and e-mail, with escalation so the right people hear about it in the right order.",
      },
      flowbox: {
        title: "Flowbox — logic you can see",
        body: "Point → Condition → Update Status → Notify, drawn as a flow. Node-RED compatible custom nodes.",
      },
      iotdash: {
        title: "IoTDash drill-down",
        body: "SCADA boards on an infinite canvas: gauges, values, charts, AG Grid tables and live CCTV — site to building to room to rack.",
      },
      twins: {
        title: "3D digital twins",
        body: "Buildings, data halls and racks built from HTML/three.js widgets, bound to live points.",
      },
      history: {
        title: "Long-term history",
        body: "Recorded in TimescaleDB and shown as charts and tables on any board.",
      },
      access: {
        title: "Users, roles & revisions",
        body: "Permissions per role. Every board change is recorded — who, via UI, MCP or API — with a diff and one-click restore.",
      },
      share: {
        title: "Share it, run it anywhere",
        body: "Public share links with operator login. Run on the box on site, or as a hosted instance.",
      },
    },
  },
  twin: {
    eyebrow: "Digital twin gallery",
    title: "Not a mock-up. The real widgets, running live.",
    lead: "Each twin below is a Notibox v3 HTML widget exported from the DC2 demo and fed simulated points. On your boards, the same widget is bound to your live data.",
    explore: "Explore the full demo",
    simulated: "Simulated data",
    tablistLabel: "Choose a digital twin",
    boardLabel: "On a real Notibox board",
    boardHint: "Real screenshot · view full size",
    tabs: {
      tower: {
        label: "Building",
        title: "Meridian One · 20-storey tower",
        bullets: [
          "Every server floor and room tagged with live temperature, load and status",
          "Fire, security, maintenance and SLA panels around the model",
          "Click a room to drill down to its own board",
        ],
      },
      hall: {
        label: "Data hall",
        title: "Data Hall 2 · thermal view",
        bullets: [
          "Rack inlet temperatures as a heat map, with airflow from every CRAC",
          "Switch views: thermal, cooling, power, cabling, security, status",
          "Hottest racks and row averages, updated every second",
        ],
      },
      campus: {
        label: "Campus",
        title: "DC2 · Bangkok East campus",
        bullets: [
          "Utility feed, UPS, generator yard and cooling on one site model",
          "Power source and alarm summary at a glance",
          "Click a zone to open its board",
        ],
      },
      cctv: {
        label: "CCTV",
        title: "Camera view · reacts to alarms",
        bullets: [
          "Camera tiles sit on the same board as the data",
          "Motion, doors, smoke, leaks and power loss show up on camera",
          "Here the feed is rendered from the 3D hall — on site, it is your own cameras",
        ],
      },
      rack: {
        label: "Rack",
        title: "Rack B3 · GPU cluster",
        bullets: [
          "CPU, RAM, GPU, temperature and power for every server",
          "Rack power measured against its kW budget",
          "Five-minute sparklines fill in as data arrives",
        ],
      },
    },
  },
  operators: {
    eyebrow: "Built for operators",
    title: "Every board is one click from the next.",
    lead: "Real screenshots of Notibox v3 from the DC2 demo — from the campus down to a single server, with the alarms and test events that drive them.",
    realShot: "Real screenshot",
    enlarge: "View full size",
    close: "Close",
    shots: {
      hall: {
        title: "Picture boards with live tags",
        body: "Live values pinned onto a photo-real render of the hall: racks, CRACs, leak rings, cameras and electrical cabinets. Operators find the problem where it physically is.",
        alt: "Notibox board showing a rendered data hall with live temperature tags on every rack and CRAC unit",
      },
      ops: {
        title: "Operations & test events",
        body: "Run a scenario — utility failure, CRAC fault, water leak — and watch it travel through points, Flowbox, alarms, twins and cameras.",
        alt: "Notibox operations board with test event buttons, an active alarms list and trend charts",
      },
      rack: {
        title: "Rack drill-down",
        body: "Rack elevation, per-server usage, the rack camera and history on one board.",
        alt: "Notibox rack board with rack elevation, a per-server usage table, a camera view and charts",
      },
    },
  },
  aiNative: {
    eyebrow: "AI-native",
    title: "Your AI assistant can build the dashboards for you.",
    lead: "Every Notibox function is exposed through MCP, so Claude, ChatGPT, Cursor and other assistants work with your system the way you do — under the same permissions.",
    points: {
      build: {
        title: "Builds boards, points and flows",
        body: "Describe what you need. The AI lays out widgets, binds points and wires the Flowbox logic — every change saved as a revision.",
      },
      analyse: {
        title: "Analyses your history",
        body: "A read-only SQL tool lets the AI answer questions from recorded data without being able to change a thing.",
      },
      health: {
        title: "Watches system health",
        body: "A health watch prepares a session brief, so the AI starts every conversation knowing what is stale, failing or off.",
      },
      proof: {
        title: "The whole demo was built by AI",
        body: "Tower, halls, racks, CCTV and flows — the DC2 / Meridian One demo was built end to end by an AI through MCP.",
      },
    },
    clientsLabel: "Works with",
    anyClient: "any MCP client",
    imageAlt:
      "Glowing network sphere connected to floating panels showing a building, gauges, alarms and a flow diagram",
    session: {
      label: "MCP session",
      connected: "connected to Notibox",
      user: "Build a board for Data Hall 2: rack inlet temperatures, a heat map, and a LINE alert if any rack goes above 27 °C.",
      steps: [
        {
          tool: "ai_describe",
          text: "checked permissions and the session brief",
        },
        { tool: "points_query", text: "found 27 rack inlet points" },
        {
          tool: "ai_widget_catalog",
          text: "picked heat map, table and status widgets",
        },
        {
          tool: "widgets_batch",
          text: "placed 14 widgets on “DC2 · Data Hall 2”",
        },
        { tool: "flowbox", text: "Inlet > 27 °C → Update Status → LINE" },
        { tool: "ai_capture", text: "checked the board renders correctly" },
      ],
      reply:
        "Done — the board is live with 14 widgets and a LINE alert. It is saved as a revision, so you can diff or restore it at any time.",
      illustrative: "Illustrative session",
    },
  },
  industries: {
    eyebrow: "Where it runs",
    title: "Built for sites that can't afford to go dark.",
    lead: "Each of these has a working demo on the same platform — and so do campuses and multi-site portfolios.",
    liveDemo: "Live demo",
    demoBoards: "Demo boards",
    items: {
      datacenter: {
        title: "Data centres & DCIM",
        body: "UPS, CRAC, PDUs, racks and PUE — from the campus down to each server.",
      },
      building: {
        title: "Smart buildings",
        body: "Chillers, AHUs, power meters, fire and access panels in one view.",
      },
      coldstore: {
        title: "Cold storage",
        body: "Room temperatures, door-open time and compressors — alerts before stock is at risk.",
      },
      flood: {
        title: "Flood & water level",
        body: "Water-level sensors, pumps and gates across a district, escalated to field teams.",
      },
      factory: {
        title: "Factories",
        body: "Machines, energy and quality on the line — with AI Vision where cameras see more than sensors.",
      },
    },
  },
  aiApps: {
    eyebrow: "Applied AI",
    title: "Cameras that understand. Data you can talk to.",
    lead: "Two AI products we deploy alongside Notibox — on your cameras and on your data.",
    vision: {
      title: "AI Vision",
      body: "Computer vision tuned to your site — from inspecting parts on a conveyor to reading the analogue gauges nobody has time to walk to.",
      bullets: [
        "Defect detection on the line",
        "AI meter & gauge reading",
        "Face recognition & access control",
        "Licence-plate recognition",
        "Custom models trained on your images",
      ],
      productLabel: "Real product",
      productCaption:
        "AI gauge reading — calibrate once, then read every dial in the plant.",
      alt: "Camera above a conveyor inspecting metal flanges, one highlighted with a red defect box",
    },
    chat: {
      title: "AI Data Chat",
      body: "Ask your plant data questions in plain Thai or English and get answers, charts and comparisons back — no SQL, no exporting to Excel.",
      bullets: [
        "Natural-language questions over live and historical data",
        "Automated daily, weekly and monthly reports",
        "Trend analysis and period-to-period comparison",
      ],
      sampleLabel: "Ask it",
      sample: "Which chiller used the most energy last week — and why?",
      alt: "Engineer at a desk chatting with an AI assistant next to plant energy charts",
    },
  },
  appboox: {
    eyebrow: "AppBoox · by Leaftech",
    title: "Let your AI ship it.",
    lead: "AppBoox is our platform-as-a-service built for AI agents. Connect Claude Code, Cursor or any MCP client — the AI builds, deploys, scales and fixes your apps on its own.",
    stats: [
      { value: "0.35 s", label: "wake-up from scale-to-zero" },
      { value: "PostgreSQL 17", label: "managed, up to 2 per app" },
      { value: "$0.012", label: "per vCPU-hour on Economy" },
      { value: "Auto HTTPS", label: "name.appboox.com behind Cloudflare" },
    ],
    features: [
      "Logs and graphs included",
      "Per-app firewall, isolation and tokens",
      "Built-in sizing advisor",
      "Standard and Economy classes — pay only for what runs",
    ],
    note: "Hosted Notibox instances run on AppBoox — the live demo at notibox-dc2.appboox.com is one of them.",
    cta: "Visit appboox.com",
    imageAlt:
      "An AI core streaming code to containers, databases and cloud nodes with live graphs",
    urlPill: "your-app.appboox.com",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's put your site on the big screen.",
    lead: "Tell us what you need to watch — a server room, a building, a cold store or a whole portfolio. You'll talk directly to the engineers who build Notibox.",
    phone: "Phone",
    email: "E-mail",
    facebook: "Facebook",
    city: "Bangkok, Thailand",
    demoTitle: "Rather click around first?",
    demoBody: "The live demo is a real Notibox v3 — no login needed.",
  },
  footer: {
    tagline:
      "IoT, SCADA and AI for sites that never stop. Makers of Notibox and AppBoox.",
    explore: "Explore",
    products: "Products",
    contact: "Contact",
    demo: "Notibox live demo",
    rights: "All rights reserved.",
  },
};
