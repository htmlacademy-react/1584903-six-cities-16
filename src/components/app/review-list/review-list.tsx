import {getMockReviewsByOfferId, Review} from '../../../types/review-type.ts';
import ReviewForm from '../review-form/review-form.tsx';
import ReviewItem from '../review-item/review-item.tsx';
import {reviews} from '../../../mocks/reviews.tsx';

type ReviewListProps = {
  offerId: string | undefined;
}

const sortOffersByDate = (a: Review, b: Review) => (new Date(b.date)).getTime() - (new Date(a.date).getTime());

export default function ReviewList ({offerId}: ReviewListProps) {
  const offerReviews = getMockReviewsByOfferId(offerId).sort(sortOffersByDate);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {offerReviews.map((review) => <ReviewItem key={review.id} review={review} />)}
      </ul>
      <ReviewForm />
    </section>
  );
}
