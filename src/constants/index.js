import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	threejs,
	pricewise,
	nft_marketplace,
	shirt,
	ryan,
	sophia,
	daniel,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'React Developer',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'Content Creator',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
];

const experiences = [
	{
		title: 'React.js Developer',
		iconBg: '#383E56',
		date: 'September 2022 - April 2023',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
		],
	},
	{
		title: 'Web Developer',
		iconBg: '#383E56',
		date: 'April 2023 - June 2023',
		points: [
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		title: 'Full stack Developer',
		iconBg: '#663488',
		date: 'June 2023 - Present',
		points: [
			'Design user interfaces and ensure seamless user experiences across multiple devices.',
			'Write clean, efficient, and maintainable code using modern programming languages and frameworks.',
			'Perform debugging, troubleshooting, and ongoing maintenance of existing systems.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'Highly skilled and adaptable. Exceeded my expectations by delivering a sleek and responsive website within the deadline.',
		name: 'Ryan Chang',
		image: ryan,
	},
	{
		testimonial:
			'Meticulously crafted a user-friendly website, incorporating innovative design elements that truly set our brand apart.',
		name: 'Daniel Patel',
		image: daniel,
	},
	{
		testimonial:
			'Kept me updated at every stage of the project, delivering exceptional quality and meeting all project requirements.',
		name: 'Sophia Garcia',
		image: sophia,
	},
];

const projects = [
	{
		name: 'NFT Marketplace',
		description:
			'Digital platform where users can buy, sell, trade, and showcase non-fungible tokens. Users can browse a wide array of digital assets including art, music, collectibles and more. They can also list their NFTs for sale or make purchases within the marketplace.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'nodejs',
				color: 'green-text-gradient',
			},
		],
		image: nft_marketplace,
		source_code_link: 'https://github.com/prog223/nft_marketplace',
	},
	{
		name: 'PriceWise',
		description:
			'PriceWise is a comprehensive tool designed to help users effortlessly track and analyze products available on Amazon. With our service, users can simply input an Amazon product link and gain access to a wealth of valuable information about the item.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'webscraping',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: pricewise,
		source_code_link: 'https://github.com/prog223/pricewise',
	},
	{
		name: 'AI-Shirt',
		description:
			'The innovative platform that merges creativity with cutting-edge AI technology to empower users in creating unique and personalized t-shirt designs effortlessly. Modify and fine-tune generated designs to suit individual tastes and preferences.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'nodejs',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: shirt,
		source_code_link: 'https://github.com/prog223/ThreeJS',
	},
];

export { services, technologies, experiences, testimonials, projects };
