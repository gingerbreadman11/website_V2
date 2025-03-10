import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
/**
 * Page meta data
 */
export const homePageMeta = {
  title: "Alexander's Portfolio",
  description: "Personal website of Alexander, a Master's student in Data Science at ETH Zurich.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: I'm Alexander Bensland.,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Zurich-based <strong className="text-stone-100">Data Science Masters student</strong> at ETH Zurich, with a Bachelors degree in Electrical Engineering and Information Technology. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I enjoy exploring the intersection of **technology and innovation**, and in my free time, I love wakeboarding, climbing, and kitesurfing. 
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: #${SectionId.Contact},
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: Im a passionate Data Science student at ETH Zurich, with a strong foundation in Electrical Engineering and Information Technology. I spent a semester abroad at the National University of Singapore (NUS), broadening my academic and cultural horizons. When Im not coding or analyzing data, youll find me wakeboarding, climbing, or kitesurfing.,
  aboutItems: [
    { label: 'Location', text: 'Zurich, Switzerland', Icon: MapIcon },
    { label: 'Age', text: '23', Icon: CalendarIcon },
    { label: 'Study', text: 'ETH Zurich (MSc Data Science)', Icon: AcademicCapIcon },
    { label: 'Exchange Program', text: 'NUS, Singapore', Icon: FlagIcon },
    { label: 'Interests', text: 'Wakeboarding, Climbing, Kitesurfing', Icon: SparklesIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 9 },
      { name: 'SQL', level: 8 },
      { name: 'JavaScript', level: 7 },
    ],
  },
  {
    name: 'Machine Learning & Data Science',
    skills: [
      { name: 'TensorFlow / PyTorch', level: 8 },
      { name: 'Data Visualization (Matplotlib, Seaborn)', level: 7 },
      { name: 'Big Data (Spark, Hadoop)', level: 6 },
    ],
  },
  {
    name: 'Cloud & Backend',
    skills: [
      { name: 'AWS', level: 6 },
      { name: 'Docker', level: 7 },
      { name: 'PostgreSQL', level: 8 },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2023 - Present',
    location: 'ETH Zurich',
    title: "Master's in Data Science",
    content: <p>Currently pursuing a Masters degree in Data Science at ETH Zurich.</p>,
  },
  {
    date: '2019 - 2023',
    location: 'ETH Zurich',
    title: 'BSc Electrical Engineering & Information Technology',
    content: <p>Earned my Bachelors degree with a focus on signal processing and AI applications.</p>,
  },
  {
    date: 'Spring 2022',
    location: 'National University of Singapore',
    title: 'Exchange Semester',
    content: <p>Spent a semester at NUS, exploring global perspectives on technology and innovation.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'this is wrong',
    title: 'Quant finance Bro',
    content: (
      <p>
        Hello you found me :).
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'hmmmmm',
    content: (
      <p>
        Here I am again.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'JOE',
      text: 'He is kinda trash ngl',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me for collaborations, projects, or just to connect!',
  items: [
    { 
        type: ContactType.Email, 
      text: 'alexander.bensland@gmail.com',
      href: 'alexander.bensland@gmail.com',
    },
    {
        type: ContactType.Location,
        text: 'Victoria BC, Canada',
        href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
      },
      {
        type: ContactType.Instagram,
        text: '@tbakerx',
        href: 'https://www.instagram.com/tbakerx/',
      },
      {
        type: ContactType.Github,
        text: 'tbakerx',
        href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/gingerbreadman11/'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/alexander-bensland/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com'},
];
 
