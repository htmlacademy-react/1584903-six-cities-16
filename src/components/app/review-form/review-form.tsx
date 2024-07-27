import {Fragment, useState} from 'react';
import * as React from 'react';
import {getStarsText} from '../../../types/review-type.ts';

const NUMBERS = [5, 4, 3, 2, 1];

function ReviewForm(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const onRatingChange = (evt: React.FormEvent) => {
    if (evt.target instanceof HTMLInputElement) {
      setRating(Number(evt.target.value));
    }
  };
  const onTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(evt.target.value);
  };

  // eslint-disable-next-line no-console
  console.log(rating, text);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div
        className="reviews__rating-form form__rating"
        onChange={onRatingChange}
      >
        {NUMBERS.map((num) => (
          <Fragment key={num}>
            <input className="form__rating-input visually-hidden" name="rating" value={num} id={getStarsText(num)} type="radio"/>
            <label htmlFor={getStarsText(num)} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onTextChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
