import WebmentionReceiver from 'webmention-receiver'
import BlobStorage from 'webmention-handler-netlify-blobs'
const {
	URL,
	WEBHOOK,
} = process.env
export const wm = new WebmentionReceiver({
	urls: [ URL ],
	store: new BlobStorage(),
	webhook: WEBHOOK,
})
