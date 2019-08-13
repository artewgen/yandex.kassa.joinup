modules.define('pt-form__resident-select', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        console.log('pt-form__resident-select');


                    }
                }
            },

        }
    ));

});
