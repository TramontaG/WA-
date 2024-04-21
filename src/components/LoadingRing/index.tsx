import { useEffect, useState } from 'preact/hooks';
import { Container, MyCircle } from './styles';

type LoadingRingProps = {
	size: number | string;
};

const LoadingRing = ({ size }: LoadingRingProps) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setCount(1);
		const ival = setInterval(() => setCount(count => count + 1), 1000);
		return () => clearInterval(ival);
	}, []);

	return (
		<Container full={count % 2 === 0}>
			<MyCircle count={count} width={size} height={size} />
		</Container>
	);
};

export default LoadingRing;
