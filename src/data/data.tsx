// import {
//   AcademicCapIcon,
//   CalendarIcon,
//   FlagIcon,
//   MapIcon,
//   // OfficeBuildingIcon,
//   SparklesIcon,
// } from '@heroicons/react/outline';

// import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
// import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
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
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import porfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import porfolioImage14 from '../images/portfolio/portfolio-14.jpg';
import porfolioImage15 from '../images/portfolio/portfolio-15.jpg';
import porfolioImage16 from '../images/portfolio/portfolio-16.jpg';
import porfolioImage17 from '../images/portfolio/portfolio-17.jpg';
import porfolioImage18 from '../images/portfolio/portfolio-18.jpg';
import porfolioImage19 from '../images/portfolio/portfolio-19.jpg';
import porfolioImage20 from '../images/portfolio/portfolio-20.jpg';
import porfolioImage21 from '../images/portfolio/portfolio-21.jpg';
import porfolioImage22 from '../images/portfolio/portfolio-22.jpg';
import porfolioImage23 from '../images/portfolio/portfolio-23.jpg';
import porfolioImage24 from '../images/portfolio/portfolio-24.jpg';
import porfolioImage25 from '../images/portfolio/portfolio-25.jpg';
import porfolioImage26 from '../images/portfolio/portfolio-26.jpg';
import porfolioImage27 from '../images/portfolio/portfolio-27.jpg';
import porfolioImage28 from '../images/portfolio/portfolio-28.jpg';
import porfolioImage29 from '../images/portfolio/portfolio-29.jpg';
import porfolioImage30 from '../images/portfolio/portfolio-30.jpg';
import porfolioImage31 from '../images/portfolio/portfolio-31.jpg';
import porfolioImage32 from '../images/portfolio/portfolio-32.jpg';
import porfolioImage33 from '../images/portfolio/portfolio-33.jpg';
import porfolioImage34 from '../images/portfolio/portfolio-34.jpg';
import porfolioImage35 from '../images/portfolio/portfolio-35.jpg';
import porfolioImage36 from '../images/portfolio/portfolio-36.jpg';
import porfolioImage37 from '../images/portfolio/portfolio-37.jpg';
import porfolioImage38 from '../images/portfolio/portfolio-38.jpg';
import porfolioImage39 from '../images/portfolio/portfolio-39.jpg';
import porfolioImage40 from '../images/portfolio/portfolio-40.jpg';
import porfolioImage41 from '../images/portfolio/portfolio-41.jpg';
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
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
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

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm BUI DUY TUNG.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A highly skilled and experienced <strong className="text-stone-100">Backend Developer with over 7 years</strong> of experience in developing and managing complex game projects.
        Proven expertise in using various <strong className="text-stone-100">game development engines, backend technologies, and cloud platforms</strong> to deliver engaging and high-performance games.
        Adept at leading <strong className="text-stone-100">cross-functional teams, optimizing performance, and ensuring seamless integration</strong> of game components.
        Demonstrated ability to implement robust <strong className="text-stone-100">CI/CD pipelines</strong>, enhance <strong className="text-stone-100">game security</strong>, and improve user engagement through innovative solutions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Consistently saved costs and time while increasing profits.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
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
  description: "Hello, There! This is BUI DUY TUNG from Vietnam who is a highly skilled and experienced Backend Developer with over 7 years of expertise in developing and managing complex game projects. My journey in game development began with a Bachelor's degree in Computer Science from the Ohio University, where I honed my technical skills and cultivated a deep passion for creating immersive gaming experiences.  Throughout my career, I have proven my proficiency in utilizing various game development engines such as Unity, Unreal Engine, Godot, Cocos Creator and HTML game engine(PixiJs, PhaerJS, CreateJS). These tools have enabled me to craft engaging and high-performance games that captivate players. My backend expertise includes working with technologies like Mirrors, Photon Cloud, Reactor, Socket.io, and SFS2X, along with cloud platforms like Firebase and blockchain integration, ensuring robust and scalable game infrastructures.    As a developer, I am adept at leading cross-functional teams, optimizing game performance, and ensuring seamless integration of game components. I have a strong track record of Designing the whole project architecture, implementing robust CI/CD pipelines, enhancing game security, and improving user engagement through innovative solutions.    My experience spans developing MMORPGs, hyper-casual games, and interactive applications, where I consistently strive to push the boundaries of what is possible in game development. I am passionate about leveraging the latest technologies and methodologies to deliver exceptional gaming experiences.    I invite you to explore my portfolio to see examples of my work and learn more about the projects I have contributed to. Thank you for visiting, and I look forward to connecting with you",
  aboutItems: [
    // { label: 'Location', text: 'COLUMBUS, OH', Icon: MapIcon },
    // { label: 'Age', text: '31', Icon: CalendarIcon },
    // { label: 'Nationality', text: 'US', Icon: FlagIcon },
    // { label: 'Interests', text: 'Bascketball', Icon: SparklesIcon },
    // { label: 'Study', text: 'Ohio University', Icon: AcademicCapIcon },
    //{label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend development',
    skills: [
      {
        name: 'ASP.NET',
        level: 10,
      },
      {
        name: 'Java Spring',
        level: 10,
      },
      {
        name: 'Node.js',
        level: 10,
      },
      {
        name: 'Rust',
        level: 10,
      },
      {
        name: 'Golang',
        level: 10,
      },
    ],
  },
  {
    name: 'MMOG Server Development',
    skills: [
      {
        name: 'SmatFoxServer',
        level: 10,
      },
      {
        name: 'Photon',
        level: 10,
      },
      {
        name: 'Mirror',
        level: 10,
      },
      {
        name: 'KBEngine',
        level: 8,
      },
    ],
  },
  {
    name: 'Game development',
    skills: [
      {
        name: 'Unity',
        level: 9,
      },
      {
        name: 'Cocos Creator',
        level: 8,
      },
      {
        name: 'Cocos2dx',
        level: 8,
      },
      {
        name: 'WebGL',
        level: 7,
      },
    ],
  },
  {
    name: 'HTML5 Game',
    skills: [
      {
        name: 'Phaser',
        level: 10,
      },
      {
        name: 'Pixi',
        level: 9,
      }
    ],
  },
  {
    name: 'Smart Contract',
    skills: [
      {
        name: 'Solidity',
        level: 9,
      },
      {
        name: 'DevOps',
        level: 9,
      },
      {
        name: 'Docker',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'ReactJS',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      }
    ],
  },

];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Zomfi',
    description: '',
    url: 'https://go.screenpal.com/watch/cZlhDmnnoCk',
    image: porfolioImage41,
  },
  {
    title: 'Tank',
    description: '',
    url: 'https://go.screenpal.com/watch/cZlhDmnnoCg',
    image: porfolioImage40,
  },
  {
    title: 'Smoloons',
    description: '',
    url: 'https://go.screenpal.com/watch/cZlhDmnnoCB',
    image: porfolioImage39,
  },
  {
    title: 'Martian-Games',
    description: '',
    url: 'https://go.screenpal.com/watch/cZlhDmnnoCA',
    image: porfolioImage38,
  },
  {
    title: 'Mobile FPS',
    description: '',
    url: 'https://go.screenpal.com/watch/cZlhrxnnDyt',
    image: porfolioImage37,
  },
  {
    title: 'Hedera',
    description: '',
    url: 'https://go.screenpal.com/watch/cZlhDmnnoCG',
    image: porfolioImage36,
  },
  {
    title: 'DexBattle',
    description: '',
    url: 'https://go.screenpal.com/watch/cZlhDmnnoCE',
    image: porfolioImage35,
  },
  {
    title: 'City',
    description: '',
    url: 'https://go.screenpal.com/watch/cZlhDmnnoC5',
    image: porfolioImage34,
  },
  {
    title: 'Car Collision',
    description: '',
    url: 'https://go.screenpal.com/watch/cZlhDmnnoCC',
    image: porfolioImage33,
  },
  {
    title: 'Botverg',
    description: '',
    url: 'https://go.screenpal.com/watch/cZlhDmnnoCp',
    image: porfolioImage32,
  },
  {
    title: 'Ares',
    description: 'ARES is an MMORPG FPS Game that is developed by Unreal Engine for frontend and SFS for backend',
    url: 'https://go.screenpal.com/watch/cZ6b6iVWGtg',
    image: porfolioImage12,
  },
  {
    title: 'King of Monster',
    description: 'The prototype of Pokeone type game filled with the small town where players can work around, battle with each other as well as NPC, catch wild Pokemon.',
    url: 'https://pokeoneblame.web.app/',
    image: porfolioImage27,
  },
  {
    title: 'Legends of Aria',
    description: 'Discover a world forged by players, where your choices write the story.',
    url: 'https://classic.legendsofaria.com/',
    image: porfolioImage31,
  },
  {
    title: 'Diluvion',
    description: 'Diluvion is a 3D deep sea, Jules Verne inspired, exploration game with RPG elements and thrilling submarine combat.',
    url: 'http://www.diluvion.com/',
    image: porfolioImage30,
  },
  {
    title: 'PowVista',
    description: 'Skate into a multiplayer world, battle legendary creatures, and craft your own epic adventure!',
    url: 'https://powvista.com/',
    image: porfolioImage28,
  },
  {
    title: 'Spin Game based on Phaser',
    description: 'Lucky Spin Landing page which is developed by Phaser',
    url: 'https://spinongame.web.app/',
    image: porfolioImage29,
  },
  {
    title: 'Jumping',
    description: 'Unity + MetaMask game with specific jumping physics mechanism',
    url: 'https://jumping-c2d3d.web.app/',
    image: porfolioImage7,
  },
  {
    title: 'Chess Game',
    description: 'Online Chess Game with Unity and Photon Cloud',
    url: 'https://chess-blame.web.app/',
    image: porfolioImage10,
  },
  {
    title: 'Ludo Game',
    description: 'Online Pad Game with Unity and NodeJS where you can play Ludo Game in Online Mode.',
    url: 'https://screenpal.com/watch/c0fY6DVz6Py',
    image: porfolioImage16,
  },
  {
    title: 'ChatBot',
    description: 'ChatBot talk to user using the OpenAI and TTS Service.',
    url: 'https://chatbot-openai.web.app/',
    image: porfolioImage11,
  },
  {
    title: 'Gallery Design',
    description: 'Gallery Design Project where you can place several kinds of props in the UI Bar to the 3D Roomd Model. Please use the following user authentication to login the admin site.(SiteLink:https://gallery-design.web.app/, Username:Blame Password:123)',
    url: 'https://somup.com/c0e0Xpys5o',
    image: porfolioImage15,
  },
  {
    title: 'City Builder',
    description: 'City Build type game where players can manage the economy, infrastructure and services to create a thriving and sustainable city that supports a growing population',
    url: 'https://somup.com/c0fYei4wDl',
    image: porfolioImage20,
  },
  {
    title: 'Hunting Game',
    description: 'Huntime game where players try to improve their shooting skills through various levels of difficulties',
    url: 'https://somup.com/c0fb2p4OYL',
    image: porfolioImage19,
  },
  {
    title: 'StarFox',
    description: 'StarFox prototype where a Spaceship shoots the enemies in the rail system space',
    url: 'https://somup.com/c0fDeZ4ZBn',
    image: porfolioImage18,
  },
  {
    title: 'Ship Simulation',
    description: 'THe Simulation Project which immerses the player in controlling the ship with peculiar device where the captain, ship, route, weather should be selected.',
    url: 'https://screencast-o-matic.com/watch/c3lVIwVUN84',
    image: porfolioImage13,
  },
  {
    title: 'Cutting Cube Bunny Girl',
    description: 'Bunny Girl Bot cut the cube with the specific accuracy and speed.',
    url: 'https://screencast-o-matic.com/watch/c3XTDwVUgSf',
    image: porfolioImage14,
  },
  {
    title: 'Brave Climber',
    description: 'Climb Simulation Project which immerses you in feeling like climbing along the precipice.',
    url: 'https://screenpal.com/watch/c0fY6YVz69l',
    image: porfolioImage17,
  },
  {
    title: 'Fight Club',
    description: '3D Action game where player fight and kill the enemy to complete the quests.',
    url: 'https://screenpal.com/watch/c0fO2EVzunJ',
    image: porfolioImage22,
  },
  {
    title: 'BringBackMemory',
    description: 'Point Click 2d Adventure Game where main character picks up the objects in the room and brings back the memory of the past.',
    url: 'https://somup.com/c0f3e144pn',
    image: porfolioImage21,
  },
  {
    title: 'Car Simulation',
    description: 'Simulate the Physics of Driving Car',
    url: 'https://screenpal.com/watch/c0fYoQVzXsa',
    image: porfolioImage6,
  },
  {
    title: 'GtaType Game',
    description: 'GtaType Game where players can drive car, ride motocycle, shoot a gun and so on.',
    url: 'https://screenpal.com/watch/c0fYolVzXM3',
    image: porfolioImage8,
  },
  {
    title: 'Wheel',
    description: 'Endless Runner game where the player earns the diamonds dodging the obstacles.',
    url: 'https://screenpal.com/watch/c0fYqDVzlBm',
    image: porfolioImage23,
  },
  {
    title: 'Color Rush',
    description: 'Physics Runner Game.',
    url: 'https://screenpal.com/watch/c0fYoNVzlcC',
    image: porfolioImage4,
  },
  {
    title: 'Puzzle Blust',
    description: 'Hyper casual game of three match mechanism.',
    url: 'https://screenpal.com/watch/c0fYo8VzlcL',
    image: porfolioImage1,
  },
  {
    title: '8 Ball Game',
    description: '8 Ball Game with AI bot and Mutiplayer mechanics',
    url: 'https://screenpal.com/watch/c0euVHVa17n',
    image: porfolioImage3,
  },
  {
    title: 'Bubble Shooter',
    description: 'Hyper casual game of bubble shooter',
    url: 'https://screenpal.com/watch/c0fYDeVzlnU',
    image: porfolioImage2,
  },
  {
    title: 'Gold Miner',
    description: 'Hyper casual game of Gold Miner',
    url: 'https://screencast-o-matic.com/watch/c0eo2ZV4w81',
    image: porfolioImage9,
  },
  {
    title: 'Candy Crush Sugar',
    description: 'Hyper casual 3 Match Game.',
    url: 'https://screenpal.com/watch/c0hVlUVzkD8',
    image: porfolioImage5,
  },
  {
    title: 'Plinko',
    description: 'Casino Game where the ball is falling and bouncing off the triangle pattern pegs and eventually lands in one of the slots in the bottom of the screen.',
    url: 'https://plinkoblame.web.app/',
    image: porfolioImage26,
  },
  {
    title: 'SlotMahcine',
    description: 'Slot Mahcine Game 777 using Unity C#.',
    url: 'https://screenpal.com/watch/c0hlqYVAlLr',
    image: porfolioImage24,
  },
  {
    title: 'Lucky Spin',
    description: 'Spin Game where players can spin a wheel to win prizes and rewards. This game is based on chance and players have no control over outcomes.',
    url: 'https://luckyspinblame-beta.web.app/',
    image: porfolioImage25,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2008 - May 2012',
    location: 'Ho Chi Minh City, Vietnam',
    title: 'Bachelor of Computer Science in Ho Chi Minh City University of Technology',
    content: <p><b>IT specialties</b> : Data Science, System Analysis, Math, Software Engineering, Computer Science, Computer Engineering, Information Systems and Information Technology
    </p>,
  },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'Feb 2022 - July 2025',
    location: 'Ho Chi Minh City, Vietnam',
    title: 'Ruby Game Studio - Senior Game Engineer',
    content: (
      <p></p>
      // <p>
      //   • Developed and maintained the backend infrastructure for "Legends of Aria Classic" using Unity Mirror, supporting real-time synchronization for up to 10,000 concurrent players, and Socket.io with ExpressJS for efficient server-side operations.<br />
      //   • Implemented MongoDB for data management, handling over 1 million player records with average query times under 50ms, and ensuring data encryption at rest.<br />
      //   • Led the development of the Online Whot Card Game, integrating Unity for game development, Socket.io for user authentication, and Golang for game logic, resulting in a 40% increase in user retention.<br />
      //   • Implemented gRPC for efficient communication between Socket.io with TypeScript and Golang servers, reducing latency by 30%.<br />
      //   • Managed the deployment of the Online Whot Card Game on AWS, achieving a 99.9% uptime by utilizing EC2 instances for scalable computing and S3 for secure, durable storage.<br />
      //   • Developed HTML5 casino games such as SpinWheel, Plinko, Dice, and Hilo using PixiJS, PhaserJS, and CreateJS, attracting 20,000 new users within two months.<br />
      //   • Spearheaded the development of a ship simulation game using Unreal Engine, enhancing user experience with realistic ship control via a joystick device.<br />
      //   • Directed a team of 10 developers and designers, ensuring project milestones were met on time and within budget.<br />
      //   • Improved game stability and performance by conducting regular code reviews and optimizing server-side logic.<br />
      //   • Reduced customer support tickets by 20% through effective debugging and patching of issues pre- and post-launch.<br />
      //   • Leveraged project management tools to track progress, allocate resources efficiently, and ensure timely delivery of project components.<br />
      // </p>
    ),
  },
  {
    date: 'Jul 2016 - Nov 2020',
    location: 'Ho Chi Minh City, Vietnam',
    title: 'JOY Entertainment - Junior Game Developer',
    content: (
      <p></p>
      // <p>
      //   • Assisted in developing "Diluvion," a 3D deep-sea RPG using Unity and C#, contributing to its success across PC, Mac, and Linux platforms.<br />
      //   • Collaborated on creating immersive underwater environments with Unity’s HDRP, leading to a 20% increase in user engagement and extending average play sessions by 30 minutes.<br />
      //   • Implemented submarine combat mechanics using Unity's Physics Engine and Rigidbody components, contributing to a 25% increase in player retention rates.<br />
      //   • Integrated custom shaders with Unity’s Shader Graph to simulate underwater light effects, enhancing visual immersion and leading to a 35% increase in user satisfaction.<br />
      //   • Developed an Online Casino WebGL Game using Cocos Creator, increasing user engagement by 25% through interactive gameplay features.<br />
      //   • Created and implemented popular card games such as Mus, Spades, and Blackjack, enhancing the gaming portfolio and attracting 15,000 new users within the first quarter.<br />
      //   • Led the development of the "Brave Climber" human character action simulation game using Unreal Engine, receiving positive user feedback and high engagement rates.<br />
      //   • Developed "Nimble Girl," a human cutting action simulation game using Unreal Engine, resulting in over 50,000 downloads in the first month.<br />
      //   • Produced various hyper-casual games that collectively garnered over 100,000 downloads and maintained high user retention rates.<br />
      //   • Created 3 match games using Unity, including "Candy" and "Bubble Shooter," which achieved a 20% increase in user retention through engaging mechanics.<br />
      //   • Implemented advanced game physics and AI for more realistic gameplay experiences in simulation games.<br />
      //   • Enhanced game performance by optimizing code, reducing load times by 15%, and improving overall user experience.<br />
      //   • Collaborated with cross-functional teams to ensure seamless integration of game assets and mechanics, leading to a smoother development process.<br />
      // </p>
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
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'daniel.senior.dev@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Ho Chi Minh City, Vietnam',
    },
    // {
    //   type: ContactType.Phone,
    //   text: '+1 773 828 4391',
    // },
    {
      type: ContactType.Telegram,
      text: 'https://t.me/acidyo_holo',
      href: 'https://t.me/acidyo_holo',
    },
    {
      type: ContactType.Phone,
      text: '+1 928 642 2059',
      href: '',
    },
    {
      type: ContactType.Github,
      text: 'Github',
      href: 'https://github.com/redblame315',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/blame-yang/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
