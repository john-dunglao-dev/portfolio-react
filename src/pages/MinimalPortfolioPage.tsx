import {
  EnvelopeOpenIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from '@phosphor-icons/react';
import TimelineList from '../components/lists/timeline/TimelineList';
import { timeline } from '../components/lists/timeline/models/TimelineData';
import ContactForm from '../components/forms/ContactForm';
import ThemeChanger from '../components/layouts/ThemeChanger';
import MouseFollower from '../components/layouts/MouseFollower';

function MinimalPortfolioPage() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-6 selection:bg-selection">
      <section id="me" className="lg:row-span-3 lg:col-span-6 relative">
        <div className="sticky top-18 left-0 flex flex-col justify-between lg:h-full lg:max-h-[calc(100lvh-200px)]">
          <div>
            <h1 className="text-4xl md:text-6xl">John Florentino Dunglao</h1>
            <h3 className="text-2xl md:text-4xl mt-3">Senior Web Developer</h3>
            <p className="mt-6">
              A full-stack web developer that acquires techniques for my own
              benefit.
            </p>

            <nav className="mt-10 hidden lg:block">
              <ul>
                <li>
                  <a href="#summary">Summary</a>
                </li>
                <li>
                  <a href="#timeline">Experience</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <a href="mailto:jfsdunglao@gmail.com">
              <EnvelopeOpenIcon
                size={32}
                className="text-primary inline-block"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/johnflorentinodunglao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogoIcon
                size={32}
                className="text-primary inline-block"
              />
            </a>

            <a
              href="https://github.com/john-dunglao-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogoIcon size={32} className="text-primary inline-block" />
            </a>

            <ThemeChanger />

            <MouseFollower />
          </div>
        </div>
      </section>

      <section id="summary" className="md:col-span-6">
        <div className="lg:hidden sticky top-0 left-0 z-2">
          <h4 className="bg-transparent backdrop-blur-sm">Summary</h4>
        </div>

        <p className="mb-4">
          Versatile web developer with extensive freelance and professional
          experience across multiple domains, including gaming, finance, and
          transportation. Skilled in full-stack development, API architecture,
          and integrating third-party data services, with a proven track record
          of delivering scalable platforms, revamping UIs, and automating
          workflows. Adept at leading technical teams, managing production
          support, and implementing solutions that combine backend efficiency
          with frontend usability.
        </p>

        <p className="mb-4">
          My recent role was a Senior Web Developer in <strong>FoodByUs</strong>{' '}
          where I am more focused in FrontEnd development as it was my previous
          weakness. I have been able to learn and adapt quickly to new
          technologies and tools to deliver high-quality solutions that meet
          business needs. Notable achievements include reducing the artifact{' '}
          <em>build time from 12 minutes to 3 minutes</em> by optimizing the{' '}
          <em> package.json</em> file.
        </p>

        <p>
          Outside of work, I enjoy running (not away from responsibilities),
          working out, and playing video games.
        </p>
      </section>

      <section id="timeline" className="md:col-span-6">
        <h4 className="lg:hidden sticky top-0 left-0 bg-transparent backdrop-blur-sm z-2">
          Experience
        </h4>

        <div>
          <TimelineList items={timeline} />
        </div>
      </section>

      <section id="contact" className="md:col-span-6 md:mb-96 pb-10 md:pb-0">
        <div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

export default MinimalPortfolioPage;
