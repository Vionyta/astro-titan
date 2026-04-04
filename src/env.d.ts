type Product = {
	id: string;
	name: string;
	price: number;
};

declare namespace App {
	interface Locals {
		orders: Map<string, Product[]>;
		session: import('./lib/server/session').Session | null;
		user: import('my-external-library').User;
	}
}
