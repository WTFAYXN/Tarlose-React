import BlogTabsPages from "./BlogTabsPages"


const GraphicDesign = ({ searchTerm }) => {
  return (
    <div className='container mx-auto p-4'> 
    <h2 className="my-5"> Graphic Design</h2>
    <BlogTabsPages category="Graphic Design" searchTerm={searchTerm} />
    </div>
   
  )
}

export default GraphicDesign