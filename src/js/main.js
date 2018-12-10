/*jshint esversion: 6 */
/**
 * @copyright Copyright (c) 2018 René Gieling <github@dartcafe.de>
 *
 * @author René Gieling <github@dartcafe.de>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import Vue from 'vue';
import VueRouter from 'vue-router'
import Create from './Create.vue';
import PollList from './List.vue';
import Nextcloud from './mixins/Nextcloud';
import { DatetimePicker } from 'nextcloud-vue';
import { AppNavigation } from 'nextcloud-vue'
import Controls from './components/_base-controls.vue';
import SideBarClose from './components/sideBarClose.vue';
import UserDiv from './components/_base-UserDiv.vue';
import SideBar from './components/_base-SideBar.vue';
import ShareDiv from './components/shareDiv.vue';

Vue.use(VueRouter);
Vue.mixin(Nextcloud);
Vue.config.debug = true;
Vue.config.devTools = true;
Vue.component('PollList', PollList);
Vue.component('Controls', Controls);
Vue.component('DatePicker', DatetimePicker);
Vue.component('AppNavigation', AppNavigation);
Vue.component('SideBarClose', SideBarClose);
Vue.component('UserDiv', UserDiv);
Vue.component('SideBar', SideBar);
Vue.component('ShareDiv', ShareDiv);


const routes = [
  { path: '/create', component: Create },
  // { path: '/vote', component: Vote },
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#content')
