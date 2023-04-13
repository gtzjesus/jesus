import primrose from './imgs/primrose/primrose.gif';
import gh from './imgs/techs/github-visit.gif';
import host from './imgs/techs/host.gif';

class PrimroseView {
  _parentElement = document.querySelector('.primrose');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
    <div class="primrose__container">

    <div class="primrose__intro">
        <span class="primrose__subtitle">primrose</span>
    </div>

    <div  class="primrose__description">
      <div class="primrose__display">
        <img src="${primrose}" />
      </div>
      <div class="primrose__body">
      <span class="primrose__desc">
      __________an e - commerce application that allows clients to purchase trending women's clothing, jewelry, and accessories. shop today.
      </span>
    <div class="primrose__link">
    <a class="primrose__link__a" href="" target="_blank">
      <div class="primrose__link__cont">
        <span class="primrose__link__flex">website <img src="${host}" title="Visit Site" /></span>
      </div>
    </a>
    <a class="primrose__link__a" href="" target="_blank">
      <div class="primrose__link__cont">
        <span class="primrose__link__flex">github <img src="${gh}" title="Visit Repo" /></span>
      </div>
      </a>
  </div>
  </div>
    </div>
</div>
    `;
  }
}

export default new PrimroseView();
