export default (() => {
	const SELECTOR = 'jpe-blog';

	if (!!customElements.get(SELECTOR)) {
		return;
	}

	class el extends HTMLElement {
		constructor() {
			super()
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.innerHTML = `
				<style>
					:host {
						display: block;
					}
				</style>
			`;

			if (!this.setAttibutes()) {
				this.getData().catch(console.error);
			}
		}

		static get observedAttributes() {
			return ['limit', 'orderby'];
		}

		setAttibutes() {

			const limit = this.getAttribute('limit');
			const orderby = this.getAttribute('orderBy');

			this.limit = limit || 10;
			this.orderBy = orderby || 'publishedOn';

			return limit || orderby;
		}

		async getData() {
			if (this.output) {
				this.shadowRoot.removeChild(this.output);
				this.output = null;
			}

			let res = await fetch(
				`https://firestore.googleapis.com/v1/projects/jaspero-jms/databases/(default)/documents:runQuery`,
				{
					method: 'POST',
					body: JSON.stringify({
						structuredQuery: {
							from: [{
								collectionId: 'posts'
							}],
							where: {
								fieldFilter: {
									field: {
                    fieldPath: 'active'
									},
                	op: 'EQUAL',
                	value: {
                    booleanValue: true,
                	}
								}
							},
							orderBy: [{
								field: {
									fieldPath: 'publishedOn'
								},
								direction: 'DESCENDING'
							}]
						}
					})
				}
			);

			res = await res.json();

			this.output = document.createElement('div');
			this.output.classList.add('posts');

			res.forEach(doc => this.createCard(doc.document.fields));

			this.shadowRoot.appendChild(this.output);
		}

		attributeChangedCallback() {
			this.setAttibutes();
			this.getData()
				.catch(console.error);
		}

		createCard(blog) {

			const item = {
				image: blog.featuredImage.stringValue,
				title: blog.title.stringValue,
				publishedOn: new Date(
					parseInt(blog.publishedOn.integerValue, 10)
				).toDateString(),
				description: blog.meta?.mapValue?.fields?.description?.stringValue || ''
			};

			const el = document.createElement('div');
			el.classList.add('post');

			const titleEl = document.createElement('h2');
			titleEl.innerText = item.title;

			const imageEl = document.createElement('img');
			imageEl.src = item.image;

			const publishedOnEl = document.createElement('p');
			publishedOnEl.classList.add('post-published');
			publishedOnEl.innerText = item.publishedOn;

			el.appendChild(titleEl);
			el.appendChild(imageEl);
			el.appendChild(publishedOnEl);

			if (item.description) {

				const descriptionEl = document.createElement('p');
				descriptionEl.classList.add('post-description');
				descriptionEl.innerText = item.description;

				el.appendChild(descriptionEl);
			}

			this.output.appendChild(el);
		}
	}

	customElements.define(SELECTOR, el);
})()