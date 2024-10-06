/* eslint-disable react/react-in-jsx-scope */
import {
  Adidas,
  BlackSmith,
  Carpenter,
  Dreams,
  Electricity,
  FeaturdLogo,
  Hairdresser,
  HowItWork1,
  HowItWork2,
  Nike,
  Photoshop,
  ProfilePic,
  Progress,
  Raya,
  Riyadh,
  Samsung,
  SimilsrJobs,
  Tiktok,
  Udacity,
} from '../assets';
import {COLORS, hp, IMAGES, wp} from '../constants';
Photoshop;
const JOBS = [
  {
    id: 1,
    img: <Photoshop />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
    color: COLORS.yellowlight,
  },
  {
    id: 2,
    img: <Nike />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
    color: COLORS.blueLight,
  },
  {
    id: 3,
    img: <Tiktok />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
    color: COLORS.grayMoreLight,
  },
  {
    id: 4,
    img: <Samsung />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 5,
    img: <Udacity />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
    color: COLORS.grayMoreLight,
  },
  {
    id: 6,
    img: <Adidas />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    color: COLORS.yellowlight,
    price: '$30,000.00 - $35,000.00',
  },
];
const QUETIONS = [
  {
    id: 1,
    text: 'What are the top 10 popular jobs in Saudi Arabia Now?',
  },
  {
    id: 2,
    text: 'What are the top 10 popular jobs in Saudi Arabia Now?',
  },
  {
    id: 3,
    text: 'What are the top 10 popular jobs in Saudi Arabia Now?',
  },
];
const Optionsdata = [
  {
    id: '1',
    title: 'Workplace',
    options: [
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
    ],
  },
  {
    id: '2',

    title: 'Country',
    options: [
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
    ],
  },
  {
    id: '3',
    title: 'City',
    options: [
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
    ],
  },
  {
    id: '5',
    title: 'Career Level',
    options: [
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
    ],
  },
  {
    id: '5',
    title: 'Area',
    options: [
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
      {
        title: 'choice1',
        selected: false,
      },
    ],
  },
];
const PARTENERS = [
  {
    id: 1,
    imag: <Dreams />,
  },
  {
    id: 2,
    imag: <FeaturdLogo />,
  },
  {
    id: 3,
    imag: <Dreams />,
  },
  {
    id: 4,
    imag: <FeaturdLogo />,
  },
  {
    id: 5,
    imag: <Dreams />,
  },
  {
    id: 6,
    imag: <FeaturdLogo />,
  },
];
const CAROUSELDATA = [
  {
    imag: <Progress width={wp(60)} height={hp(15)} />,
    title: 'progress with one tool',
    description:
      'Gain control over the whole process by using WUZZUF, all the way from screening to short-listing, till interviewing and hiring, and better manage the process with your team.',
  },
  {
    imag: <Progress width={wp(60)} height={hp(15)} />,
    title: 'progress with one tool',
    description:
      'Gain control over the whole process by using WUZZUF, all the way from screening to short-listing, till interviewing and hiring, and better manage the process with your team.',
  },
  {
    imag: <Progress width={wp(60)} height={hp(15)} />,
    title: 'progress with one tool',
    description:
      'Gain control over the whole process by using WUZZUF, all the way from screening to short-listing, till interviewing and hiring, and better manage the process with your team.',
  },
];
const WelComJOBS = [
  {
    id: 1,
    img: <Raya />,
    status: 'telimed',
    job: 'Office Boy',
    period: 'full time',
    intern: 'internship',
    freelance: '',
    location: 'Paris, France',
    price: '0 - 2 Yrs of Exp · males_only. 2500-6200 LE ',
  },
  {
    id: 2,
    img: <Raya />,
    status: 'telimed',
    job: 'Restaurant Dishwasher',
    period: 'full time',
    intern: '',
    freelance: 'freelance',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 3,
    img: <Raya />,
    status: 'telimed',
    job: 'electrician',
    period: '',
    intern: 'internship',
    freelance: '',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 4,
    img: <Raya />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: '',
    freelance: '',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 5,
    img: <Raya />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    freelance: '',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 6,
    img: <Raya />,
    status: 'telimed',
    job: 'electrician',
    period: '',
    intern: '',
    freelance: 'freelance',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
];

const JOBSHOME = [
  {
    id: 1,
    img: <Photoshop />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 2,
    img: <Nike />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 3,
    img: <Tiktok />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 4,
    img: <Samsung />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 5,
    img: <Udacity />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 6,
    img: <Adidas />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
];
const HOWITWORK = [
  {
    id: 1,
    title: 'Post a Job',
    imag: <HowItWork1 width={'70%'} />,
    content:
      'Select a package that suits your needs and submit your job details.',
  },
  {
    id: 2,
    title: 'Post a Job',
    imag: <HowItWork2 />,
    content:
      'Select a package that suits your needs and submit your job details.',
  },
  {
    id: 3,
    title: 'Post a Job',
    imag: <HowItWork2 />,
    content:
      'Select a package that suits your needs and submit your job details.',
  },
];
const CAREERLEVEL = [
  {
    id: 1,
    imag: <Hairdresser style={{marginTop: hp(-8)}} width={'65%'} />,
    title: 'Hairdresser',
  },
  {
    id: 2,
    imag: <BlackSmith style={{marginTop: hp(-8)}} width={'65%'} />,
    title: 'BlackSmith',
  },
  {
    id: 3,
    imag: <Carpenter style={{marginTop: hp(-8)}} width={'65%'} />,
    title: 'Carpenter',
  },
  {
    id: 4,
    imag: <Electricity style={{marginTop: hp(-8)}} width={'65%'} />,
    title: 'Electricity',
  },
];
const Country = [
  {
    label: 'KSA',
    id: '1',
  },
];
const GenderList = [
  {
    label: 'male',
    id: '1',
  },
  {
    label: 'Female',
    id: '2',
  },
];
const Nationality = [
  {
    label: 'Egptien',
    id: '1',
  },
  {
    label: 'Italy',
    id: '2',
  },
  {
    label: 'France',
    id: '3',
  },
];
const City = [
  {
    label: 'Riyadh',
    id: '1',
  },
  {
    label: 'Makkah',
    id: '2',
  },
  {
    label: 'Madinah',
    id: '3',
  },
  {
    label: 'Dammam',
    id: '4',
  },
  {
    label: 'Jeddah',
    id: '5',
  },
  {
    label: 'Al Jubail',
    id: '6',
  },
  {
    label: 'Buraydah',
    id: '7',
  },
  {
    label: 'Tabuk',
    id: '8',
  },
  {
    label: 'Taif',
    id: '9',
  },
  {
    label: 'Abha',
    id: '10',
  },
  {
    label: 'Al Khobar',
    id: '11',
  },
];
const FlatData = [
  {
    id: '1a12a',
    title: 'Work Samples',
    nom: '5',
    new: true,
    options: [
      {
        id: '11',
        subtitle: 'country',
        data: [
          {
            id: '111',
            choice: 'Country1',
            seleceted: false,
          },
          {
            id: '222',
            choice: 'Country2',
            seleceted: false,
          },
          {
            id: '333',
            choice: 'Country3',
            seleceted: false,
          },
          {
            id: '444',
            choice: 'Country4',
            seleceted: false,
          },
        ],
      },
      {
        id: '22a22',
        subtitle: 'scince',
        data: [
          {
            id: '1111',
            choice: 'Country1',
            seleceted: false,
          },
          {
            id: '2222a2',
            choice: 'Country2',
            seleceted: false,
          },
          {
            id: '33333',
            choice: 'Country3',
            seleceted: false,
          },
          {
            id: '44444',
            choice: 'Country4',
            seleceted: false,
          },
        ],
      },
      {
        id: '3030',
        subtitle: 'mona',
        data: [
          {
            id: '1a0',
            choice: 'Country1',
            seleceted: false,
          },
          {
            id: '20d',
            choice: 'Country2',
            seleceted: false,
          },
          {
            id: '30a',
            choice: 'Country3',
            seleceted: false,
          },
          {
            id: '40a',
            choice: 'Country4',
            seleceted: false,
          },
        ],
      },
    ],
  },
  {
    id: '22s0',
    title: 'By Location',
    nom: '5',
    new: false,
    options: [
      {
        id: '1s30',
        subtitle: 'country',
        data: [
          {
            id: '13s1',
            choice: 'Country1',
            seleceted: false,
          },
          {
            id: '226s',
            choice: 'Country2',
            seleceted: false,
          },
          {
            id: '3a34',
            choice: 'Country3',
            seleceted: false,
          },
          {
            id: '40a2',
            choice: 'Country4',
            seleceted: false,
          },
        ],
      },
      {
        id: '2a321',
        subtitle: 'work',
        data: [
          {
            id: '1a201',
            choice: 'Country1',
            seleceted: false,
          },
          {
            id: '236a',
            choice: 'Country2',
            seleceted: false,
          },
          {
            id: '34s7',
            choice: 'Country3',
            seleceted: false,
          },
          {
            id: '496s',
            choice: 'Country4',
            seleceted: false,
          },
        ],
      },
      {
        id: 's453',
        subtitle: 'Salem',
        data: [
          {
            id: '1sc036',
            choice: 'Country1',
            seleceted: false,
          },
          {
            id: '2020cs1',
            choice: 'Country2',
            seleceted: false,
          },
          {
            id: '3216cs',
            choice: 'Country3',
            seleceted: false,
          },
          {
            id: '17894',
            choice: 'Country4',
            seleceted: false,
          },
        ],
      },
    ],
  },
  {
    id: '2csa3',
    title: 'By Education',
    nom: '',
    new: false,
    options: [
      {
        id: 'a023',
        subtitle: 'country',
        data: [
          {
            id: '1s57',
            choice: 'Country1',
            seleceted: false,
          },
          {
            id: '202ca34',
            choice: 'Country2',
            seleceted: false,
          },
          {
            id: '963c',
            choice: 'Country3',
            seleceted: false,
          },
          {
            id: 's258',
            choice: 'Country4',
            seleceted: false,
          },
        ],
      },
      {
        id: '15s9',
        subtitle: 'work',
        data: [
          {
            id: '753ac',
            choice: 'Country1',
            seleceted: false,
          },
          {
            id: '15ca7',
            choice: 'Country2',
            seleceted: false,
          },
          {
            id: '2351s',
            choice: 'Country3',
            seleceted: false,
          },
          {
            id: '1259ca6',
            choice: 'Country4',
            seleceted: false,
          },
        ],
      },
      {
        id: '120c34',
        subtitle: 'Salem',
        data: [
          {
            id: '12354c',
            choice: 'Country1',
            seleceted: false,
          },
          {
            id: '12458a7',
            choice: 'Country2',
            seleceted: false,
          },
          {
            id: '1a235996',
            choice: 'Country3',
            seleceted: false,
          },
          {
            id: '144lcl',
            choice: 'Country4',
            seleceted: false,
          },
        ],
      },
    ],
  },
];
const data = [
  {
    id: '1',
    img: <ProfilePic width={wp(15)} height={hp(8)} />,
    name: 'Abdullah Elseginy',
    subText1:
      'Agamy City, Alex, Egypt - 43yrs old More than 15yrs. Manager - MinSalary Confidential',
    lastseen: 'Last active: 28 days',
    subText3: 'Sales Manager at Value (2022 - present)',
    subtext4:
      'Sales Manager (indirect and international sales manager) at High Art (2016 - present)',
    subtext5:
      'BA in BA,Higher Institute for Administration Scienc.. (2003 - 2008)',
    jobtitle:
      'senior sales advisorsenior sales consultantSales Manager (indirect and international ...sales team leaderSales ManagerSkillsSales PlanPreferred job titlessenior sales advisorPreferred job rolesSales/Retail',
  },
  {
    id: '1',
    img: <ProfilePic width={wp(15)} height={hp(8)} />,
    name: 'Abdullah Elseginy',
    subText1:
      'Agamy City, Alex, Egypt - 43yrs old More than 15yrs. Manager - MinSalary Confidential',
    lastseen: 'Last active: 28 days',
    subText3: 'Sales Manager at Value (2022 - present)',
    subtext4:
      'Sales Manager (indirect and international sales manager) at High Art (2016 - present)',
    subtext5:
      'BA in BA,Higher Institute for Administration Scienc.. (2003 - 2008)',
    jobtitle:
      'senior sales advisorsenior sales consultantSales Manager (indirect and international ...sales team leaderSales ManagerSkillsSales PlanPreferred job titlessenior sales advisorPreferred job rolesSales/Retail',
  },
  {
    id: '1',
    img: <ProfilePic width={wp(15)} height={hp(8)} />,
    name: 'Abdullah Elseginy',
    subText1:
      'Agamy City, Alex, Egypt - 43yrs old More than 15yrs. Manager - MinSalary Confidential',
    lastseen: 'Last active: 28 days',
    subText3: 'Sales Manager at Value (2022 - present)',
    subtext4:
      'Sales Manager (indirect and international sales manager) at High Art (2016 - present)',
    subtext5:
      'BA in BA,Higher Institute for Administration Scienc.. (2003 - 2008)',
    jobtitle:
      'senior sales advisorsenior sales consultantSales Manager (indirect and international ...sales team leaderSales ManagerSkillsSales PlanPreferred job titlessenior sales advisorPreferred job rolesSales/Retail',
  },
];
const BROWESLOCATION = [
  {
    id: 1,
    imag: <Riyadh width={'50%'} />,
    title: 'Riyadh',
  },
  {
    id: 2,
    imag: <Riyadh width={'50%'} />,
    title: 'Riyadh',
  },
  {
    id: 3,
    imag: <Riyadh width={'50%'} />,
    title: 'Riyadh',
  },
  {
    id: 4,
    imag: <Riyadh width={'50%'} />,
    title: 'Riyadh',
  },
];
const SIMILARFUNCTIONS = [
  {
    id: 1,
    title: 'Senior Health and Nutrition Advisor',
    imag: <Photoshop />,
    location: 'EGP',
    Telimed: 'Telimed',
  },
  {
    id: 2,
    title: 'Senior Health and Nutrition Advisor',
    imag: <Photoshop />,
    location: 'MOC',
    Telimed: 'Telimed',
  },
  {
    id: 3,
    title: 'Senior Health and Nutrition Advisor',
    imag: <Photoshop />,
    location: 'KSA',
    Telimed: 'Telimed',
  },
  {
    id: 4,
    title: 'Senior Health and Nutrition Advisor',
    imag: <Photoshop />,
    location: 'KSA',
    Telimed: 'Telimed',
  },
];
const SIMILARJOBS = [
  {
    id: 1,
    title: 'General Manager',
    imag: <SimilsrJobs />,
    company: 'Next Gen Supplements',
    location: '-Ad-Diriyah, Riyadh',
    days: '16 days ago',
  },
  {
    id: 2,
    title: 'General Manager',
    imag: <SimilsrJobs />,
    company: 'Next Gen Supplements',
    location: '-Ad-Diriyah, Riyadh',
    days: '16 days ago',
  },
  {
    id: 3,
    title: 'General Manager',
    imag: <SimilsrJobs />,
    company: 'Next Gen Supplements',
    location: '-Ad-Diriyah, Riyadh',
    days: '16 days ago',
  },
  {
    id: 4,
    title: 'General Manager',
    imag: <SimilsrJobs />,
    company: 'Next Gen Supplements',
    location: '-Ad-Diriyah, Riyadh',
    days: '16 days ago',
  },
];
const JopTypes = [
  {id: '1', title: 'Part time'},
  {id: '2', title: 'Full time'},
  {id: '3', title: 'Trainning'},
];
const data2 = [
  {id: '1', title: 'Job'},
  {id: '2', title: 'Trainnig'},
];
const JopTypes2 = [
  {id: '1', title: 'on site'},
  {id: '2', title: 'remotly'},
  {id: '3', title: 'hybrid'},
];
const CareerLevel = [
  {id: '1', title: 'Student'},
  {id: '2', title: 'Entry Level'},
  {id: '3', title: 'Experienced'},
  {id: '4', title: 'Manager'},
  {id: '5', title: 'Senior Management'},
  {id: '6', title: 'Not Specified'},
];
const YEARSEXP = [
  {
    label: '0',
    id: '1',
  },
  {
    label: '1',
    id: '2',
  },
  {
    label: '3',
    id: '3',
  },
  {
    label: '5',
    id: '4',
  },
];
const YEARSEXP2 = [
  {
    label: '1',
    id: '1',
  },
  {
    label: '2',
    id: '2',
  },
  {
    label: '5',
    id: '3',
  },
  {
    label: '10',
    id: '4',
  },
];

const slides = [
  {
    id: '1',
    titleHead: 'Post a Job',
    title: 'Select a package that suits your needs and submit your job details',
    url: IMAGES.board1,
  },
  {
    id: '2',
    titleHead: 'Advertise',
    title:
      'Advertise your listings and find candidates interested in your job offer',
    url: IMAGES.board2,
  },
  {
    id: '3',
    titleHead: 'Recruit',
    title:
      'Allow candidates to apply to jobs via a form and rate or comment them',
    url: IMAGES.board3,
  },
];
const PROGRESSES = [
  {id: 1, subject: 'english', rate: '60%'},
  {id: 2, subject: 'arabic', rate: '90%'},
  {id: 3, subject: 'computer', rate: '25%'},
  {id: 4, subject: 'MS office', rate: '40%'},
];
const CareerLevel2 = [
  {id: '1', title: 'Student'},
  {id: '2', title: 'Entry Level'},
  {id: '3', title: 'Experienced'},
  {id: '4', title: 'Manager'},
  {id: '5', title: 'Senior Management'},
  {id: '6', title: 'Not Specified'},
];
const JopTypes3 = [
  {id: '1', title: 'Full time'},
  {id: '2', title: 'Part time'},
  {id: '3', title: 'Freelance/ project'},
  {id: '4', title: 'Internship'},
  {id: '5', title: 'Shift Based'},
  {id: '6', title: 'Volunteering'},
  {id: '7', title: 'Student Activity'},
];
const JopTypes8 = [
  {id: '1', title: 'on site'},
  {id: '2', title: 'remotly'},
  {id: '3', title: 'hybrid'},
];
const period = [
  {label: 'Per Hour', id: 'Per Hour'},
  {label: 'Per Week', id: 'Per Week'},
  {label: 'Per Month', id: 'Per Month'},
];
const YearsExList = [
  {
    label: '0-1',
    id: '1',
  },
  {
    label: '1-5',
    id: '2',
  },
  {
    label: '5-10',
    id: '3',
  },
  {
    label: '10-20',
    id: '4',
  },
];
const FieldList = [
  {
    label: 'IT',
    id: '1',
  },
  {
    label: 'CS',
    id: '2',
  },
  {
    label: 'SE',
    id: '3',
  },
  {
    label: 'AI',
    id: '4',
  },
];
const JOBS3 = [
  {
    id: 1,
    img: <Photoshop />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
    color: COLORS.yellowlight,
  },
  {
    id: 2,
    img: <Nike />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
    color: COLORS.blueLight,
  },
  {
    id: 3,
    img: <Tiktok />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
    color: COLORS.grayMoreLight,
  },
  {
    id: 4,
    img: <Samsung />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
  },
  {
    id: 5,
    img: <Udacity />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    price: '$30,000.00 - $35,000.00',
    color: COLORS.grayMoreLight,
  },
  {
    id: 6,
    img: <Adidas />,
    status: 'telimed',
    job: 'electrician',
    period: 'full time',
    intern: 'internship',
    location: 'Paris, France',
    color: COLORS.yellowlight,
    price: '$30,000.00 - $35,000.00',
  },
];
export {
  JOBS,
  QUETIONS,
  Optionsdata,
  PARTENERS,
  CAROUSELDATA,
  WelComJOBS,
  JOBSHOME,
  HOWITWORK,
  CAREERLEVEL,
  Nationality,
  Country,
  City,
  GenderList,
  FlatData,
  data,
  BROWESLOCATION,
  SIMILARFUNCTIONS,
  SIMILARJOBS,
  JopTypes,
  data2,
  JopTypes2,
  CareerLevel,
  YEARSEXP,
  YEARSEXP2,
  slides,
  PROGRESSES,
  CareerLevel2,
  JopTypes3,
  JopTypes8,
  period,
  FieldList,
  YearsExList,
  JOBS3
};
