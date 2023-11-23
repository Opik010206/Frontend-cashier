export const metadata = {
  tittle: "Category",
}
import axios from 'axios'
import Link from 'next/link'
import AddCategory from './addCategory';
import DeleteCategory from './deleteCategory';
import UpdateCategory from './updateCategory';

type Category = {
  id: number;
  nama: string;
}

const getCategory = async () => {
  const res = await axios.get('http://127.0.0.1:8000/api/category');
  return res.data.data
}

const CategoriList = async () => {
  const category: Category[] = await getCategory()
  return (
    <div className=''>
      <h1 className='text-xl'>Category</h1>
      <hr className='my-5' />
      <div className="py-2">
        <AddCategory />
      </div>
      <table className='table w-full'>
        <thead className="bg-slate-200">
          <tr>
            <th>No.</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((category,index) => (
            <tr key={category.id}>
              <td>{index + 1}</td>
              <td>{category.nama}</td>
              <td className="flex gap-2">
                <UpdateCategory {...category} />
                <DeleteCategory {...category} />
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

export default CategoriList

// rafce rfc
