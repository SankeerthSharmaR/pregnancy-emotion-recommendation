import React, { useState } from "react";
import Navbar from "components/Navbar.js";
import Footer from "components/Footer";
import { Link } from "react-router-dom";

// Reusable Post component
const Post = ({ title, author, content, imageUrl }) => {
	const [expanded, setExpanded] = useState(false);

	const handleExpand = () => {
		setExpanded(!expanded);
	};

	return (
		<div className='bg-white rounded-lg shadow-lg p-6'>
			<h2 className='text-gray-800 text-lg font-bold mb-2'>{title}</h2>
			{imageUrl && (
				<img
					src={imageUrl}
					alt={title}
					className='mb-4 rounded-lg'
				/>
			)}
			<p className={expanded ? "" : "text-gray-600"}>
				{expanded ? content : `${content.slice(0, 100)}...`}
			</p>
			<p className='text-sm text-gray-500 mb-2'>By {author}</p>
			<button
				onClick={handleExpand}
				className='text-blue-500 font-semibold hover:text-blue-600 mt-2 inline-block'
			>
				{expanded ? "Read less" : "Read more"}
			</button>
		</div>
	);
};

export default function HomePage() {
	return (
		<>
			<Navbar transparent />
			<main>
				<section className='absolute w-full h-full'>
					<div
						className='absolute top-0 w-full h-full bg-gray-900'
						style={{
							backgroundImage: `url(${
								require("assets/img/register_bg_2.png").default
							})`,
							backgroundSize: "100%",
							backgroundRepeat: "no-repeat",
						}}
					/>
					<main>
						<section className='relative w-full h-full bg-gray-900'>
							<div className='container mx-auto px-4 py-20'>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
									<Post
										title='Blog Post Title 1'
										author='John Doe'
										content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam augue non facilisis faucibus. Sed ligula tortor, posuere sit amet convallis aliquet, suscipit id est. Sed mauris neque, sagittis quis nibh ut, facilisis molestie elit. Morbi auctor vulputate pulvinar. Nam ac congue nunc, at rhoncus arcu. Etiam vel sapien ante. Suspendisse rhoncus justo vitae libero venenatis laoreet. Nunc ornare magna at nisi aliquet efficitur non nec orci. In a mauris in diam tincidunt sodales nec sed ante. Duis a libero justo. Vestibulum lacinia vel lorem non aliquet. Mauris in metus sit amet lorem luctus dapibus. Sed pellentesque nibh at nulla vehicula facilisis. Sed ut risus nibh. Pellentesque quis scelerisque ante. Fusce in tincidunt neque, in blandit ipsum.'
									/>
									<Post
										title='Blog Post Title 2'
										author='Jane Smith'
										content='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
									/>
									<Post
										title='Blog Post Title 3'
										author='Alice Johnson'
										content='Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
									/>
								</div>
							</div>
						</section>
					</main>
					<Footer absolute />
				</section>
			</main>
		</>
	);
}
