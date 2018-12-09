import Vue from 'vue'
import Router from 'vue-router'

const _5081808b = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _5621faf0 = () => import('../pages/worker.vue' /* webpackChunkName: "pages/worker" */).then(m => m.default || m)
const _65ea7084 = () => import('../pages/test.vue' /* webpackChunkName: "pages/test" */).then(m => m.default || m)
const _ddceb50a = () => import('../pages/stafflogin.vue' /* webpackChunkName: "pages/stafflogin" */).then(m => m.default || m)
const _456ff126 = () => import('../pages/product.vue' /* webpackChunkName: "pages/product" */).then(m => m.default || m)
const _07e0dc68 = () => import('../pages/adminLogin.vue' /* webpackChunkName: "pages/adminLogin" */).then(m => m.default || m)
const _7980a39a = () => import('../pages/service.vue' /* webpackChunkName: "pages/service" */).then(m => m.default || m)
const _bcaea166 = () => import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */).then(m => m.default || m)
const _39904e0b = () => import('../pages/firststudy.vue' /* webpackChunkName: "pages/firststudy" */).then(m => m.default || m)
const _0853e1b9 = () => import('../pages/limit.vue' /* webpackChunkName: "pages/limit" */).then(m => m.default || m)
const _70395b50 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/about",
			component: _5081808b,
			name: "about"
		},
		{
			path: "/worker",
			component: _5621faf0,
			name: "worker"
		},
		{
			path: "/test",
			component: _65ea7084,
			name: "test"
		},
		{
			path: "/stafflogin",
			component: _ddceb50a,
			name: "stafflogin"
		},
		{
			path: "/product",
			component: _456ff126,
			name: "product"
		},
		{
			path: "/adminLogin",
			component: _07e0dc68,
			name: "adminLogin"
		},
		{
			path: "/service",
			component: _7980a39a,
			name: "service"
		},
		{
			path: "/admin",
			component: _bcaea166,
			name: "admin"
		},
		{
			path: "/firststudy",
			component: _39904e0b,
			name: "firststudy"
		},
		{
			path: "/limit",
			component: _0853e1b9,
			name: "limit"
		},
		{
			path: "/",
			component: _70395b50,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
