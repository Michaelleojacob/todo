import './renderNewButton.css';

export default function myRenderNewButton({ id, text, parent }) {
	const renderNewButton = {
		makeAddNewButton() {
			this.parentNewButtonWrap = document.createElement('div');
			this.parentNewButtonWrap.classList.add('parentNewButtonWrap');
			this.newItemBtn = document.createElement('button');
			this.newItemBtn.classList.add('newBtnWrap');
			this.newItemBtn.setAttribute('id', id);
			this.newItemBtn.innerHTML = `<i class="plusIcon fas fa-plus"></i> <span class="new${text}">${text}</span>`;
			parent.appendChild(this.parentNewButtonWrap);
			this.parentNewButtonWrap.appendChild(this.newItemBtn);
			return this.newItemBtn;
		},
	};
	return renderNewButton.makeAddNewButton();
}
