modules.define('pt-form__non-resident-section', ['i-bem-dom', 'input', 'dropdown-menu', 'page'], function(provide, bemDom, InputSelector, Dropdown, Page) {

    provide(bemDom.declBlock(this.name, {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        this._inputSelector = this.findChildBlock({block: InputSelector});
                        this._dropdown = this.findChildBlock({block: Dropdown});
                        this._page = this.findParentBlock({block: Page});
                        var inputSelectorElem = this._inputSelector.domElem,
                            dropdownElem = this._dropdown.domElem,
                            pageElem = this._page.domElem;

                        inputSelectorElem.on('click', function () {
                           if ($(this).hasClass('input__country-selector') && !dropdownElem.hasClass('opened')){
                               modalChangeState('show');
                               pageElem.on('click', function () {
                                   if (!inputSelectorElem.hasClass('input_hovered')){
                                       modalChangeState('hide');
                                   }
                               });
                           } else{
                               modalChangeState('hide');
                           }
                        });
                        dropdownElem.on('click', function (event) {
                           if ($(this).hasClass('dropdown-menu__country-selector')){
                               inputSelectorElem.find('.input__control').val($(event.target).text());
                               $(event.target).parent().siblings().removeClass('active');
                               $(event.target).parent().addClass('active');
                           }
                        });
                        function modalChangeState(state) {
                            if (state == 'show'){
                                inputSelectorElem.addClass('opened');
                                dropdownElem.show();
                                dropdownElem.addClass('opened');
                            }    else {
                                dropdownElem.hide();
                                dropdownElem.removeClass('opened');
                                inputSelectorElem.removeClass('opened');
                            }
                        }
                    }
                }
            },

        }
    ));

});
