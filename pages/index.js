// Next imports
import Head from 'next/head';

export default function Home()
{
	return (
		<>
			<Head>
				<title>Next Basic Frontend</title>
				<meta name='description' content='Custom nextjs boilerplate' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='container mx-auto bg-gray-50'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-row items-center justify-between'>
						<div className='col'>
							<h1 className='text-3xl underline'>Next Basic Frontend</h1>
						</div>

						<div className='col'>
							<p>
								Created by: <a className='font-inter text-blue-700' href='https://github.com/BMWire'>Barry Wire</a>
							</p>
						</div>
					</div>

					<p className='fs-6'>
						Get started by editing <code className='code'>pages/index.js</code>
					</p>

					<dl className='row'>
						<dt className='col-sm-3'>
							<a href='https://nextjs.org/docs'>Documentation</a>
						</dt>
						<dd className='col-sm-9'>
							Read the docs to get started, or jump to{' '}
							<a href='https://nextjs.org/docs#basic-example'>this tutorial</a>.
						</dd>
					</dl>

					<h5>Packed with the basic batteries out of the box.</h5>
					<ul>
						<li>
							<a href='https://tailwindui.com/'>TailWind</a>
						</li>
						<li>
							<a href='https://www.npmjs.com/package/commitlint'>Commitlint</a>
						</li>
						<li>
							<a href='https://www.npmjs.com/package/sass'>Sass</a>
						</li>
					</ul>
				</div>
			</main>

			<footer className='container border border-black'>
				<small className='mx-auto'>A simple Nextjs boilerplate</small>
			</footer>
		</>
	);
}
