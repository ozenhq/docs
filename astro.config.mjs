// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.ozenhq.com',
	integrations: [
		starlight({
			title: 'ozen',
			description: 'Your private meeting copilot for Mac. Transcribes calls in Hebrew and English, knows who is speaking, and never sends audio anywhere.',
			logo: { src: './src/assets/logo.svg' },
			favicon: '/favicon.svg',
			customCss: ['@fontsource-variable/rubik', './src/styles/theme.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ozenhq/docs' }],
			editLink: { baseUrl: 'https://github.com/ozenhq/docs/edit/main/' },
			lastUpdated: true,
			sidebar: [
				{ label: 'Get started', items: ['start/install', 'start/first-meeting'] },
				{
					label: 'Everyday use',
					items: ['guides/panel', 'guides/recording', 'guides/speakers', 'guides/corrections', 'guides/ai', 'guides/multi-mac'],
				},
				{ label: 'Help', items: ['help/troubleshooting', 'help/privacy', 'help/limits'] },
				{ label: 'For developers', collapsed: true, items: [{ autogenerate: { directory: 'developers' } }] },
			],
		}),
	],
});
