import {
  FileMagnifyingGlassIcon,
  EnvelopeOpenIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from '@phosphor-icons/react';
import TimelineList from '../components/lists/timeline/TimelineList';
import { timeline } from '../components/lists/timeline/models/TimelineData';
import ContactForm from '../components/forms/ContactForm';
import ThemeChanger from '../components/layouts/ThemeChanger';
import MouseFollower from '../components/layouts/MouseFollower';
import myCv from '../assets/pdfs/john-florentino-dunglao-cv.pdf';
import { useState } from 'react';
import SkillList from '../components/lists/skills/SkillList';
import {
  backendSkills,
  devOpsSkills,
  frontendSkills,
  otherSkills,
} from '../components/lists/skills/models/Skill';

function MinimalPortfolioPage() {
  const [searchSkill, setSearchSkill] = useState<string>('');

  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-6 selection:bg-selection">
      <section id="me" className="lg:row-span-4 lg:col-span-6 relative">
        <div className="sticky top-18 left-0 flex flex-col justify-between lg:h-full lg:max-h-[calc(100lvh-200px)]">
          <div>
            <h1 className="text-4xl md:text-[3.5rem] font-merriweather">
              John Florentino Dunglao
            </h1>
            <h3 className="text-2xl md:text-4xl mt-3">Senior Web Developer</h3>
            <p className="mt-6">
              A full-stack web developer that acquires techniques for my own
              benefit.
            </p>

            <nav className="mt-10 hidden lg:block">
              <ul>
                <li>
                  <a
                    href="#summary"
                    className="hover:text-foreground transition-colors duration-300 ease-in-out"
                  >
                    Summary
                  </a>
                </li>
                <li>
                  <a
                    href="#timeline"
                    className="hover:text-foreground transition-colors duration-300 ease-in-out"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-foreground transition-colors duration-300 ease-in-out"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href="mailto:jfsdunglao@gmail.com"
              className="text-primary hover:text-foreground transition-colors duration-300 ease-in-out"
              title="Send me an email?"
            >
              <EnvelopeOpenIcon size={32} className="inline-block" />
            </a>

            <a
              href="https://www.linkedin.com/in/jfsdunglao/"
              className="text-primary hover:text-foreground transition-colors duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to my profile in LinkedIn"
            >
              <LinkedinLogoIcon size={32} className="inline-block" />
            </a>

            <a
              href="https://github.com/john-dunglao-dev"
              className="text-primary hover:text-foreground transition-colors duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
              title="Check my Github account"
            >
              <GithubLogoIcon size={32} className="inline-block" />
            </a>

            <ThemeChanger />

            <a
              href={myCv}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 px-4 border border-foreground text-foreground rounded bg-transparent hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors duration-300 ease-in-out inline-flex items-center w-fit gap-1"
            >
              <FileMagnifyingGlassIcon size={20} className="inline-block" />
              View my CV
            </a>

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
          <input
            type="text"
            placeholder="Search skill to highlight..."
            value={searchSkill}
            onChange={(e) => setSearchSkill(e.target.value)}
            className="w-full mb-4 py-2 px-4 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-in-out bg-background text-foreground"
          />
        </div>

        <div>
          <TimelineList items={timeline} highlight={searchSkill} />
        </div>
      </section>

      <section id="skills" className="md:col-span-6 space-y-4">
        <div className="lg:hidden sticky top-0 left-0 z-2">
          <h4 className="bg-transparent backdrop-blur-sm">Full Skill List</h4>
        </div>

        <div className="space-y-2">
          <div>
            Frontend <span className="hidden lg:inline">Skills</span>
          </div>
          <SkillList items={frontendSkills} highlight={searchSkill} />
        </div>

        <div className="space-y-2">
          <div>
            Backend <span className="hidden lg:inline">Skills</span>
          </div>
          <SkillList items={backendSkills} highlight={searchSkill} />
        </div>

        <div className="space-y-2">
          <div>
            DevOps <span className="hidden lg:inline">Skills</span>
          </div>
          <SkillList items={devOpsSkills} highlight={searchSkill} />
        </div>

        <div className="space-y-2">
          <div>
            Other <span className="hidden lg:inline">Skills</span>
          </div>
          <SkillList items={otherSkills} highlight={searchSkill} />
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
