import { FormEvent, useState } from 'react';

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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label>
        Name:
        <input type="text" name="name" value={formValues.name} onChange={handleInputChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" value={formValues.description} onChange={handleInputChange} required />
      </label>
      <label>
        Plate:
        <input type="text" name="plate" value={formValues.plate} onChange={handleInputChange} required />
      </label>
      <label>
        Transmission:
        <input type="text" name="transmission" value={formValues.transmission} onChange={handleInputChange} required />
      </label>
      <label>
        Price:
        <input type="text" name="price" value={formValues.price} onChange={handleInputChange} required />
      </label>
      <label>
  Seats:
  <input type="number" name="seats" value={formValues.seats} onChange={handleInputChange} required />
</label>

<label>
Category:
<select name="category" value={formValues.category} onChange={handleCategoryChange} multiple>
  <option value="compact">category</option>
  <option value="mid-size">one</option>
  <option value="full-size">two</option>
 
</select>
</label>

<label>
  Car Images:
  <input type="file" name="carImages" onChange={handleFileInputChange} multiple />
</label>
<button type="submit">Submit</button>
</form>
  )}