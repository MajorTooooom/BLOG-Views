// pages/store.vue
<template>
  <section class="container">
    <p>$store.count={{ $store.state.count }}</p>
    <p>$store.state.num={{ $store.state.num }}</p>
    <p>$store.state.plus.plusNum{{ $store.state.plus.plusNum }}</p>
    <p>$store.state.minus.minusNum{{ $store.state.minus.minusNum }}</p>
    <br>
    <tr class="mutation-fun">
    </tr>
    <a-button type="primary" @click="$store.commit('addcount')">
      @click="count ++"
    </a-button>
    <a-button type="primary" @click="$store.commit('increment')">
      @click="$store.commit('increment')"
    </a-button>
    <a-button type="primary" @click="$store.commit('plus/plus')">
      @click="$store.commit('plus/plus')"
    </a-button>
    <a-button type="primary" @click="$store.commit('minus/minus')">
      Primary
    </a-button>
  </section>
</template>
