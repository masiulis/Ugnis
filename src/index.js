import ugnis from './ugnis'
import editor from './editor/editor'

// import savedApp from '../ugnis_components/app.json'

const emptyApp = {
    nodes: {
        _rootNode: {
            _type: 'vNode',
            nodeType: 'box',
            styleId: '_rootStyle',
            childrenIds: ['2471d6d2-00db-8ab5-c332-882575f25425', 'a5d6d6d2-00db-8ab5-c332-882575f25425'],
        },
        '2471d6d2-00db-8ab5-c332-882575f25425': {
            _type: 'vNode',
            nodeType: 'text',
            styleId: '8481d6d2-00db-8ab5-c332-882575f25426',
            value: {
                _type: 'sum',
                first: 'Current value: ',
                second: {
                    _type: 'state',
                    value: '46vdd6d2-00db-8ab5-c332-882575f25426'
                }
            },
        },
        'a5d6d6d2-00db-8ab5-c332-882575f25425': {
            _type: 'vNode',
            nodeType: 'box',
            styleId: 'a3d676d2-00db-8ab5-c332-882575f25425',
            childrenIds: ['1481d6d2-00db-8ab5-c332-882575f25425', '3481d6d2-00db-8ab5-c332-882575f25425'],
        },
        '1481d6d2-00db-8ab5-c332-882575f25425': {
            _type: 'vNode',
            nodeType: 'text',
            styleId: '9481d6d2-00db-8ab5-c332-882575f25426',
            value: '+1',
            onClick: {
                eventName: 'INCREMENT'
            },
        },
        '3481d6d2-00db-8ab5-c332-882575f25425': {
            _type: 'vNode',
            nodeType: 'text',
            styleId: '7481d6d2-00db-8ab5-c332-882575f25426',
            value: '-1',
            onClick: {
                eventName: 'DECREMENT'
            },
        },
    },
    styles: {
        _rootStyle: {
            padding: '10px',
            background: '#f5f5f5',
        },
        '8481d6d2-00db-8ab5-c332-882575f25426': {
            padding: '10px',
            background: '#cccccc',
        },
        'a3d676d2-00db-8ab5-c332-882575f25425': {
            display: 'inline-block',
            margin: '5px',
        },
        '9481d6d2-00db-8ab5-c332-882575f25426': {
            padding: '10px',
            background: '#aaaaaa',
            display: 'inline-block',
            cursor: 'pointer',
            userSelect: 'none',
        },
        '7481d6d2-00db-8ab5-c332-882575f25426': {
            padding: '10px',
            background: '#999999',
            display: 'inline-block',
            cursor: 'pointer',
            userSelect: 'none',
        },
    },
    state: {
        _rootState: {
            title: 'root state',
            stateType: 'nameSpace',
            childrenIds: ['46vdd6d2-00db-8ab5-c332-882575f25426'],
        },
        '46vdd6d2-00db-8ab5-c332-882575f25426': {
            title: 'root state',
            stateType: 'number',
            defaultValue: 0,
            mutators: {
                INCREMENT: 'INCREMENT',
                DECREMENT: 'DECREMENT',
            },
        },
    },
    mutators: {
        INCREMENT: {
            _type: 'sum',
            first: {
                _type: 'state',
                value: '46vdd6d2-00db-8ab5-c332-882575f25426'
            },
            second: 1
        },
        DECREMENT: {
            _type: 'sum',
            first: {
                _type: 'state',
                value: '46vdd6d2-00db-8ab5-c332-882575f25426'
            },
            second: -1
        },
    },
    events: {
        INCREMENT: ['46vdd6d2-00db-8ab5-c332-882575f25426'],
        DECREMENT: ['46vdd6d2-00db-8ab5-c332-882575f25426'],
    },
}
const app = ugnis(document.getElementById('app'), emptyApp)
editor(app)