// gitprofile.config.ts

const CONFIG = {
  scratch: {
    username: 'rickyyang8740', //TODO: Your Scratch username. (Required)
    limit: 4, // How many projects to display; maximum 20
    sortBy: 'date', // date | views | remixes
    corsProxy: 'https://scratchapicors-8nbi5t6td-theyoungmaker.vercel.app/', //TODO: Enter your CORS Proxy here
  },
  github: {
    username: 'rickyqh', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Other Projects',
      projects: [
        {
          title: "Scissors, Paper, Stone Game",
          description:
            'This project presents a Scissors Paper Stone game made on code.org.',
          imageUrl:
            'https://studio.code.org/v3/files/q0TYSDAhpCNMwMHbPXn4Ru5cLX4aZM4yr3MA6QYbbRU/.metadata/thumbnail.png',
          link: 'https://studio.code.org/projects/applab/q0TYSDAhpCNMwMHbPXn4Ru5cLX4aZM4yr3MA6QYbbRU',
        },
        {
          title: "Rigged Game",
          description:
            'This project presents a Rigged Game made on code.org.',
          imageUrl:
            'https://studio.code.org/v3/files/IjKFYzivqHftxNkTsLnKjDyUj6HlIGh-qZQqX2Gfk-k/.metadata/thumbnail.png',
          link: 'https://studio.code.org/projects/spritelab/IjKFYzivqHftxNkTsLnKjDyUj6HlIGh-qZQqX2Gfk-k',
        },
        {
          title: "Fighter Plane Game",
          description:
            'This project presents a fighter plane game made on code.org.',
          imageUrl:
            'https://studio.code.org/v3/files/WsM1KARwW4mP_pZjbr1XBKuii52t8YGQCtb2LXBNZZk/.metadata/thumbnail.png',
          link: 'https://studio.code.org/projects/spritelab/WsM1KARwW4mP_pZjbr1XBKuii52t8YGQCtb2LXBNZZk',
        },
        {
          title: "Playing Ball Game",
          description:
            'This project presents a playing ball game made on code.org.',
          imageUrl:
            'https://studio.code.org/v3/files/r8399vSq7xZUaO-XUO-TUAAwtE2d7PtsyM4_yDpzuQQ/.metadata/thumbnail.png',
          link: 'https://studio.code.org/projects/spritelab/r8399vSq7xZUaO-XUO-TUAAwtE2d7PtsyM4_yDpzuQQ',
        },
        {
          title: "Treasure Hunt Game",
          description:
            'This project presents a treasure hunt game made on code.org.',
          imageUrl:
            'https://studio.code.org/v3/files/-KsMMvsffBpmHyRBEte6cZ1lr3Yplk3yc8FmDURQqcQ/.metadata/thumbnail.png',
          link: 'https://studio.code.org/projects/gamelab/-KsMMvsffBpmHyRBEte6cZ1lr3Yplk3yc8FmDURQqcQ',
        },
        {
          title: "Crazy Ball Game",
          description:
            'This project presents a crazy ball game made on code.org.',
          imageUrl:
            'https://studio.code.org/v3/files/73tjoxY3K180KnZ7BEo6mNOYOU8D-tTJNxU2sfYDaDM/.metadata/thumbnail.png',
          link: 'https://studio.code.org/projects/gamelab/73tjoxY3K180KnZ7BEo6mNOYOU8D-tTJNxU2sfYDaDM',
        }
      ],
    },
  },
  seo: {
    title: 'Portfolio of The Young Maker',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    facebook: '',
    instagram: '',
    tiktok: '',
    email: 'ricky.yang.qh@gmail.com',
    website: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    phone: '',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Scratch',
    'Design Thinking',
    'Python',
    'Git',
    'MINDSTORMS EV3',
  ],
  experiences: [
  ],
  certifications: [
    {
      name: 'Introduction to Python with The Young Maker',
      body: 'Learning python basics with The Young Maker',
      year: 'Nov 2024',
      link: 'https://theyoungmaker.com/',
    },
    {
      name: 'CSARC: Python (Grade 1) Merit',
      body: 'Certificate of Achivement with Merit',
      year: 'Dec 2024',
      link: 'https://sg.nullspace.co/',
    }
  ],
  education: [
    {
      institution: 'The Young Maker',
      degree: 'Certification',
      from: '2024',
      to: '2024',
    },
    {
      institution: 'BYJU',
      degree: 'Certification',
      from: '2022',
      to: '2023',
    }
  ],
  educations: [
    {
      institution: 'Holy Innocents Primary School',
      degree: 'Certification',
      from: '2020',
      to: '2025',
    },

  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'bumblebee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
  class="text-primary" href="https://github.com/arifszn/gitprofile"
  target="_blank"
  rel="noreferrer"
>GitProfile</a> & <div class="flex items-center"><img src="https://i.ibb.co/L10rd94/TYMLogo-Background.png" width="20" height="20" alt="TYMLogo-Background" border="0" /> <a class="text-primary" href="https://theyoungmaker.com/" target="_blank" rel="noreferrer">The Young Maker </a></div>`,

  enablePWA: true,
};

export default CONFIG;
