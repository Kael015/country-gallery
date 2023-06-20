import { generateRandomImg } from '@/lib/generateRandomImg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RESORT_LIST } from '../../../DATA/RESORT_LIST';

export default function Page({ resortList} : any) {
	// *****
	// TODO:
	// 1. please change how to get the resort data using Server Side Rendering (SSR) according to the url slug from "/api/resort/detail/slug"
	// const data = RESORT_LIST[0];
	// *****

	return (
		<main>
			<Image
				src={resortList.image_url}
				alt={resortList.resort_name}
				width={1440}
				height={900}
				className="w-full max-h-[70vh] object-cover"
			/>
			<div className="text-center max-w-[1200px] mx-auto my-40">
				<h1 className="text-4xl mx-auto w-fit mb-8">
					{resortList.resort_name}
				</h1>
				<p>{resortList.resort_description}</p>
			</div>
		</main>
	);
}

export async function getServerSideProps({ query : { slug } } : any) {
	const res = await fetch('https://the-best-resort.vercel.app/api/resort/detail/' + slug);
	const data = await res.json();
	return {
		props : {
			resortList: data
		}
	}
}
