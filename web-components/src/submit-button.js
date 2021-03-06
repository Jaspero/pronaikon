export default (() => {
	const SELECTOR = 'jpe-submit-button';

	if (!!customElements.get(SELECTOR)) {
		return;
	}

	class el extends HTMLElement {
		constructor() {
			super()
			this.attachShadow({ mode: 'open' })
			this.shadowRoot.innerHTML = `<style>
				:host {
					display: block;
					margin-top: 25px;
				}
				
				button {
					display: inline-flex;
					align-items: center;
					padding: 10px 32px;
					background-color: #B48A41;
					color: #FFFFFF;
					cursor: pointer;
					border: none;
					font-weight: 500;
					font-family: "Mina", sans-serif;
					text-transform: uppercase;
					font-size: 14px;
					transition: .25s;
				}		
				
				button:hover {
					background-color: #FBD275;
					color: #000000;
				}
				
				.success {
					position: fixed;
					bottom: 20px;
					left: 50%;
					transform: translateX(-50%);
					white-space: nowrap;
					color: #4F8A10;
					background-color: #DFF2BF;
					font-size: 16px;
					border-radius: 999px;
					box-shadow: 0 0px 12px rgb(0 0 0 / 40%);
					padding: 10px 20px;
				}
			</style>`;
			
			this.output = document.createElement('button');
			this.output.setAttribute('type', 'submit');
			this.output.addEventListener('click', () => {
				const form = this.closest('form');

				if (!form.reportValidity()) {
					return;
				}

				this.output.setAttribute('disabled', 'true');
	
				const data = new FormData(form);
				const typeMap = {
					string: 'stringValue',
					number: 'doubleValue'
				};
				const fields = {
					createdOn: {
						integerValue: Date.now().toString()
					}
				};
	
				data.forEach((value, key) => {
					fields[key] = {
						[typeMap[typeof value]]: value
					};
				});
	
				fetch(
					`https://firestore.googleapis.com/v1/projects/pronaikon-ea42a/databases/(default)/documents/inquiries`,
					{
						method: 'POST',
						body: JSON.stringify({fields})
					}
				)
					.then(() => {
						form.reset();

						if (!this.success) {
							return;
						}
						
						const successEl = document.createElement('p');
						successEl.classList.add('success');
						successEl.innerText = this.success;

						this.shadowRoot.appendChild(successEl);

						setTimeout(() => {
							this.shadowRoot.removeChild(successEl);
						}, 5000);
					})
					.finally(() => 
						this.output.removeAttribute('disabled')
					);
			});
			
			this.shadowRoot.appendChild(this.output);
		}

		static get observedAttributes() {
			return ['label', 'success'];
		}

		connectedCallback() {
			this.output.innerText = this.getAttribute('label');
			this.success = this.getAttribute('success');
		}

		attributeChangedCallback() {
			this.connectedCallback();
		}
	}

	customElements.define(SELECTOR, el);
})()