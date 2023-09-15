<script setup>
import Typed from 'typed.js'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const options = {
  strings: [`<span style="color: #5A29E4">import</span> <span>axios</span> <span style="color: #5A29E4">from</span> <span style="color: #D442C6">"axios"</span><span>;</span><br/><span>axios.</span><span style="color: #5A29E4">get</span><span>(</span><span style="color: #D442C6">'/users'</span><span>)</span><br/>  <span style="color: #5A29E4">.then</span><span>(</span><span style="color: #D442C6">res</span><span style="color: #5A29E4"> => </span><span>{</span><br/>    <span>console.</span><span style="color: #5A29E4">log</span><span>(</span><span style="color: #D442C6">res</span><span>.data</span><span>);</span><br/>  <span>});</span>`],
  typeSpeed: 40,
  onComplete: async () => {
    await sleep(3000)
    document.querySelector('.typed-cursor').remove()
  }
}

onMounted(() => {
  new Typed('.typed-inner pre', options)
})
</script>

<template>
  <div class="axios-docs">
    <div class="title-wrap">
      <div class="title-text">Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js</div>
      <div class="title-desc">Axios 使用简单,包尺寸小且提供了易于扩展的接口。</div>
      <div class="btns-wrap">
        <nuxt-link class="btn-item btn-start" to="/axios/started/intro">Get Started</nuxt-link>
        <a class="btn-item btn-git" href="https://github.com/axios/axios" target="_blank">Github查看</a>
      </div>
    </div>
    <div class="typed-wrap">
      <div class="typed-inner">
        <pre class="inner-code"></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.axios-docs {
  display: flex;
  gap: var(--space-8);
  padding: var(--space-32) 0 var(--space-24) 0;

  .title-wrap {
    flex: 5;

    .title-text {
      text-align: start;
      margin-bottom: var(--space-8);
      padding-left: var(--space-0);
      padding-right: var(--space-0);
      font-size: var(--text-6xl-fontSize);
      font-weight: var(--fontWeight-bold);
      line-height: var(--text-6xl-lineHeight);
      letter-spacing: var(--letterSpacing-tight);
      color: var(--elements-text-primary-color-static);
    }

    .title-desc {
      text-align: start;
      padding: 0 var(--space-2);
      margin-bottom: var(--space-12);
      font-size: var(--text-lg-fontSize);
      line-height: var(--text-lg-lineHeight);
      color: var(--elements-text-secondary-color-static);
    }

    .btns-wrap {
      display: flex;
      flex-direction: row;
      gap: var(--space-6);
      justify-content: flex-start;

      .btn-item {
        display: inline-flex;
        flex: none;
        align-items: center;
        border-radius: var(--radii-md);
        transition: color 100ms ease-in-out;
        font-weight: var(--fontWeight-bold);
        color: var(--color-white);
        background-color: #5A29E4;
        border: 1px solid transparent;
        padding: var(--space-rem-625) var(--space-5);
        font-size: var(--text-base-fontSize);
        line-height: var(--text-base-lineHeight);
      }

      .btn-git {
        background-color: transparent;
      }
    }
  }

  .typed-wrap {
    flex: 4;

    .typed-inner {
      font-size: 32px;
      font-weight: 500;

      .inner-code {
        display: inline;
      }
    }
  }
}
</style>
