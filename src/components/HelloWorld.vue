<template>
  <div class="hello">
    <h1>{{ msg }}{{ age }}</h1>
    <input type="text" v-model="name" />
    <p>{{ name }}</p>
    <p>相反：{{ reveredMessage }}</p>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator"

  @Component
  export default class HelloWorld extends Vue {
    @Prop() private msg!: string
    @Prop() private age!: number

    //原data
    name: string = "yuwei"
    sex: string = "男"

    //计算属性
    private get reveredMessage(): string {
      return this.name
        .split("")
        .reverse()
        .join("")
    }

    //methods
    public loadData(): void {
      console.log(this.sex)
    }

    //生命周期
    private created(): void {
      this.loadData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
