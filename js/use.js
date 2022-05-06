
const style_ok = 'background: #0f0; color: #fff; padding: .5rem; border-radius: .3rem;'
const style_error = 'background: #f00; color: #fff; padding: .5rem; border-radius: .3rem;'
const style_info = 'background: #0af; color: #fff; padding: .5rem; border-radius: .3rem;'

const c_ok = (text) => console.log(`%c${text}`, style_ok)
const c_error = (text) => console.log(`%c${text}`, style_error)
const c_info = (text) => console.log(`%c${text}`, style_info)
  
