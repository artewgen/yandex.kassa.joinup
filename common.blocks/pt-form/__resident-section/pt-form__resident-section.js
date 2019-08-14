modules.define('pt-form__resident-section', ['i-bem-dom', 'dropdown-menu','input','page','company-information-suggest_view_sub'], function(provide, bemDom, Dropdown, Input, Page, SuggestInfo) {

    provide(bemDom.declBlock(this.name, {
            onSetMod : {
                'js' : {
                    'inited' : function() {

                        this._dropdown = this.findChildBlock({block: Dropdown});
                        this._input = this.findChildBlock({block: Input});
                        this._page = this.findParentBlock({block: Page});
                        this._suggestInfo = this.findChildBlock({block: SuggestInfo});


                        var inputElement = this._input.domElem,
                            dropdownElement = this._dropdown.domElem,
                            pageElement = this._page.domElem,
                            suggestInfoElement = this._suggestInfo.domElem;

                        inputElement.on('click', function () {
                            dropdownElement.show();

                            pageElement.on('click', function () {
                                if (!inputElement.hasClass('input_focused')){
                                    dropdownElement.hide();
                                }
                            });
                        });

                        dropdownElement.on('click', function (event) {
                            suggestInfoElement.show();
                            var element = $(event.target);
                            while((element = element.parent()).length){
                                if(element.is('.company-information-suggest')){
                                    break;
                                }
                            }

                            inputElement.find('.input__control').val(element.attr('name'));
                            dropdownElement.hide();
                            addInputClear();

                            return false;

                        });

                        inputElement.find('.input__control').on('blur', function() {
                            if ($(this).val()=='') {
                                suggestInfoElement.hide();
                                inputElement.find('.input__clear').remove();
                            } else {
                                addInputClear();
                            }
                        });


                        function addInputClear() {
                            var clearInput = jQuery('<span/>', {
                                "class": 'input__clear'
                            });

                            clearInput.on('click', function () {
                                dropdownElement.hide();
                                inputElement.find('.input__control').val('');
                                suggestInfoElement.hide();
                                $(this).remove();
                            });


                           // inputElement.append('<span class="input__clear input__clear_visibility_visible" unselectable="on">&nbsp;</span>');
                            inputElement.append(clearInput);
                        }
                    }
                }
            },

        }
    ));

});

