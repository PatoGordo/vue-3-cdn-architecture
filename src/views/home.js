import { store } from "../store/main.js"

export class Home {
  setup() {
    const name = Vue.ref("")
    const router = VueRouter.useRouter()

    function handleHello() {
      router.push(`/hello/${name.value}`)
    }

    return {
      handleHello,
      name,
      store
    }
  }

  template = `
    <div class="home">
      <h2 class="title">You clicked {{ store.count }} times!</h2>
      
      <button class="outlined border-purple" @click="store.increment()">Click here</button>
      
      <form style="margin-top: 16px" class="container" @submit.prevent="handleHello">
        <h2 class="sub-title">Recieve a hello</h2>
        
        <label class="osr" for="name">What is your name?</label>
        <input
          id="name"
          class="outlined"
          placeholder="What is your name?"
          type="text"
          v-model="name"
          required
        />
        
        <button class="outlined border-purple half" type="submit">Submit</button>
      </form>
    </div>
  `
}