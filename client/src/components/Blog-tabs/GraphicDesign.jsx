import BlogTabsPages from "./BlogTabsPages"


const GraphicDesign = ({ searchTerm }) => {
  return (
    <div className='container mx-auto p-4'> 
    <h2 className=""> Graphic Design</h2>
      <hr className="hr-blog"></hr>

    <BlogTabsPages category="Graphic Design" searchTerm={searchTerm} />
    </div>
   
  )
}

export default GraphicDesign