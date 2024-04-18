import { Client } from '../../lib/Client';
import { createSimpleContext } from '../contextFactory';

const WaContext = createSimpleContext<{
	Client: Client;
}>(
	{} as {
		Client: Client;
	}
);

export default WaContext;
