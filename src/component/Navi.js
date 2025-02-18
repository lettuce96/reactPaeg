import naviDBlink from '../json/navidb.json';
import Scrollspy from "react-scrollspy";

function Navi(props){
    const naviDb = naviDBlink.naviDB;
    return(
        <Scrollspy className={ 'd-md-flex mb-0 gnb_ul  ' + props.cls + ' ' + props.toggle } items={[naviDb[0].naviLink,naviDb[1].naviLink,naviDb[2].naviLink] } currentClassName="is-current">
     
        {
          naviDb.map((item, index) =>{
            return(
              <li id={ 'naivID'+index } key={ 'naivID'+index }><a href={item.naviLink} className="text-decoration-none ps-md-3 pe-md-3 pb-md-1 pt-md-1 px-2 ms-md-5 naviborder ">{item.naviText}</a></li>
            )
          }
          )
            
        }
      </Scrollspy>
    )
  }

  export default Navi;