modules.define('radio-button', ['i-bem-dom'], function(provide, bemDom)  {

    provide(bemDom.declBlock(this.name, {
                onSetMod : {
                    'js' : {
                        'inited' : function() {
                            $(this.domElem[0]).on('click', function (event) {
                                var target = event.target,
                                    targetParent = $(event.target).parent()
                                if (targetParent.hasClass('radio-button__radio') && !targetParent.hasClass('radio-button__radio_checked_yes')){
                                    targetParent.addClass('radio-button__radio_checked_yes');
                                    targetParent.siblings().removeClass('radio-button__radio_checked_yes');
                                }
                            });
                        }
                    }
                },

            }
        ));

});
