<template>
  <div class="listing-carousel-summary-group">
    <h1>Places in {{ country }}</h1>
    <div class="listing-carousel">
      <div class="controls">
        <carousel-control dir="left" @change-image="change" :style="leftArrowStyle"></carousel-control>
        <carousel-control dir="right" @change-image="change" :style="rightArrowStyle"></carousel-control>
      </div>
      <div class="listing-summaries-wrapper">
        <div class="listing-summaries">
          <listing-summary :style="style" v-for="listing in listingsOfCountry" :key="listing.id" :listing="listing"></listing-summary>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ListingSummary from "./ListingSummary.vue";
import CarouselControl from "./CarouselControl.vue";

const rowSize = 3;
const listingSummaryWidth = 365;

export default Vue.extend({
  name: "ListingSummaryGroup",
  props: {
    country: {
      type: String,
      required: true
    },
    listingsOfCountry: {
      type: Array,
      required: true
    }
  },
  data: () => {
    return {
      offset: 0
    };
  },
  components: {
    ListingSummary,
    CarouselControl
  },
  methods: {
    change(val) {
      let newVal = this.offset + parseInt(val);
      if (newVal >= 0 && newVal <= this.listingsOfCountry.length - rowSize) {
        this.offset = newVal;
      }
    }
  },
  computed: {
    style() {
      return {
        transform: `translateX(${this.offset * -listingSummaryWidth}px)`
      };
    },
    leftArrowStyle() {
      return { visibility: this.offset > 0 ? "visible" : "hidden" };
    },
    rightArrowStyle() {
      return {
        visibility:
          this.offset < this.listingsOfCountry.length - rowSize ? "visible" : "hidden"
      };
    }
  }
});
</script>

<style>
/** 
* CAROUSEL And LISTINGSSUMMARIES Wrapper
*/
.listing-carousel-summary-group {
  padding-bottom: 20px;
}

/** 
* CAROUSEL Start
*/

.listing-carousel {
  position: relative;
}

.listing-carousel .controls {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: calc(50% - 45px);
  left: -45px;
  width: calc(100% + 90px);
}

.listing-carousel .controls .carousel-control {
  color: #c5c5c5;
  font-size: 1.5rem;
  cursor: pointer;
}

/** 
* CAROUSEL End
*/

/** 
* LISTINGSSUMMARIES Start
*/

.listing-summaries-wrapper {
  overflow: hidden;
}

.listing-summaries {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.listing-summaries > .listing-summary {
  margin-right: 15px;
}
.listing-summaries > .listing-summary:last-child {
  margin-right: 0;
}

/** 
* LISTINGSSUMMARIES End
*/
</style>
