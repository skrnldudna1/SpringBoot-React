import { DialogContent } from "@mui/material";
import { Car } from "../types";


type DialogFormProps = {
    car : Car;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) =>
    void;
}


function CarDialogContent({ car, handleChange}: DialogFormProps) {
    return (
        <DialogContent>
        {/* 브랜드 입력 필드 */}
        <input 
            placeholder="Brand" 
            name="brand" 
            value={car.brand} 
            onChange={handleChange} 
        /><br/>

        {/* 모델 입력 필드 */}
        <input 
            placeholder="Model" 
            name="model" 
            value={car.model} 
            onChange={handleChange} 
        /><br/>

        {/* 색상 입력 필드 */}
        <input 
            placeholder="Color" 
            name="color" 
            value={car.color} 
            onChange={handleChange} 
        /><br/>

        {/* 연식 입력 필드 */}
        <input 
            placeholder="Year" 
            name="modelYear" 
            value={car.modelYear} 
            onChange={handleChange} 
        /><br/>

        {/* 차량 등록번호 입력 필드 */}
        <input 
            placeholder="Reg.nr" 
            name="registrationNumber" 
            value={car.registrationNumber} 
            onChange={handleChange} 
        /><br/>

        {/* 가격 입력 필드 */}
        <input 
            placeholder="Price" 
            name="price" 
            value={car.price} 
            onChange={handleChange} 
        /><br/>
    </DialogContent>
     
    );
}

export default CarDialogContent;