import React, { Fragment, useState } from 'react';
import { ProductReview } from '../../../../Constant';
import Ratings from 'react-ratings-declarative';

const StarRatings = () => {
    const [rating, setRating] = useState(0);
    const changeRating = (newRating) => {
        setRating(newRating);
    };
    return (
        <Fragment>
            <div className="d-flex">
                <Ratings rating={rating} widgetRatedColors="blue" widgetDimensions="20px"
                    widgetSpacings="0px" changeRating={changeRating}>
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                </Ratings><span>{ProductReview}</span>
            </div>
        </Fragment>
    );
};
export default StarRatings;