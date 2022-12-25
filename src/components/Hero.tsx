import { FC } from 'react';

export const Hero: FC = () => {
	return (
		<section className='text-gray-400 bg-gray-900 body-font'>
			<div className='container mx-auto flex justify-between px-5 py-24 md:flex-row flex-col-reverse items-center'>
				<div className='md:w-1/2 flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
						Kali Charan Reddy
						<br className='hidden lg:inline-block' />
						Jonna
					</h1>
					<p className='mb-8 leading-relaxed'>
						Greetings and salutations! If you're in need of a full
						stack developer with a penchant for puns and a love of
						all things code, then you've come to the right place. My
						name is Kali and I specialize in turning ordinary
						websites into extraordinary experiences. So take a look
						around my portfolio and let's make some magic (or at
						least some really cool hover effects) together. Trust
						me, your users will thank you. Or at least they'll be
						able to navigate your site without pulling their hair
						out.
					</p>
					<div className='flex justify-center'>
						<button className='inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'>
							Contact
						</button>
						<button className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>
							Learn More
						</button>
					</div>
				</div>
				<div className='lg:max-w-md lg:w-1/4 md:w-1/2 w-1/2 lg:mb-0 mb-8'>
					<img
						className='object-cover object-center rounded'
						alt='hero'
						src='kalijonn.jpeg'
					/>
				</div>
			</div>
		</section>
	);
};
