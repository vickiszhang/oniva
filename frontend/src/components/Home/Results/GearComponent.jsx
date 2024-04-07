import gear1 from "./../assets/gear1.png";
import gear2 from "./../assets/gear2.png";
import gear3 from "./../assets/gear3.png";
import gear4 from "./../assets/gear4.png";
import gearsub1 from "./../assets/gearsub1.png";
import gearsub2 from "./../assets/gearsub2.png";
import gearsub3 from "./../assets/gearsub3.png";
import gearsub4 from "./../assets/gearsub4.png";

const GearComponent = () => {
  return (
    <div>
      <div  style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="mx-2 my-3">
          <img src={gear1} className="h-[233px] w-[175px]" alt="Gear 1" />
          <img src={gearsub1} className="w-[175px]" alt="Gear Sub 1" />
          <p>Description for Gear 1</p>
        </div>
        <div className="mx-2 my-3">
          <img src={gear2} className="h-[233px] w-[175px]" alt="Gear 2" />
          <img src={gearsub2} className="w-[175px]" alt="Gear Sub 2" />
          <p>Description for Gear 2</p>
        </div>
        <div className="mx-2 my-3">
          <img src={gear3} className="h-[233px] w-[175px]" alt="Gear 3" />
          <img src={gearsub3} className="w-[175px]" alt="Gear Sub 3" />
          <p>Description for Gear 3</p>
        </div>
        <div className="mx-2 my-3">
          <img src={gear4} className="h-[233px] w-[175px]" alt="Gear 4" />
          <img src={gearsub4} className="w-[175px]" alt="Gear Sub 4" />
          <p>Description for Gear 4</p>
        </div>
      </div>
    </div>
  );
};

export default GearComponent;