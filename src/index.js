import { abc } from './myfile.js';
import jslogo from './javascript.png';
import css from './style.scss';

console.log(css);

const imgElement = document.querySelector('#my-image');
const numberElement = document.querySelector('#my-number');

class MyClass {
	constructor() {
		this.x = 5;
	}
}

const x = new MyClass();

imgElement.setAttribute('src', jslogo);
imgElement.classList.add(css['img-border']);

numberElement.addEventListener('click', async function() {
	console.log(this.value);

	// promise
	/*import('./myfile.js')
	.then(module => {
		const { abc } = module;
		abc();
	});*/

	// async/await
	//const { abc } = await import('./myfile.js');
	abc();
});

if (module.hot) {
	module.hot.accept('./myfile.js', function() {
		console.log('UPDATE: myfile.js');
	});
}

/*
Dicas:
1 - instalação do webpack local: npm install --save-dev webpack
2 - instalação do webpack-cli:npm install --save-dev webpack-cli
3 - Rodando o projeto: npm run build
*/