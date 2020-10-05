'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ng-project-start documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-087215948ca5d1bb94ec05f5f89805c4"' : 'data-target="#xs-components-links-module-AppModule-087215948ca5d1bb94ec05f5f89805c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-087215948ca5d1bb94ec05f5f89805c4"' :
                                            'id="xs-components-links-module-AppModule-087215948ca5d1bb94ec05f5f89805c4"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-087215948ca5d1bb94ec05f5f89805c4"' : 'data-target="#xs-pipes-links-module-AppModule-087215948ca5d1bb94ec05f5f89805c4"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-087215948ca5d1bb94ec05f5f89805c4"' :
                                            'id="xs-pipes-links-module-AppModule-087215948ca5d1bb94ec05f5f89805c4"' }>
                                            <li class="link">
                                                <a href="pipes/MyPipePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyPipePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-a9bc2266407c6aac53bd0b04f946a0a5"' : 'data-target="#xs-components-links-module-CoreModule-a9bc2266407c6aac53bd0b04f946a0a5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-a9bc2266407c6aac53bd0b04f946a0a5"' :
                                            'id="xs-components-links-module-CoreModule-a9bc2266407c6aac53bd0b04f946a0a5"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-c2c8ceeb6cba5dff1d950799977a3688"' : 'data-target="#xs-components-links-module-HomeModule-c2c8ceeb6cba5dff1d950799977a3688"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-c2c8ceeb6cba5dff1d950799977a3688"' :
                                            'id="xs-components-links-module-HomeModule-c2c8ceeb6cba5dff1d950799977a3688"' }>
                                            <li class="link">
                                                <a href="components/CanvasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CanvasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardsgameComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardsgameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RelaxerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RelaxerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainModule.html" data-type="entity-link">MainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainModule-3f7bdf0fda9bfae33b01b868f7e22966"' : 'data-target="#xs-components-links-module-MainModule-3f7bdf0fda9bfae33b01b868f7e22966"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainModule-3f7bdf0fda9bfae33b01b868f7e22966"' :
                                            'id="xs-components-links-module-MainModule-3f7bdf0fda9bfae33b01b868f7e22966"' }>
                                            <li class="link">
                                                <a href="components/DesignSystemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesignSystemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RouterDemoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RouterDemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YoutubeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">YoutubeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainRoutingModule.html" data-type="entity-link">MainRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link">PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PostsModule-b5cd666612a0a2546853f3d03e9c8ca2"' : 'data-target="#xs-components-links-module-PostsModule-b5cd666612a0a2546853f3d03e9c8ca2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PostsModule-b5cd666612a0a2546853f3d03e9c8ca2"' :
                                            'id="xs-components-links-module-PostsModule-b5cd666612a0a2546853f3d03e9c8ca2"' }>
                                            <li class="link">
                                                <a href="components/CommentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsRoutingModule.html" data-type="entity-link">PostsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-c28b7860a2259698cf4be249e464f2cb"' : 'data-target="#xs-components-links-module-SharedModule-c28b7860a2259698cf4be249e464f2cb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c28b7860a2259698cf4be249e464f2cb"' :
                                            'id="xs-components-links-module-SharedModule-c28b7860a2259698cf4be249e464f2cb"' }>
                                            <li class="link">
                                                <a href="components/ModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-c28b7860a2259698cf4be249e464f2cb"' : 'data-target="#xs-directives-links-module-SharedModule-c28b7860a2259698cf4be249e464f2cb"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-c28b7860a2259698cf4be249e464f2cb"' :
                                        'id="xs-directives-links-module-SharedModule-c28b7860a2259698cf4be249e464f2cb"' }>
                                        <li class="link">
                                            <a href="directives/ChangeColorIntervalDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangeColorIntervalDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ChangeFontfamilyIntervalDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangeFontfamilyIntervalDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-c28b7860a2259698cf4be249e464f2cb"' : 'data-target="#xs-pipes-links-module-SharedModule-c28b7860a2259698cf4be249e464f2cb"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-c28b7860a2259698cf4be249e464f2cb"' :
                                            'id="xs-pipes-links-module-SharedModule-c28b7860a2259698cf4be249e464f2cb"' }>
                                            <li class="link">
                                                <a href="pipes/LimitCharPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LimitCharPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Square.html" data-type="entity-link">Square</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CommentsService.html" data-type="entity-link">CommentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalService.html" data-type="entity-link">ModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link">PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/YoutubeService.html" data-type="entity-link">YoutubeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Card.html" data-type="entity-link">Card</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Comment.html" data-type="entity-link">Comment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link">Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Video.html" data-type="entity-link">Video</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});