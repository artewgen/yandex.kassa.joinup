/*
modules.define('my-blocks', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited' : function() {
                    //this._button = this.findChildBlock(Button);
                    console.log('eee');
                }
            }
        },
        _onClick: function(e) {
            console.log('fvvv');
        },


});
*/
/*
modules.define('my-blocks', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    console.log('init');
                    //$(this.domElem[0]).text('edddddd');
                    //console.log(this);
                    //console.log(this.findChildBlock({ block: 'footer', modName: 'foo', modVal: 'bar' }));
                    //console.log(this.this.findChildBlock({ block: 'footer', modName: 'foo', modVal: 'bar' }));
                    //this._footer = this.findChildBlock(Footer);
                     var footer = this.findParentBlock({ block : 'footer', modName : 'theme', modVal : 'my-checkbox'});
                    //this._footer = this.findChildBlock(Footer);
                    console.log(footer);
                }
            }
        },

        _onClick: function(e) {
            console.log('click');
        }
    },{
        //lazyInit : true,

        onInit : function() {
            this._domEvents().on(
                'click',
                this.prototype._onClick);  // в момент клика будет создан экземпляр блока и вызван его метод _onClick
        }
    }));

});
*/

modules.define('my-blocks', ['i-bem-dom', 'footer'], function(provide, bemDom, Footer) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited' : function() {
                    this._button = this.findMixedBlock({block: Footer});
                    console.log(this._button);
                }
            }
        }



    }));
});



