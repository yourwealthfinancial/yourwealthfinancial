import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { ArrowUpRight, X, Menu, ArrowDown, Sparkles, CircleDollarSign, ShieldCheck, Landmark, HeartPulse, TrendingUp, BriefcaseBusiness, BadgeDollarSign, ChevronRight, PiggyBank, UsersRound, Check } from "lucide-react";
import { useState } from "react";
const chrisHeadshot = "/assets/chris-headshot-nN2y52IU.png";
const bookingUrl = "https://calendly.com/peasselstine";
const lifeStages = [["Single", "Even without dependents, coverage makes sense if you carry debt or a co-signed loan — so the burden doesn't fall on someone you love."], ["Married", "Coverage should replace lost income and cover major debts, ensuring your partner isn't left with an impossible financial burden."], ["Parents", "Life insurance provides the funds needed to raise a family, support education, and maintain stability if one or both parents are lost."], ["Working professionals", "As income grows, so do expenses. Coverage protects everything you've worked to build — your home, your family, your lifestyle."], ["Empty nesters", "Your needs change as the kids leave home. A professional can help determine if insurance still plays a role in your estate plan."], ["Retired", "Retirement does not end the need for protection. A death benefit can provide peace of mind for a spouse, children, or a cherished cause."]];
const solutions = [{
  icon: ShieldCheck,
  title: "Insurance",
  items: ["Term Life Insurance", "Whole Life Insurance", "Universal Life Insurance", "Critical Illness Insurance", "Disability Insurance"]
}, {
  icon: PiggyBank,
  title: "Savings & Retirement",
  items: ["RRSPs", "TFSAs", "RESPs (for children's education)", "RDSPs", "Segregated Funds"]
}, {
  icon: TrendingUp,
  title: "Investments",
  items: ["Mutual Funds", "Non-Registered Investments", "Guaranteed Interest Accounts"]
}, {
  icon: UsersRound,
  title: "Protecting Your Family",
  items: ["Financial Needs Analysis (FNA)", "Estate Planning Strategies", "Elder Care Planning", "Group Benefits & Pension Plans"]
}];
function SectionIntro({
  kicker,
  title,
  copy
}) {
  return /* @__PURE__ */ jsxs("div", { className: "section-intro", children: [
    /* @__PURE__ */ jsx("p", { className: "kicker", children: kicker }),
    /* @__PURE__ */ jsx("h2", { children: title }),
    copy && /* @__PURE__ */ jsx("p", { className: "section-copy", children: copy })
  ] });
}
function WealthCareHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsxs("header", { className: "site-header", children: [
      /* @__PURE__ */ jsxs("a", { className: "wordmark", href: "#top", "aria-label": "Your Wealth Financial home", children: [
        /* @__PURE__ */ jsx("span", { className: "wordmark-mark", children: "YW" }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Your Wealth ",
          /* @__PURE__ */ jsx("b", { children: "Financial" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "desktop-nav", "aria-label": "Main navigation", children: [
        /* @__PURE__ */ jsx("a", { href: "#foundation", children: "Learn" }),
        /* @__PURE__ */ jsx("a", { href: "#protection", children: "Protect" }),
        /* @__PURE__ */ jsx("a", { href: "#wealth", children: "Grow" }),
        /* @__PURE__ */ jsx("a", { href: "#process", children: "Get Started" })
      ] }),
      /* @__PURE__ */ jsxs("a", { className: "button button-small desktop-book", href: bookingUrl, target: "_blank", rel: "noreferrer", children: [
        "Book a call ",
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "menu-button", onClick: () => setMenuOpen(!menuOpen), "aria-label": "Toggle navigation", "aria-expanded": menuOpen, children: menuOpen ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {}) }),
      menuOpen && /* @__PURE__ */ jsxs("nav", { className: "mobile-nav", "aria-label": "Mobile navigation", children: [
        /* @__PURE__ */ jsx("a", { href: "#foundation", onClick: () => setMenuOpen(false), children: "Learn" }),
        /* @__PURE__ */ jsx("a", { href: "#protection", onClick: () => setMenuOpen(false), children: "Protect" }),
        /* @__PURE__ */ jsx("a", { href: "#wealth", onClick: () => setMenuOpen(false), children: "Grow" }),
        /* @__PURE__ */ jsx("a", { href: "#process", onClick: () => setMenuOpen(false), children: "Get Started" }),
        /* @__PURE__ */ jsx("a", { href: bookingUrl, target: "_blank", rel: "noreferrer", children: "Start a conversation" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "hero", id: "top", children: [
      /* @__PURE__ */ jsxs("div", { className: "hero-copy reveal reveal-one", children: [
        /* @__PURE__ */ jsx("p", { className: "kicker", children: "Financial clarity for Canadian families" }),
        /* @__PURE__ */ jsxs("h1", { children: [
          "Protect more.",
          /* @__PURE__ */ jsx("br", {}),
          "Keep more.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { children: "Grow more." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "hero-lead", children: "Practical financial strategies to help Canadians protect what they've built, grow their wealth, and create a stronger financial future." }),
        /* @__PURE__ */ jsxs("div", { className: "hero-actions", children: [
          /* @__PURE__ */ jsxs("a", { className: "button", href: bookingUrl, target: "_blank", rel: "noreferrer", children: [
            "Start a conversation ",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
          ] }),
          /* @__PURE__ */ jsxs("a", { className: "text-link", href: "#welcome", children: [
            "Explore the guide ",
            /* @__PURE__ */ jsx(ArrowDown, { size: 16 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hero-visual reveal reveal-two", "aria-label": "A visual showing responsibility decreasing as wealth grows", children: [
        /* @__PURE__ */ jsxs("div", { className: "visual-stamp", children: [
          /* @__PURE__ */ jsx(Sparkles, { size: 14 }),
          " Your financial life, in perspective"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "curve-panel", children: [
          /* @__PURE__ */ jsx("p", { className: "curve-label responsibility-label", children: "Responsibility" }),
          /* @__PURE__ */ jsx("p", { className: "curve-label wealth-label", children: "Wealth" }),
          /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 560 370", role: "img", "aria-label": "Crossing curves for responsibility and wealth over time", children: [
            /* @__PURE__ */ jsx("path", { className: "curve-grid", d: "M40 70H520M40 185H520M40 300H520" }),
            /* @__PURE__ */ jsx("path", { className: "curve responsibility-curve", d: "M35 55C180 70 320 245 525 305" }),
            /* @__PURE__ */ jsx("path", { className: "curve wealth-curve", d: "M35 310C170 295 335 95 525 55" }),
            /* @__PURE__ */ jsx("circle", { cx: "280", cy: "182", r: "8", className: "curve-point" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "curve-axis", children: [
            /* @__PURE__ */ jsx("span", { children: "Today" }),
            /* @__PURE__ */ jsx("span", { children: "Time" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hero-note", children: "Protect the gap today. Build the freedom to choose tomorrow." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "stat-strip reveal reveal-three", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "8.4M" }),
          /* @__PURE__ */ jsx("span", { children: "Canadians need, or need more, life insurance" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "44%" }),
          /* @__PURE__ */ jsx("span", { children: "Could face hardship within six months of losing a wage earner" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "57%" }),
          /* @__PURE__ */ jsx("span", { children: "Of insured Canadians feel financially secure, versus 44% uninsured" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "welcome-section", id: "welcome", children: [
      /* @__PURE__ */ jsx("div", { className: "welcome-number", children: "01" }),
      /* @__PURE__ */ jsx(SectionIntro, { kicker: "Start here", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Where are you ",
        /* @__PURE__ */ jsx("em", { children: "financially?" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "welcome-copy", children: [
        /* @__PURE__ */ jsx("p", { children: "Money affects almost every decision we make, yet most Canadians were never taught how it actually works. We're expected to figure out insurance, investing, taxes, and retirement on our own—and hope we get it right." }),
        /* @__PURE__ */ jsx("p", { children: "This guide is designed to help you understand the financial concepts every Canadian should know—from protecting your family to growing your wealth and making your money work harder over time." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "about-chris", children: [
      /* @__PURE__ */ jsx("div", { className: "about-chris-image", children: /* @__PURE__ */ jsx("img", { src: chrisHeadshot, alt: "Chris Asselstine" }) }),
      /* @__PURE__ */ jsxs("div", { className: "about-chris-content", children: [
        /* @__PURE__ */ jsx("div", { className: "kicker", children: "Meet Chris" }),
        /* @__PURE__ */ jsxs("h2", { children: [
          "Helping Canadians make ",
          /* @__PURE__ */ jsx("em", { children: "smarter" }),
          /* @__PURE__ */ jsx("br", {}),
          "financial decisions."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "I'm Chris Asselstine, a husband, father, and licensed financial broker who believes financial literacy shouldn't be reserved for the wealthy." }),
        /* @__PURE__ */ jsx("p", { children: "For years, I worked in grocery management while watching families work harder than ever just to keep up. I realized that many Canadians aren't struggling because they aren't working hard—they're struggling because no one ever taught them how money really works." }),
        /* @__PURE__ */ jsx("p", { children: "My goal is to simplify financial concepts, help you understand your options, and give you the knowledge to make confident decisions for your family's future." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "big-picture-section", children: [
      /* @__PURE__ */ jsxs("div", { className: "big-picture-copy", children: [
        /* @__PURE__ */ jsx(SectionIntro, { kicker: "The big picture", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "The shape of a ",
          /* @__PURE__ */ jsx("em", { children: "financial life" })
        ] }) }),
        /* @__PURE__ */ jsx("p", { children: "When you are young, responsibility is high and wealth is low. Over time, those two lines cross." }),
        /* @__PURE__ */ jsx("p", { children: "The X-Curve is one of the most clarifying ideas in personal finance. If you have a mortgage, children, or anyone depending on your income, your responsibility line is high — while your wealth may still be growing. That gap is exactly what life insurance is designed to cover." }),
        /* @__PURE__ */ jsx("p", { children: "As wealth grows and responsibilities diminish, the gap closes — and your strategy can shift toward preserving and passing on what you have built." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "forces-card", children: [
        /* @__PURE__ */ jsx("p", { className: "card-label", children: "Four forces to plan for" }),
        [{
          title: "Inflation",
          copy: "erodes purchasing power",
          icon: CircleDollarSign
        }, {
          title: "Risk",
          copy: "of unexpected illness or death",
          icon: ShieldCheck
        }, {
          title: "Taxes",
          copy: "reduce what you keep",
          icon: Landmark
        }, {
          title: "Health costs",
          copy: "can rise in later years",
          icon: HeartPulse
        }].map(({
          title,
          copy,
          icon: Icon
        }) => /* @__PURE__ */ jsxs("div", { className: "force-row", children: [
          /* @__PURE__ */ jsx(Icon, { size: 20 }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: title }),
            /* @__PURE__ */ jsx("span", { children: copy })
          ] })
        ] }, title)),
        /* @__PURE__ */ jsx("blockquote", { children: "“Protect your loved ones should you pass unexpectedly, and protect yourself if you live a long life.”" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "foundation-section", id: "foundation", children: [
      /* @__PURE__ */ jsx(SectionIntro, { kicker: "Building blocks", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "A solid financial ",
        /* @__PURE__ */ jsx("em", { children: "foundation" })
      ] }), copy: "A strong financial foundation does not start with lifestyle — it starts with protection. Think of it as building from the ground up." }),
      /* @__PURE__ */ jsxs("div", { className: "foundation-stack", children: [
        /* @__PURE__ */ jsxs("article", { className: "foundation-layer layer-one", children: [
          /* @__PURE__ */ jsx("span", { children: "Layer one" }),
          /* @__PURE__ */ jsx(ShieldCheck, {}),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { children: "Life Protection" }),
            /* @__PURE__ */ jsx("p", { children: "Ensures your family maintains their standard of living and can cover debts, mortgage, and daily expenses if you are no longer there to provide." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "foundation-layer layer-two", children: [
          /* @__PURE__ */ jsx("span", { children: "Layer two" }),
          /* @__PURE__ */ jsx(HeartPulse, {}),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { children: "Health & Risk" }),
            /* @__PURE__ */ jsx("p", { children: "Critical illness and disability coverage protects your income and savings when health challenges arise — often the leading cause of financial hardship." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "foundation-layer layer-three", children: [
          /* @__PURE__ */ jsx("span", { children: "Layer three" }),
          /* @__PURE__ */ jsx(TrendingUp, {}),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { children: "Inflation & Tax" }),
            /* @__PURE__ */ jsx("p", { children: "A sound strategy helps savings grow faster than inflation and lets you keep more of what you earn through smart, tax-efficient structures." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "protection-section", id: "protection", children: [
      /* @__PURE__ */ jsxs("div", { className: "protection-heading", children: [
        /* @__PURE__ */ jsx(SectionIntro, { kicker: "Life protection", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Protection changes as ",
          /* @__PURE__ */ jsx("em", { children: "life changes" })
        ] }), copy: "Nearly one-third of Canadians are living with a life insurance gap. The most common reason? They think it is too expensive. But not having it can cost far more." }),
        /* @__PURE__ */ jsxs("div", { className: "one-third", children: [
          /* @__PURE__ */ jsx("strong", { children: "1/3" }),
          /* @__PURE__ */ jsx("span", { children: "of Canadians live with a life insurance gap" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "stage-grid", children: lifeStages.map(([title, copy], index) => /* @__PURE__ */ jsxs("article", { className: index === 2 || index === 4 ? "stage-card stage-card-accent" : "stage-card", children: [
        /* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsx("h3", { children: title }),
        /* @__PURE__ */ jsx("p", { children: copy })
      ] }, title)) }),
      /* @__PURE__ */ jsxs("div", { className: "insurance-compare", children: [
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("div", { className: "compare-icon", children: /* @__PURE__ */ jsx(BriefcaseBusiness, {}) }),
          /* @__PURE__ */ jsx("p", { className: "card-label", children: "For a defined season" }),
          /* @__PURE__ */ jsx("h3", { children: "Term Life Insurance" }),
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: "Coverage for a set period of time" }),
            /* @__PURE__ */ jsx("li", { children: "Generally lower premiums" }),
            /* @__PURE__ */ jsx("li", { children: "No cash value component" }),
            /* @__PURE__ */ jsx("li", { children: "Ideal for mortgages and income replacement during key earning years" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "compare-dark", children: [
          /* @__PURE__ */ jsx("div", { className: "compare-icon", children: /* @__PURE__ */ jsx(Landmark, {}) }),
          /* @__PURE__ */ jsx("p", { className: "card-label", children: "For a lifetime" }),
          /* @__PURE__ */ jsx("h3", { children: "Permanent Life Insurance" }),
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: "Stays in effect for your lifetime" }),
            /* @__PURE__ */ jsx("li", { children: "Builds cash value over time" }),
            /* @__PURE__ */ jsx("li", { children: "Can include flexible premium options" }),
            /* @__PURE__ */ jsx("li", { children: "Options include Whole Life and Universal Life" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "wealth-section", id: "wealth", children: [
      /* @__PURE__ */ jsx(SectionIntro, { kicker: "Building wealth", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Make time work ",
        /* @__PURE__ */ jsx("em", { children: "for you" })
      ] }), copy: "Two powerful concepts can transform how you think about growing your money — and both depend on starting as early as possible." }),
      /* @__PURE__ */ jsxs("div", { className: "wealth-grid", children: [
        /* @__PURE__ */ jsxs("article", { className: "rule-card", children: [
          /* @__PURE__ */ jsxs("div", { className: "rule-card-top", children: [
            /* @__PURE__ */ jsx(BadgeDollarSign, {}),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "card-label", children: "The Rule of 72" }),
              /* @__PURE__ */ jsx("h3", { children: "How fast does money double?" })
            ] })
          ] }),
          [[2, 36], [4, 18], [6, 12]].map(([rate, years]) => /* @__PURE__ */ jsxs("div", { className: "rule-line", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              "72 ÷ ",
              rate,
              "%"
            ] }),
            /* @__PURE__ */ jsxs("strong", { children: [
              years,
              " years"
            ] })
          ] }, rate))
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "time-card", children: [
          /* @__PURE__ */ jsx("p", { className: "card-label", children: "The power of starting earlier" }),
          /* @__PURE__ */ jsx("h3", { children: "Same investment. Very different finish." }),
          /* @__PURE__ */ jsxs("div", { className: "person-row", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { children: "Person A" }),
              /* @__PURE__ */ jsx("small", { children: "Starts at 30" })
            ] }),
            /* @__PURE__ */ jsx("strong", { children: "$204,074" }),
            /* @__PURE__ */ jsx("p", { children: "Invests $62,500 total · Stops at age 55 · 10 extra years of growth" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "person-row person-b", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { children: "Person B" }),
              /* @__PURE__ */ jsx("small", { children: "Starts at 40" })
            ] }),
            /* @__PURE__ */ jsx("strong", { children: "$125,284" }),
            /* @__PURE__ */ jsx("p", { children: "Invests the same $62,500 · Works until age 65 · $78,790 less at retirement" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "fine-print", children: "Figures are illustrative only and do not reflect taxes, fees, or charges associated with any actual investment." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "tax-section", children: [
      /* @__PURE__ */ jsx(SectionIntro, { kicker: "Keep more of what you earn", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Understand your ",
        /* @__PURE__ */ jsx("em", { children: "tax strategy" })
      ] }), copy: "Where you hold your savings matters. Different accounts are treated very differently by the CRA — and making the right choices can add up to thousands over time." }),
      /* @__PURE__ */ jsxs("div", { className: "tax-path", children: [
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("span", { children: "01" }),
          /* @__PURE__ */ jsx("p", { className: "card-label", children: "Taxable" }),
          /* @__PURE__ */ jsx("h3", { children: "Taxable Accounts" }),
          /* @__PURE__ */ jsx("p", { children: "Savings Accounts · GICs · Money Market Funds" })
        ] }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "tax-arrow" }),
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("span", { children: "02" }),
          /* @__PURE__ */ jsx("p", { className: "card-label", children: "Tax deferred" }),
          /* @__PURE__ */ jsx("h3", { children: "Tax-Deferred Growth" }),
          /* @__PURE__ */ jsx("p", { children: "RRSPs · RESPs" })
        ] }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "tax-arrow" }),
        /* @__PURE__ */ jsxs("article", { className: "tax-best", children: [
          /* @__PURE__ */ jsx("span", { children: "03" }),
          /* @__PURE__ */ jsx("p", { className: "card-label", children: "Tax advantaged" }),
          /* @__PURE__ */ jsx("h3", { children: "Tax-Advantaged" }),
          /* @__PURE__ */ jsx("p", { children: "TFSAs · Cash accumulation in life insurance policies" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "solutions-section", children: [
      /* @__PURE__ */ jsx(SectionIntro, { kicker: "What is available to you", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Products & ",
        /* @__PURE__ */ jsx("em", { children: "solutions" })
      ] }), copy: "Every family is different, which means there is no one-size-fits-all financial plan. The right strategy starts with understanding your goals, then choosing the solutions that best protect your family, grow your wealth, and support your future." }),
      /* @__PURE__ */ jsx("div", { className: "solutions-list", children: solutions.map(({
        icon: Icon,
        title,
        items
      }, index) => /* @__PURE__ */ jsxs("details", { className: "solution-row", open: index === 0, children: [
        /* @__PURE__ */ jsxs("summary", { children: [
          /* @__PURE__ */ jsxs("span", { className: "solution-index", children: [
            "0",
            index + 1
          ] }),
          /* @__PURE__ */ jsx(Icon, {}),
          /* @__PURE__ */ jsx("strong", { children: title }),
          /* @__PURE__ */ jsx("span", { className: "summary-hint", children: "View options" }),
          /* @__PURE__ */ jsx(ChevronRight, { className: "summary-chevron" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "solution-items", children: items.map((item) => /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx(Check, { size: 15 }),
          item
        ] }, item)) })
      ] }, title)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "reality-section", children: [
      /* @__PURE__ */ jsxs("div", { className: "reality-heading", children: [
        /* @__PURE__ */ jsx("p", { className: "kicker", children: "An honest look" }),
        /* @__PURE__ */ jsxs("h2", { children: [
          "Where many families ",
          /* @__PURE__ */ jsx("em", { children: "find themselves" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "reality-columns", children: [
        /* @__PURE__ */ jsxs("article", { className: "challenge-card", children: [
          /* @__PURE__ */ jsx("p", { className: "card-label", children: "The common challenges" }),
          /* @__PURE__ */ jsx("ul", { children: ["Too much debt, not enough insurance", "Little to no savings — and no clear target", "Income that doesn't stretch far enough", "No plan for financial shocks", "Uncertainty about what to do first"].map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "reality-bridge", children: [
          /* @__PURE__ */ jsx(ArrowUpRight, {}),
          /* @__PURE__ */ jsx("span", { children: "A practical plan creates momentum" })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "path-card", children: [
          /* @__PURE__ */ jsx("p", { className: "card-label", children: "The path forward" }),
          /* @__PURE__ */ jsx("ul", { children: ["Save more, spend with intention", "Live within your means — not beyond", "Protect your loved ones with appropriate coverage", "Systematically reduce and eliminate debt", "Build a 6–12 month emergency fund", "Build long-term savings early"].map((item) => /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(Check, { size: 16 }),
            item
          ] }, item)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "process-section", id: "process", children: [
      /* @__PURE__ */ jsx(SectionIntro, { kicker: "How it works", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "A no-pressure ",
        /* @__PURE__ */ jsx("em", { children: "process" })
      ] }), copy: "Every client relationship begins the same way: with listening, not selling." }),
      /* @__PURE__ */ jsx("div", { className: "process-track", children: [["Financial Concepts", "We talk through key concepts, gather information about your situation, and get to know your goals — no pressure, no pitch."], ["Needs Analysis", "A thorough Financial Needs Analysis covers cash flow, debt, protection, savings, and wealth-building."], ["Recommendations", "We present tailored strategies and product options that fit your life — you decide what makes sense for your family."]].map(([title, copy], index) => /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx("span", { children: index + 1 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: title }),
          /* @__PURE__ */ jsx("p", { children: copy })
        ] })
      ] }, title)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "cta-section", children: [
      /* @__PURE__ */ jsx("div", { className: "cta-orbit orbit-one" }),
      /* @__PURE__ */ jsx("div", { className: "cta-orbit orbit-two" }),
      /* @__PURE__ */ jsx("p", { className: "kicker", children: "Ready to take the next step?" }),
      /* @__PURE__ */ jsxs("h2", { children: [
        "Let’s talk about ",
        /* @__PURE__ */ jsx("em", { children: "your future." })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Whether you're just getting started or looking for a second opinion, every conversation begins with understanding your goals. No pressure. No obligation. Just practical guidance to help you make informed financial decisions." }),
      /* @__PURE__ */ jsxs("a", { className: "button button-light", href: bookingUrl, target: "_blank", rel: "noreferrer", children: [
        "Start a conversation ",
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
      ] }),
      /* @__PURE__ */ jsx("small", { children: "Your Wealth Financial provides educational information to help you make informed financial decisions. This information is not intended as tax or legal advice. Please consult qualified tax and legal professionals regarding your specific circumstances." })
    ] }),
    /* @__PURE__ */ jsxs("footer", { children: [
      /* @__PURE__ */ jsxs("div", { className: "footer-brand", children: [
        /* @__PURE__ */ jsx("span", { className: "wordmark-mark", children: "YW" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "wordmark-text", children: [
          /* @__PURE__ */ jsx("div", { className: "wordmark-title", children: "YOUR WEALTH" }),
          /* @__PURE__ */ jsx("div", { className: "wordmark-subtitle", children: "FINANCIAL" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-copy", children: [
        /* @__PURE__ */ jsx("p", { children: "Your Wealth Financial is an independent financial services practice. Insurance products and strategies are provided through licensed professionals." }),
        /* @__PURE__ */ jsx("p", { children: "The information provided on this website is for educational purposes only and is not intended as tax or legal advice. Please consult qualified tax and legal professionals regarding your individual circumstances." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-bottom", children: [
        /* @__PURE__ */ jsx("span", { children: "© 2026 Your Wealth Financial. All rights reserved." }),
        /* @__PURE__ */ jsxs("a", { href: "#top", children: [
          "Back to top ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })
        ] })
      ] })
    ] })
  ] });
}
export {
  WealthCareHome as component
};
