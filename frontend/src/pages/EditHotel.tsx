import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from '../api-clients.ts';
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm.tsx";
import { useAppContext } from "../contexts/AppContext.tsx";

const EditHotel = () => {
  const { showToast } = useAppContext();
  const { hotelId } = useParams();
  const { data: hotel } = useQuery('fetchMyHotelById', () => apiClient.fetchMyHotelById(hotelId || ''), { enabled: !!hotelId });
  const { mutate, isLoading } = useMutation(apiClient.updateMyHoteById, {
    onSuccess: () => { showToast({ message: 'update successful!', type: 'SUCCESS' }) },
    onError: () => { showToast({ message: 'update failed!', type: 'ERROR' }) }
  });
  const handleSave = (hotelFormData: FormData) => mutate(hotelFormData);

  return (
    <ManageHotelForm hotel={hotel} onSave={handleSave} isLoading={isLoading} />
  )
}

export default EditHotel;
