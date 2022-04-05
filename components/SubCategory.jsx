import { useState } from "react"
import { Box, Checkbox, Typography } from "@mui/material"

const SubCategory = ({ category, setSelectedCategory, setSelectedSubCategory }) => {

    const [isSelectedCategory, setIsSelectedCategory] = useState(false)
    const [isSelectedSubCategory, setIsSelectedSubCategory] = useState(false)

    return (
        <>
            <Box key={category.ID} display='flex' alignItems='center'>
                <Checkbox
                    checked={isSelectedCategory}
                    onChange={() => {
                        setIsSelectedCategory(!isSelectedCategory)
                        setSelectedCategory(category.ID)
                    }} 
                />
                <Typography>{category.name}</Typography>
            </Box>

            {
                isSelectedCategory && category.subCategories.map(subCategory => (
                    <Box key={subCategory.ID} display='flex' alignItems='center' marginLeft='15px'>
                        <Checkbox
                            onChange={() => {
                                setIsSelectedSubCategory(!isSelectedSubCategory)
                                setSelectedSubCategory(subCategory.ID)
                            }}
                        />
                        <Typography>{subCategory.name}</Typography>
                    </Box>
                ))
            }
        </>
    )
}

export default SubCategory