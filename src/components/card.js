import _ from 'jamal';

const Card = (props) => {
  const { attributes, children, title, image, text, actions } = props;
  return _.div({ class: 'mdl-card mdl-shadow--2dp mdl-card--horizontal', ...attributes }, [
    _.div({ class: 'mdl-card__media' }, _.img({ src: image, style: 'width: 100%' })), // IMG
    _.div({ class: 'mdl-card__title' }, _.h2({ class: 'mdl-card__title-text' }, title)), // Title
    _.div({ class: 'mdl-card__supporting-text' }, text),
    _.div({ class: 'mdl-card__actions mdl-card--border' }, actions.map(
      action => _.a(
        { class: 'mdl-button mdl-js-button mdl-button--fab mdl-button--colored',
          'data-upgraded': ',MaterialButton,MaterialRipple', ...action.attributes },
        action.children
      )  
    ))
  ]);
};

export default Card;