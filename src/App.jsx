
import './App.css'
import own from './assets/shohag.jpg';


function App() {
  

  return (
    <>
      
      
     <div class=" flex gap-6 ">
     <button className="btn btn-info gap-3">Info</button>
<button className="btn btn-success gap-3">Success</button>
<button className="btn btn-warning gap-3">Warning</button>
<button className="btn btn-error gap-3">Error</button>
     </div>
     <button className="btn glass bg-url()">Glass button</button>
    <div class="flex gap-10">
    <div class="shadow-md ... w-80 h-80 pt-20 text-center rounded-badge border-x-4 border-red-900">Hi
      <img class="h-20 w-20 ml-10 rounded-full" src={own}/>

    </div>
<div className="border-2 w-80 h-80 border-blue-950 rounded-3xl">Hello</div>
<div className="shadow-red-400 bg-red-300 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... w-80 h-80 pt-20 text-center border-x-4 border-red-900 rounded-s-md bg-slate-600">Welcome</div>
<div class="shadow-2xl ... w-80 h-80 pt-20 text-center border-x-4 border-red-900 rounded-r-badge ">Everyone</div>
    </div>

    <section>
      <div
  className="hero w-full h-80"
  style={{ backgroundImage:`url(${own})`,backgroundRepeat:"no-repeat" }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </section>

    <section>
    <div className="card bg-base-100 w-96 shadow-xl hover:-translate-y-2 transition-all duration-200">
  <figure>
    <img
      src="https://i.ibb.co.com/nn8FYs2/Screenshot-7.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </section>

   

    
   
    </>
  )
}

export default App
