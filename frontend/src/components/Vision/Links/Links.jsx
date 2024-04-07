import Card from './Card';

import insulated from "./insulated.png"

const Links = () => {
  return (
    <section id="links" className="sm:flex hidden flex-col relative z-5 border-b-8 border-[#232323]">
      <div className='w-full py-5 flex justify-center items-center'>        
        <div className="w-full flex-row sm:flex justify-center items-center px-8">
          <Card bgImage={insulated} name={"Men's Insulated Jackets"} route={"https://outlet.arcteryx.com/ca/en/c/mens/insulated-jackets"}/>
          <Card bgImage={insulated} name={"Men's Pants"} route={"https://outlet.arcteryx.com/ca/en/c/mens/pants"}/>
          <Card bgImage={insulated} name={"Men's Footwear"} route={"https://outlet.arcteryx.com/ca/en/c/mens/footwear"}/>
          <Card bgImage={insulated} name={"Women's Insulated Jackets"} route={"https://outlet.arcteryx.com/ca/en/c/womens/insulated-jackets"}/>
          <Card bgImage={insulated} name={"Women's Pants"} route={"https://outlet.arcteryx.com/ca/en/c/womens/pants"}/>
          <Card bgImage={insulated} name={"Women's Footwear"} route={"https://outlet.arcteryx.com/ca/en/c/womens/footwear"}/>
        </div>
      </div>
    </section>
  )
}

export default Links