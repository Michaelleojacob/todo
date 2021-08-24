import './renderNewButton.css';

export default function myRenderNewButton({ id, text, parent }) {
	const renderNewButton = {
		makeAddNewButton() {
			this.parentNewButtonWrap = document.createElement('div');
			this.parentNewButtonWrap.classList.add(
				`${id}Parent`,
				'parentNewButtonWrap'
			);
			this.newItemBtn = document.createElement('button');
			this.newItemBtn.classList.add('newBtnWrap');
			this.newItemBtn.setAttribute('id', id);
			this.newItemBtn.innerHTML = `<i class="plusIcon fas fa-plus"></i> <span class="new${text}">${text}</span>`;
			parent.appendChild(this.parentNewButtonWrap);
			this.parentNewButtonWrap.appendChild(this.newItemBtn);
			this.makeNewItemDisplay(id);
			return this.newItemBtn;
		},
		makeNewItemDisplay(id) {
			this.formwrap = document.createElement('div');
			this.formwrap.classList.add('formwrap', 'formInactive');
			this.formwrap.setAttribute('id', `${id}Wrap`);

			this.form = document.createElement('form');
			this.form.setAttribute('id', `${id}Form`);

			this.inputWrap = document.createElement('div');
			this.inputWrap.classList.add('inputWrap');

			this.inputArea = document.createElement('input');
			this.inputArea.classList.add('inputArea');
			this.inputArea.placeholder = `enter a new task here`;
			this.inputArea.setAttribute('id', `${id}InputArea`);

			this.submitAndCancelWrap = document.createElement('div');
			this.submitAndCancelWrap.classList.add('submitAndCancelWrap');

			this.submitBtn = document.createElement('button');
			this.submitBtn.classList.add('submitBtn');
			this.submitBtn.textContent = `Add`;
			this.submitBtn.setAttribute('id', `${id}Submit`);

			this.cancelBtn = document.createElement('button');
			this.cancelBtn.classList.add('cancelBtn');
			this.cancelBtn.textContent = 'Cancel';
			this.cancelBtn.setAttribute('id', `${id}Cancel`);

			this.inputWrap.appendChild(this.inputArea);
			this.formwrap.appendChild(this.form);
			this.submitAndCancelWrap.appendChild(this.submitBtn);
			this.submitAndCancelWrap.appendChild(this.cancelBtn);
			this.form.appendChild(this.inputWrap);
			this.form.appendChild(this.submitAndCancelWrap);
			this.parentNewButtonWrap.appendChild(this.formwrap);
		},
	};
	return renderNewButton.makeAddNewButton();
}
