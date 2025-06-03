// src/components/menuItems.ts
import { ReactComponent as HomeIcon } from '../../assets/icon/icon-1.svg';
import { ReactComponent as FacilitiesIcon } from '../../assets/icon/icon-2.svg';
import { ReactComponent as OurClubIcon } from '../../assets/icon/icon-3.svg';
import { ReactComponent as PriceIcon } from '../../assets/icon/icon-4.svg';
import { ReactComponent as ContactIcon } from '../../assets/icon/icon-6.svg';
import { ReactComponent as TrophyIcon} from "../../assets/icon/icon-7.svg";

interface MenuItem {
  href: string;
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const menuItems: MenuItem[] = [
  {
    href: '#home', // изменено на '#home'
    text: 'home', // изменено на 'home'
    Icon: HomeIcon,
  },
  {
    href: '#facilities', // изменено на '#facilities'
    text: 'facilities', // изменено на 'facilities'
    Icon: FacilitiesIcon,
  },
  {
    href: '/about',
    text: 'ourclub', // изменено на 'ourclub'
    Icon: OurClubIcon,
  },
  {
    href: '#price', // изменено на '#price'
    text: 'price', // изменено на 'price'
    Icon: PriceIcon,
  },
  {
    href: '#contact', // изменено на '#contact'
    text: 'contact', // изменено на 'contact'
    Icon: ContactIcon,
  },
  {
    href: '/registration',
    text: 'registration',
    Icon: TrophyIcon,
  },
];