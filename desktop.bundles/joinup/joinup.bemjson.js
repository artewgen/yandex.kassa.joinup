module.exports = {
    block: 'page',
    title: 'Яндекс.Касса: Заявка на подключение',
    favicon: '/favicon.ico',
    lang: 'ru',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'joinup.min.css' },
        { elem: 'css', url : "smz-application.min.css"},
        { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
    ],
    scripts: [{ elem: 'js', url: 'joinup.min.js' }],
    mix: {
        block: 'theme',
        mods: { color: 'kassa-brand', space: 'kassa-default', size: 'kassa-default', gap: 'kassa-default', control: 'kassa-brand', breakpoint: 'kassa', font: 'yandex-sans'}
    },
    content: [
        {
            block: 'tpl-layout',
            content: [
                {
                    block: 'header',
                    tag: 'header',
                    content: [

                    ],
                },
                {
                    elem: 'container',
                    elemMods: {size: 'xs', align: 'center'},
                    mix: {
                        block: 'section',
                        mods: {view: 'default'}
                    },
                    tag: 'form',
                    content: [
                        {
                            block: 'text',
                            mods: { type: 'link-back', view: 'link', size: 'l', link: 'return' },
                            mix: {
                                block : 'decorator',
                                mods: {'indent-b' : 's'}
                            },
                            tag: 'a',
                            attrs: {
                                'href' : '#'
                            },
                            content: 'Вернуться'
                        },
                        {
                            //block: 'text text_type_h1 text_short_default decorator decorator_indent-b_l text_size_xxl text_weight_bold text_view_primary',
                            block: 'text',
                            mods: {type: 'h1', short: 'default', size: 'xxl', weight: 'bold', view: 'primary'},
                            mix: {
                                block: 'decorator',
                                mods : {'indent-b': 'l'}
                            },
                            tag: 'h1',
                            content: 'Заявка на подключение Яндекс.Кассы'
                        },
                        {
                            block: 'pt-form',
                            mix: [
                                {
                                    block: 'theme',
                                    mods: {'color': 'kassa-default', 'control': 'kassa-default'}
                                }    ,
                                {
                                    block: 'decorator',
                                    mods: {'space-a': 'l'}
                                },
                                {
                                    block: 'application-form',
                                    mods: {type: 'active'}
                                }
                            ],
                            content: [
                                {
                                    block: 'medallion',
                                    mods: {view: 'success'},
                                    mix: [
                                        {
                                            block: 'theme',
                                            mods: {color: 'kassa-brand'}
                                        },
                                        {
                                            block: 'decorator',
                                            mods: {'indent-b': 's'}
                                        }
                                    ],
                                    content: 'Шаг 1 из 2'
                                },
                                {
                                    elem: 'item',
                                    elemMods: {'indent-b': 'xl', 'indent-t': 'l', first: 'content'},
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {type: 'h3', 'size': 'l', weight: 'bold', view: 'primary'},
                                            tag: 'h3',
                                            content: 'Заполненние данных об организации'
                                        },
                                        {
                                            block: 'text',
                                            mods: {type: 'p', size: 'm', weight: 'regular'},
                                            mix: {
                                                block: 'decorator',
                                                mods: {'indent-t': 's', 'indent-b': 'xl'}
                                            },
                                            tag: 'p',
                                            content: 'Чтобы использовать Кассу, нужно зарегистрироваться в налоговой. Мы проверим регистрацию по ИНН и подключим вас.'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    elemMods: {'vertical-align': 'center', distribute: 'right'},
                                    mix: {
                                        block: 'decorator',
                                        mods: {'indent-b': 'l'}
                                    },
                                    content: {
                                        //button button_theme_kassa button_size_m button_view_action application-form__button application-form__button_check_inn button__control i-bem button_js_inited button__control_js_inited

                                        block: 'button',
                                        mods: {theme: 'kassa', size: 'm', view: 'action', js: 'inited'},
                                        mix: {
                                            block: 'application-form',
                                            bem: 'falsy',
                                            mods: {check: 'inn'},

                                        },

                                        tag: 'button',
                                        content: {
                                            block: 'button__text',
                                            tag: 'span',
                                            content: 'Продолжить'
                                        }
                                    }
                                },
                                {
                                   //'text text_size_s text_view_ghost text_display_inline'
                                    block: 'text',
                                    mods: {'size': 's', view: 'ghost', display: 'inline'},
                                    content: [
                                        'Нажимая «Продолжить», вы принимаете ',
                                        {
                                            //text text_size_s text_view_link-minor
                                            block: 'text',
                                            mods: {view: 'link-subtle'},
                                            tag: 'a',
                                            attrs: {href: '#'},
                                            content: 'условия использования личного кабинета'
                                        }
                                    ]
                                }
                            ]
                        },

                    ]
                }
            ]
        },
        {
            block: 'footer theme theme_color_kassa-brand',
            tag: 'footer',
            content: [

            ]
        }
    ]
};
