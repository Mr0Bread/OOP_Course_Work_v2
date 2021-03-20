import EpochsBlockComponent from 'Component/EpochsBlock/EpochsBlock.component';
import { useRouter } from 'next/router';

export default function EpochsBlock() {
	const router = useRouter();

	const onClick = () => {
		router.push('/epochs');
	};

	return (
		<EpochsBlockComponent
			onClick={ onClick }
		/>
	);
}
