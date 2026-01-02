import WhereKidsBuildSection from "../components/WhereKidsBuildSection"
import {categoryImages} from "../data/categoryImages"
export default function(){
    return(
        <>
        <WhereKidsBuildSection imageData={categoryImages.personalityEnrichment}/>
        </>
    )
}