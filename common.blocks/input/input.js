modules.define('input', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
            onSetMod : {
                'js' : {
                    'inited' : function() {

                        var inputWrap = $(this.domElem[0]);



                        inputWrap.find('.input__control').on('blur', function() {
                            if ($(this).val()!='') {
                                inputWrap.removeClass('error');
                            }
                        });



                    }
                }
            },

        }
    ));

});
