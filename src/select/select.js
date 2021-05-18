
import styles from "./select.module.css"
import React,{useState} from 'react'
const error =()=> {throw new Error("add a function that activates when pressing list item")}
const Select = ({
    title="Select From",
    items=["firstItem","secondItem","thirdItem"],
    onItem = error,
    width = "175px"}) => {

        
        
      const  categoriesItems = items.map((i)=><li key={i}  onClick={()=>onItem(i)}>{i}</li> )
   console.log(categoriesItems)

    const handleOpenCategoriesList = () =>{
        setOpen((prev)=>!prev)
    }
    const onBlurCategoriesList = () => {
       setOpen(false)
    }
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.categoryes}>
         <div   key="controls2"
                onBlur={()=>onBlurCategoriesList()}
                tabIndex="0">

        <div  className={styles.dropDownList} 
                style={{width:width}}
        onClick={()=>handleOpenCategoriesList()}>
        <p>{title}</p> 
        <svg height="20px" viewBox="0 0 320 512">
            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
        </div>

        {open && <div className={styles.dropDownListItems}
        style={{width:width}}>{categoriesItems}</div> }
        </div>
        </div>
    )
}

export  {Select}
