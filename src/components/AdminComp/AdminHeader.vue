<template>
  <div class="admin-header">
    <button type="button" class="nav-btn" @click="ToggleNavAndIcon">
      <div class="icon" :class="{ change: changeIcon }">
        <span class="bar1"></span>
        <span class="bar2"></span>
        <span class="bar3"></span>
      </div>
    </button>
    <nav class="header-nav">
      <ul class="header-list">
        <li class="list-item">
          <router-link to="/admin"> Home </router-link>
        </li>
        <li class="list-item">
          <router-link to="/products"> Products </router-link>
        </li>
        <li class="list-item">
          <router-link to="/categories"> Categories </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AdminHeader",
  data: function() {
    return {
      changeIcon: true,
    };
  },
  computed: {
    NavVisibilityFun: function() {
      return this.$store.state.admin.navVisibility;
    },
  },
  methods: {
    ToggleNav: function() {
      this.$store.commit("UpdateAdminNavVisibility", !this.NavVisibilityFun);
    },
    ToggleIcon: function() {
      this.changeIcon = !this.changeIcon;
    },
    ToggleNavAndIcon() {
      this.ToggleNav();
      this.ToggleIcon();
    },
  },
};
</script>

<style lang="scss">
$AdminHeaderWidth: 200px;

#Admin-content-body {
  transition: padding-left 0.4s;
  &.showNav {
    padding-left: $AdminHeaderWidth;
  }
}

.admin-header {
  position: fixed;
  left: -$AdminHeaderWidth;
  top: 0;
  bottom: 0;
  width: $AdminHeaderWidth;
  background-color: #333;
  color: #fff;
  transition: left 0.4s;
  .nav-btn {
    position: absolute;
    left: 100%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    outline: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    .icon {
      display: inline-block;
      background-color: #333;
      .bar1,
      .bar2,
      .bar3 {
        width: 30px;
        height: 5px;
        background-color: #fff;
        margin: 6px 0;
        display: block;
        transition: 0.4s;
      }
      &.change {
        .bar1 {
          -webkit-transform: rotate(-45deg) translate(-9px, 6px);
          transform: rotate(-45deg) translate(-9px, 6px);
        }
        .bar3 {
          -webkit-transform: rotate(45deg) translate(-8px, -8px);
          transform: rotate(45deg) translate(-8px, -8px);
        }
        .bar2 {
          opacity: 0;
        }
      }
    }
  }
  .showNav & {
    left: 0;
  }
  .header-nav {
    .header-list {
      padding: 0px;
      margin: 0px;
      list-style-type: none;
      .list-item {
        font-size: 18px;
        a {
          display: block;
          padding: 20px 20px;
          color: inherit;
          text-decoration: none;
          &:hover {
            background-color: black;
          }
        }
      }
    }
  }
}
</style>
