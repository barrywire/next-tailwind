// Next imports
import Head from 'next/head';

export default function Home() {
	return (
		<div className='bg-red'>
			<Head>
				<title>Next Basic Frontend</title>
				<meta name='description' content='Custom nextjs boilerplate' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<div className='container'>
					<div className='flex items-center space-between'>
						<div className='col'>
							<p className=''>Next Basic Frontend</p>
						</div>

						<div className='col'>
							<p>
								Created by: <a href='https://github.com/BMWire'>Barry Wire</a>
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

			<footer>
				<small className='text-muted'>A simple Nextjs boilerplate</small>
			</footer>
		</div>
	);
}
