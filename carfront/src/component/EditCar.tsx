
import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Car, CarEntry, CarResponse } from "../types"
import { useState } from "react";
import CarDialogContent from "./CarDialogContent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCar } from "../api/carapi";



type FormProps = {
    cardate: CarResponse;
}

function EditCar({cardata}: FormProps){
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState<Car> ({
        brand: '',
        model: '',
        color: '',
        registrationNumber:'',
        modelYear: 0,
        price: 0
    });

    const handleClickOpen = () => {
        setCar({
            brand: cardata.brand,
            model: cardata.model,
            color: cardata.color,
            registrationNumber: cardata.registrationNumber,
            modelYear: cardata.modelYear,
            price: cardata.price
        })
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCar({ ...car, [event.target.name]: event.target.value });
    };

    const handleSave = () => {
        const url =cardata._links.self.href;
        const carEntry: CarEntry = {car, url}
        mutate(carEntry);
        setCar(
            {   brand: '',
                model: '',
                color: '',
                registrationNumber:'',
                modelYear: 0,
                price: 0}
        );

        setOpen(false);
    };

    const queryClient = useQueryClient();
    // useMutation 훅 이용
    const { mutate } = useMutation(updateCar, {
    onSuccess: () => {
        queryClient.invalidateQueries(["cars"]);
    },
    onError: (err) => {
        console.error(err);
    }
});



    return(
        <>
         <button onClick={handleClickOpen}>Edit</button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit car</DialogTitle>
        <CarDialogContent car = {car} handleChange={handleChange}/>
        <DialogActions>
            <button onClick={handleClose}>Cancel</button>
            <button onClick={handleSave}>Save</button>
        </DialogActions>
        </Dialog>
        </>
    );
}



export default EditCar;