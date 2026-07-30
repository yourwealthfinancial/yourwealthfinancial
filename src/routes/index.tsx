import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  ArrowUpRight,
  BadgeDollarSign,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDollarSign,
  HeartPulse,
  Landmark,
  Menu,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
  X,
} from 'lucide-react'
import { useState, type ReactNode } from 'react'
import chrisHeadshot from '../assets/chris-headshot.png'

export const Route = createFileRoute('/')({
  component: WealthCareHome,
})

const bookingUrl = 'https://calendly.com/peasselstine'


const lifeStages = [
  ['Single', "Even without dependents, coverage makes sense if you carry debt or a co-signed loan — so the burden doesn't fall on someone you love."],
  ['Married', "Coverage should replace lost income and cover major debts, ensuring your partner isn't left with an impossible financial burden."],
  ['Parents', 'Life insurance provides the funds needed to raise a family, support education, and maintain stability if one or both parents are lost.'],
  ['Working professionals', "As income grows, so do expenses. Coverage protects everything you've worked to build — your home, your family, your lifestyle."],
  ['Empty nesters', 'Your needs change as the kids leave home. A professional can help determine if insurance still plays a role in your estate plan.'],
  ['Retired', 'Retirement does not end the need for protection. A death benefit can provide peace of mind for a spouse, children, or a cherished cause.'],
]

const solutions = [
  {
    icon: ShieldCheck,
    title: 'Insurance',
    items: ['Term Life Insurance', 'Whole Life Insurance', 'Universal Life Insurance', 'Critical Illness Insurance', 'Disability Insurance'],
  },
  {
    icon: PiggyBank,
    title: 'Savings & Retirement',
    items: ['RRSPs', 'TFSAs', "RESPs (for children's education)", 'RDSPs', 'Segregated Funds'],
  },
  {
    icon: TrendingUp,
    title: 'Investments',
    items: ['Mutual Funds', 'Non-Registered Investments', 'Guaranteed Interest Accounts'],
  },
  {
    icon: UsersRound,
    title: 'Protecting Your Family',
    items: ['Financial Needs Analysis (FNA)', 'Estate Planning Strategies', 'Elder Care Planning', 'Group Benefits & Pension Plans'],
  },
]

function SectionIntro({ kicker, title, copy }: { kicker: string; title: ReactNode; copy?: string }) {
  return (
    <div className="section-intro">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  )
}

function WealthCareHome() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Your Wealth Financial home">
          <span className="wordmark-mark">YW</span>
          <span>Your Wealth <b>Financial</b></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
  <a href="#foundation">Learn</a>
  <a href="#protection">Protect</a>
  <a href="#wealth">Grow</a>
  <a href="#process">Get Started</a>
</nav>
        <a className="button button-small desktop-book" href={bookingUrl} target="_blank" rel="noreferrer">
          Book a call <ArrowUpRight size={15} />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
  <a href="#foundation" onClick={() => setMenuOpen(false)}>Learn</a>
  <a href="#protection" onClick={() => setMenuOpen(false)}>Protect</a>
  <a href="#wealth" onClick={() => setMenuOpen(false)}>Grow</a>
  <a href="#process" onClick={() => setMenuOpen(false)}>Get Started</a>
  <a href={bookingUrl} target="_blank" rel="noreferrer">
  Start a conversation
</a>
</nav>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal reveal-one">
          <p className="kicker">Financial clarity for Canadian families</p>
          <h1>Protect more.<br />Keep more.<br /><em>Grow more.</em></h1>
          <p className="hero-lead">Practical financial strategies to help Canadians protect what they've built, grow their wealth, and create a stronger financial future.</p>
          <div className="hero-actions">
            <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#welcome">Explore the guide <ArrowDown size={16} /></a>
          </div>
        </div>

        <div className="hero-visual reveal reveal-two" aria-label="A visual showing responsibility decreasing as wealth grows">
          <div className="visual-stamp"><Sparkles size={14} /> Your financial life, in perspective</div>
          <div className="curve-panel">
            <p className="curve-label responsibility-label">Responsibility</p>
            <p className="curve-label wealth-label">Wealth</p>
            <svg viewBox="0 0 560 370" role="img" aria-label="Crossing curves for responsibility and wealth over time">
              <path className="curve-grid" d="M40 70H520M40 185H520M40 300H520" />
              <path className="curve responsibility-curve" d="M35 55C180 70 320 245 525 305" />
              <path className="curve wealth-curve" d="M35 310C170 295 335 95 525 55" />
              <circle cx="280" cy="182" r="8" className="curve-point" />
            </svg>
            <div className="curve-axis"><span>Today</span><span>Time</span></div>
          </div>
          <div className="hero-note">Protect the gap today. Build the freedom to choose tomorrow.</div>
        </div>

        <div className="stat-strip reveal reveal-three">
          <div><strong>8.4M</strong><span>Canadians need, or need more, life insurance</span></div>
          <div><strong>44%</strong><span>Could face hardship within six months of losing a wage earner</span></div>
          <div><strong>57%</strong><span>Of insured Canadians feel financially secure, versus 44% uninsured</span></div>
        </div>
      </section>

      <section className="welcome-section" id="welcome">
        <div className="welcome-number">01</div>
        <SectionIntro kicker="Start here" title={<>Where are you <em>financially?</em></>} />
        <div className="welcome-copy">
  <p>
    Money affects almost every decision we make, yet most Canadians were never taught how it actually works. We're expected to figure out insurance, investing, taxes, and retirement on our own—and hope we get it right.
  </p>

  <p>
    This guide is designed to help you understand the financial concepts every Canadian should know—from protecting your family to growing your wealth and making your money work harder over time.
  </p>
</div>
      </section>
      <section className="about-chris">
  <div className="about-chris-image">
    <img src={chrisHeadshot} alt="Chris Asselstine" />
  </div>

  <div className="about-chris-content">
    <div className="kicker">Meet Chris</div>

    <h2>
  Helping Canadians make <em>smarter</em>
  <br />
  financial decisions.
</h2>

    <p>
      I'm Chris Asselstine, a husband, father, and licensed financial broker who
      believes financial literacy shouldn't be reserved for the wealthy.
    </p>

    <p>
      For years, I worked in grocery management while watching families work
      harder than ever just to keep up. I realized that many Canadians aren't
      struggling because they aren't working hard—they're struggling because no
      one ever taught them how money really works.
    </p>

    <p>
      My goal is to simplify financial concepts, help you understand your
      options, and give you the knowledge to make confident decisions for your
      family's future.
    </p>
  </div>
</section>

      <section className="big-picture-section">
        <div className="big-picture-copy">
          <SectionIntro kicker="The big picture" title={<>The shape of a <em>financial life</em></>} />
          <p>When you are young, responsibility is high and wealth is low. Over time, those two lines cross.</p>
          <p>The X-Curve is one of the most clarifying ideas in personal finance. If you have a mortgage, children, or anyone depending on your income, your responsibility line is high — while your wealth may still be growing. That gap is exactly what life insurance is designed to cover.</p>
          <p>As wealth grows and responsibilities diminish, the gap closes — and your strategy can shift toward preserving and passing on what you have built.</p>
        </div>
        <div className="forces-card">
          <p className="card-label">Four forces to plan for</p>
          {[
            { title: 'Inflation', copy: 'erodes purchasing power', icon: CircleDollarSign },
            { title: 'Risk', copy: 'of unexpected illness or death', icon: ShieldCheck },
            { title: 'Taxes', copy: 'reduce what you keep', icon: Landmark },
            { title: 'Health costs', copy: 'can rise in later years', icon: HeartPulse },
          ].map(({ title, copy, icon: Icon }) => (
            <div className="force-row" key={title}>
              <Icon size={20} />
              <div><strong>{title}</strong><span>{copy}</span></div>
            </div>
          ))}
          <blockquote>“Protect your loved ones should you pass unexpectedly, and protect yourself if you live a long life.”</blockquote>
        </div>
      </section>

      <section className="foundation-section" id="foundation">
        <SectionIntro kicker="Building blocks" title={<>A solid financial <em>foundation</em></>} copy="A strong financial foundation does not start with lifestyle — it starts with protection. Think of it as building from the ground up." />
        <div className="foundation-stack">
          <article className="foundation-layer layer-one">
            <span>Layer one</span><ShieldCheck />
            <div><h3>Life Protection</h3><p>Ensures your family maintains their standard of living and can cover debts, mortgage, and daily expenses if you are no longer there to provide.</p></div>
          </article>
          <article className="foundation-layer layer-two">
            <span>Layer two</span><HeartPulse />
            <div><h3>Health & Risk</h3><p>Critical illness and disability coverage protects your income and savings when health challenges arise — often the leading cause of financial hardship.</p></div>
          </article>
          <article className="foundation-layer layer-three">
            <span>Layer three</span><TrendingUp />
            <div><h3>Inflation & Tax</h3><p>A sound strategy helps savings grow faster than inflation and lets you keep more of what you earn through smart, tax-efficient structures.</p></div>
          </article>
        </div>
      </section>

      <section className="protection-section" id="protection">
        <div className="protection-heading">
          <SectionIntro kicker="Life protection" title={<>Protection changes as <em>life changes</em></>} copy="Nearly one-third of Canadians are living with a life insurance gap. The most common reason? They think it is too expensive. But not having it can cost far more." />
          <div className="one-third"><strong>1/3</strong><span>of Canadians live with a life insurance gap</span></div>
        </div>
        <div className="stage-grid">
          {lifeStages.map(([title, copy], index) => (
            <article className={index === 2 || index === 4 ? 'stage-card stage-card-accent' : 'stage-card'} key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="insurance-compare">
          <article>
            <div className="compare-icon"><BriefcaseBusiness /></div>
            <p className="card-label">For a defined season</p>
            <h3>Term Life Insurance</h3>
            <ul><li>Coverage for a set period of time</li><li>Generally lower premiums</li><li>No cash value component</li><li>Ideal for mortgages and income replacement during key earning years</li></ul>
          </article>
          <article className="compare-dark">
            <div className="compare-icon"><Landmark /></div>
            <p className="card-label">For a lifetime</p>
            <h3>Permanent Life Insurance</h3>
            <ul><li>Stays in effect for your lifetime</li><li>Builds cash value over time</li><li>Can include flexible premium options</li><li>Options include Whole Life and Universal Life</li></ul>
          </article>
        </div>
      </section>

      <section className="wealth-section" id="wealth">
        <SectionIntro kicker="Building wealth" title={<>Make time work <em>for you</em></>} copy="Two powerful concepts can transform how you think about growing your money — and both depend on starting as early as possible." />
        <div className="wealth-grid">
          <article className="rule-card">
            <div className="rule-card-top"><BadgeDollarSign /><div><p className="card-label">The Rule of 72</p><h3>How fast does money double?</h3></div></div>
            {[[2, 36], [4, 18], [6, 12]].map(([rate, years]) => <div className="rule-line" key={rate}><span>72 ÷ {rate}%</span><strong>{years} years</strong></div>)}
          </article>
          <article className="time-card">
            <p className="card-label">The power of starting earlier</p>
            <h3>Same investment. Very different finish.</h3>
            <div className="person-row"><div><span>Person A</span><small>Starts at 30</small></div><strong>$204,074</strong><p>Invests $62,500 total · Stops at age 55 · 10 extra years of growth</p></div>
            <div className="person-row person-b"><div><span>Person B</span><small>Starts at 40</small></div><strong>$125,284</strong><p>Invests the same $62,500 · Works until age 65 · $78,790 less at retirement</p></div>
            <p className="fine-print">Figures are illustrative only and do not reflect taxes, fees, or charges associated with any actual investment.</p>
          </article>
        </div>
      </section>

      <section className="tax-section">
        <SectionIntro kicker="Keep more of what you earn" title={<>Understand your <em>tax strategy</em></>} copy="Where you hold your savings matters. Different accounts are treated very differently by the CRA — and making the right choices can add up to thousands over time." />
        <div className="tax-path">
          <article><span>01</span><p className="card-label">Taxable</p><h3>Taxable Accounts</h3><p>Savings Accounts · GICs · Money Market Funds</p></article>
          <ChevronRight className="tax-arrow" />
          <article><span>02</span><p className="card-label">Tax deferred</p><h3>Tax-Deferred Growth</h3><p>RRSPs · RESPs</p></article>
          <ChevronRight className="tax-arrow" />
          <article className="tax-best"><span>03</span><p className="card-label">Tax advantaged</p><h3>Tax-Advantaged</h3><p>TFSAs · Cash accumulation in life insurance policies</p></article>
        </div>
      </section>

      <section className="solutions-section">
        <SectionIntro kicker="What is available to you" title={<>Products & <em>solutions</em></>} copy="Every family is different, which means there is no one-size-fits-all financial plan. The right strategy starts with understanding your goals, then choosing the solutions that best protect your family, grow your wealth, and support your future." />
        <div className="solutions-list">
          {solutions.map(({ icon: Icon, title, items }, index) => (
            <details className="solution-row" key={title} open={index === 0}>
              <summary><span className="solution-index">0{index + 1}</span><Icon /><strong>{title}</strong><span className="summary-hint">View options</span><ChevronRight className="summary-chevron" /></summary>
              <div className="solution-items">{items.map(item => <span key={item}><Check size={15} />{item}</span>)}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="reality-section">
        <div className="reality-heading"><p className="kicker">An honest look</p><h2>Where many families <em>find themselves</em></h2></div>
        <div className="reality-columns">
          <article className="challenge-card"><p className="card-label">The common challenges</p><ul>{['Too much debt, not enough insurance', 'Little to no savings — and no clear target', "Income that doesn't stretch far enough", 'No plan for financial shocks', 'Uncertainty about what to do first'].map(item => <li key={item}>{item}</li>)}</ul></article>
          <div className="reality-bridge"><ArrowUpRight /><span>A practical plan creates momentum</span></div>
          <article className="path-card"><p className="card-label">The path forward</p><ul>{['Save more, spend with intention', 'Live within your means — not beyond', 'Protect your loved ones with appropriate coverage', 'Systematically reduce and eliminate debt', 'Build a 6–12 month emergency fund', 'Build long-term savings early'].map(item => <li key={item}><Check size={16} />{item}</li>)}</ul></article>
        </div>
      </section>

      <section className="process-section" id="process">
        <SectionIntro kicker="How it works" title={<>A no-pressure <em>process</em></>} copy="Every client relationship begins the same way: with listening, not selling." />
        <div className="process-track">
          {[
            ['Financial Concepts', 'We talk through key concepts, gather information about your situation, and get to know your goals — no pressure, no pitch.'],
            ['Needs Analysis', 'A thorough Financial Needs Analysis covers cash flow, debt, protection, savings, and wealth-building.'],
            ['Recommendations', 'We present tailored strategies and product options that fit your life — you decide what makes sense for your family.'],
          ].map(([title, copy], index) => (
            <article key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-orbit orbit-one" /><div className="cta-orbit orbit-two" />
        <p className="kicker">Ready to take the next step?</p>
        <h2>Let’s talk about <em>your future.</em></h2>
        <p>
  Whether you're just getting started or looking for a second opinion, every conversation begins with understanding your goals. No pressure. No obligation. Just practical guidance to help you make informed financial decisions.
</p>
        <a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">
  Start a conversation <ArrowUpRight size={17} />
</a>
        <small>Your Wealth Financial provides educational information to help you make informed financial decisions. This information is not intended as tax or legal advice. Please consult qualified tax and legal professionals regarding your specific circumstances.</small>
      </section>

      <footer>
        <div className="footer-brand">
  <span className="wordmark-mark">YW</span>
<div>
  <div className="wordmark-text">
  <div className="wordmark-title">YOUR WEALTH</div>
  <div className="wordmark-subtitle">FINANCIAL</div>
</div>
</div>
</div>
        <div className="footer-copy">
  <p>Your Wealth Financial is an independent financial services practice. Insurance products and strategies are provided through licensed professionals.</p>
  <p>The information provided on this website is for educational purposes only and is not intended as tax or legal advice. Please consult qualified tax and legal professionals regarding your individual circumstances.</p>
</div>

        <div className="footer-bottom">
  <span>© 2026 Your Wealth Financial. All rights reserved.</span>
  <a href="#top">Back to top <ArrowUpRight size={14} /></a>
</div>

      </footer>
    </main>
  )
}
