modules.define('pt-form__resident-section', ['i-bem-dom', 'dropdown-menu','input','page','company-information-suggest_view_sub'], function(provide, bemDom, Dropdown, Input, Page, SuggestInfo) {

    provide(bemDom.declBlock(this.name, {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        console.log('init-pt-form-resident-section');
                        this._dropdown = this.findChildBlock({block: Dropdown});
                        this._input = this.findChildBlock({block: Input});
                        this._page = this.findParentBlock({block: Page});
                        this._suggestInfo = this.findChildBlock({block: SuggestInfo});
                        console.log(this._dropdown);
                        console.log(this._input);
                        console.log(this._suggestInfo);

                        var inputElement = this._input.domElem,
                            dropdownElement = this._dropdown.domElem,
                            pageElement = this._page.domElem,
                            suggestInfoElement = this._suggestInfo.domElem;

                        inputElement.on('click', function () {
                            dropdownElement.show();

                            dropdownElement.one('click', function (event) {
                                suggestInfoElement.show();
                                var element = $(event.target);
                                while((element = element.parent()).length){
                                    if(element.is('.company-information-suggest')){
                                        break;
                                    }
                                }

                                inputElement.find('.input__control').val(element.attr('name'));

                            });
                            pageElement.on('click', function () {
                                if (!inputElement.hasClass('input_focused')){
                                    dropdownElement.hide();
                                }
                            });
                        })
                        inputElement.find('.input__control').on('blur', function() {
                            if ($(this).val()=='') {
                                suggestInfoElement.hide();
                            }
                        });
                    }
                }
            },

        }
    ));

});

