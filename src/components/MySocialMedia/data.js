import { BsDribbble, BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { ImBehance } from 'react-icons/im';

const data = [
  {
    id: 1,
    Icon: BsDribbble,
    color: '#d6336c',
    platformName: 'dribbble',
    quote:
      "I solve problems through design. I always post my Shots on Dribbble. I'm having 5k fan base in that platform",
  },
  {
    id: 2,
    Icon: BsInstagram,
    color: '#f06595',
    platformName: 'instagram',
    quote:
      'I regularly share my design updates & work to design community and update my knowledge from colleagues instgrammers',
  },
  {
    id: 3,
    Icon: FaFacebookF,
    color: '#0000b3',
    platformName: 'facebook',
    quote:
      "I have huge fan following community on facebook. I post meme's tips & promote jobs via facebook.",
  },
  {
    id: 4,
    Icon: ImBehance,
    color: '#5f3dc4',
    platformName: 'behance',
    quote:
      "Behance is an wonderful platform. I post my research and case study about the project I'm working regularly.",
  },
  {
    id: 5,
    Icon: BsYoutube,
    color: '#e60000',
    platformName: 'youtube',
    quote:
      'Giving back to community is my main motive. I help designers by creating UI/UX tutorials on youtube.',
  },
  {
    id: 6,
    Icon: BsTwitter,
    color: 'rgb(29, 155, 240)',
    platformName: 'twitter',
    quote:
      'I post tweets about latest design trends and my works. Twitter is fun, I talk about design topics & tips.',
  },
];

export default data;
