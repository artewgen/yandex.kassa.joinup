modules.define('pt-form', ['i-bem-dom', 'pt-form__resident-select', 'pt-form__resident-section', 'pt-form__non-resident-section'],
    function(provide, bemDom, residentSelector, residentBlock, nonResidentBlock) {
        provide(bemDom.declBlock(this.name, {
            onSetMod : {
                'js' : {
                    'inited' : function() {

                        this._residentSelect = this.findChildBlock({block: residentSelector});
                        this._residentBlock = this.findChildBlock({block: residentBlock});
                        this._nonResidentBlock = this.findChildBlock({block: nonResidentBlock});
                        if (this._residentSelect){
                            var residentSelectElem = this._residentSelect.domElem,
                                residentBlockElem = this._residentBlock.domElem,
                                nonResidentBlockElem = this._nonResidentBlock.domElem;


                            residentSelectElem.on('click', function (event) {
                                var target = event.target,
                                    targetParent = $(event.target).parent();

                                if (targetParent.hasClass('radio-button__radio') && !targetParent.hasClass('radio-button__radio_checked_yes')){


                                    if (targetParent.attr('name')=='resident'){
                                        nonResidentBlockElem.hide()
                                        residentBlockElem.show();
                                        residentBlockElem.removeClass('hidden');
                                    } else {
                                        nonResidentBlockElem.show()
                                        residentBlockElem.hide();
                                        residentBlockElem.addClass('hidden');
                                    }
                                }
                            });
                        }
                    }
                }
            },

        }
    ));
});
