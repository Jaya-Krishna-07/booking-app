import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import * as apiClient from '../api-clients.ts';
import { useAppContext } from "../contexts/AppContext";
import { useMutation } from "react-query";

export const AddHotel = () => {

  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ message: "Hotel saved!", type: 'SUCCESS' })
    },
    onError: () => {
      showToast({ message: "Error saving hotel.", type: 'ERROR' })
    }
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  }

  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />
}

export default AddHotel;
