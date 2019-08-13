module.exports = {
    block: 'page',
    title: 'Яндекс.Касса: Заявка на подключение',
    favicon: '/favicon.ico',
    lang: 'ru',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'joinup.min.css' },
        { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
    ],
    scripts: [{ elem: 'js', url: 'joinup.min.js' }],
    js: true,
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
                    js: true,
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
                            js: true,
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
                                },
                                {
                                    elem: 'step-first'
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
                                            content: [
                                                'Чтобы использовать Кассу, нужно зарегистрировать организацию в налоговой. Если у вас нет юрлица, подключите ',
                                                {
                                                    block: 'text',
                                                    mods: {view: 'link-subtle'},
                                                    tag: 'a',
                                                    attrs: {href: '#'},
                                                    content: 'Яндекс.Кассу для самозанятых'
                                                },
                                                '.'
                                            ]
                                        }
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
                                                block: 'tpl_grid__item',  /* костыльчик */
                                            },
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {'size': 's', view: 'secondary'},
                                                    mix: {
                                                        block: 'decorator',
                                                        mods: {'indent-b': 'xs'}
                                                    },
                                                    content: 'Место регистрации'
                                                },
                                                {
                                                    block: 'radio-button',
                                                    mods: {theme: 'kassa'},
                                                    js: true,
                                                    mix: [
                                                        {
                                                            block: 'tpl-grid',
                                                            mods: {'s-columns': 6}
                                                        },
                                                        {
                                                            block: 'pt-form',
                                                            elem: 'resident-select'
                                                        }
                                                    ],
                                                    content: [
                                                        {
                                                            elem: 'radio',
                                                            elemMods: {checked: 'yes', side: 'left'},
                                                            mix: {
                                                                block: 'tpl-grid__fraction',
                                                                mods: {'s-col': 3}
                                                            },
                                                            tag: 'label',
                                                            attrs : { name: 'resident'},
                                                            content: [
                                                                {
                                                                    elem: 'text',
                                                                    tag: 'span',
                                                                    content: 'Россия'
                                                                },
                                                                {
                                                                    elem: 'control',
                                                                    attrs: {value: true, checked: 'checked', type: 'radio', name: 'residentRadio'},
                                                                    tag: 'input'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'radio',
                                                            elemMods: {side: 'right'},
                                                            mix: {
                                                                block: 'tpl-grid__fraction',
                                                                mods: {'s-col': 3}
                                                            },
                                                            tag: 'label',
                                                            attrs : { name: 'nonResident'},
                                                            content: [
                                                                {
                                                                    elem: 'text',
                                                                    tag: 'span',
                                                                    content: 'Заграница'
                                                                },
                                                                {
                                                                    elem: 'control',
                                                                    attrs: {value: false, type: 'radio', name: 'residentRadio'},
                                                                    tag: 'input'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }

                                },
                                {
                                    elem: 'resident-section',
                                    js: true,
                                    content:
                                        {

                                            elem: 'item',
                                            mix: {
                                                block: 'decorator',
                                                mods: {'indent-b': 'xl'}
                                            },
                                            js: true,
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {size: 's', view: 'secondary'},
                                                    mix: {
                                                        block: 'decorator',
                                                        mods: {'indent-b': 'xs'}
                                                    },
                                                    content: {
                                                        block: '',
                                                        tag: 'span',
                                                        content: 'Название компании или ИНН'
                                                    }
                                                },
                                                {

                                                    block: 'input',
                                                    mods: {theme: 'kassa', size: 'l', 'name': 'suggest'},
                                                    js: true,
                                                    mix: {
                                                        block: 'decorator',
                                                        mods: {'indent-b': 's'}
                                                    },
                                                    placeholder: 'Начните писать название, ИНН или ФИО директора',
                                                },
                                                {
                                                    block: 'dropdown-menu',
                                                    mods: {theme: 'kassa', view: 'suggest'},
                                                    tag: 'ul',
                                                    attrs: {style: 'top: 62px'},
                                                    js: true,
                                                    content: [
                                                        {

                                                            tag: 'li',
                                                            content: {
                                                                elem: 'item',
                                                                tag: 'a',
                                                                attrs: {href: '#'},
                                                                content:
                                                                    {
                                                                        block: 'company-information-suggest',
                                                                        attrs: {name: 'АО РОМАШКА'},
                                                                        content: [
                                                                            {
                                                                                elem: 'row' ,
                                                                                content: [
                                                                                    {
                                                                                        elem: 'name',
                                                                                        mix: [
                                                                                            {
                                                                                                block: 'text',
                                                                                                mods: {size: 'sm'}
                                                                                            },
                                                                                            {
                                                                                                block: 'decorator',
                                                                                                mods: {'indent-r': 'l'}
                                                                                            }
                                                                                        ],
                                                                                        content: [
                                                                                            'АО "',
                                                                                            {
                                                                                                block: '',
                                                                                                tag: 'strong',
                                                                                                content: 'РОМАШ'
                                                                                            },
                                                                                            'КА"'
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        elem: 'inn',
                                                                                        mix: {
                                                                                            block: 'text',
                                                                                            mods: {size: 'sm'},
                                                                                        },
                                                                                        content: 'ИНН 2631012682'
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'row',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'address',
                                                                                        mix: [
                                                                                            {
                                                                                                block: 'text',
                                                                                                mods: {size: 's', view: 'secondary'},
                                                                                            },
                                                                                            {
                                                                                                block: 'decorator',
                                                                                                mods: {'indent-r': 'l'}
                                                                                            }
                                                                                        ],
                                                                                        content: 'Ставропольский край, г Невинномысск, ул.Скорины, д 3'
                                                                                    },

                                                                                ]
                                                                            },
                                                                        ]
                                                                    }
                                                            }
                                                        },
                                                        {
                                                            tag: 'li',
                                                            content: {
                                                                elem: 'item',
                                                                tag: 'a',
                                                                attrs: {href: '#'},
                                                                content:
                                                                    {
                                                                        block: 'company-information-suggest',
                                                                        attrs: {name: 'ЗАО "ПАНСИОНАТ "РОМАШКА'},
                                                                        content: [
                                                                            {
                                                                                elem: 'row',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'name',
                                                                                        mix: [
                                                                                            {
                                                                                                block: 'text',
                                                                                                mods: {size: 'sm'}
                                                                                            },
                                                                                            {
                                                                                                block: 'decorator',
                                                                                                mods: {'indent-r': 'l'}
                                                                                            }
                                                                                        ],
                                                                                        content: [
                                                                                            'ЗАО "ПАНСИОНАТ"',
                                                                                            {
                                                                                                block: '',
                                                                                                tag: 'strong',
                                                                                                content: 'РОМАШ'
                                                                                            },
                                                                                            'КА"'
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        elem: 'inn',
                                                                                        mix: {
                                                                                            block: 'text',
                                                                                            mods: {size: 'sm'},
                                                                                        },
                                                                                        content: 'ИНН 2631012682'
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'row',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'address',
                                                                                        mix: [
                                                                                            {
                                                                                                block: 'text',
                                                                                                mods: {size: 's', view: 'secondary'},
                                                                                            },
                                                                                            {
                                                                                                block: 'decorator',
                                                                                                mods: {'indent-r': 'l'}
                                                                                            }
                                                                                        ],
                                                                                        content: 'Ставропольский край, г Невинномысск, ул.Скорины, д 3'
                                                                                    },

                                                                                ]
                                                                            },
                                                                        ]
                                                                    }


                                                            }
                                                        },
                                                        {

                                                            tag: 'li',
                                                            //cls: 'active',
                                                            content: {
                                                                elem: 'item',
                                                                tag: 'a',
                                                                attrs: {href: '#'},
                                                                content:
                                                                    {
                                                                        block: 'company-information-suggest',
                                                                        attrs: {name: 'ОО РОМАШКА'},
                                                                        content: [
                                                                            {
                                                                                elem: 'row' ,
                                                                                content: [
                                                                                    {
                                                                                        elem: 'name',
                                                                                        mix: [
                                                                                            {
                                                                                                block: 'text',
                                                                                                mods: {size: 'sm'}
                                                                                            },
                                                                                            {
                                                                                                block: 'decorator',
                                                                                                mods: {'indent-r': 'l'}
                                                                                            }
                                                                                        ],
                                                                                        content: [
                                                                                            'ОО "',
                                                                                            {
                                                                                                block: '',
                                                                                                tag: 'strong',
                                                                                                content: 'РОМАШ'
                                                                                            },
                                                                                            'КА"'
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        elem: 'inn',
                                                                                        mix: {
                                                                                            block: 'text',
                                                                                            mods: {size: 'sm'},
                                                                                        },
                                                                                        content: 'ИНН 2631012682'
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'row',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'address',
                                                                                        mix: [
                                                                                            {
                                                                                                block: 'text',
                                                                                                mods: {size: 's', view: 'secondary'},
                                                                                            },
                                                                                            {
                                                                                                block: 'decorator',
                                                                                                mods: {'indent-r': 'l'}
                                                                                            }
                                                                                        ],
                                                                                        content: 'Ставропольский край, г Невинномысск, ул.Скорины, д 3'
                                                                                    },

                                                                                ]
                                                                            },
                                                                        ]
                                                                    }


                                                            }
                                                        },
                                                        {

                                                            tag: 'li',
                                                            content: {
                                                                elem: 'item',
                                                                tag: 'a',
                                                                attrs: {href: '#'},
                                                                content:
                                                                    {
                                                                        block: 'company-information-suggest',
                                                                        attrs: {name: 'ОО РОМАШИХИНСКИЙ'},
                                                                        content: [
                                                                            {
                                                                                elem: 'row' ,
                                                                                content: [
                                                                                    {
                                                                                        elem: 'name',
                                                                                        mix: [
                                                                                            {
                                                                                                block: 'text',
                                                                                                mods: {size: 'sm'}
                                                                                            },
                                                                                            {
                                                                                                block: 'decorator',
                                                                                                mods: {'indent-r': 'l'}
                                                                                            }
                                                                                        ],
                                                                                        content: [
                                                                                            'ОО "',
                                                                                            {
                                                                                                block: '',
                                                                                                tag: 'strong',
                                                                                                content: 'РОМАШ'
                                                                                            },
                                                                                            'ИХИНСКИЙ"'
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        elem: 'inn',
                                                                                        mix: {
                                                                                            block: 'text',
                                                                                            mods: {size: 'sm'},
                                                                                        },
                                                                                        content: 'ИНН 2631012682'
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'row',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'address',
                                                                                        mix: [
                                                                                            {
                                                                                                block: 'text',
                                                                                                mods: {size: 's', view: 'secondary'},
                                                                                            },
                                                                                            {
                                                                                                block: 'decorator',
                                                                                                mods: {'indent-r': 'l'}
                                                                                            }
                                                                                        ],
                                                                                        content: 'Ставропольский край, г Невинномысск, ул.Скорины, д 3'
                                                                                    },

                                                                                ]
                                                                            },
                                                                        ]
                                                                    }


                                                            }
                                                        },
                                                        {

                                                            tag: 'li',
                                                            content: {
                                                                elem: 'item',
                                                                tag: 'a',
                                                                attrs: {href: '#'},
                                                                content:
                                                                    {
                                                                        block: 'company-information-suggest',
                                                                        attrs: {name: 'ООО РОМАШКА'},

                                                                        content: [
                                                                            {
                                                                                elem: 'row',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'name',
                                                                                        mix: [
                                                                                            {
                                                                                                block: 'text',
                                                                                                mods: {size: 'sm'}
                                                                                            },
                                                                                            {
                                                                                                block: 'decorator',
                                                                                                mods: {'indent-r': 'l'}
                                                                                            }
                                                                                        ],
                                                                                        content: [
                                                                                            'ООО "',
                                                                                            {
                                                                                                block: '',
                                                                                                tag: 'strong',
                                                                                                content: 'РОМАШ'
                                                                                            },
                                                                                            'КА"'
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        elem: 'inn',
                                                                                        mix: {
                                                                                            block: 'text',
                                                                                            mods: {size: 'sm'},
                                                                                        },
                                                                                        content: 'ИНН 2631012682'
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'row',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'address',
                                                                                        mix: [
                                                                                            {
                                                                                                block: 'text',
                                                                                                mods: {size: 's', view: 'secondary'},
                                                                                            },
                                                                                            {
                                                                                                block: 'decorator',
                                                                                                mods: {'indent-r': 'l'}
                                                                                            }
                                                                                        ],
                                                                                        content: 'Ставропольский край, г Невинномысск, ул.Скорины, д 3'
                                                                                    },

                                                                                ]
                                                                            },
                                                                        ]
                                                                    }


                                                            }
                                                        },
                                                    ]
                                                },
                                                {
                                                    block: 'company-information-suggest',
                                                    mods: {view: 'sub'},
                                                    js: true,
                                                    content: [
                                                        {
                                                            elem: 'row',
                                                            content: [
                                                                {
                                                                    elem: 'address',
                                                                    mix: [
                                                                        {
                                                                            block: 'text',
                                                                            mods: {size: 's', view: 'secondary'},
                                                                        },
                                                                        {
                                                                            block: 'decorator',
                                                                            mods: {'indent-r': 'l'}
                                                                        }
                                                                    ],
                                                                    content: 'Ставропольский край, г Невинномысск, ул.Скорины, д 3'
                                                                },
                                                                {
                                                                    elem: 'inn',
                                                                    mix: {
                                                                        block: 'text',
                                                                        mods: {size: 's'},
                                                                    },
                                                                    content: 'ИНН 2631012682'
                                                                }
                                                            ]
                                                        },
                                                    ]
                                                }
                                            ]
                                        }
                                },
                                {
                                    elem: 'non-resident-section',
                                    js: true,
                                    mix: {
                                        block: 'theme',
                                        mods: {view: 'hidden'}
                                    },
                                    content: [
                                        {

                                            elem: 'item',
                                            mix: [{
                                                    block: 'decorator',
                                                    mods: {'indent-b': 'xl'}
                                                }
                                            ],
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {size: 's', view: 'secondary'},
                                                    mix: {
                                                        block: 'decorator',
                                                        mods: {'indent-b': 'xs'}
                                                    },
                                                    content: {
                                                        block: '',
                                                        tag: 'span',
                                                        content: 'Страна'
                                                    }
                                                },
                                                {
                                                    block: 'input',
                                                    mods: {theme: 'kassa', size: 'l', type: 'dropdown'},
                                                    mix: {
                                                        elem: 'country-selector',

                                                    },
                                                    val: 'Беларусь',
                                                    placeholder: 'Выберите вашу страну',
                                                    js: true
                                                },
                                                {
                                                    block: 'dropdown-menu',
                                                    mods: {theme: 'kassa', view: 'default'},
                                                    mix: {elem: 'country-selector'},
                                                    tag: 'ul',
                                                    attrs: {style: 'top: 62px'},
                                                    js: true,
                                                    content: [
                                                        {

                                                            tag: 'li',
                                                            content: {
                                                                elem: 'item',
                                                                tag: 'a',
                                                                attrs: {href: '#'},
                                                                content: 'Украина'
                                                            }
                                                        },
                                                        {

                                                            tag: 'li',
                                                            cls: 'active',
                                                            content: {
                                                                elem: 'item',
                                                                tag: 'a',
                                                                attrs: {href: '#'},
                                                                content: 'Беларусь'
                                                            }
                                                        },
                                                        {

                                                            tag: 'li',
                                                            content: {
                                                                elem: 'item',
                                                                tag: 'a',
                                                                attrs: {href: '#'},
                                                                content: 'Казахстан'
                                                            }
                                                        },
                                                        {

                                                            tag: 'li',
                                                            cls: 'last-popular',
                                                            content: {
                                                                elem: 'item',
                                                                tag: 'a',
                                                                attrs: {href: '#'},
                                                                content: 'Турция'
                                                            }
                                                        },
                                                        {

                                                            tag: 'li',
                                                            content: {
                                                                elem: 'item',
                                                                tag: 'a',
                                                                attrs: {href: '#'},
                                                                content: 'Абхазия'
                                                            }
                                                        },
                                                        {

                                                            tag: 'li',
                                                            content: {
                                                                elem: 'item',
                                                                tag: 'a',
                                                                attrs: {href: '#'},
                                                                content: 'Австралия'
                                                            }
                                                        },
                                                        {

                                                            tag: 'li',
                                                            content: {
                                                                elem: 'item',
                                                                tag: 'a',
                                                                attrs: {href: '#'},
                                                                content: 'Австрия'
                                                            }
                                                        },
                                                        {

                                                            tag: 'li',
                                                            content: {
                                                                elem: 'item',
                                                                tag: 'a',
                                                                attrs: {href: '#'},
                                                                content: 'Азербайджан'
                                                            }
                                                        },
                                                        {

                                                            tag: 'li',
                                                            content: {
                                                                elem: 'item',
                                                                tag: 'a',
                                                                attrs: {href: '#'},
                                                                content: 'Австралия'
                                                            }
                                                        },
                                                    ]
                                                }

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
                                                    },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: {'size': 's', view: 'secondary'},
                                                            mix: {
                                                                block: 'decorator',
                                                                mods: {'indent-b': 'xs'}
                                                            },
                                                            content: 'Тип организации'
                                                        },
                                                        {
                                                            block: 'radio-button',
                                                            mods: {theme: 'kassa'},
                                                            js: true,
                                                            mix: [
                                                                {
                                                                    block: 'tpl-grid',
                                                                    mods: {'s-columns': 6}
                                                                },
                                                                {
                                                                    block: 'pt-form',
                                                                    elem: 'firm-select'
                                                                }
                                                            ],
                                                            content: [
                                                                {
                                                                    elem: 'radio',
                                                                    elemMods: {checked: 'yes', side: 'left'},
                                                                    mix: {
                                                                        block: 'tpl-grid__fraction',
                                                                        mods: {'s-col': 3}
                                                                    },
                                                                    tag: 'label',
                                                                    content: [
                                                                        {
                                                                            elem: 'text',
                                                                            tag: 'span',
                                                                            content: 'Юрлицо'
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            attrs: {value: true, checked: 'checked', type: 'radio', name: 'firmTypeRadio'},
                                                                            tag: 'input'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'radio',
                                                                    elemMods: {side: 'right'},
                                                                    mix: {
                                                                        block: 'tpl-grid__fraction',
                                                                        mods: {'s-col': 3}
                                                                    },
                                                                    tag: 'label',
                                                                    content: [
                                                                        {
                                                                            elem: 'text',
                                                                            tag: 'span',
                                                                            content: 'ИП'
                                                                        },
                                                                        {
                                                                            elem: 'control',
                                                                            attrs: {value: false, type: 'radio', name: 'firmTypeRadio'},
                                                                            tag: 'input'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }

                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    elemMods: {'vertical-align': 'center', distribute: 'right', type: 'actions'},
                                    mix: {
                                        block: 'decorator',
                                        mods: {'indent-b': 'l', 'indent-t': 'xxxl'}
                                    },
                                    content: {
                                        block: 'button',
                                        mods: {theme: 'kassa', size: 'm', view: 'action', js: 'inited'},
                                        mix: {
                                            block: 'application-form',
                                            bem: 'falsy',
                                            mods: {check: 'next'},
                                        },

                                        tag: 'button',
                                        js: true,

                                        content: {
                                            block: 'button__text',
                                            tag: 'span',
                                            content: 'Продолжить'
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            block: 'pt-form',
                            js: true,
                            mix: [
                                {
                                    block: 'theme',
                                    mods: {'color': 'kassa-default', 'control': 'kassa-default', view: 'hidden'}
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
                                    block: 'user-accounts',
                                    mix: [
                                        {
                                            block: 'tpl-grid',
                                            mods: {'xs-columns': 2, 's-columns': 6, 'col-gap': 'third', 'row-gap': 'half','vertical-align': 'center'}
                                        },
                                        {
                                            block: 'text',
                                            mods: {size: 'm'},
                                        },
                                        {
                                            block: 'decorator',
                                            mods: {'indent-b': 'xl'}
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
                                                                mods: {'indent-r': 'xs'}
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
                                            js: true,
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
                                            js: true,
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
                                            js: true,
                                            mods: {theme: 'kassa', size: 'l'},
                                            val: 'yauheni_durau@yandex.ru',
                                            placeholder: 'Введите вашу эл. почту',
                                        },

                                    ]
                                },

                                {
                                    elem: 'item',
                                    elemMods: {'vertical-align': 'center', distribute: 'right', type: 'actions'},
                                    mix: {
                                        block: 'decorator',
                                        mods: {'indent-b': 'l', 'indent-t': 'xxxl'}
                                    },
                                    content: [
                                        {
                                            block: 'button',
                                            mods: {theme: 'kassa', size: 'm', view: 'normal'},
                                            mix: {
                                                block: 'application-form',
                                                mods: {'check': 'back'},
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
                                                content: 'Отправить заявку'
                                            }
                                        }
                                    ]
                                },
                                {
                                    block: 'text',
                                    mods: {'size': 's', view: 'ghost', display: 'inline'},
                                    content: [
                                        'Нажимая «Отправить заявку», вы принимаете ',
                                        {
                                            block: 'text',
                                            mods: {view: 'link-subtle'},
                                            tag: 'a',
                                            attrs: {href: '#'},
                                            content: 'условия использования кабинета'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            mix: {
                block: 'theme',
                mods: {color: 'kassa-brand'}
            },
            tag: 'footer',
            content: [

            ]
        }
    ]
};
