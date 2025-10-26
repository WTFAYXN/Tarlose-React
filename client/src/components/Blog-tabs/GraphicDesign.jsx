import BlogTabsPages from "./BlogTabsPages"


const GraphicDesign = ({ searchTerm }) => {
  return (
    <> 
    <h2 className="my-5"> Graphic Design</h2>
    <BlogTabsPages category="Graphic Design" searchTerm={searchTerm} />
    </>
   
  )
}

export default GraphicDesign