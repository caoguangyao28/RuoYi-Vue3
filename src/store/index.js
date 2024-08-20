import persistPlugin from '@/store/persistPlugin.js'

const store = createPinia()

store.use(persistPlugin)

export default store