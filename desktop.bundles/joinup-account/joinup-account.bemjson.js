module.exports = {
    block: 'page',
    title: 'Яндекс.Касса: Заявка на подключение',
    favicon: '/favicon.ico',
    lang: 'ru',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'joinup-account.min.css' },
        { elem: 'css', url : "smz-application.min.css"},
        { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
    ],
    scripts: [{ elem: 'js', url: 'joinup-account.min.js' }],
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
                            attrs: {href: '#'},
                            content: 'Вернуться'
                        },
                        {
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
                                    block: 'badge',
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
                                    content: 'Шаг 2 из 2'
                                },
                                {
                                    elem: 'item',
                                    elemMods: {'indent-b': 'xl', 'indent-t': 'l', first: 'content'},
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {type: 'h3', 'size': 'l', weight: 'bold', view: 'primary'},
                                            tag: 'h3',
                                            content: 'Выбор аккаунта для работы с Яндекс.Кассой'
                                        },
                                        {
                                            block: 'text',
                                            mods: {type: 'p', size: 'm', weight: 'regular'},
                                            mix: {
                                                block: 'decorator',
                                                mods: {'indent-t': 's', 'indent-b': 'xl'}
                                            },
                                            tag: 'p',
                                            content: [
                                                'Выберите аккаунт и введите данные для связи с вами. Будьте внимательны, вы не сможете вернуться и поменять аккаунт.'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    //user-accounts joinups__auth-controls i-bem user-accounts_js_inited
                                    block: 'user-accounts',
                                    mix: [
                                        {
                                            block: 'tpl-grid',
                                            mods: {'xs-columns': 2, 's-columns': 6, 'col-gap': 'third', 'row-gap': 'half','vertical-align': 'center'}
                                        },
                                        {
                                            block: 'text',
                                            mods: {size: 'm'},
                                        }
                                    ],
                                    content: [
                                        {
                                            //user user-accounts__item user-accounts__item_name_account user-accounts__item-content i-bem user_js_inited
                                            block: 'user',
                                            mods: {'status': 'selected'},
                                            mix: [
                                                {
                                                    block: 'user-accounts__item'
                                                },
                                                {
                                                    block: 'tpl-grid__fraction',
                                                    mods: {'xs-col':2, 's-col': 3},
                                                },
                                            ],
                                            content: [
                                                {
                                                    elem: 'icon',
                                                    mix: [
                                                        {
                                                            block: 'user-accounts__icon'
                                                        },
                                                        {
                                                            block: 'decorator',
                                                            mods: {'indent-r': 's'}
                                                        }
                                                    ],
                                                    attrs: {style: 'background-image: url("assets/img/ava.jpg");'}
                                                },
                                                {
                                                    elem: 'name',
                                                    mix: {
                                                        block: 'user-accounts__name'
                                                    },
                                                    tag: 'span',
                                                    content: [
                                                        {
                                                            elem: 'first-letter',
                                                            content: 'y',
                                                            tag: 'span'
                                                        },
                                                        'auheni_durau'
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            //user user-accounts__item user-accounts__item_name_account user-accounts__item-content i-bem user_js_inited
                                            block: 'user',
                                            tag: 'a',
                                            attrs: {href: '#'},
                                            mix: [
                                                {
                                                    block: 'user-accounts__item',

                                                },
                                                {
                                                    block: 'user-accounts__add-account'
                                                },
                                                {
                                                    block: 'tpl-grid__fraction',
                                                    mods: {'xs-col':2, 's-col': 3},
                                                },
                                                {
                                                    block: 'link',

                                                }
                                            ],
                                            content:
                                                [
                                                    {
                                                        elem: 'icon',
                                                        mix: [
                                                            {
                                                                block: 'user-accounts__icon'
                                                            },
                                                            {
                                                                block: 'decorator',
                                                                mods: {'indent-r': 's'}
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'name',
                                                        mix: {
                                                            block: 'user-accounts__name'
                                                        },
                                                        tag: 'span',
                                                        content: 'Другой аккаунт'
                                                    }
                                                ]
                                        },
                                    ]
                                },
                                {
                                    block: 'tpl-grid',
                                    mods: {'s-columns': 6, 'm-columns': 12, 'col-gap': 'third', 'row-gap': 'third', 'vertical-align': 'center'},
                                    mix: {
                                        block: 'decorator',
                                        mods: {'indent-b': 'xl'}
                                    },
                                    content:
                                        {
                                            // resident block radiobuttons
                                            elem: 'fraction',
                                            elemMods: {'s-col': 3, 'm-col': 6},
                                            mix: {
                                                block: 'tpl_grid__item',
                                            }

                                        }

                                },
                                {

                                    elem: 'item',
                                    mix: {
                                        block: 'decorator',
                                        mods: {'indent-b': 'l'}
                                    },
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {size: 's', view: 'secondary'},
                                            content: {
                                                block: '',
                                                tag: 'span',
                                                content: 'Имя'
                                            }
                                        },
                                        {

                                            block: 'input',
                                            mods: {theme: 'kassa', size: 'l'},
                                            val: 'Евгений',
                                            placeholder: 'Введите ваше имя',
                                        },

                                    ]
                                },
                                {
                                    elem: 'item',
                                    mix: {
                                        block: 'decorator',
                                        mods: {'indent-b': 'm'}
                                    },
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {size: 's', view: 'secondary'},
                                            content: {
                                                block: '',
                                                tag: 'span',
                                                content: 'Телефон'
                                            }
                                        },
                                        {

                                            block: 'input',
                                            mods: {theme: 'kassa', size: 'l'},
                                            val: '+7 (981) 735-56-63',
                                            placeholder: '+7 (900) 000-00-00',
                                        },

                                    ]
                                },
                                {
                                    elem: 'item',
                                    mix: [
                                        {
                                            block: 'decorator',
                                            mods: {'indent-b': 'l'}
                                        }
                                    ],
                                    content: {
                                        block: 'checkbox',
                                        //checkbox checkbox_theme_kassa checkbox_size_l i-bem checkbox_js_inited
                                        mods: {'theme': 'kassa', 'size': 'l'},
                                        mix: {block: 'checkbox_checked'},
                                        text: 'Присылать смс о подключении'
                                    }

                                },
                                {

                                    elem: 'item',
                                    mix: {
                                        block: 'decorator',
                                        mods: {'indent-b': 'l'}
                                    },
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {size: 's', view: 'secondary'},
                                            content: {
                                                block: '',
                                                tag: 'span',
                                                content: 'Эл. почта'
                                            }
                                        },
                                        {

                                            block: 'input',
                                            mods: {theme: 'kassa', size: 'l'},
                                            val: 'yauheni_durau@yandex.ru',
                                            placeholder: 'Введите вашу эл. почту',
                                        },

                                    ]
                                },
                                {
                                    block: 'tpl-grid',
                                    mods: {'s-columns': 6, 'm-columns': 12, 'col-gap': 'third', 'row-gap': 'third', 'vertical-align': 'center'},
                                    mix: {
                                        block: 'decorator',
                                        mods: {'indent-b': 'xl'}
                                    },
                                    content:
                                        {
                                            // unit block radiobuttons
                                            elem: 'fraction',
                                            elemMods: {'s-col': 3, 'm-col': 6},
                                            mix: {
                                                block: 'tpl_grid__item',  /* костыльчик */
                                            }
                                        }

                                },

                                {
                                    elem: 'item',
                                    elemMods: {'vertical-align': 'center', distribute: 'right'},
                                    mix: {
                                        block: 'decorator',
                                        mods: {'indent-b': 'l', 'indent-t': 'xxxl'}
                                    },
                                    content: [
                                        {
                                            //button button_theme_kassa button_size_m button_view_normal application-form__button application-form__button_type_prev application-form__button_screen_desktop button__control i-bem button_js_inited button__control_js_inited
                                            block: 'button',
                                            mods: {theme: 'kassa', size: 'm', view: 'normal', type: 'prev', js: 'inited'},
                                            mix: {
                                                block: 'application-form',
                                                bem: 'falsy'
                                            },

                                            tag: 'button',
                                            content: {
                                                block: 'button__text',
                                                tag: 'span',
                                                content: 'Назад'
                                            }
                                        },
                                        {
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
                                                content: 'Отправить'
                                            }
                                        }
                                    ]
                                },
                                {
                                    block: 'text',
                                    mods: {'size': 's', view: 'ghost', display: 'inline'},
                                    content: [
                                        'Нажимая «Отправить», вы принимаете ',
                                        {
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
