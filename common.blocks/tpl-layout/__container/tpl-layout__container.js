modules.define('tpl-layout__container', ['i-bem-dom', 'pt-form','button', 'input', 'pt-form'], function(provide, bemDom, Form, Button, Input, Resident) {

    provide(bemDom.declBlock(this.name, {
            onSetMod : {
                'js' : {
                    'inited' : function() {


                        this._buttons = this.findChildBlocks({block: Button});
                        this._forms = this.findChildBlocks({block: Form});
                        this._inputs = this.findChildBlocks({block: Input});
                        this._resBlock = this.findChildBlock({block: Resident});

                        var buttonEntries = this._buttons._entities,
                            formEntries = this._forms._entities,
                            inputEntries = this._inputs._entities,
                            resElement = this._resBlock.domElem;
                            formFirstElement = formEntries[0].domElem,
                            formSecondElement = formEntries[1].domElem,
                            inputElements = [];



                        for(var i=0; i<inputEntries.length; i++){
                            
                            var inputElement = inputEntries[i].domElem;
                            
                            if (inputElement.hasClass('input_name_suggest')){
                                inputElements['suggest'] = inputElement;
                            }

                        }

                        for(var i=0; i<buttonEntries.length; i++){
                            var buttonElement = buttonEntries[i].domElem;
                            if (buttonElement.hasClass('application-form_check_next')){
                                buttonElement.on('click', function () {
                                    var error = false,
                                        residentBlock = $('.pt-form__resident-section');



                                    if (inputElements['suggest'].find('.input__control').val()!='' || residentBlock.hasClass('hidden')){
                                        formFirstElement.hide();
                                        formSecondElement.show();
                                    } else {
                                        inputElements['suggest'].addClass('error');
                                        inputElements['suggest'].attr('data-content','bar');
                                    }
                                });
                            } else if(buttonElement.hasClass('application-form_check_back')){
                                buttonElement.on('click', function () {
                                    formFirstElement.show();
                                    formSecondElement.hide();
                                });
                            }
                        }


                    }
                }
            },

        }
    ));

});

