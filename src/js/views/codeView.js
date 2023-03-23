import vs from './imgs/techs/vs.png';
import js from './imgs/techs/js.png';
import ny from './imgs/techs/netlify.png';
import gh from './imgs/techs/github.png';
import node from './imgs/techs/node.png';
import figma from './imgs/techs/figma.png';

class CodeView {
  _parentElement = window.document.querySelector('.code');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
        <div class ="code__container">
        <div class="code__introduction">
            <span >my build process<span class="lastname">usually goes like</span></span>
                <div class="technologies ">
                    <div class="tech">
                        <a class="tech__container" href="https://code.visualstudio.com" target="_blank">
                            <img src="${figma}" title="Visual Studio Code" />
                            <span class="tech__subtitle">ui tool to design</span>
                        </a>
                    </div>
                    <span></span>
                    <div class="tech">
                    <a class="tech__container" href="https://code.visualstudio.com" target="_blank">
                        <img src="${vs}" title="Visual Studio Code" />
                        <span class="tech__subtitle">editor to code</span>
                    </a>
                    </div>
                    <div class="tech">
                        <a class="tech__container" href="https://nodejs.org/en/docs" target="_blank">
                            <img src="${node}" title="Node JS" />
                            <span class="tech__subtitle">backend</span>
                        </a>
                    </div>
                    <div class="tech">
                        <a class="tech__container" href="https://htmlcheatsheet.com/js/" target="_blank">
                            <img src="${js}" title="JavaScript" />
                            <span class="tech__subtitle">frontend</span>
                        </a>
                    </div>
                    <div class="tech">
                        <a class="tech__container" href=" https://github.com/gtzjesus" target="_blank">
                            <img src="${gh}" title="GitHub" />
                            <span class="tech__subtitle">code repo</span>
                        </a>
                    </div>
                    <div class="tech">
                        <a class="tech__container" href=" https://netlify.com" target="_blank">
                            <img src="${ny}" title="Netlify" />
                            <span class="tech__subtitle">host site</span>
                        </a>
                </div>
                </div>
        </div>
        <div class="code__images"></div>
        </div>
    `;
  }
}
export default new CodeView();