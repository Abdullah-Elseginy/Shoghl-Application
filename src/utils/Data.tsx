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
  Progress,
  Raya,
  Samsung,
  Tiktok,
  Udacity,
} from '../assets';
import {COLORS, hp, wp} from '../constants';
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
    label: 'Egypt',
    id: 'egptien',
  },
  {
    label: 'Morroco',
    id: 'morroco',
  },
  {
    label: 'Italy',
    id: 'italy',
  },
  {
    label: 'France',
    id: 'france',
  },
  {
    label: 'United Kingdom',
    id: 'uk',
  },
  {
    label: 'United States',
    id: 'us',
  },
  {
    label: 'Germany',
    id: 'germany',
  },
  {
    label: 'Spain',
    id: 'spain',
  },
  {
    label: 'Netherlands',
    id: 'netherlands',
  },
  {
    label: 'Belgium',
    id: 'belgium',
  },
  {
    label: 'Australia',
    id: 'australia',
  },
];
const GenderList = [
  {
    label: 'male',
    id: 'male',
  },
  {
    label: 'Female',
    id: 'Female',
  },
];
const Nationality = [
  {
    label: 'Egptien',
    id: 'egptien',
  },
  {
    label: 'Italy',
    id: 'italy',
  },
  {
    label: 'France',
    id: 'france',
  },
];
const City = [
  {
    label: 'Tanta',
    id: 'tanta',
  },
  {
    label: 'Cairo',
    id: 'cairo',
  },
  {
    label: 'Alex',
    id: 'alex',
  },
  {
    label: 'Giza',
    id: 'giza',
  },
  {
    label: 'Aswan',
    id: 'aswan',
  },
  {
    label: 'Dakahlia',
    id: 'dakahlia',
  },
  {
    label: 'Minya',
    id: 'minya',
  },
  {
    label: 'Monastir',
    id: 'monastir',
  },
  {
    label: 'Suez',
    id: 'suez',
  },
  {
    label: 'Sharjah',
    id: 'sharjah',
  },
  {
    label: 'Riyadh',
    id: 'riyad',
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
};
