import { FormEvent, useState } from 'react';
import { AdminInput, Input, TextArea } from '../ui/Input';
import ContentWrapper from '../Wrappers/ContentWrapper';
import Select from 'react-select'
import Button from '../ui/Button';
import SideBarWrapper from '../Wrappers/SideBarWrapper';
import Sidebar from '../layout/admin/Sidebar';
import { toast } from 'react-toastify';

interface CarFormValues {
  name: string;
  description: string;
  plate: string;
  transmission: string;
  price: string;
  seats: string;
  category: string[];
}

const initialFormValues: CarFormValues = {
  name: '',
  description: '',
  plate: '',
  transmission: '',
  price: '',
  seats: '',
  category: [],
};

export default function CarForm() {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const [formValues, setFormValues] = useState<CarFormValues>(initialFormValues);
  const [carImages, setCarImages] = useState<FileList | null>(null);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (name === 'category') {
      setFormValues({ ...formValues, category: [value] }); // set category as an array of one element
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };


  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', formValues.name);
    formData.append('description', formValues.description);
    formData.append('plate', formValues.plate);
    formData.append('transmission', formValues.transmission);
    formData.append('price', formValues.price);
    formData.append('seats', formValues.seats);
    // Convert the category array to a JSON string and append it to the form data
    // formData.append('category', JSON.stringify(formValues.category));
    if (carImages) {
      for (let i = 0; i < carImages.length; i++) {
        formData.append('carImages', carImages[i]);
      }
    }

    fetch('https://karla-rental-be-development.up.railway.app/api/cars/create', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log("form data", formData)
        console.log('Success:', data);
        toast.success("A new car added suucessfully")
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });

  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    setCarImages(files);
  };

  const [show, setShow] = useState(true)

  return (
    <SideBarWrapper>
      <Sidebar show={show} handleShow={() => setShow(!show)} />
      <ContentWrapper>
        <div className='flex justify-center'>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-2/5 ">



<AdminInput inputLabel='Car Name' type="text" name="name" value={formValues.name} onChange={handleInputChange} />
<TextArea inputLabel='Description' rows={5} name="description" value={formValues.description} onChange={handleInputChange} />

<div className='flex justify-between gap-4 w-full'>
  <AdminInput className='w-1/2' inputLabel='Plate' type="text" name="plate" value={formValues.plate} onChange={handleInputChange} />

  <AdminInput className='w-1/2' inputLabel='Transmission' type="text" name="transmission" value={formValues.transmission} onChange={handleInputChange} />
</div>


<div className='flex justify-between gap-4'>
  <AdminInput className='w-1/2' inputLabel='Price' type="text" name="price" value={formValues.price} onChange={handleInputChange} />


  <AdminInput className='w-1/2' inputLabel='Number of seats' type="number" name="seats" value={formValues.seats} onChange={handleInputChange} />

</div>



{/* <select name="category" value={formValues.category} onChange={handleCategoryChange} multiple>
<option value="compact">category</option>
<option value="mid-size">one</option>
<option value="full-size">two</option>

</select>

<Select options={options} name="category" value={formValues.category} onChange={handleCategoryChange} multiple/> */}

<input className='border bg-white border-gray-300 py-3 px-5 outline-none rounded' placeholder='Seelct images' type="file" name="carImages" onChange={handleFileInputChange} multiple />

<Button type="submit" text='Add new car' />
</form>
        </div>
        
      </ContentWrapper>
    </SideBarWrapper >
  )
}