<template>
  <div class="sidebar-wrapper">
    <nav
      :class="{ sidebar: true, sidebarStatic, sidebarOpened }"
      @mouseenter="sidebarMouseEnter"
      @mouseleave="sidebarMouseLeave"
    >
      <header class="logo mt-5">
        <!-- <router-link to="/app/dashboard"
          >
          <img style="height: 78px;" :src="logo" alt=""> -->
        <!-- <span class="primary-word">Give </span>
          <span class="secondary-word"> Dashbaord</span> -->
        <!-- </router-link
        > -->
      </header>
      <h5 class="navTitle first">
        APP
      </h5>
      <ul class="nav">
        <NavLink
          :activeItem="activeItem"
          header="Overview"
          link="/app/dashboard"
          iconName="fas fa-home"
          index="dashboard"
          isHeader
        />
        <!-- <i class="fas fa-home"></i> -->

        <!-- <NavLink
          :activeItem="activeItem"
          header="Products"
          link="/app/components"
          iconName="flaticon-briefcase"
          index="components"
          :childrenLinks="[
            { header: 'Create Product', link: '/app/products/add' },
            { header: ' Products', link: '/app/products/list' },
          ]"
        /> -->
        <NavLink
          :activeItem="activeItem"
          header="Players"
          link="/app/players"
          iconName="fas fa-users"
          index="players"
          isHeader
        />
        <NavLink
          :activeItem="activeItem"
          header="Transactions"
          link="/app/transactions"
          iconName="fas fa-money-check"
          index="players"
          isHeader
          :useSvg="useSvg"
          @click="useSvg = true"
        />

        <NavLink
          :activeItem="activeItem"
          header="Reports"
          link="/app/reports"
          iconName="fas fa-file-alt"
          index="reports"
          isHeader
        />

        <NavLink
          disabled
          :activeItem="activeItem"
          header="Staff"
          link="/app/staff"
          iconName="fas fa-users"
          index="staff"
          isHeader
        />
        <NavLink
          :activeItem="activeItem"
          header="Games"
          link="/app/games"
          iconName="fas fa-gamepad"
          index="games"
          isHeader
        />

        <!-- <NavLink
          :activeItem="activeItem"
          header="Games"
          link="/app/games"
          iconName="flaticon-list"
          index="games"
          isHeader
           :childrenLinks="[
            { header: 'Games', link: '/app/games' },
          

          ]"
        /> -->
        <NavLink
          :activeItem="activeItem"
          header="Configurations"
          link="/app/configurations"
          iconName="fas fa-cog"
          index="configurations"
          isHeader
          :logo="logo"
        />
        <NavLink
          :activeItem="activeItem"
          header="Contents"
          link="/app/contents"
          iconName="fas fa-cog"
          index="content"
          isHeader
          :logo="logo"
        />

        <li
          @click="logout()"
          style="margin-top: 23px;
    padding-left: 27px; gap:6px"
          class="headerLink d-flex justify-content-between align-items-center sidebar_logout"
        >
        <span class="icon"
            ><i
              class="fas fa-sign-out-alt"
              style="font-size: 23px; opacity: 0.5;"
            ></i
          ></span>
          <a class="sidebar-link logout ">&nbsp;&nbsp;&nbsp; Logout</a>
          
        </li>

        <!-- <NavLink
          :activeItem="activeItem"
          header="Typography"
          link="/app/typography"
          iconName="flaticon-list"
          index="typography"
          isHeader
        />
        <NavLink
          :activeItem="activeItem"
          header="Tables Basic"
          link="/app/tables"
          iconName="flaticon-equal-1"
          index="tables"
          isHeader
        />
        <NavLink
          :activeItem="activeItem"
          header="Notifications"
          link="/app/notifications"
          iconName="flaticon-bell"
          index="notifications"
          isHeader
        /> --->
        <!-- <NavLink
          :activeItem="activeItem"
          header="Components"
          link="/app/components"
          iconName="flaticon-network"
          index="components"
          :childrenLinks="[
            { header: 'Charts', link: '/app/components/charts' },
            { header: 'Icons', link: '/app/components/icons' },
            { header: 'Maps', link: '/app/components/maps' },
          ]"
        />  -->
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import isScreen from "@/core/screenHelper";
import NavLink from "./NavLink/NavLink";
import logo from "@/assets/images/applogo.png";
import Transaction from "@/assets/icons/iconTransaction.vue";

export default {
  name: "Sidebar",
  components: { NavLink },
  data() {
    return {
      useSvg: false,
      logo,
      alerts: [
        {
          id: 0,
          title: "Sales Report",
          value: 15,
          footer: "Calculating x-axis bias... 65%",
          color: "danger",
        },
        {
          id: 1,
          title: "Personal Responsibility",
          value: 20,
          footer: "Provide required notes",
          color: "primary",
        },
      ],
    };
  },
  methods: {
    ...mapActions("layout", ["changeSidebarActive", "switchSidebar"]),
    ...mapActions("auth", ["logOutUser"]),

    setActiveByRoute() {
      const paths = this.$route.fullPath.split("/");

      paths.pop();

      this.changeSidebarActive(paths.join("/"));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen("lg") || isScreen("xl"))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen("lg") || isScreen("xl"))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    },
    logout() {
      this.logOutUser().then((res) => {
        this.$router.push("/login");
      });
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState("layout", {
      sidebarStatic: (state) => state.sidebarStatic,
      sidebarOpened: (state) => !state.sidebarClose,
      activeItem: (state) => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped />
