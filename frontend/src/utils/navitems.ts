interface NavItems {
  id: number;
  item: string;
  url: string;
}

const navitems: NavItems[] = [
  {
    id: 1,
    item: 'Profile',
    url: '/login',
  },
  {
    id: 2,
    item: 'Discover',
    url: '/discover',
  },
];

export default navitems;
