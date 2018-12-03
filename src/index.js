import __ from 'jamal';
__.initialize();

import Card from './components/card';

const app = new __.create('#app', Card({
  image: 'https://scontent-frt3-1.cdninstagram.com/vp/1ab88ae910bc89183170fd8801c07fc8/5C928F8E/t51.2885-19/s320x320/30592135_194755651141010_7712635144665825280_n.jpg',
  title: 'Follow me on Twitter',
  text: 'Some long long and long sample text. I wish to use more long text but vscode\'s emmet doesn\'t work on js files for lorem tag.',
  actions: [
    {
      attributes: {
        style: 'cursor: pointer',
        _onClick: function () {
          window.open('http://twitter.com/akinozgen17');
        }
      },
      children: [
        __.i({ class: 'material-icons' }, 'send')
      ]
    }
  ]
}));

app.render();

