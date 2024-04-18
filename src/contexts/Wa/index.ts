import { Client } from '../../lib/Client';
import { createSimpleContext } from '../contextFactory';

const WaContext = createSimpleContext<{
	WAInterface: Client | undefined;
}>({
	WAInterface: undefined,
});

export default WaContext;
