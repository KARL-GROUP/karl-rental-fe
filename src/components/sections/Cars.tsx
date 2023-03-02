import { useState } from 'react';

interface ApiRequest {
carImages: string;
name: string;
description: string;
plate: string;
transmission: string;
price: string;
seats: string;
// category: string;
}

export default function Cars() {
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [file, setFile] = useState<File | null>(null);
const [plate, setPlate] = useState('');
const [transmission, setTransmission] = useState('');
const [price, setPrice] = useState<string>("");
const [seats, setSeats] = useState<string>("");
const [category, setCategory] = useState('');

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();
if (!file) {
    throw new Error('File is required');
  }
  
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const data: ApiRequest = {
        carImages: reader.result as string,
      name,
      description,
      plate,
      transmission,
      price,
      seats,
      // category
    };
  
    fetch('https://karla-rental-be-development.up.railway.app/api/cars/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
  };
}

return (
<form onSubmit={handleSubmit} className="flex flex-col gap-5">
<label>
Name:
<input type="text" value={name} onChange={(event) => setName(event.target.value)} />
</label>
<label>
Description:
<textarea value={description} onChange={(event) => setDescription(event.target.value)} />
</label>
<label>
Plate:
<input type="text" value={plate} onChange={(event) => setPlate(event.target.value)} />
</label>
<label>
Transmission:
<input type="text" value={transmission} onChange={(event) => setTransmission(event.target.value)} />
</label>
<label>
Price:
<input type="text" value={price} onChange={(event) => setPrice(event.target.value)} />
</label>
<label>
Seats:
<input type="text" value={seats} onChange={(event) => setSeats(event.target.value)} />
</label>
<label>
Category:
<input type="text" value={category} onChange={(event) => setCategory(event.target.value)} />
</label>
<label>
Image:
<input type="file" onChange={(event) => setFile(event.target.files?.[0] || null)} />
</label>
<button type="submit">Submit</button>
</form>
);
}