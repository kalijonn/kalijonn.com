export const Portfolio = () => {
	return (
		<section className='text-gray-400 body-font bg-gray-900'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='flex flex-wrap w-full mb-20'>
					<div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
						<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-white'>
							Projects
						</h1>
						<div className='h-1 w-20 bg-blue-500 rounded'></div>
					</div>
					<p className='lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90'>
						A smorgasbord of my finest work as a full stack
						developer. Don't just take my word for it - take a look
						around and see for yourself. And if you're still on the
						fence, let me sweeten the deal: not only can I bring
						your web dreams to life, but I'll do it with a smile
						(and possibly a bad joke or two). Together, we can
						create something truly special (or at least make the
						internet a little more user-friendly).
					</p>
				</div>
				<div className='flex flex-wrap -m-4'>
					<div className='xl:w-1/4 md:w-1/2 p-4'>
						<div className='bg-gray-800 bg-opacity-40 p-6 rounded-lg'>
							<img
								className='h-40 rounded w-full object-cover object-center mb-6'
								src='https://dummyimage.com/720x400'
								alt='content'
							/>
							<h3 className='tracking-widest text-blue-400 text-xs font-medium title-font'>
								REACT, VITE, TYPESCRIPT
							</h3>
							<h2 className='text-lg text-white font-medium title-font mb-4'>
								kalijonn.com
							</h2>
						</div>
					</div>
					<div className='xl:w-1/4 md:w-1/2 p-4'>
						<div className='bg-gray-800 bg-opacity-40 p-6 rounded-lg'>
							<img
								className='h-40 rounded w-full object-cover object-center mb-6'
								src='https://dummyimage.com/720x400'
								alt='content'
							/>
							<h3 className='tracking-widest text-blue-400 text-xs font-medium title-font'>
								SOLID, VITE, TYPESCRIPT
							</h3>
							<h2 className='text-lg text-white font-medium title-font mb-4'>
								vevan.kalijonn.com
							</h2>
						</div>
					</div>
					<div className='xl:w-1/4 md:w-1/2 p-4'>
						<div className='bg-gray-800 bg-opacity-40 p-6 rounded-lg'>
							<img
								className='h-40 rounded w-full object-cover object-center mb-6'
								src='https://dummyimage.com/720x400'
								alt='content'
							/>
							<h3 className='tracking-widest text-blue-400 text-xs font-medium title-font'>
								SVELTE, VITE, TYPESCRIPT
							</h3>
							<h2 className='text-lg text-white font-medium title-font mb-4'>
								thesaferside.kalijonn.com
							</h2>
						</div>
					</div>
					<div className='xl:w-1/4 md:w-1/2 p-4'>
						<div className='bg-gray-800 bg-opacity-40 p-6 rounded-lg'>
							<img
								className='h-40 rounded w-full object-cover object-center mb-6'
								src='https://dummyimage.com/720x400'
								alt='content'
							/>
							<h3 className='tracking-widest text-blue-400 text-xs font-medium title-font'>
								GHOST
							</h3>
							<h2 className='text-lg text-white font-medium title-font mb-4'>
								blog.kalijonn.com
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
