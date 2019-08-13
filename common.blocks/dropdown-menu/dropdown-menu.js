modules.define('dropdown-menu', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        console.log('dropdown-menu');

                    }
                }
            },

        }
    ));

});
