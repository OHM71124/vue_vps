import  index from './component/index.vue'
import  pricing from './component/pricing.vue'
import  blog from './component/blog.vue'
import  feature from './component/feature.vue'
import  contact from './component/contact.vue'

export default  [
  { path: '/', component: index  },
  { path: '/pricing', component: pricing  },
  { path: '/blog', component: blog  },
  { path: '/feature', component: feature  },
  { path: '/contact', component: contact  },
]
