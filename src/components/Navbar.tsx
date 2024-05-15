import {
	Flex,
	Link,
	Image,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button
} from '@chakra-ui/react';
import React from 'react';

import logo from '../assets/icons/logo.svg'; // TODO: fix error
import logoWord from '../assets/icons/logo_word.svg';

const links = [
	{ name: '講義專區', href: '/tag/handouts' },
	{ name: '電商專區', href: '/tag/eshop' },
	{ name: '購物車', href: '/cart' },
	{ name: '我的帳號', href: '/dashboard' }
];

const courseLinks = [
	{ name: '土壤力學', href: '/courses/soil-mechanics/' },
	{ name: '基礎工程', href: '/courses/foundation-engineering/' },
	{ name: '西班牙料理', href: '/courses/chef-ricky/' }
];

const NavLink = ({ name, href }: {
	name: string,
	href: string
}) =>
	<Link
		href={href}
		fontWeight={'bold'}
		_hover={{ color: 'whiteAlpha.500' }}
	>
		{name}
	</Link>


const Navbar = () => {
	return (
		<Flex
			px={8}
			py={2}
			justify={'space-between'}
			bgColor={'blackAlpha.800'}
		>
			<Link href='/'>
				<Flex align={'center'}>
					<Image src={logo} alt='Logo' h={45} />
					<Image src={logoWord} alt='Logo Word' h={30} />
				</Flex>
			</Link>
			<Flex justify={'space-between'} align={'center'} gap={4}>
				<Menu>
					<MenuButton as={Button} variant={'ghost'}>精選課程</MenuButton>
					<MenuList minW={'max-content'} zIndex={100}>
						{courseLinks.map((link) => (
							<MenuItem
								key={'nav_' + link.name}
								as={Link}
								href={link.href}
								fontWeight={'bold'}
								style={{ textDecoration: 'none' }}
							>
								{link.name}
							</MenuItem>
						))}
					</MenuList>
				</Menu>
				{links.map((link) => (
					<NavLink key={'nav_' + link.name} name={link.name} href={link.href} />
				))}
			</Flex>
		</Flex>
	);
};

export default Navbar;