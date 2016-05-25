import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import './assets/thumbInfo.scss';
import ThumbFav from '../thumbFav';

export default class ThumbInfo extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.actions ? true : false;
    }

    render() {
        const {id, author, title, savedImages, actions} = this.props;
        let thumbInfoClass = classNames({
                    'thumbnail-info': true,
                    'thumbnail-info--fav': savedImages.indexOf(id) > -1
        });
        return (
            <div className={thumbInfoClass}>
                <span className="thumbnail-info__title">{title? title: 'Untitled'}</span>
                <img className="thumbnail-info__author" src={author}/>
                {actions ? <ThumbFav id={id} savedImages={savedImages} actions={actions}/> : null }
            </div>
        );
    }
}

ThumbInfo.propTypes = {
    actions: PropTypes.object,
    id: PropTypes.string,
    url: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    savedImages: PropTypes.array
};
