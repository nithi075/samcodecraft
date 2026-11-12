import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import PageShell from '../components/PageShell';
import Footer from '../components/Footer';
import TransitionLink from '../components/TransitionLink';

// The export only contained Home, Works and About. Project / template detail pages
// (e.g. /works/handshaik) point here until you add real pages.
const reveal = () => gsap.set('[data-hidden]', { visibility: 'visible' });

export default function Placeholder({ title }) {
  const { slug } = useParams();
  const heading = title || (slug ? slug.replace(/-/g, ' ') : 'Page');
  return (
    <PageShell pageId="678a8007cb26ff76720a94b1" title={`${heading} - Sam`} init={reveal}>
      <div className="page_w">
        <section
          style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5em', textAlign: 'center', padding: '10em 2em' }}
        >
          <h1 className="title-l" style={{ textTransform: 'capitalize' }}>{heading}</h1>
          <p>This page was not part of the exported files yet.</p>
          <TransitionLink to="/works" className="txt-size-s txt-caps">← Back to works</TransitionLink>
        </section>
        <Footer next={{ to: '/', label: 'Home' }} />
      </div>
    </PageShell>
  );
}
