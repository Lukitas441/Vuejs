app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, i) in reviews" :key="i">
            {{review.name}} gave this {{review.rating}} stars
            <br/>
            "{{review.review}}"
            <p v-if="review.recommendation">{{review.name}} recommended this product!</p>
            </li>
        </ul>
    </div>
    `,
});
