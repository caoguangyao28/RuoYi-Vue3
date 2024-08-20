/**
 * pinia 每个模块都是一个单独的实例
 * @param storecontent 接受的是上下文
 *
 */
const PREFIX = 'PINIA:STATE:'

export default function persistPlugin(storecontent) {
    console.log('persistPlugin', storecontent);

    const { store } = storecontent
    const key = PREFIX + store.id;
    // 存入时节 页面卸载前
    window.addEventListener('beforeunload', () => {
        // store.$store 响应式数据
        localStorage.setItem(key, JSON.stringify(store.$store));
    })

    // 取的时机 一开始
    const item = localStorage.getItem(key);

    if(!item) {
        return
    }

    try {
        const originalState = JSON.parse(item);
        store.$patch(originalState);

    }catch (e) {
        console.log('存储格式无效')
    }
}