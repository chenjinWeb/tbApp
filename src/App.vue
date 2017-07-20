<template>
  <main>

    <div class="tabs">

      <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">

        <!--keep-alive组件用来缓存组件,避免多次加载相应的组件,减少性能消耗-->
        <keep-alive>

          <!--加载为node组件的页面-->
          <router-view name="node"></router-view>

        </keep-alive>

      </transition>

      <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">

        <!--keep-alive组件用来缓存组件,避免多次加载相应的组件,减少性能消耗-->
        <keep-alive>

          <!--加载为node组件的页面-->
          <router-view name="footer"></router-view>

        </keep-alive>

      </transition>

    </div>

    <!-- 通过路由 push进来的页面渲染view -->
    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
      <router-view></router-view>
    </transition>

  </main>
</template>

<script>

</script>

<style>

</style>
