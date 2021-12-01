<template>
  <div>
    <Hero>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="hero__text"></div>
          </div>
        </div>
      </div>
    </Hero>

    <section class="episodes spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Studio Gadgets</h2>
            </div>
          </div>
        </div>
        

        <Nodata title="There is no item in the cart" v-if="carts.length === 0"> </Nodata>
        <div class="row" v-else>
          <div class="wrap cf">
            <div class="heading cf">
              <h1>My Cart</h1>
              <router-link to="/gadgets" class="continue"
                >Continue Shopping</router-link
              >
            </div>
            <div class="cart">
              <!--    <ul class="tableHead">
      <li class="prodHeader">Product</li>
      <li>Quantity</li>
      <li>Total</li>
       <li>Remove</li>
    </ul>-->
              <ul class="cartWrap">
                <li v-for="(cart, i) in carts" :key="i" class="items odd">
                  <div class="infoWrap">
                    <div class="cartSection">
                      <img
                        src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                        alt=""
                        class="itemImg"
                      />

                      <h3>{{ cart.productTitle }}</h3>

                      <p>
                        <input
                          type="text"
                          class="qty"
                          :placeholder="cart.qty"
                        />
                        x ₦{{  formatNumber(cart.amount) }}
                      </p>

                      <p class="stockStatus">In Stock</p>
                    </div>

                    <div class="prodTotal cartSection">
                      <p>₦{{  formatNumber(cart.amount * cart.qty)  }}</p>
                    </div>
                    <div class="cartSection removeWrap">
                      <a type="button" @click="removeItem(cart.id)" class="remove">x</a>
                    </div>
                  </div>
                </li>

                <!--<li class="items even">Item 2</li>-->
              </ul>
            </div>

            <div class="promoCode"></div>

            <div class="subtotal cf">
              <ul>
                <li class="totalRow final">
                  <span class="label">Total</span
                  ><span class="value">₦{{formatNumber(total)}}</span>
                </li>
                <li class="totalRow">
                  <a href="#" class="btn continue">Checkout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      carts: (state) => state.audios.cart,
    }),
    total(){
        
        return this.$store.getters['audios/totalMoney']
    }
  },
  methods: {
    formatNumber(x) {
      if (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      return x;
    },
    removeItem(id){
        this.$store.dispatch('audios/removeItem', id)
    }
  },
};
</script>

<style lang="scss" scoped>
$fontSans: "Montserrat", sans-serif;
$fontSerif: "Droid Serif", serif;

@mixin transition($transition-property, $transition-time, $method) {
  -webkit-transition: $transition-property $transition-time $method;
  -moz-transition: $transition-property $transition-time $method;
  -ms-transition: $transition-property $transition-time $method;
  -o-transition: $transition-property $transition-time $method;
  transition: $transition-property $transition-time $method;
}
* {
  box-sizing: border-box;
}

body {
  color: #333;
  -webkit-font-smoothing: antialiased;
  font-family: $fontSerif;
}
img {
  max-width: 100%;
}
.cf:before,
.cf:after {
  content: " ";
  display: table;
}
.cf:after {
  clear: both;
}
.cf {
  *zoom: 1;
}

.wrap {
  width: 75%;
  max-width: 960px;
  margin: 0 auto;
  padding: 5% 0;
  margin-bottom: 5em;
}

.projTitle {
  font-family: $fontSans;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
  padding: 1em 0;
  border-bottom: 1px solid #dadada;
  letter-spacing: 3px;
  text-transform: uppercase;
  span {
    font-family: $fontSerif;
    font-weight: normal;
    font-style: italic;
    text-transform: lowercase;
    color: #777;
  }
}
// CART HEADER
.heading {
  padding: 1em 0;
  border-bottom: 1px solid #d0d0d0;

  h1 {
    font-family: $fontSerif;
    font-size: 2em;
    float: left;
    color: var(--humber-light);
  }
  a.continue {
    &:link,
    &:visited {
      text-decoration: none;
      font-family: $fontSans;
      letter-spacing: -0.015em;
      font-size: 0.75em;
      padding: 1em;
      color: #fff;
      background: var(--gray);
      font-weight: bold;
      border-radius: 50px;
      float: right;
      text-align: right;
      @include transition(all, 0.25s, linear);
    }
    &:after {
      content: "\276f";
      padding: 0.5em;
      position: relative;
      right: 0;
      @include transition(all, 0.15s, linear);
    }
    &:hover,
    &:focus,
    &:active {
      background: #f69679;

      &:after {
        right: -10px;
      }
    }
  }
}

// TABLE HEADING

.tableHead {
  display: table;
  width: 100%;
  font-family: $fontSans;
  font-size: 0.75em;
  li {
    display: table-cell;
    padding: 1em 0;
    text-align: center;
    &.prodHeader {
      text-align: left;
    }
  }
}

// CART Items

.cart {
  padding: 1em 0;

  .items {
    display: block;
    width: 100%;
    vertical-align: middle;
    padding: 1.5em;
    background: #fafafa;

    border-bottom: 1px solid #fafafa;
    &.even {
      background: #fafafa;
    }
    .infoWrap {
      display: table;
      width: 100%;
    }
    .cartSection {
      display: table-cell;

      vertical-align: middle;

      .itemNumber {
        font-size: 0.75em;
        color: #777;
        margin-bottom: 0.5em;
      }

      h3 {
        font-size: 1em;
        font-family: $fontSans;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.025em;
      }
      p {
        display: inline-block;
        font-size: 0.85em;

        color: #777777;
        font-family: $fontSans;
        .quantity {
          font-weight: bold;
          color: #333;
        }

        &.stockStatus {
          color: #82ca9c;
          font-weight: bold;
          padding: 0.5em 0 0 1em;
          text-transform: uppercase;
          &.out {
            color: #f69679;
          }
        }
      }
      .itemImg {
        width: 4em;

        float: left;
      }
      &.qtyWrap,
      &.prodTotal {
        text-align: center;
        p {
          font-weight: bold;
          font-size: 1.25em;
        }
      }

      input.qty {
        width: 2em;
        text-align: center;
        font-size: 1em;
        padding: 0.25em;
        margin: 1em 0.5em 0 0;
      }
      .itemImg {
        width: 8em;
        display: inline;
        padding-right: 1em;
      }
    }
  }
}

.special {
  display: block;
  font-family: $fontSans;
  .specialContent {
    padding: 1em 1em 0;
    display: block;
    margin-top: 0.5em;
    border-top: 1px solid #dadada;
    &:before {
      content: "\21b3";
      font-size: 1.5em;
      margin-right: 1em;
      color: #6f6f6f;
      font-family: helvetica, arial, sans-serif;
    }
  }
}

a.remove {
  text-decoration: none;
  font-family: $fontSans;
  color: #ffffff;
  font-weight: bold;
  background: #e0e0e0;
  padding: 0.5em;
  font-size: 0.75em;
  display: inline-block;
  border-radius: 100%;
  line-height: 0.85;
  @include transition(all, 0.25s, linear);
  &:hover {
    background: #f30;
  }
}

.promoCode {
  float: left;
  width: 35%;
  padding: 2%;
  label {
    display: block;
    width: 100%;
    font-style: italic;
    font-size: 1.15em;

    margin-bottom: 0.5em;
    letter-spacing: -0.025em;
  }
  input {
    width: 85%;
    font-size: 1em;
    padding: 0.5em;
    float: left;
    border: 1px solid #dadada;
    &:active,
    &:focus {
      outline: 0;
    }
  }
  a.btn {
    float: left;
    width: 15%;
    padding: 0.75em 0;
    border-radius: 0 1em 1em 0;
    text-align: center;
    border: 1px solid #82ca9c;
    &:hover {
      border: 1px solid #f69679;
      background: #f69679;
    }
  }
}

.btn {
  &:link,
  &:visited {
    text-decoration: none;
    font-family: $fontSans;
    letter-spacing: -0.015em;
    font-size: 1em;
    padding: 1em 3em;
    color: #fff;
    background: var(--gray);
    font-weight: bold;
    border-radius: 50px;
    float: right;
    text-align: right;
    @include transition(all, 0.25s, linear);
  }
  &:after {
    content: "\276f";
    padding: 0.5em;
    position: relative;
    right: 0;
    @include transition(all, 0.15s, linear);
  }
  &:hover,
  &:focus,
  &:active {
    background: #f69679;
    &:after {
      right: -10px;
    }
  }

  .promoCode & {
    font-size: 0.85em;
    paddding: 0.5em 2em;
  }
}

/* TOTAL AND CHECKOUT  */
.subtotal {
  float: right;
  width: 35%;
  color: white;
  .totalRow {
    padding: 0.5em;
    text-align: right;

    &.final {
      font-size: 1.25em;
      font-weight: bold;
    }
    span {
      display: inline-block;
      padding: 0 0 0 1em;
      text-align: right;
    }
    .label {
      font-family: $fontSans;
      font-size: 0.85em;
      text-transform: uppercase;
      color: #777;
    }
    .value {
      letter-spacing: -0.025em;
      width: 35%;
    }
  }
}

@media only screen and (max-width: 39.375em) {
  .wrap {
    width: 98%;
    padding: 2% 0;
  }
  .projTitle {
    font-size: 1.5em;
    padding: 10% 5%;
  }
  .heading {
    padding: 1em;
    font-size: 90%;
  }
  .cart {
    .items {
      .cartSection {
        width: 90%;
        display: block;
        float: left;
        &.qtyWrap {
          width: 10%;
          text-align: center;
          padding: 0.5em 0;
          float: right;
          &:before {
            content: "QTY";
            display: block;
            font-family: $fontSans;
            padding: 0.25em;
            font-size: 0.75em;
          }
        }
        &.prodTotal,
        &.removeWrap {
          display: none;
        }
        .itemImg {
          width: 25%;
        }
      }
    }
  }
  .promoCode,
  .subtotal {
    width: 100%;
  }

  a.btn.continue {
    width: 100%;
    text-align: center;
  }
}
</style>
