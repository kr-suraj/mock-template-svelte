import { json } from '@sveltejs/kit';

export function GET() {
	return json({ title: 'John Doe' });
}
