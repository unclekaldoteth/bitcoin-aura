import{i as z,e as G,a as q,b as A,x as c,C as M,A as D,O as Q,c as k,d as P,f as ve,E as te,R as U,j as qe,H as ri,k as K,S as wt,W as Fe,l as ae,m as xn,T as on,n as Ve,M as ai,o as si,p as $i,q as Ue,s as _i,t as Cn,u as Ei}from"./index-B5XzXjhO.js";import{n as u,c as L,o as I,r as C,U as pe,e as Ii,f as Wi,a as Ti}from"./index-DICZDjgl.js";const Si=z`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var Ie=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let fe=class extends A{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),c`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?c`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?c`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:c`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};fe.styles=[G,q,Si];Ie([u()],fe.prototype,"size",void 0);Ie([u()],fe.prototype,"name",void 0);Ie([u()],fe.prototype,"imageSrc",void 0);Ie([u()],fe.prototype,"walletIcon",void 0);Ie([u({type:Boolean})],fe.prototype,"installed",void 0);Ie([u()],fe.prototype,"badgeSize",void 0);fe=Ie([L("wui-wallet-image")],fe);const Bi=z`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var li=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};const St=4;let ot=class extends A{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<St;return c`${this.walletImages.slice(0,St).map(({src:n,walletName:o})=>c`
            <wui-wallet-image
              size="inherit"
              imageSrc=${n}
              name=${I(o)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(St-this.walletImages.length)].map(()=>c` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};ot.styles=[q,Bi];li([u({type:Array})],ot.prototype,"walletImages",void 0);ot=li([L("wui-all-wallets-image")],ot);const Li=z`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var Y=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let V=class extends A{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return c`
      <button ?disabled=${this.disabled} tabindex=${I(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?c` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?c` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?c`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?c`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?c`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?c`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?c`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};V.styles=[q,G,Li];Y([u({type:Array})],V.prototype,"walletImages",void 0);Y([u()],V.prototype,"imageSrc",void 0);Y([u()],V.prototype,"name",void 0);Y([u()],V.prototype,"tagLabel",void 0);Y([u()],V.prototype,"tagVariant",void 0);Y([u()],V.prototype,"icon",void 0);Y([u()],V.prototype,"walletIcon",void 0);Y([u()],V.prototype,"tabIdx",void 0);Y([u({type:Boolean})],V.prototype,"installed",void 0);Y([u({type:Boolean})],V.prototype,"disabled",void 0);Y([u({type:Boolean})],V.prototype,"showAllWallets",void 0);Y([u({type:Boolean})],V.prototype,"loading",void 0);Y([u({type:String})],V.prototype,"loadingSpinnerColor",void 0);V=Y([L("wui-list-wallet")],V);var ke=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let Ce=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.count=D.state.count,this.filteredCount=D.state.filteredWallets.length,this.isFetchingRecommendedWallets=D.state.isFetchingRecommendedWallets,this.unsubscribe.push(M.subscribeKey("connectors",e=>this.connectors=e),D.subscribeKey("count",e=>this.count=e),D.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),D.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(d=>d.id==="walletConnect"),{allWallets:n}=Q.state;if(!e||n==="HIDE"||n==="ONLY_MOBILE"&&!k.isMobile())return null;const o=D.state.featured.length,i=this.count+o,t=i<10?i:Math.floor(i/10)*10,a=this.filteredCount>0?this.filteredCount:t;let s=`${a}`;this.filteredCount>0?s=`${this.filteredCount}`:a<i&&(s=`${a}+`);const l=P.hasAnyConnection(ve.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${I(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
        ?disabled=${l}
      ></wui-list-wallet>
    `}onAllWallets(){te.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),U.push("AllWallets")}};ke([u()],Ce.prototype,"tabIdx",void 0);ke([C()],Ce.prototype,"connectors",void 0);ke([C()],Ce.prototype,"count",void 0);ke([C()],Ce.prototype,"filteredCount",void 0);ke([C()],Ce.prototype,"isFetchingRecommendedWallets",void 0);Ce=ke([L("w3m-all-wallets-widget")],Ce);var bt=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let Ke=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.connections=P.state.connections,this.unsubscribe.push(M.subscribeKey("connectors",e=>this.connectors=e),P.subscribeKey("connections",e=>this.connections=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(n=>n.type==="ANNOUNCED");return e?.length?c`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(qe.showConnector).map(n=>{const i=(this.connections.get(n.chain)??[]).some(t=>ri.isLowerCaseMatch(t.connectorId,n.id));return c`
            <wui-list-wallet
              imageSrc=${I(K.getConnectorImage(n))}
              name=${n.name??"Unknown"}
              @click=${()=>this.onConnector(n)}
              tagVariant=${i?"shade":"success"}
              tagLabel=${i?"connected":"installed"}
              data-testid=${`wallet-selector-${n.id}`}
              .installed=${!0}
              tabIdx=${I(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.id==="walletConnect"?k.isMobile()?U.push("AllWallets"):U.push("ConnectingWalletConnect"):U.push("ConnectingExternal",{connector:e})}};bt([u()],Ke.prototype,"tabIdx",void 0);bt([C()],Ke.prototype,"connectors",void 0);bt([C()],Ke.prototype,"connections",void 0);Ke=bt([L("w3m-connect-announced-widget")],Ke);var mt=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let He=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.loading=!1,this.unsubscribe.push(M.subscribeKey("connectors",e=>this.connectors=e)),k.isTelegram()&&k.isIos()&&(this.loading=!P.state.wcUri,this.unsubscribe.push(P.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=Q.state;if(!e?.length)return this.style.cssText="display: none",null;const n=this.filterOutDuplicateWallets(e),o=P.hasAnyConnection(ve.CONNECTOR_ID.WALLET_CONNECT);return c`<wui-flex flexDirection="column" gap="xs">
      ${n.map(i=>c`
          <wui-list-wallet
            imageSrc=${I(K.getWalletImage(i))}
            name=${i.name??"Unknown"}
            @click=${()=>this.onConnectWallet(i)}
            data-testid=${`wallet-selector-${i.id}`}
            tabIdx=${I(this.tabIdx)}
            ?loading=${this.loading}
            ?disabled=${o}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const n=wt.getRecentWallets(),o=this.connectors.map(s=>s.info?.rdns).filter(Boolean),i=n.map(s=>s.rdns).filter(Boolean),t=o.concat(i);if(t.includes("io.metamask.mobile")&&k.isMobile()){const s=t.indexOf("io.metamask.mobile");t[s]="io.metamask"}return e.filter(s=>!t.includes(String(s?.rdns)))}onConnectWallet(e){this.loading||U.push("ConnectingWalletConnect",{wallet:e})}};mt([u()],He.prototype,"tabIdx",void 0);mt([C()],He.prototype,"connectors",void 0);mt([C()],He.prototype,"loading",void 0);He=mt([L("w3m-connect-custom-widget")],He);var un=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let rt=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.unsubscribe.push(M.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const o=this.connectors.filter(t=>t.type==="EXTERNAL").filter(qe.showConnector).filter(t=>t.id!==ve.CONNECTOR_ID.COINBASE_SDK);if(!o?.length)return this.style.cssText="display: none",null;const i=P.hasAnyConnection(ve.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="xs">
        ${o.map(t=>c`
            <wui-list-wallet
              imageSrc=${I(K.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              data-testid=${`wallet-selector-external-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${I(this.tabIdx)}
              ?disabled=${i}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){U.push("ConnectingExternal",{connector:e})}};un([u()],rt.prototype,"tabIdx",void 0);un([C()],rt.prototype,"connectors",void 0);rt=un([L("w3m-connect-external-widget")],rt);var dn=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let at=class extends A{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){if(!this.wallets.length)return this.style.cssText="display: none",null;const e=P.hasAnyConnection(ve.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(n=>c`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${n.id}`}
              imageSrc=${I(K.getWalletImage(n))}
              name=${n.name??"Unknown"}
              @click=${()=>this.onConnectWallet(n)}
              tabIdx=${I(this.tabIdx)}
              ?disabled=${e}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){M.selectWalletConnector(e)}};dn([u()],at.prototype,"tabIdx",void 0);dn([u()],at.prototype,"wallets",void 0);at=dn([L("w3m-connect-featured-widget")],at);var vt=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let Ge=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=[],this.connections=P.state.connections,this.unsubscribe.push(P.subscribeKey("connections",e=>this.connections=e))}render(){const e=this.connectors.filter(qe.showConnector);return e.length===0?(this.style.cssText="display: none",null):c`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(n=>{const i=(this.connections.get(n.chain)??[]).some(t=>ri.isLowerCaseMatch(t.connectorId,n.id));return c`
            <wui-list-wallet
              imageSrc=${I(K.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name??"Unknown"}
              tagVariant=${i?"shade":"success"}
              tagLabel=${i?"connected":"installed"}
              data-testid=${`wallet-selector-${n.id}`}
              @click=${()=>this.onConnector(n)}
              tabIdx=${I(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){M.setActiveConnector(e),U.push("ConnectingExternal",{connector:e})}};vt([u()],Ge.prototype,"tabIdx",void 0);vt([u()],Ge.prototype,"connectors",void 0);vt([C()],Ge.prototype,"connections",void 0);Ge=vt([L("w3m-connect-injected-widget")],Ge);var hn=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let st=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.unsubscribe.push(M.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(n=>n.type==="MULTI_CHAIN"&&n.name!=="WalletConnect");return e?.length?c`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(n=>c`
            <wui-list-wallet
              imageSrc=${I(K.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${n.id}`}
              @click=${()=>this.onConnector(n)}
              tabIdx=${I(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){M.setActiveConnector(e),U.push("ConnectingMultiChain")}};hn([u()],st.prototype,"tabIdx",void 0);hn([C()],st.prototype,"connectors",void 0);st=hn([L("w3m-connect-multi-chain-widget")],st);var yt=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let Ye=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.loading=!1,this.unsubscribe.push(M.subscribeKey("connectors",e=>this.connectors=e)),k.isTelegram()&&k.isIos()&&(this.loading=!P.state.wcUri,this.unsubscribe.push(P.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const n=wt.getRecentWallets().filter(i=>!Fe.isExcluded(i)).filter(i=>!this.hasWalletConnector(i)).filter(i=>this.isWalletCompatibleWithCurrentChain(i));if(!n.length)return this.style.cssText="display: none",null;const o=P.hasAnyConnection(ve.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="xs">
        ${n.map(i=>c`
            <wui-list-wallet
              imageSrc=${I(K.getWalletImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnectWallet(i)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${I(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${o}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){this.loading||M.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(n=>n.id===e.id||n.name===e.name)}isWalletCompatibleWithCurrentChain(e){const n=ae.state.activeChain;return n&&e.chains?e.chains.some(o=>{const i=o.split(":")[0];return n===i}):!0}};yt([u()],Ye.prototype,"tabIdx",void 0);yt([C()],Ye.prototype,"connectors",void 0);yt([C()],Ye.prototype,"loading",void 0);Ye=yt([L("w3m-connect-recent-widget")],Ye);var xt=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let Je=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,k.isTelegram()&&k.isIos()&&(this.loading=!P.state.wcUri,this.unsubscribe.push(P.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const{connectors:e}=M.state,{customWallets:n,featuredWalletIds:o}=Q.state,i=wt.getRecentWallets(),t=e.find(p=>p.id==="walletConnect"),s=e.filter(p=>p.type==="INJECTED"||p.type==="ANNOUNCED"||p.type==="MULTI_CHAIN").filter(p=>p.name!=="Browser Wallet");if(!t)return null;if(o||n||!this.wallets.length)return this.style.cssText="display: none",null;const l=s.length+i.length,d=Math.max(0,2-l),h=Fe.filterOutDuplicateWallets(this.wallets).slice(0,d);if(!h.length)return this.style.cssText="display: none",null;const R=P.hasAnyConnection(ve.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="xs">
        ${h.map(p=>c`
            <wui-list-wallet
              imageSrc=${I(K.getWalletImage(p))}
              name=${p?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(p)}
              tabIdx=${I(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${R}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){if(this.loading)return;const n=M.getConnector({id:e.id,rdns:e.rdns});n?U.push("ConnectingExternal",{connector:n}):U.push("ConnectingWalletConnect",{wallet:e})}};xt([u()],Je.prototype,"tabIdx",void 0);xt([u()],Je.prototype,"wallets",void 0);xt([C()],Je.prototype,"loading",void 0);Je=xt([L("w3m-connect-recommended-widget")],Je);var Ct=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let Qe=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.connectorImages=xn.state.connectorImages,this.unsubscribe.push(M.subscribeKey("connectors",e=>this.connectors=e),xn.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(k.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(i=>i.id==="walletConnect");if(!e)return this.style.cssText="display: none",null;const n=e.imageUrl||this.connectorImages[e?.imageId??""],o=P.hasAnyConnection(ve.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-list-wallet
        imageSrc=${I(n)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${I(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
        ?disabled=${o}
      >
      </wui-list-wallet>
    `}onConnector(e){M.setActiveConnector(e),U.push("ConnectingWalletConnect")}};Ct([u()],Qe.prototype,"tabIdx",void 0);Ct([C()],Qe.prototype,"connectors",void 0);Ct([C()],Qe.prototype,"connectorImages",void 0);Qe=Ct([L("w3m-connect-walletconnect-widget")],Qe);const Oi=z`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Xe=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let Re=class extends A{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.recommended=D.state.recommended,this.featured=D.state.featured,this.unsubscribe.push(M.subscribeKey("connectors",e=>this.connectors=e),D.subscribeKey("recommended",e=>this.recommended=e),D.subscribeKey("featured",e=>this.featured=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:e,recent:n,announced:o,injected:i,multiChain:t,recommended:a,featured:s,external:l}=qe.getConnectorsByType(this.connectors,this.recommended,this.featured);return qe.getConnectorTypeOrder({custom:e,recent:n,announced:o,injected:i,multiChain:t,recommended:a,featured:s,external:l}).map(h=>{switch(h){case"injected":return c`
            ${t.length?c`<w3m-connect-multi-chain-widget
                  tabIdx=${I(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${o.length?c`<w3m-connect-announced-widget
                  tabIdx=${I(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${i.length?c`<w3m-connect-injected-widget
                  .connectors=${i}
                  tabIdx=${I(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return c`<w3m-connect-walletconnect-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return c`<w3m-connect-recent-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return c`<w3m-connect-featured-widget
            .wallets=${s}
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return c`<w3m-connect-custom-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return c`<w3m-connect-external-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return c`<w3m-connect-recommended-widget
            .wallets=${a}
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${h}`),null}})}};Re.styles=Oi;Xe([u()],Re.prototype,"tabIdx",void 0);Xe([C()],Re.prototype,"connectors",void 0);Xe([C()],Re.prototype,"recommended",void 0);Xe([C()],Re.prototype,"featured",void 0);Re=Xe([L("w3m-connector-list")],Re);const Pi=z`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var xe=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let se=class extends A{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,n)=>{const o=n===this.activeTab;return c`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${o}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?c`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,n){const o=this.buttons[this.activeTab],i=this.buttons[e],t=o?.querySelector("wui-text"),a=i?.querySelector("wui-text"),s=i?.getBoundingClientRect(),l=a?.getBoundingClientRect();o&&t&&!n&&e!==this.activeTab&&(t.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),o.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&s&&l&&a&&(e!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(s.width+l.width)+6}px`,i.animate([{width:`${s.width+l.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:n?0:125,delay:n?0:200,fill:"forwards",easing:"ease"}))}};se.styles=[q,G,Pi];xe([u({type:Array})],se.prototype,"tabs",void 0);xe([u()],se.prototype,"onTabChange",void 0);xe([u({type:Array})],se.prototype,"buttons",void 0);xe([u({type:Boolean})],se.prototype,"disabled",void 0);xe([u()],se.prototype,"localTabWidth",void 0);xe([C()],se.prototype,"activeTab",void 0);xe([C()],se.prototype,"isDense",void 0);se=xe([L("wui-tabs")],se);var pn=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let lt=class extends A{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return c`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:n})=>n),e}onTabChange(e){const n=this.platformTabs[e];n&&this.onSelectPlatfrom?.(n)}};pn([u({type:Array})],lt.prototype,"platforms",void 0);pn([u()],lt.prototype,"onSelectPlatfrom",void 0);lt=pn([L("w3m-connecting-header")],lt);const Ai=z`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-s) var(--wui-spacing-3xs) var(--wui-spacing-s);
    height: 24px;
  }

  button[data-size='xs'][data-icon-left='true'][data-icon-right='false'] {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-s) var(--wui-spacing-3xs) var(--wui-spacing-s);
  }

  button[data-size='xs'][data-icon-right='true'][data-icon-left='false'] {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-s) var(--wui-spacing-3xs) var(--wui-spacing-s);
  }

  button[data-size='sm'] {
    padding: 7.2px var(--wui-spacing-s) 7.2px var(--wui-spacing-s);
    height: 32px;
  }

  button[data-size='sm'][data-icon-left='true'][data-icon-right='false'] {
    padding: 7.2px var(--wui-spacing-s) 7.2px var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-right='true'][data-icon-left='false'] {
    padding: 7.2px var(--wui-spacing-s) 7.2px var(--wui-spacing-s);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var le=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};const Rn={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},Ni={lg:"paragraph-600",md:"small-600",sm:"small-600",xs:"tiny-600"},ki={lg:"md",md:"md",sm:"sm",xs:"sm"};let X=class extends A{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const e=this.textVariant??Ni[this.size];return c`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=ki[this.size],n=this.disabled?Rn.disabled:Rn[this.variant];return c`<wui-loading-spinner color=${n} size=${e}></wui-loading-spinner>`}return c``}};X.styles=[q,G,Ai];le([u()],X.prototype,"size",void 0);le([u({type:Boolean})],X.prototype,"disabled",void 0);le([u({type:Boolean})],X.prototype,"fullWidth",void 0);le([u({type:Boolean})],X.prototype,"loading",void 0);le([u()],X.prototype,"variant",void 0);le([u({type:Boolean})],X.prototype,"hasIconLeft",void 0);le([u({type:Boolean})],X.prototype,"hasIconRight",void 0);le([u()],X.prototype,"borderRadius",void 0);le([u()],X.prototype,"textVariant",void 0);X=le([L("wui-button")],X);const ji=z`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var Rt=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let Oe=class extends A{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return c`
      <button ?disabled=${this.disabled} tabindex=${I(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Oe.styles=[q,G,ji];Rt([u()],Oe.prototype,"tabIdx",void 0);Rt([u({type:Boolean})],Oe.prototype,"disabled",void 0);Rt([u()],Oe.prototype,"color",void 0);Oe=Rt([L("wui-link")],Oe);const Di=z`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var ci=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let ct=class extends A{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,o=36-e,i=116+o,t=245+o,a=360+o*1.75;return c`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${t}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};ct.styles=[q,Di];ci([u({type:Number})],ct.prototype,"radius",void 0);ct=ci([L("wui-loading-thumbnail")],ct);const zi=z`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var We=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let ge=class extends A{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const e=this.size==="sm"?"small-600":"paragraph-600";return c`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?c`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};ge.styles=[q,G,zi];We([u()],ge.prototype,"variant",void 0);We([u()],ge.prototype,"imageSrc",void 0);We([u({type:Boolean})],ge.prototype,"disabled",void 0);We([u()],ge.prototype,"icon",void 0);We([u()],ge.prototype,"size",void 0);We([u()],ge.prototype,"text",void 0);ge=We([L("wui-chip-button")],ge);const Mi=z`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var $t=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let Pe=class extends A{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return c`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Pe.styles=[q,G,Mi];$t([u({type:Boolean})],Pe.prototype,"disabled",void 0);$t([u()],Pe.prototype,"label",void 0);$t([u()],Pe.prototype,"buttonLabel",void 0);Pe=$t([L("wui-cta-button")],Pe);const Ui=z`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var ui=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let ut=class extends A{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:n,play_store:o,chrome_store:i,homepage:t}=this.wallet,a=k.isMobile(),s=k.isIos(),l=k.isAndroid(),d=[n,o,t,i].filter(Boolean).length>1,h=pe.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return d&&!a?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>U.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&t?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&s?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&l?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&k.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&k.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&k.openHref(this.wallet.homepage,"_blank")}};ut.styles=[Ui];ui([u({type:Object})],ut.prototype,"wallet",void 0);ut=ui([L("w3m-mobile-download-links")],ut);const qi=z`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var ie=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};class F extends A{constructor(){super(),this.wallet=U.state.data?.wallet,this.connector=U.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=K.getWalletImage(this.wallet)??K.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=P.state.wcUri,this.error=P.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(P.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),P.subscribeKey("wcError",e=>this.error=e)),(k.isTelegram()||k.isSafari())&&k.isIos()&&P.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),P.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n="";return this.label?n=this.label:(n=`Continue in ${this.name}`,this.error&&(n="Connection declined")),c`
      <wui-flex
        data-error=${I(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${I(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text
            align="center"
            variant="paragraph-500"
            color=${this.error?"error-100":"fg-100"}
          >
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?c`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?c`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){P.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const e=on.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(k.copyToClopboard(this.uri),Ve.showSuccess("Link copied"))}catch{Ve.showError("Failed to copy")}}}F.styles=qi;ie([C()],F.prototype,"isRetrying",void 0);ie([C()],F.prototype,"uri",void 0);ie([C()],F.prototype,"error",void 0);ie([C()],F.prototype,"ready",void 0);ie([C()],F.prototype,"showRetry",void 0);ie([C()],F.prototype,"label",void 0);ie([C()],F.prototype,"secondaryBtnLabel",void 0);ie([C()],F.prototype,"secondaryLabel",void 0);ie([C()],F.prototype,"isLoading",void 0);ie([u({type:Boolean})],F.prototype,"isMobile",void 0);ie([u()],F.prototype,"onRetry",void 0);var Fi=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let $n=class extends F{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),te.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=M.state,n=e.find(o=>o.type==="ANNOUNCED"&&o.info?.rdns===this.wallet?.rdns||o.type==="INJECTED"||o.name===this.wallet?.name);if(n)await P.connectExternal(n,n.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");ai.close(),te.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown",caipNetworkId:ae.getActiveCaipNetwork()?.caipNetworkId}})}catch(e){te.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};$n=Fi([L("w3m-connecting-wc-browser")],$n);var Vi=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let _n=class extends F{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),te.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:n}=this.wallet,{redirect:o,href:i}=k.formatNativeUrl(e,this.uri);P.setWcLinking({name:n,href:i}),P.setRecentWallet(this.wallet),k.openHref(o,"_blank")}catch{this.error=!0}}};_n=Vi([L("w3m-connecting-wc-desktop")],_n);var je=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let $e=class extends F{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=Q.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,link_mode:n,name:o}=this.wallet,{redirect:i,redirectUniversalLink:t,href:a}=k.formatNativeUrl(e,this.uri,n);this.redirectDeeplink=i,this.redirectUniversalLink=t,this.target=k.isIframe()?"_top":"_self",P.setWcLinking({name:o,href:a}),P.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?k.openHref(this.redirectUniversalLink,this.target):k.openHref(this.redirectDeeplink,this.target)}catch(e){te.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=si.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(P.subscribeKey("wcUri",()=>{this.onHandleURI()})),te.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){P.setWcError(!1),this.onConnect?.()}};je([C()],$e.prototype,"redirectDeeplink",void 0);je([C()],$e.prototype,"redirectUniversalLink",void 0);je([C()],$e.prototype,"target",void 0);je([C()],$e.prototype,"preferUniversalLinks",void 0);je([C()],$e.prototype,"isLoading",void 0);$e=je([L("w3m-connecting-wc-mobile")],$e);var Le={},Bt,En;function Ki(){return En||(En=1,Bt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Bt}var Lt={},me={},In;function Te(){if(In)return me;In=1;let r;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return me.getSymbolSize=function(o){if(!o)throw new Error('"version" cannot be null or undefined');if(o<1||o>40)throw new Error('"version" should be in range from 1 to 40');return o*4+17},me.getSymbolTotalCodewords=function(o){return e[o]},me.getBCHDigit=function(n){let o=0;for(;n!==0;)o++,n>>>=1;return o},me.setToSJISFunction=function(o){if(typeof o!="function")throw new Error('"toSJISFunc" is not a valid function.');r=o},me.isKanjiModeEnabled=function(){return typeof r<"u"},me.toSJIS=function(o){return r(o)},me}var Ot={},Wn;function fn(){return Wn||(Wn=1,(function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+n)}}r.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},r.from=function(o,i){if(r.isValid(o))return o;try{return e(o)}catch{return i}}})(Ot)),Ot}var Pt,Tn;function Hi(){if(Tn)return Pt;Tn=1;function r(){this.buffer=[],this.length=0}return r.prototype={get:function(e){const n=Math.floor(e/8);return(this.buffer[n]>>>7-e%8&1)===1},put:function(e,n){for(let o=0;o<n;o++)this.putBit((e>>>n-o-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const n=Math.floor(this.length/8);this.buffer.length<=n&&this.buffer.push(0),e&&(this.buffer[n]|=128>>>this.length%8),this.length++}},Pt=r,Pt}var At,Sn;function Gi(){if(Sn)return At;Sn=1;function r(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return r.prototype.set=function(e,n,o,i){const t=e*this.size+n;this.data[t]=o,i&&(this.reservedBit[t]=!0)},r.prototype.get=function(e,n){return this.data[e*this.size+n]},r.prototype.xor=function(e,n,o){this.data[e*this.size+n]^=o},r.prototype.isReserved=function(e,n){return this.reservedBit[e*this.size+n]},At=r,At}var Nt={},Bn;function Yi(){return Bn||(Bn=1,(function(r){const e=Te().getSymbolSize;r.getRowColCoords=function(o){if(o===1)return[];const i=Math.floor(o/7)+2,t=e(o),a=t===145?26:Math.ceil((t-13)/(2*i-2))*2,s=[t-7];for(let l=1;l<i-1;l++)s[l]=s[l-1]-a;return s.push(6),s.reverse()},r.getPositions=function(o){const i=[],t=r.getRowColCoords(o),a=t.length;for(let s=0;s<a;s++)for(let l=0;l<a;l++)s===0&&l===0||s===0&&l===a-1||s===a-1&&l===0||i.push([t[s],t[l]]);return i}})(Nt)),Nt}var kt={},Ln;function Ji(){if(Ln)return kt;Ln=1;const r=Te().getSymbolSize,e=7;return kt.getPositions=function(o){const i=r(o);return[[0,0],[i-e,0],[0,i-e]]},kt}var jt={},On;function Qi(){return On||(On=1,(function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};r.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},r.from=function(i){return r.isValid(i)?parseInt(i,10):void 0},r.getPenaltyN1=function(i){const t=i.size;let a=0,s=0,l=0,d=null,h=null;for(let R=0;R<t;R++){s=l=0,d=h=null;for(let p=0;p<t;p++){let g=i.get(R,p);g===d?s++:(s>=5&&(a+=e.N1+(s-5)),d=g,s=1),g=i.get(p,R),g===h?l++:(l>=5&&(a+=e.N1+(l-5)),h=g,l=1)}s>=5&&(a+=e.N1+(s-5)),l>=5&&(a+=e.N1+(l-5))}return a},r.getPenaltyN2=function(i){const t=i.size;let a=0;for(let s=0;s<t-1;s++)for(let l=0;l<t-1;l++){const d=i.get(s,l)+i.get(s,l+1)+i.get(s+1,l)+i.get(s+1,l+1);(d===4||d===0)&&a++}return a*e.N2},r.getPenaltyN3=function(i){const t=i.size;let a=0,s=0,l=0;for(let d=0;d<t;d++){s=l=0;for(let h=0;h<t;h++)s=s<<1&2047|i.get(d,h),h>=10&&(s===1488||s===93)&&a++,l=l<<1&2047|i.get(h,d),h>=10&&(l===1488||l===93)&&a++}return a*e.N3},r.getPenaltyN4=function(i){let t=0;const a=i.data.length;for(let l=0;l<a;l++)t+=i.data[l];return Math.abs(Math.ceil(t*100/a/5)-10)*e.N4};function n(o,i,t){switch(o){case r.Patterns.PATTERN000:return(i+t)%2===0;case r.Patterns.PATTERN001:return i%2===0;case r.Patterns.PATTERN010:return t%3===0;case r.Patterns.PATTERN011:return(i+t)%3===0;case r.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(t/3))%2===0;case r.Patterns.PATTERN101:return i*t%2+i*t%3===0;case r.Patterns.PATTERN110:return(i*t%2+i*t%3)%2===0;case r.Patterns.PATTERN111:return(i*t%3+(i+t)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}r.applyMask=function(i,t){const a=t.size;for(let s=0;s<a;s++)for(let l=0;l<a;l++)t.isReserved(l,s)||t.xor(l,s,n(i,l,s))},r.getBestMask=function(i,t){const a=Object.keys(r.Patterns).length;let s=0,l=1/0;for(let d=0;d<a;d++){t(d),r.applyMask(d,i);const h=r.getPenaltyN1(i)+r.getPenaltyN2(i)+r.getPenaltyN3(i)+r.getPenaltyN4(i);r.applyMask(d,i),h<l&&(l=h,s=d)}return s}})(jt)),jt}var it={},Pn;function di(){if(Pn)return it;Pn=1;const r=fn(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return it.getBlocksCount=function(i,t){switch(t){case r.L:return e[(i-1)*4+0];case r.M:return e[(i-1)*4+1];case r.Q:return e[(i-1)*4+2];case r.H:return e[(i-1)*4+3];default:return}},it.getTotalCodewordsCount=function(i,t){switch(t){case r.L:return n[(i-1)*4+0];case r.M:return n[(i-1)*4+1];case r.Q:return n[(i-1)*4+2];case r.H:return n[(i-1)*4+3];default:return}},it}var Dt={},Me={},An;function Xi(){if(An)return Me;An=1;const r=new Uint8Array(512),e=new Uint8Array(256);return(function(){let o=1;for(let i=0;i<255;i++)r[i]=o,e[o]=i,o<<=1,o&256&&(o^=285);for(let i=255;i<512;i++)r[i]=r[i-255]})(),Me.log=function(o){if(o<1)throw new Error("log("+o+")");return e[o]},Me.exp=function(o){return r[o]},Me.mul=function(o,i){return o===0||i===0?0:r[e[o]+e[i]]},Me}var Nn;function Zi(){return Nn||(Nn=1,(function(r){const e=Xi();r.mul=function(o,i){const t=new Uint8Array(o.length+i.length-1);for(let a=0;a<o.length;a++)for(let s=0;s<i.length;s++)t[a+s]^=e.mul(o[a],i[s]);return t},r.mod=function(o,i){let t=new Uint8Array(o);for(;t.length-i.length>=0;){const a=t[0];for(let l=0;l<i.length;l++)t[l]^=e.mul(i[l],a);let s=0;for(;s<t.length&&t[s]===0;)s++;t=t.slice(s)}return t},r.generateECPolynomial=function(o){let i=new Uint8Array([1]);for(let t=0;t<o;t++)i=r.mul(i,new Uint8Array([1,e.exp(t)]));return i}})(Dt)),Dt}var zt,kn;function eo(){if(kn)return zt;kn=1;const r=Zi();function e(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(o){this.degree=o,this.genPoly=r.generateECPolynomial(this.degree)},e.prototype.encode=function(o){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(o.length+this.degree);i.set(o);const t=r.mod(i,this.genPoly),a=this.degree-t.length;if(a>0){const s=new Uint8Array(this.degree);return s.set(t,a),s}return t},zt=e,zt}var Mt={},Ut={},qt={},jn;function hi(){return jn||(jn=1,qt.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),qt}var re={},Dn;function pi(){if(Dn)return re;Dn=1;const r="[0-9]+",e="[A-Z $%*+\\-./:]+";let n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");const o="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+`)(?:.|[\r
]))+`;re.KANJI=new RegExp(n,"g"),re.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),re.BYTE=new RegExp(o,"g"),re.NUMERIC=new RegExp(r,"g"),re.ALPHANUMERIC=new RegExp(e,"g");const i=new RegExp("^"+n+"$"),t=new RegExp("^"+r+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return re.testKanji=function(l){return i.test(l)},re.testNumeric=function(l){return t.test(l)},re.testAlphanumeric=function(l){return a.test(l)},re}var zn;function Se(){return zn||(zn=1,(function(r){const e=hi(),n=pi();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(t,a){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?t.ccBits[0]:a<27?t.ccBits[1]:t.ccBits[2]},r.getBestModeForData=function(t){return n.testNumeric(t)?r.NUMERIC:n.testAlphanumeric(t)?r.ALPHANUMERIC:n.testKanji(t)?r.KANJI:r.BYTE},r.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},r.isValid=function(t){return t&&t.bit&&t.ccBits};function o(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+i)}}r.from=function(t,a){if(r.isValid(t))return t;try{return o(t)}catch{return a}}})(Ut)),Ut}var Mn;function to(){return Mn||(Mn=1,(function(r){const e=Te(),n=di(),o=fn(),i=Se(),t=hi(),a=7973,s=e.getBCHDigit(a);function l(p,g,W){for(let v=1;v<=40;v++)if(g<=r.getCapacity(v,W,p))return v}function d(p,g){return i.getCharCountIndicator(p,g)+4}function h(p,g){let W=0;return p.forEach(function(v){const T=d(v.mode,g);W+=T+v.getBitsLength()}),W}function R(p,g){for(let W=1;W<=40;W++)if(h(p,W)<=r.getCapacity(W,g,i.MIXED))return W}r.from=function(g,W){return t.isValid(g)?parseInt(g,10):W},r.getCapacity=function(g,W,v){if(!t.isValid(g))throw new Error("Invalid QR Code version");typeof v>"u"&&(v=i.BYTE);const T=e.getSymbolTotalCodewords(g),b=n.getTotalCodewordsCount(g,W),w=(T-b)*8;if(v===i.MIXED)return w;const m=w-d(v,g);switch(v){case i.NUMERIC:return Math.floor(m/10*3);case i.ALPHANUMERIC:return Math.floor(m/11*2);case i.KANJI:return Math.floor(m/13);case i.BYTE:default:return Math.floor(m/8)}},r.getBestVersionForData=function(g,W){let v;const T=o.from(W,o.M);if(Array.isArray(g)){if(g.length>1)return R(g,T);if(g.length===0)return 1;v=g[0]}else v=g;return l(v.mode,v.getLength(),T)},r.getEncodedBits=function(g){if(!t.isValid(g)||g<7)throw new Error("Invalid QR Code version");let W=g<<12;for(;e.getBCHDigit(W)-s>=0;)W^=a<<e.getBCHDigit(W)-s;return g<<12|W}})(Mt)),Mt}var Ft={},Un;function no(){if(Un)return Ft;Un=1;const r=Te(),e=1335,n=21522,o=r.getBCHDigit(e);return Ft.getEncodedBits=function(t,a){const s=t.bit<<3|a;let l=s<<10;for(;r.getBCHDigit(l)-o>=0;)l^=e<<r.getBCHDigit(l)-o;return(s<<10|l)^n},Ft}var Vt={},Kt,qn;function io(){if(qn)return Kt;qn=1;const r=Se();function e(n){this.mode=r.NUMERIC,this.data=n.toString()}return e.getBitsLength=function(o){return 10*Math.floor(o/3)+(o%3?o%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(o){let i,t,a;for(i=0;i+3<=this.data.length;i+=3)t=this.data.substr(i,3),a=parseInt(t,10),o.put(a,10);const s=this.data.length-i;s>0&&(t=this.data.substr(i),a=parseInt(t,10),o.put(a,s*3+1))},Kt=e,Kt}var Ht,Fn;function oo(){if(Fn)return Ht;Fn=1;const r=Se(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function n(o){this.mode=r.ALPHANUMERIC,this.data=o}return n.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(i){let t;for(t=0;t+2<=this.data.length;t+=2){let a=e.indexOf(this.data[t])*45;a+=e.indexOf(this.data[t+1]),i.put(a,11)}this.data.length%2&&i.put(e.indexOf(this.data[t]),6)},Ht=n,Ht}var Gt,Vn;function ro(){return Vn||(Vn=1,Gt=function(e){for(var n=[],o=e.length,i=0;i<o;i++){var t=e.charCodeAt(i);if(t>=55296&&t<=56319&&o>i+1){var a=e.charCodeAt(i+1);a>=56320&&a<=57343&&(t=(t-55296)*1024+a-56320+65536,i+=1)}if(t<128){n.push(t);continue}if(t<2048){n.push(t>>6|192),n.push(t&63|128);continue}if(t<55296||t>=57344&&t<65536){n.push(t>>12|224),n.push(t>>6&63|128),n.push(t&63|128);continue}if(t>=65536&&t<=1114111){n.push(t>>18|240),n.push(t>>12&63|128),n.push(t>>6&63|128),n.push(t&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer}),Gt}var Yt,Kn;function ao(){if(Kn)return Yt;Kn=1;const r=ro(),e=Se();function n(o){this.mode=e.BYTE,typeof o=="string"&&(o=r(o)),this.data=new Uint8Array(o)}return n.getBitsLength=function(i){return i*8},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(o){for(let i=0,t=this.data.length;i<t;i++)o.put(this.data[i],8)},Yt=n,Yt}var Jt,Hn;function so(){if(Hn)return Jt;Hn=1;const r=Se(),e=Te();function n(o){this.mode=r.KANJI,this.data=o}return n.getBitsLength=function(i){return i*13},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(o){let i;for(i=0;i<this.data.length;i++){let t=e.toSJIS(this.data[i]);if(t>=33088&&t<=40956)t-=33088;else if(t>=57408&&t<=60351)t-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);t=(t>>>8&255)*192+(t&255),o.put(t,13)}},Jt=n,Jt}var Qt={exports:{}},Gn;function lo(){return Gn||(Gn=1,(function(r){var e={single_source_shortest_paths:function(n,o,i){var t={},a={};a[o]=0;var s=e.PriorityQueue.make();s.push(o,0);for(var l,d,h,R,p,g,W,v,T;!s.empty();){l=s.pop(),d=l.value,R=l.cost,p=n[d]||{};for(h in p)p.hasOwnProperty(h)&&(g=p[h],W=R+g,v=a[h],T=typeof a[h]>"u",(T||v>W)&&(a[h]=W,s.push(h,W),t[h]=d))}if(typeof i<"u"&&typeof a[i]>"u"){var b=["Could not find a path from ",o," to ",i,"."].join("");throw new Error(b)}return t},extract_shortest_path_from_predecessor_list:function(n,o){for(var i=[],t=o;t;)i.push(t),n[t],t=n[t];return i.reverse(),i},find_path:function(n,o,i){var t=e.single_source_shortest_paths(n,o,i);return e.extract_shortest_path_from_predecessor_list(t,i)},PriorityQueue:{make:function(n){var o=e.PriorityQueue,i={},t;n=n||{};for(t in o)o.hasOwnProperty(t)&&(i[t]=o[t]);return i.queue=[],i.sorter=n.sorter||o.default_sorter,i},default_sorter:function(n,o){return n.cost-o.cost},push:function(n,o){var i={value:n,cost:o};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=e})(Qt)),Qt.exports}var Yn;function co(){return Yn||(Yn=1,(function(r){const e=Se(),n=io(),o=oo(),i=ao(),t=so(),a=pi(),s=Te(),l=lo();function d(b){return unescape(encodeURIComponent(b)).length}function h(b,w,m){const f=[];let j;for(;(j=b.exec(m))!==null;)f.push({data:j[0],index:j.index,mode:w,length:j[0].length});return f}function R(b){const w=h(a.NUMERIC,e.NUMERIC,b),m=h(a.ALPHANUMERIC,e.ALPHANUMERIC,b);let f,j;return s.isKanjiModeEnabled()?(f=h(a.BYTE,e.BYTE,b),j=h(a.KANJI,e.KANJI,b)):(f=h(a.BYTE_KANJI,e.BYTE,b),j=[]),w.concat(m,f,j).sort(function(S,E){return S.index-E.index}).map(function(S){return{data:S.data,mode:S.mode,length:S.length}})}function p(b,w){switch(w){case e.NUMERIC:return n.getBitsLength(b);case e.ALPHANUMERIC:return o.getBitsLength(b);case e.KANJI:return t.getBitsLength(b);case e.BYTE:return i.getBitsLength(b)}}function g(b){return b.reduce(function(w,m){const f=w.length-1>=0?w[w.length-1]:null;return f&&f.mode===m.mode?(w[w.length-1].data+=m.data,w):(w.push(m),w)},[])}function W(b){const w=[];for(let m=0;m<b.length;m++){const f=b[m];switch(f.mode){case e.NUMERIC:w.push([f,{data:f.data,mode:e.ALPHANUMERIC,length:f.length},{data:f.data,mode:e.BYTE,length:f.length}]);break;case e.ALPHANUMERIC:w.push([f,{data:f.data,mode:e.BYTE,length:f.length}]);break;case e.KANJI:w.push([f,{data:f.data,mode:e.BYTE,length:d(f.data)}]);break;case e.BYTE:w.push([{data:f.data,mode:e.BYTE,length:d(f.data)}])}}return w}function v(b,w){const m={},f={start:{}};let j=["start"];for(let x=0;x<b.length;x++){const S=b[x],E=[];for(let y=0;y<S.length;y++){const O=S[y],$=""+x+y;E.push($),m[$]={node:O,lastCount:0},f[$]={};for(let B=0;B<j.length;B++){const _=j[B];m[_]&&m[_].node.mode===O.mode?(f[_][$]=p(m[_].lastCount+O.length,O.mode)-p(m[_].lastCount,O.mode),m[_].lastCount+=O.length):(m[_]&&(m[_].lastCount=O.length),f[_][$]=p(O.length,O.mode)+4+e.getCharCountIndicator(O.mode,w))}}j=E}for(let x=0;x<j.length;x++)f[j[x]].end=0;return{map:f,table:m}}function T(b,w){let m;const f=e.getBestModeForData(b);if(m=e.from(w,f),m!==e.BYTE&&m.bit<f.bit)throw new Error('"'+b+'" cannot be encoded with mode '+e.toString(m)+`.
 Suggested mode is: `+e.toString(f));switch(m===e.KANJI&&!s.isKanjiModeEnabled()&&(m=e.BYTE),m){case e.NUMERIC:return new n(b);case e.ALPHANUMERIC:return new o(b);case e.KANJI:return new t(b);case e.BYTE:return new i(b)}}r.fromArray=function(w){return w.reduce(function(m,f){return typeof f=="string"?m.push(T(f,null)):f.data&&m.push(T(f.data,f.mode)),m},[])},r.fromString=function(w,m){const f=R(w,s.isKanjiModeEnabled()),j=W(f),x=v(j,m),S=l.find_path(x.map,"start","end"),E=[];for(let y=1;y<S.length-1;y++)E.push(x.table[S[y]].node);return r.fromArray(g(E))},r.rawSplit=function(w){return r.fromArray(R(w,s.isKanjiModeEnabled()))}})(Vt)),Vt}var Jn;function uo(){if(Jn)return Lt;Jn=1;const r=Te(),e=fn(),n=Hi(),o=Gi(),i=Yi(),t=Ji(),a=Qi(),s=di(),l=eo(),d=to(),h=no(),R=Se(),p=co();function g(x,S){const E=x.size,y=t.getPositions(S);for(let O=0;O<y.length;O++){const $=y[O][0],B=y[O][1];for(let _=-1;_<=7;_++)if(!($+_<=-1||E<=$+_))for(let N=-1;N<=7;N++)B+N<=-1||E<=B+N||(_>=0&&_<=6&&(N===0||N===6)||N>=0&&N<=6&&(_===0||_===6)||_>=2&&_<=4&&N>=2&&N<=4?x.set($+_,B+N,!0,!0):x.set($+_,B+N,!1,!0))}}function W(x){const S=x.size;for(let E=8;E<S-8;E++){const y=E%2===0;x.set(E,6,y,!0),x.set(6,E,y,!0)}}function v(x,S){const E=i.getPositions(S);for(let y=0;y<E.length;y++){const O=E[y][0],$=E[y][1];for(let B=-2;B<=2;B++)for(let _=-2;_<=2;_++)B===-2||B===2||_===-2||_===2||B===0&&_===0?x.set(O+B,$+_,!0,!0):x.set(O+B,$+_,!1,!0)}}function T(x,S){const E=x.size,y=d.getEncodedBits(S);let O,$,B;for(let _=0;_<18;_++)O=Math.floor(_/3),$=_%3+E-8-3,B=(y>>_&1)===1,x.set(O,$,B,!0),x.set($,O,B,!0)}function b(x,S,E){const y=x.size,O=h.getEncodedBits(S,E);let $,B;for($=0;$<15;$++)B=(O>>$&1)===1,$<6?x.set($,8,B,!0):$<8?x.set($+1,8,B,!0):x.set(y-15+$,8,B,!0),$<8?x.set(8,y-$-1,B,!0):$<9?x.set(8,15-$-1+1,B,!0):x.set(8,15-$-1,B,!0);x.set(y-8,8,1,!0)}function w(x,S){const E=x.size;let y=-1,O=E-1,$=7,B=0;for(let _=E-1;_>0;_-=2)for(_===6&&_--;;){for(let N=0;N<2;N++)if(!x.isReserved(O,_-N)){let be=!1;B<S.length&&(be=(S[B]>>>$&1)===1),x.set(O,_-N,be),$--,$===-1&&(B++,$=7)}if(O+=y,O<0||E<=O){O-=y,y=-y;break}}}function m(x,S,E){const y=new n;E.forEach(function(N){y.put(N.mode.bit,4),y.put(N.getLength(),R.getCharCountIndicator(N.mode,x)),N.write(y)});const O=r.getSymbolTotalCodewords(x),$=s.getTotalCodewordsCount(x,S),B=(O-$)*8;for(y.getLengthInBits()+4<=B&&y.put(0,4);y.getLengthInBits()%8!==0;)y.putBit(0);const _=(B-y.getLengthInBits())/8;for(let N=0;N<_;N++)y.put(N%2?17:236,8);return f(y,x,S)}function f(x,S,E){const y=r.getSymbolTotalCodewords(S),O=s.getTotalCodewordsCount(S,E),$=y-O,B=s.getBlocksCount(S,E),_=y%B,N=B-_,be=Math.floor(y/B),ze=Math.floor($/B),xi=ze+1,mn=be-ze,Ci=new l(mn);let Et=0;const nt=new Array(B),vn=new Array(B);let It=0;const Ri=new Uint8Array(x.buffer);for(let Be=0;Be<B;Be++){const Tt=Be<N?ze:xi;nt[Be]=Ri.slice(Et,Et+Tt),vn[Be]=Ci.encode(nt[Be]),Et+=Tt,It=Math.max(It,Tt)}const Wt=new Uint8Array(y);let yn=0,ue,de;for(ue=0;ue<It;ue++)for(de=0;de<B;de++)ue<nt[de].length&&(Wt[yn++]=nt[de][ue]);for(ue=0;ue<mn;ue++)for(de=0;de<B;de++)Wt[yn++]=vn[de][ue];return Wt}function j(x,S,E,y){let O;if(Array.isArray(x))O=p.fromArray(x);else if(typeof x=="string"){let be=S;if(!be){const ze=p.rawSplit(x);be=d.getBestVersionForData(ze,E)}O=p.fromString(x,be||40)}else throw new Error("Invalid data");const $=d.getBestVersionForData(O,E);if(!$)throw new Error("The amount of data is too big to be stored in a QR Code");if(!S)S=$;else if(S<$)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+$+`.
`);const B=m(S,E,O),_=r.getSymbolSize(S),N=new o(_);return g(N,S),W(N),v(N,S),b(N,E,0),S>=7&&T(N,S),w(N,B),isNaN(y)&&(y=a.getBestMask(N,b.bind(null,N,E))),a.applyMask(y,N),b(N,E,y),{modules:N,version:S,errorCorrectionLevel:E,maskPattern:y,segments:O}}return Lt.create=function(S,E){if(typeof S>"u"||S==="")throw new Error("No input text");let y=e.M,O,$;return typeof E<"u"&&(y=e.from(E.errorCorrectionLevel,e.M),O=d.from(E.version),$=a.from(E.maskPattern),E.toSJISFunc&&r.setToSJISFunction(E.toSJISFunc)),j(S,O,y,$)},Lt}var Xt={},Zt={},Qn;function fi(){return Qn||(Qn=1,(function(r){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let o=n.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+n);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(t){return[t,t]}))),o.length===6&&o.push("F","F");const i=parseInt(o.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+o.slice(0,6).join("")}}r.getOptions=function(o){o||(o={}),o.color||(o.color={});const i=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,t=o.width&&o.width>=21?o.width:void 0,a=o.scale||4;return{width:t,scale:t?4:a,margin:i,color:{dark:e(o.color.dark||"#000000ff"),light:e(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},r.getScale=function(o,i){return i.width&&i.width>=o+i.margin*2?i.width/(o+i.margin*2):i.scale},r.getImageWidth=function(o,i){const t=r.getScale(o,i);return Math.floor((o+i.margin*2)*t)},r.qrToImageData=function(o,i,t){const a=i.modules.size,s=i.modules.data,l=r.getScale(a,t),d=Math.floor((a+t.margin*2)*l),h=t.margin*l,R=[t.color.light,t.color.dark];for(let p=0;p<d;p++)for(let g=0;g<d;g++){let W=(p*d+g)*4,v=t.color.light;if(p>=h&&g>=h&&p<d-h&&g<d-h){const T=Math.floor((p-h)/l),b=Math.floor((g-h)/l);v=R[s[T*a+b]?1:0]}o[W++]=v.r,o[W++]=v.g,o[W++]=v.b,o[W]=v.a}}})(Zt)),Zt}var Xn;function ho(){return Xn||(Xn=1,(function(r){const e=fi();function n(i,t,a){i.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=a,t.width=a,t.style.height=a+"px",t.style.width=a+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(t,a,s){let l=s,d=a;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),a||(d=o()),l=e.getOptions(l);const h=e.getImageWidth(t.modules.size,l),R=d.getContext("2d"),p=R.createImageData(h,h);return e.qrToImageData(p.data,t,l),n(R,d,h),R.putImageData(p,0,0),d},r.renderToDataURL=function(t,a,s){let l=s;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),l||(l={});const d=r.render(t,a,l),h=l.type||"image/png",R=l.rendererOpts||{};return d.toDataURL(h,R.quality)}})(Xt)),Xt}var en={},Zn;function po(){if(Zn)return en;Zn=1;const r=fi();function e(i,t){const a=i.a/255,s=t+'="'+i.hex+'"';return a<1?s+" "+t+'-opacity="'+a.toFixed(2).slice(1)+'"':s}function n(i,t,a){let s=i+t;return typeof a<"u"&&(s+=" "+a),s}function o(i,t,a){let s="",l=0,d=!1,h=0;for(let R=0;R<i.length;R++){const p=Math.floor(R%t),g=Math.floor(R/t);!p&&!d&&(d=!0),i[R]?(h++,R>0&&p>0&&i[R-1]||(s+=d?n("M",p+a,.5+g+a):n("m",l,0),l=0,d=!1),p+1<t&&i[R+1]||(s+=n("h",h),h=0)):l++}return s}return en.render=function(t,a,s){const l=r.getOptions(a),d=t.modules.size,h=t.modules.data,R=d+l.margin*2,p=l.color.light.a?"<path "+e(l.color.light,"fill")+' d="M0 0h'+R+"v"+R+'H0z"/>':"",g="<path "+e(l.color.dark,"stroke")+' d="'+o(h,d,l.margin)+'"/>',W='viewBox="0 0 '+R+" "+R+'"',T='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+W+' shape-rendering="crispEdges">'+p+g+`</svg>
`;return typeof s=="function"&&s(null,T),T},en}var ei;function fo(){if(ei)return Le;ei=1;const r=Ki(),e=uo(),n=ho(),o=po();function i(t,a,s,l,d){const h=[].slice.call(arguments,1),R=h.length,p=typeof h[R-1]=="function";if(!p&&!r())throw new Error("Callback required as last argument");if(p){if(R<2)throw new Error("Too few arguments provided");R===2?(d=s,s=a,a=l=void 0):R===3&&(a.getContext&&typeof d>"u"?(d=l,l=void 0):(d=l,l=s,s=a,a=void 0))}else{if(R<1)throw new Error("Too few arguments provided");return R===1?(s=a,a=l=void 0):R===2&&!a.getContext&&(l=s,s=a,a=void 0),new Promise(function(g,W){try{const v=e.create(s,l);g(t(v,a,l))}catch(v){W(v)}})}try{const g=e.create(s,l);d(null,t(g,a,l))}catch(g){d(g)}}return Le.create=e.create,Le.toCanvas=i.bind(null,n.render),Le.toDataURL=i.bind(null,n.renderToDataURL),Le.toString=i.bind(null,function(t,a,s){return o.render(t,s)}),Le}var go=fo();const wo=$i(go),bo=.1,ti=2.5,he=7;function tn(r,e,n){return r===e?!1:(r-e<0?e-r:r-e)<=n+bo}function mo(r,e){const n=Array.prototype.slice.call(wo.create(r,{errorCorrectionLevel:e}).modules.data,0),o=Math.sqrt(n.length);return n.reduce((i,t,a)=>(a%o===0?i.push([t]):i[i.length-1].push(t))&&i,[])}const vo={generate({uri:r,size:e,logoSize:n,dotColor:o="#141414"}){const i="transparent",a=[],s=mo(r,"Q"),l=e/s.length,d=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];d.forEach(({x:v,y:T})=>{const b=(s.length-he)*l*v,w=(s.length-he)*l*T,m=.45;for(let f=0;f<d.length;f+=1){const j=l*(he-f*2);a.push(Ue`
            <rect
              fill=${f===2?o:i}
              width=${f===0?j-5:j}
              rx= ${f===0?(j-5)*m:j*m}
              ry= ${f===0?(j-5)*m:j*m}
              stroke=${o}
              stroke-width=${f===0?5:0}
              height=${f===0?j-5:j}
              x= ${f===0?w+l*f+5/2:w+l*f}
              y= ${f===0?b+l*f+5/2:b+l*f}
            />
          `)}});const h=Math.floor((n+25)/l),R=s.length/2-h/2,p=s.length/2+h/2-1,g=[];s.forEach((v,T)=>{v.forEach((b,w)=>{if(s[T][w]&&!(T<he&&w<he||T>s.length-(he+1)&&w<he||T<he&&w>s.length-(he+1))&&!(T>R&&T<p&&w>R&&w<p)){const m=T*l+l/2,f=w*l+l/2;g.push([m,f])}})});const W={};return g.forEach(([v,T])=>{W[v]?W[v]?.push(T):W[v]=[T]}),Object.entries(W).map(([v,T])=>{const b=T.filter(w=>T.every(m=>!tn(w,m,l)));return[Number(v),b]}).forEach(([v,T])=>{T.forEach(b=>{a.push(Ue`<circle cx=${v} cy=${b} fill=${o} r=${l/ti} />`)})}),Object.entries(W).filter(([v,T])=>T.length>1).map(([v,T])=>{const b=T.filter(w=>T.some(m=>tn(w,m,l)));return[Number(v),b]}).map(([v,T])=>{T.sort((w,m)=>w<m?-1:1);const b=[];for(const w of T){const m=b.find(f=>f.some(j=>tn(w,j,l)));m?m.push(w):b.push([w])}return[v,b.map(w=>[w[0],w[w.length-1]])]}).forEach(([v,T])=>{T.forEach(([b,w])=>{a.push(Ue`
              <line
                x1=${v}
                x2=${v}
                y1=${b}
                y2=${w}
                stroke=${o}
                stroke-width=${l/(ti/2)}
                stroke-linecap="round"
              />
            `)})}),a}},yo=z`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var we=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};const xo="#3396ff";let ne=class extends A{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??xo}
    `,c`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return Ue`
      <svg height=${e} width=${e}>
        ${vo.generate({uri:this.uri,size:e,logoSize:this.arenaClear?0:e/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?c`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?c`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:c`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ne.styles=[q,yo];we([u()],ne.prototype,"uri",void 0);we([u({type:Number})],ne.prototype,"size",void 0);we([u()],ne.prototype,"theme",void 0);we([u()],ne.prototype,"imageSrc",void 0);we([u()],ne.prototype,"alt",void 0);we([u()],ne.prototype,"color",void 0);we([u({type:Boolean})],ne.prototype,"arenaClear",void 0);we([u({type:Boolean})],ne.prototype,"farcaster",void 0);ne=we([L("wui-qr-code")],ne);const Co=z`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Ze=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let _e=class extends A{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,c`<slot></slot>`}};_e.styles=[Co];Ze([u()],_e.prototype,"width",void 0);Ze([u()],_e.prototype,"height",void 0);Ze([u()],_e.prototype,"borderRadius",void 0);Ze([u()],_e.prototype,"variant",void 0);_e=Ze([L("wui-shimmer")],_e);const Ro="https://reown.com",$o=z`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`;var _o=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let rn=class extends A{render(){return c`
      <a
        data-testid="ux-branding-reown"
        href=${Ro}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};rn.styles=[q,G,$o];rn=_o([L("wui-ux-by-reown")],rn);const Eo=z`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var Io=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let an=class extends F{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),te.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return P.setWcLinking(void 0),P.setRecentWallet(this.wallet),c` <wui-qr-code
      size=${e}
      theme=${on.state.themeMode}
      uri=${this.uri}
      imageSrc=${I(K.getWalletImage(this.wallet))}
      color=${I(on.state.themeVariables["--w3m-qr-color"])}
      alt=${I(n)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return c`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};an.styles=Eo;an=Io([L("w3m-connecting-wc-qrcode")],an);var Wo=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let ni=class extends A{constructor(){if(super(),this.wallet=U.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");te.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index}})}render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${I(K.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};ni=Wo([L("w3m-connecting-wc-unsupported")],ni);var gi=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let sn=class extends F{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=si.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(P.subscribeKey("wcUri",()=>{this.updateLoadingState()})),te.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:n}=this.wallet,{redirect:o,href:i}=k.formatUniversalUrl(e,this.uri);P.setWcLinking({name:n,href:i}),P.setRecentWallet(this.wallet),k.openHref(o,"_blank")}catch{this.error=!0}}};gi([C()],sn.prototype,"isLoading",void 0);sn=gi([L("w3m-connecting-wc-web")],sn);var et=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let Ae=class extends A{constructor(){super(),this.wallet=U.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!Q.state.siwx,this.remoteFeatures=Q.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(Q.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?c`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if(!(this.platform==="browser"||Q.state.manualWCControl&&!e))try{const{wcPairingExpiry:n,status:o}=P.state;if(e||Q.state.enableEmbedded||k.isPairingExpired(n)||o==="connecting"){const i=P.getConnections(ae.state.activeChain),t=this.remoteFeatures?.multiWallet,a=i.length>0;await P.connectWalletConnect(),this.isSiwxEnabled||(a&&t?(U.replace("ProfileWallets"),Ve.showSuccess("New Wallet Added")):ai.close())}}catch(n){if(n instanceof Error&&n.message.includes("An error occurred when attempting to switch chain")&&!Q.state.enableNetworkSwitch&&ae.state.activeChain){ae.setActiveCaipNetwork(_i.getUnsupportedNetwork(`${ae.state.activeChain}:${ae.state.activeCaipNetwork?.id}`)),ae.showUnsupportedChainUI();return}te.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:n?.message??"Unknown"}}),P.setWcError(!0),Ve.showError(n.message??"Connection error"),P.resetWcConnection(),U.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:e,desktop_link:n,webapp_link:o,injected:i,rdns:t}=this.wallet,a=i?.map(({injected_id:W})=>W).filter(Boolean),s=[...t?[t]:a??[]],l=Q.state.isUniversalProvider?!1:s.length,d=e,h=o,R=P.checkInstalled(s),p=l&&R,g=n&&!k.isMobile();p&&!ae.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(k.isMobile()?"mobile":"qrcode"),h&&this.platforms.push("web"),g&&this.platforms.push("desktop"),!p&&l&&!ae.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return c`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return c`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return c`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return c`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return c`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return c`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?c`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const n=this.shadowRoot?.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};et([C()],Ae.prototype,"platform",void 0);et([C()],Ae.prototype,"platforms",void 0);et([C()],Ae.prototype,"isSiwxEnabled",void 0);et([C()],Ae.prototype,"remoteFeatures",void 0);Ae=et([L("w3m-connecting-wc-view")],Ae);var wi=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let ln=class extends A{constructor(){super(...arguments),this.isMobile=k.isMobile()}render(){if(this.isMobile){const{featured:e,recommended:n}=D.state,{customWallets:o}=Q.state,i=wt.getRecentWallets(),t=e.length||n.length||o?.length||i.length;return c`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${t?c`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return c`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};wi([C()],ln.prototype,"isMobile",void 0);ln=wi([L("w3m-connecting-wc-basic-view")],ln);const gn=()=>new To;class To{}const nn=new WeakMap,wn=Ii(class extends Wi{render(r){return Cn}update(r,[e]){const n=e!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=r.options?.host,this.rt(this.ct=r.element)),Cn}rt(r){if(this.isConnected||(r=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let n=nn.get(e);n===void 0&&(n=new WeakMap,nn.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,r),r!==void 0&&this.G.call(this.ht,r)}else this.G.value=r}get lt(){return typeof this.G=="function"?nn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),So=z`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var bi=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let dt=class extends A{constructor(){super(...arguments),this.inputElementRef=gn(),this.checked=void 0}render(){return c`
      <label>
        <input
          ${wn(this.inputElementRef)}
          type="checkbox"
          ?checked=${I(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};dt.styles=[q,G,Ei,So];bi([u({type:Boolean})],dt.prototype,"checked",void 0);dt=bi([L("wui-switch")],dt);const Bo=z`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var mi=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let ht=class extends A{constructor(){super(...arguments),this.checked=void 0}render(){return c`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${I(this.checked)}></wui-switch>
      </button>
    `}};ht.styles=[q,G,Bo];mi([u({type:Boolean})],ht.prototype,"checked",void 0);ht=mi([L("wui-certified-switch")],ht);const Lo=z`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var vi=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let pt=class extends A{constructor(){super(...arguments),this.icon="copy"}render(){return c`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};pt.styles=[q,G,Lo];vi([u()],pt.prototype,"icon",void 0);pt=vi([L("wui-input-element")],pt);const Oo=z`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var ce=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let Z=class extends A{constructor(){super(...arguments),this.inputElementRef=gn(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-padding-right-${this.inputRightPadding}`,o={[`wui-size-${this.size}`]:!0,[e]:!!this.inputRightPadding};return c`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${wn(this.inputElementRef)}
        class=${Ti(o)}
        type=${this.type}
        enterkeyhint=${I(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${I(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?c`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Z.styles=[q,G,Oo];ce([u()],Z.prototype,"size",void 0);ce([u()],Z.prototype,"icon",void 0);ce([u({type:Boolean})],Z.prototype,"disabled",void 0);ce([u()],Z.prototype,"placeholder",void 0);ce([u()],Z.prototype,"type",void 0);ce([u()],Z.prototype,"keyHint",void 0);ce([u()],Z.prototype,"value",void 0);ce([u()],Z.prototype,"inputRightPadding",void 0);ce([u()],Z.prototype,"tabIdx",void 0);Z=ce([L("wui-input-text")],Z);const Po=z`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var Ao=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let cn=class extends A{constructor(){super(...arguments),this.inputComponentRef=gn()}render(){return c`
      <wui-input-text
        ${wn(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const n=this.inputComponentRef.value?.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};cn.styles=[q,Po];cn=Ao([L("wui-search-bar")],cn);const No=Ue`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,ko=z`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var yi=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let ft=class extends A{constructor(){super(...arguments),this.type="wallet"}render(){return c`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?c` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${No}`:c`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};ft.styles=[q,G,ko];yi([u()],ft.prototype,"type",void 0);ft=yi([L("wui-card-select-loader")],ft);const jo=z`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var ee=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let H=class extends A{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&pe.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&pe.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&pe.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&pe.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&pe.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&pe.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&pe.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&pe.getSpacingStyles(this.margin,3)};
    `,c`<slot></slot>`}};H.styles=[q,jo];ee([u()],H.prototype,"gridTemplateRows",void 0);ee([u()],H.prototype,"gridTemplateColumns",void 0);ee([u()],H.prototype,"justifyItems",void 0);ee([u()],H.prototype,"alignItems",void 0);ee([u()],H.prototype,"justifyContent",void 0);ee([u()],H.prototype,"alignContent",void 0);ee([u()],H.prototype,"columnGap",void 0);ee([u()],H.prototype,"rowGap",void 0);ee([u()],H.prototype,"gap",void 0);ee([u()],H.prototype,"padding",void 0);ee([u()],H.prototype,"margin",void 0);H=ee([L("wui-grid")],H);const Do=z`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var tt=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let Ee=class extends A{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const e=this.wallet?.badge_type==="certified";return c`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${I(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?c`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():c`
      <wui-wallet-image
        size="md"
        imageSrc=${I(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return c`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=K.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await K.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Ee.styles=Do;tt([C()],Ee.prototype,"visible",void 0);tt([C()],Ee.prototype,"imageSrc",void 0);tt([C()],Ee.prototype,"imageLoading",void 0);tt([u()],Ee.prototype,"wallet",void 0);Ee=tt([L("w3m-all-wallets-list-item")],Ee);const zo=z`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var De=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};const ii="local-paginator";let ye=class extends A{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!D.state.wallets.length,this.wallets=D.state.wallets,this.recommended=D.state.recommended,this.featured=D.state.featured,this.filteredWallets=D.state.filteredWallets,this.unsubscribe.push(D.subscribeKey("wallets",e=>this.wallets=e),D.subscribeKey("recommended",e=>this.recommended=e),D.subscribeKey("featured",e=>this.featured=e),D.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return c`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const e=this.shadowRoot?.querySelector("wui-grid");e&&(await D.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,n){return[...Array(e)].map(()=>c`
        <wui-card-select-loader type="wallet" id=${I(n)}></wui-card-select-loader>
      `)}getWallets(){const e=[...this.featured,...this.recommended];this.filteredWallets?.length>0?e.push(...this.filteredWallets):e.push(...this.wallets);const n=k.uniqueBy(e,"id"),o=Fe.markWalletsAsInstalled(n);return Fe.markWalletsWithDisplayIndex(o)}walletsTemplate(){return this.getWallets().map(n=>c`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(n)}
          .wallet=${n}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:n,featured:o,count:i}=D.state,t=window.innerWidth<352?3:4,a=e.length+n.length;let l=Math.ceil(a/t)*t-a+t;return l-=e.length?o.length%t:0,i===0&&o.length>0?null:i===0||[...o,...e,...n].length<i?this.shimmerTemplate(l,ii):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${ii}`);e&&(this.paginationObserver=new IntersectionObserver(([n])=>{if(n?.isIntersecting&&!this.loading){const{page:o,count:i,wallets:t}=D.state;t.length<i&&D.fetchWalletsByPage({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){M.selectWalletConnector(e)}};ye.styles=zo;De([C()],ye.prototype,"loading",void 0);De([C()],ye.prototype,"wallets",void 0);De([C()],ye.prototype,"recommended",void 0);De([C()],ye.prototype,"featured",void 0);De([C()],ye.prototype,"filteredWallets",void 0);ye=De([L("w3m-all-wallets-list")],ye);const Mo=z`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var _t=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let Ne=class extends A{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?c`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await D.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=D.state,n=Fe.markWalletsAsInstalled(e);return e.length?c`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${n.map(o=>c`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(o)}
              .wallet=${o}
              data-testid="wallet-search-item-${o.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:c`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){M.selectWalletConnector(e)}};Ne.styles=Mo;_t([C()],Ne.prototype,"loading",void 0);_t([u()],Ne.prototype,"query",void 0);_t([u()],Ne.prototype,"badge",void 0);Ne=_t([L("w3m-all-wallets-search")],Ne);var bn=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let gt=class extends A{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=k.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return c`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?c`<w3m-all-wallets-search
            query=${this.search}
            badge=${I(this.badge)}
          ></w3m-all-wallets-search>`:c`<w3m-all-wallets-list badge=${I(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",Ve.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return k.isMobile()?c`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){U.push("ConnectingWalletConnect")}};bn([C()],gt.prototype,"search",void 0);bn([C()],gt.prototype,"badge",void 0);gt=bn([L("w3m-all-wallets-view")],gt);const Uo=z`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var oe=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let J=class extends A{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return c`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${I(this.iconVariant)}
        tabindex=${I(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return c`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return c`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md",o=this.iconSize?this.iconSize:n;return c`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${o}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?c`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:c``}chevronTemplate(){return this.chevron?c`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};J.styles=[q,G,Uo];oe([u()],J.prototype,"icon",void 0);oe([u()],J.prototype,"iconSize",void 0);oe([u()],J.prototype,"tabIdx",void 0);oe([u()],J.prototype,"variant",void 0);oe([u()],J.prototype,"iconVariant",void 0);oe([u({type:Boolean})],J.prototype,"disabled",void 0);oe([u()],J.prototype,"imageSrc",void 0);oe([u()],J.prototype,"alt",void 0);oe([u({type:Boolean})],J.prototype,"chevron",void 0);oe([u({type:Boolean})],J.prototype,"loading",void 0);J=oe([L("wui-list-item")],J);var qo=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(i<3?a(t):i>3?a(e,n,t):a(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let oi=class extends A{constructor(){super(...arguments),this.wallet=U.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return c`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?c`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?c`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?c`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?c`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&k.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&k.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&k.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&k.openHref(this.wallet.homepage,"_blank")}};oi=qo([L("w3m-downloads-view")],oi);export{gt as W3mAllWalletsView,ln as W3mConnectingWcBasicView,oi as W3mDownloadsView};
