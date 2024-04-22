import { Container, MyCircle } from './styles';

type LoadingRingProps = {
	size: number | string;
};

const LoadingRing = ({ size }: LoadingRingProps) => {
	return (
		<Container>
			<MyCircle width={size} height={size} />
		</Container>
	);
};

export default LoadingRing;
