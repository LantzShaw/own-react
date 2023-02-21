// 在主文件的地方添加 type="module" 标识
// <script type="module" src="main.js"></script>
// NOTE: import的时候记得路径写全，因为没有webpack去帮你自动找
import Ownreact from '../own-react/index.js'

const element = Ownreact.createElement('div', null, 'Lantz Shaw')

Ownreact.render(element, document.querySelector('#root'))
