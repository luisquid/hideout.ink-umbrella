import WebmentionReceiver from 'webmention-receiver'
import BlobStorage from 'webmention-handler-netlify-blobs'
const {
	URL,
	WEBHOOK,
	WM_TOKEN,
	SECRET,
} = process.env
// Use `WM_TOKEN` if provided but otherwise reuse the first 8 chars of `SECRET`
const token = WM_TOKEN || (SECRET ? SECRET.slice(0, 8) : null)
export const wm = new WebmentionReceiver({
	urls: [ URL ],
	store: new BlobStorage(),
	webhook: WEBHOOK,
	token,
})
