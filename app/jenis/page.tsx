export const metadata = {
  tittle: "Jenis",
}
import axios from 'axios'
import Link from 'next/link'
import Add from './add';
import Delete from './delete';
import Update from './update';

type Jenis = {
  id: number;
  nama: string;
  category: {
    id: number,
    nama: string
  }
}

type Category = {
  id: number;
  nama: string;
}

const getJenis = async () => {
  const res = await axios.get('http://127.0.0.1:8000/api/jenis');
  return res.data.data
}

const getCategory = async () => {
  const res = await axios.get('http://127.0.0.1:8000/api/category');
  return res.data.data
}

const Jenis = async () => {
    const category: Category[] = await getCategory()
    const jenis: Jenis[] = await getJenis()
    console.log(jenis);
  return (
    <div className=''>
      <h1 className='text-xl'>Jenis</h1>
      <hr className='my-5' />
      <div className="py-2">
        <Add />
      </div>
      <table className='table w-full'>
        <thead className="bg-slate-200">
          <tr>
            <th>No.</th>
            <th>Jenis</th>
            <th>Kategori</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jenis.map((jenis,index) => (
            <tr key={jenis.id}>
              <td>{index + 1}</td>
              <td>{jenis.nama}</td>
              <td>{jenis.category.nama}</td>
              <td className="flex gap-2">
                <Update {...jenis} />
                <Delete {...jenis} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul>
      </ul>
    </div>
  )
}

export default Jenis

// rafce rfc
